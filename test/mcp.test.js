const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const {
  TOOLS,
  isCliInvocation,
  handleLocalIntrospection,
  buildAuditRequestSpec,
  normalizeAuditPayload,
  renderAuditMarkdown,
  renderFixPrompt,
  writePatchesSafely,
  buildShareUrl,
  buildBrowserOpenCommand,
  compareSnapshots,
  searchRulesOffline,
} = require("../bin/aeorank-mcp.js");

test("MCP server declares all 5 tools with explicit boolean annotations", () => {
  assert.equal(Array.isArray(TOOLS), true);
  assert.equal(TOOLS.length, 5);
  const expectedNames = [
    "lookup_rule",
    "list_entity_sources",
    "search_knowledge_playbooks",
    "run_sandbox_audit",
    "generate_agent_patch_pack",
  ];
  assert.deepEqual(TOOLS.map((t) => t.name), expectedNames);
  for (const tool of TOOLS) {
    assert.equal(typeof tool.description, "string");
    assert.ok(tool.description.length > 10);
    assert.ok(tool.annotations, `Missing annotations on ${tool.name}`);
    assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
    assert.equal(typeof tool.annotations.destructiveHint, "boolean");
    assert.equal(typeof tool.annotations.idempotentHint, "boolean");
    assert.equal(typeof tool.annotations.openWorldHint, "boolean");
    assert.equal(tool.annotations.readOnlyHint, true);
    assert.equal(tool.annotations.destructiveHint, false);
    assert.equal(tool.annotations.idempotentHint, true);
  }
});

test("initialize and ping handshake return valid JSON-RPC 2.0 responses", () => {
  const initRaw = handleLocalIntrospection({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: { protocolVersion: "2024-11-05" },
  });
  const initObj = JSON.parse(initRaw);
  assert.equal(initObj.jsonrpc, "2.0");
  assert.equal(initObj.id, 1);
  assert.equal(initObj.result.serverInfo.name, "aeorank-geo-mcp");
  const pingRaw = handleLocalIntrospection({ jsonrpc: "2.0", id: 2, method: "ping" });
  const pingObj = JSON.parse(pingRaw);
  assert.equal(pingObj.id, 2);
  assert.deepEqual(pingObj.result, {});
});

test("tools/list, resources/list, resources/read, and prompts/list exercise all declared handlers", () => {
  const listRaw = handleLocalIntrospection({ jsonrpc: "2.0", id: 3, method: "tools/list" });
  const listObj = JSON.parse(listRaw);
  assert.equal(listObj.result.tools.length, 5);
  const resListRaw = handleLocalIntrospection({ jsonrpc: "2.0", id: 4, method: "resources/list" });
  const resListObj = JSON.parse(resListRaw);
  assert.equal(resListObj.result.resources.length, 1);
  assert.equal(resListObj.result.resources[0].uri, "aeorank://rules/geo-62");
  const resReadRaw = handleLocalIntrospection({
    jsonrpc: "2.0",
    id: 5,
    method: "resources/read",
    params: { uri: "aeorank://rules/geo-62" },
  });
  const resReadObj = JSON.parse(resReadRaw);
  const rulesCatalog = JSON.parse(resReadObj.result.contents[0].text);
  assert.equal(rulesCatalog.counts.total_rules, 62);
  assert.equal(rulesCatalog.counts.semantic_dimensions, 14);
  assert.equal(rulesCatalog.counts.agentic_readiness_signals, 6);
  const promptsRaw = handleLocalIntrospection({ jsonrpc: "2.0", id: 6, method: "prompts/list" });
  const promptsObj = JSON.parse(promptsRaw);
  assert.equal(promptsObj.result.prompts.length, 1);
  assert.equal(promptsObj.result.prompts[0].name, "seo-geo-audit");
});

test("Dual-mode routing (B6) & request builder (B1, B2, B4) enforce strict boundaries", () => {
  assert.equal(isCliInvocation([]), false);
  assert.equal(isCliInvocation(["--mcp"]), false);
  assert.equal(isCliInvocation(["--stdio"]), false);
  assert.equal(isCliInvocation(["--unknown-flag"]), false);
  assert.equal(isCliInvocation(["audit", "https://aeorank.app"]), true);
  assert.equal(isCliInvocation(["fix"]), true);
  assert.equal(isCliInvocation(["--version"]), true);

  // B2: Keyless mode never sends Authorization: Bearer demo
  const keylessSpec = buildAuditRequestSpec("aeorank.app", { fresh: true }, "");
  assert.equal(keylessSpec.ok, true);
  assert.equal(keylessSpec.mode, "keyless");
  assert.equal(keylessSpec.endpoint, "/api/trial-scan");
  assert.equal(keylessSpec.headers.Authorization, undefined);
  assert.equal(keylessSpec.body.force_rescan, true);

  // B1: --sandbox + --min-score is rejected with exitCode 2
  const badSb = buildAuditRequestSpec("https://example.com", { sandbox: true, minScore: 80 }, "");
  assert.equal(badSb.ok, false);
  assert.equal(badSb.exitCode, 2);

  // Keyed mode uses /api/v1/audit/technical
  const keyedSpec = buildAuditRequestSpec("https://example.com", {}, "aeo_live_secret123");
  assert.equal(keyedSpec.ok, true);
  assert.equal(keyedSpec.endpoint, "/api/v1/audit/technical");
  assert.equal(keyedSpec.headers.Authorization, "Bearer aeo_live_secret123");
});

test("Normalizer, fix prompt, share URL, compare & patch writer enforce B3, B7, B10, B11", () => {
  const snap1 = normalizeAuditPayload({
    scan_token: "tok_before_12345",
    trial: {
      domain: "example.com",
      final_url: "https://example.com/",
      overall: 74,
      categories: { crawlability: { score: 80, weight: 20 } },
      teaser_actions: [
        { action_id: "AEO-001", rule_id: "llms_txt_missing", priority: "P2", severity: "medium", title: "Missing /llms.txt", fix: "Add /llms.txt" },
      ],
      locked_actions_count: 3,
    },
    draft_llms_txt: "# Example\n> Summary",
  });
  assert.equal(snap1.overall, 74);
  assert.equal(snap1.unlocked, false);
  const shareUrl = buildShareUrl(snap1);
  assert.equal(shareUrl, "https://aeorank.app#scan=tok_before_12345");
  assert.ok(!shareUrl.includes("lead="));

  const openCmd = buildBrowserOpenCommand(shareUrl, "win32");
  assert.equal(openCmd.options.shell, false);
  assert.throws(() => buildBrowserOpenCommand("https://evil.example.com/#scan=1", "win32"));

  const promptTxt = renderFixPrompt(snap1);
  assert.ok(promptTxt.includes("<untrusted_site_metadata>"));
  assert.ok(promptTxt.includes("AEO-001"));

  const snap2 = normalizeAuditPayload({
    scan_token: "tok_after_67890",
    trial_full: {
      domain: "example.com",
      final_url: "https://example.com/",
      overall: 92,
      categories: { crawlability: { score: 100, weight: 20 } },
      all_actions: [],
    },
    patch_pack: {
      llms_txt: "# Example Brand",
      robots_txt: "User-agent: *\nAllow: /",
    },
  });
  const cmp = compareSnapshots(snap1, snap2, { minScore: 85 });
  assert.equal(cmp.ok, true);
  assert.equal(cmp.exitCode, 0);
  assert.equal(cmp.delta, 18);
  assert.equal(cmp.resolved.length, 1);

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "aeo-patch-test-"));
  const written = writePatchesSafely(snap2, tmpDir, false);
  assert.equal(written.length, 2);
  assert.throws(() => writePatchesSafely(snap2, tmpDir, false));
  const overwritten = writePatchesSafely(snap2, tmpDir, true);
  assert.equal(overwritten.length, 2);
  fs.rmSync(tmpDir, { recursive: true, force: true });

  const rulesSearch = searchRulesOffline("PFA-01", "en");
  assert.equal(rulesSearch.total_matches, 1);
  assert.equal(rulesSearch.matches[0].code, "PFA-01");
});
