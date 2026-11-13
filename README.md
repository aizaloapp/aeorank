# AEORank GEO-62 Open Diagnostic Index, AEO-Sem & Edge API Specification

[![AEORank Score Badge](https://aeorank.app/api/v1/badge/aeorank.app.svg)](https://aeorank.app/)
[![M8ven Score](https://m8ven.ai/badge/mcp/aizaloapp-aeorank-1xqjbq?v=172201fa2cfa751f7e7967d26ca744b5)](https://m8ven.ai/mcp/aizaloapp-aeorank-1xqjbq?s=readme)
[![Live Station](https://img.shields.io/badge/Live_Scanner-aeorank.app-10B981?style=flat-square)](https://aeorank.app/)
[![OpenAPI 3.0.3](https://img.shields.io/badge/OpenAPI-3.0.3-6366F1?style=flat-square)](https://aeorank.app/openapi.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](./LICENSE)

> 🌐 **Language:** **🇬🇧 English (Global)** | **[🇻🇳 Đọc bản Tiếng Việt (`README.vi.md`)](./README.vi.md)**  
> 📖 **GitHub Pages Documentation:** **[English Docs (`/aeorank/`)](https://aizaloapp.github.io/aeorank/)** | **[Tài liệu Tiếng Việt (`/aeorank/vi/`)](https://aizaloapp.github.io/aeorank/vi/)**

> **Official Public Diagnostic Index (`62` Technical Rules + `14` `AEO-Sem` Semantic Dimensions + `6` Agentic Web Signals), Starter Configuration Templates & REST/MCP Specification for [AEORank (`aeorank.app`)](https://aeorank.app/)** — The Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) Diagnostic Station.

> **Canonical Identity & Disambiguation:** **AEORank** (founded in Ho Chi Minh City, Vietnam; Wikidata [Q141814049](https://www.wikidata.org/wiki/Q141814049); CERN Zenodo DOI [10.5281/zenodo.23582947](https://doi.org/10.5281/zenodo.23582947)) evaluates `GEO-62` & `AEO-Sem` exclusively at **[https://aeorank.app](https://aeorank.app)** with official packages `npx aeorank-geo`, `aeorank-geo-mcp`, and `n8n-nodes-aeorank`. AEORank is an independent software platform and is completely unaffiliated with third-party homonyms `aeorank.dev` (`aeorank-cli`) or `aeorank.tech`.

---

## 1. Overview & Why Use the AEORank Execution Engine?

**AEORank** evaluates websites across **9 core pillars** combining **`62` deterministic technical checks** (`56` single-page rules + `6` multi-page Sitemap rules anchored in Google Search Central & RFC 9727) with **`14` AEORank Semantic Engine (`AEO-Sem`) dimensions** (synthesized from `18` typed semantic signals), **`6` Agentic Web Readiness signals**, and **live 4-AI citation checks** (*Perplexity, Google AI Mode, ChatGPT, Google Gemini*).

### Self-Serve Diagnostic Tiers vs. DIY Agent Scraping
| Approach | Cost | Multi-Page Cannibalization & Orphan Detection | Live AI Citations + Search & Backlink Authority Graph | Executive PDF + P1/P2/P3 Excel Action Plan + Drift Guard |
| :--- | :--- | :--- | :--- | :--- |
| **DIY with LLM Coding Agent** | **$15–$25** in LLM tokens + **$50+** API minimums | Prone to context window truncation across 3,100 checks | ❌ Requires separate paid API accounts | ❌ Raw console text |
| **[Single Deep Audit ($9 One-Time)](https://aeorank.app/pricing)** | **$9 USD** one-time | ✅ Full 50-page cross-sitemap graph inspection | ✅ Included (`Perplexity`, `AI Mode`, `ChatGPT`, `Gemini`) | ✅ 15+ Page Executive PDF (50 URLs) + Formula-ready `.xlsx` |
| **[Weekly Drift Guard ($19/mo or $149/yr)](https://aeorank.app/pricing)** | **$19/mo** (2 domains) · **$149/yr** (3 domains) | ✅ Automated weekly background scans + On-demand rescans | ✅ Continuous AI citation & P1 regression alerts | ✅ [Multi-Domain Live Dashboard](https://aeorank.app/en/dashboard) |
| **AEORank v1 Edge API & `/mcp`** | From **$0** (Sandbox / MCP) / Pay-per-credit | ✅ Deterministic `< 2.5s` JSON response | ✅ Available on `/api/v1/audit/full` | ✅ JSON Schema v2 for CI/CD & Dashboards |

---

## 2. Normalized 9-Pillar Scoring Formula (`Base 115 → 100%`) & Severity Model

Each pillar starts at `100` points and is deducted deterministically by rule severity (`critical: -25`, `high: -12`, `medium: -6`, `low: -2`, `info: 0`) scaled by page reach (`deduction = max_deduction * (0.5 + 0.5 * reach)` where `reach = 1.0` for site-wide rules).
- **Content Quality (`content`) & AI Search Readiness (`ai`):** Blend **70% `AEO-Sem` probabilistic semantic judgment** + **30% deterministic rules**.
- **Performance (`performance`):** Blends **50% PageSpeed Insights / Lighthouse Mobile** + **50% deterministic crawl rules**.

$$\text{Overall Score} = \text{round}\left(\frac{\sum_{i=1}^{9} \text{Score}_i \times w_i}{115}\right)$$

| Pillar Key | Evaluation Pillar | Raw Weight ($w_i$) | Normalized Share (%) |
| :--- | :--- | :---: | :---: |
| `crawl` | **Crawlability & Indexing** | `20` | **17.39%** |
| `onpage` | **On-Page SEO** | `15` | **13.04%** |
| `content` | **Content Quality** | `20` | **17.39%** |
| `links` | **Links & Architecture** | `10` | **8.7%** |
| `structured` | **Structured Data & Social** | `8` | **6.96%** |
| `ai` | **AI Search & GEO Readiness** | `12` | **10.43%** |
| `performance` | **Performance & Speed** | `10` | **8.7%** |
| `security` | **Security & Trust** | `5` | **4.35%** |
| `visibility` | **Search & AI Visibility** | `15` | **13.04%** |
| **Total** | **9 Evaluation Pillars** | **`115`** | **`100.0%`** |

---

## 3. Terminal CLI (`npx -y aeorank-geo`), Remote MCP Server (`https://aeorank.app/mcp`) & REST API v1

### 3.0. From a Terminal — Keyless CLI & CI/CD Gate (`Node.js >= 18`, Zero Dependencies)
One npm package (`aeorank-geo` / `aeorank-geo-mcp`) works as both an instant terminal CLI and a local Stdio MCP server:
```bash
# 1. Run a live 62-rule + AEO-Sem homepage audit (one line, no API key required):
npx -y aeorank-geo audit https://example.com

# 2. Re-read the cached report (Markdown or --json) without burning a new scan:
npx -y aeorank-geo report

# 3. Print a structured AI coding agent remediation prompt + 5-Tab Patch Pack:
npx -y aeorank-geo fix

# 4. Print a shareable browser link to the snapshot:
npx -y aeorank-geo share

# 5. Compare two audit snapshots & enforce a CI/CD score gate (exits 1 on regression):
npx -y aeorank-geo compare before.json after.json --min-score 80

# 6. Look up any GEO-62 rule, AEO-Sem dimension, or Agentic Web signal offline:
npx -y aeorank-geo rules PFA-01
```

### 3.1. Connect AI Coding Agents via Remote MCP (`$0`, Streamable HTTP JSON-RPC 2.0)
Point **Cursor**, **Windsurf**, or **Claude Desktop** directly to `https://aeorank.app/mcp` to give your agent instant access to 4 live tools:
- **`lookup_rule`** — Look up any of the 62 AEORank Technical SEO, AEO & GEO diagnostic rules (e.g. AEO-001..AEO-062, llms_txt, answer_first, entity_clarity) and 9-pillar weights.
- **`list_entity_sources`** — Retrieve verified DR 70-98 self-serve entity & citation platforms (Wikidata, CERN Zenodo DOI, Hugging Face, GitHub, npm, PyPI, LinkedIn) for Knowledge Graph sameAs synchronization.
- **`search_knowledge_playbooks`** — Search peer-reviewed Technical SEO, AEO, and GEO engineering guides from the AEORank Open Knowledge Hub (/learn and /tri-thuc).
- **`run_sandbox_audit`** — Execute an instant zero-latency ($0) AEORank GEO-62 & Agentic Web 2026 diagnostic preview for a domain or URL.
- **`generate_agent_patch_pack`** — Generate ready-to-deploy machine-readable patch files (/llms.txt, additive RFC 9309 robots.txt, XSS-safe Schema JSON-LD, agent-card.json, safe _headers, and .geo-answer-box Fan-Out HTML) plus a prompt-injection-hardened Coding Agent remediation prompt.

```json
// Cursor (~/.cursor/mcp.json):
{
  "mcpServers": {
    "aeorank": { "url": "https://aeorank.app/mcp" }
  }
}

// Windsurf (~/.codeium/windsurf/mcp_config.json):
{
  "mcpServers": {
    "aeorank": { "serverUrl": "https://aeorank.app/mcp" }
  }
}

// Claude Desktop (claude_desktop_config.json):
{
  "mcpServers": {
    "aeorank": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://aeorank.app/mcp"]
    }
  }
}
```

### 3.2. Embed Your Opt-In Score Badge (`GET /api/v1/badge/{domain}.svg`)
Add your live AEORank score badge to your repository `README.md` or website footer:
```markdown
[![Verified by AEORank](https://aeorank.app/api/v1/badge/your-domain.com.svg)](https://aeorank.app/?domain=your-domain.com)
```

### 3.3. REST API v1 Endpoints (`https://aeorank.app`)
1. **`GET /api/v1/rules?lang=en|vi`** — Fetch the public `62`-rule index, `14` `AEO-Sem` semantic dimensions, `6` Agentic Web signals, and normalized pillar weights (`$0`, public).
2. **`POST /api/v1/audit/sandbox`** — Zero-latency Cloud Sandbox response (`< 10ms`, `0 credits`, `Authorization: Bearer demo`).
3. **`POST /api/v1/audit/technical`** — Live `56`-rule homepage + Sitemap + Entity Gap + `/llms.txt` generator (`1 credit`, `< 2.5s`).
4. **`POST /api/v1/audit/full`** — Full Technical + `AEO-Sem` Semantic + Live Perplexity & Google AI Mode citation check (`5 credits`, auto-refunds on connection error).

```bash
# Test immediately with the zero-cost Sandbox key:
curl -X POST "https://aeorank.app/api/v1/audit/sandbox" \
  -H "Authorization: Bearer demo" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://aeorank.app", "lang": "en"}'
```

### 3.4. Network, Credentials & Privacy Disclosure (Portable Agent Plugin v1)
- **Hosted MCP & Network Endpoints:** This repository ships a Portable Agent Plugins v1 declaration (`plugin.json`, `mcp.json`, and `skills/aeorank-seo-geo-auditor/SKILL.md`). `mcp.json` connects exclusively over HTTPS (`streamable-http`) to `https://mcp.aeorank.app/mcp` (and the optional standalone Node.js CLI `bin/aeorank-mcp.js` calls `https://aeorank.app`). When an audit or patch tool is called, only the target public URL and language preference passed in tool arguments are sent to `aeorank.app`.
- **Credentials & Secret Handling:** All 5 hosted MCP tools (`lookup_rule`, `list_entity_sources`, `search_knowledge_playbooks`, `run_sandbox_audit`, `generate_agent_patch_pack`) operate with **zero authentication and zero stored secrets**. No `.env` files, agent `auth.json` stores, browser profiles, or OS keychains are ever read or modified. Optional paid REST API endpoints (`/api/v1/audit/technical` and `/api/v1/audit/full`) are outside the keyless MCP surface and accept an explicit `Authorization: Bearer <key>` header when invoked directly via CLI or `curl`.
- **Local Execution, Telemetry & Updates:** The portable plugin contains zero runtime hooks or middleware, spawns zero background processes or shell daemons, collects zero telemetry, and contains zero self-updating code.

---

## 4. Public Index of `62` Deterministic Diagnostic Rules (`56` Single-Page + `6` Multi-Page Sitemap)

> **Scope Breakdown:**
> - **`single_page` (`56` rules):** Evaluated on the homepage in instant `< 15s` scans and on every crawled URL in 50-page Deep Audits.
> - **`multi_page_sitemap` (`6` rules):** Evaluated across the full Sitemap graph (`AEO-005` (`sitemap_bad_urls`), `AEO-019` (`deep_pages`), `AEO-020` (`orphan_pages`), `AEO-023` (`title_duplicate`), `AEO-027` (`meta_duplicate`), `AEO-035` (`duplicate_content`)).
> - **Basis:** Distinguishes **Documented Standards** (Google Search Central, IETF RFC, W3C/WHATWG, MDN, OWASP) from **Editorial Conventions** (practitioner thresholds such as character length bands or click depth).

| Code | Rule ID | Pillar | Severity | Scope | Basis | Rule Description & Primary Standard |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `AEO-001` | `robots_missing` | Crawlability & Indexing | `low` | `single_page` | Documented Standard | Missing robots.txt file ([`robots`](https://developers.google.com/search/docs/crawling-indexing/robots/intro)) |
| `AEO-002` | `robots_blocks_site` | Crawlability & Indexing | `critical` | `single_page` | Documented Standard | robots.txt blocks search crawlers across the site ([`robots`](https://developers.google.com/search/docs/crawling-indexing/robots/intro)) |
| `AEO-003` | `sitemap_missing` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | XML sitemap not found ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-004` | `sitemap_errors` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Sitemap is unreachable or contains malformed XML ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-005` | `sitemap_bad_urls` | Crawlability & Indexing | `medium` | `multi_page_sitemap` | Documented Standard | Sitemap contains redirecting, broken, or noindex URLs ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-006` | `not_in_sitemap` | Crawlability & Indexing | `low` | `single_page` | Documented Standard | Indexable pages missing from XML sitemap ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-007` | `http_errors` | Crawlability & Indexing | `high` | `single_page` | Documented Standard | Pages returning HTTP 4xx or 5xx errors ([`http`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-008` | `broken_internal_links` | Links & Architecture | `high` | `single_page` | Documented Standard | Internal links pointing to broken URLs ([`broken`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-009` | `redirect_chains` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Multi-hop redirect chains detected ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-010` | `links_to_redirects` | Links & Architecture | `low` | `single_page` | Documented Standard | Internal links pointing to redirecting URLs ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-011` | `noindex` | Crawlability & Indexing | `high` | `single_page` | Documented Standard | Pages excluded from search by noindex directive ([`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing)) |
| `AEO-012` | `canonical_missing` | Crawlability & Indexing | `low` | `single_page` | Documented Standard | Page missing rel=canonical tag ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-013` | `canonical_elsewhere` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Canonical tag points to a different URL ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-014` | `canonical_broken` | Crawlability & Indexing | `high` | `single_page` | Documented Standard | Canonical target URL redirects or returns an error ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-015` | `soft_404` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Non-existent URL returns HTTP 200 (Soft 404) ([`soft404`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-016` | `host_temporary_redirect` | Crawlability & Indexing | `low` | `single_page` | Documented Standard | Domain or HTTPS redirect uses temporary status (302/307) ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-017` | `host_variant` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Both www and non-www host variants resolve independently ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-018` | `no_https` | Security & Trust | `high` | `single_page` | Documented Standard | Site does not enforce HTTPS or HTTP fails to redirect to HTTPS ([`https`](https://developers.google.com/search/docs/appearance/page-experience)) |
| `AEO-019` | `deep_pages` | Links & Architecture | `low` | `multi_page_sitemap` | Editorial Convention | Important pages buried more than 3 clicks from the homepage ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-020` | `orphan_pages` | Links & Architecture | `medium` | `multi_page_sitemap` | Documented Standard | Sitemap pages with zero incoming internal links (Orphan pages) ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-021` | `js_dependent` | Crawlability & Indexing | `medium` | `single_page` | Documented Standard | Primary content requires client-side JavaScript rendering ([`js`](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)) |
| `AEO-022` | `title_missing` | On-Page SEO | `high` | `single_page` | Documented Standard | Page is missing a <title> tag ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-023` | `title_duplicate` | On-Page SEO | `medium` | `multi_page_sitemap` | Documented Standard | Duplicate <title> tags across multiple pages ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-024` | `title_length` | On-Page SEO | `low` | `single_page` | Editorial Convention | <title> tag is too short or too long ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-025` | `multiple_titles` | On-Page SEO | `low` | `single_page` | Documented Standard | Multiple <title> tags found on the same page ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-026` | `meta_missing` | On-Page SEO | `medium` | `single_page` | Documented Standard | Page is missing a meta description ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-027` | `meta_duplicate` | On-Page SEO | `low` | `multi_page_sitemap` | Documented Standard | Duplicate meta descriptions across multiple pages ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-028` | `meta_length` | On-Page SEO | `low` | `single_page` | Editorial Convention | Meta description is too short or too long ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-029` | `h1_missing` | On-Page SEO | `medium` | `single_page` | Editorial Convention | Page is missing a primary H1 heading ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-030` | `h1_multiple` | On-Page SEO | `low` | `single_page` | Editorial Convention | Page contains multiple H1 headings ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-031` | `heading_skips` | On-Page SEO | `low` | `single_page` | Editorial Convention | Heading hierarchy skips levels (e.g. H1 directly to H3) ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-032` | `lang_missing` | On-Page SEO | `low` | `single_page` | Documented Standard | Missing HTML lang attribute on <html> ([`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang)) |
| `AEO-033` | `viewport_missing` | On-Page SEO | `high` | `single_page` | Documented Standard | Missing mobile meta viewport tag ([`mobile`](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)) |
| `AEO-034` | `thin_content` | Content Quality | `medium` | `single_page` | Editorial Convention | Page has very thin body content ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `AEO-035` | `duplicate_content` | Content Quality | `medium` | `multi_page_sitemap` | Documented Standard | Pages with near-identical main body text ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-036` | `images_alt` | On-Page SEO | `medium` | `single_page` | Documented Standard | Images missing descriptive alt text ([`images`](https://developers.google.com/search/docs/appearance/google-images)) |
| `AEO-037` | `images_dimensions` | Performance & Speed | `low` | `single_page` | Documented Standard | Images missing explicit width and height attributes ([`cls`](https://web.dev/articles/optimize-cls)) |
| `AEO-038` | `lcp_image_lazy` | Performance & Speed | `low` | `single_page` | Editorial Convention | Above-the-fold hero image uses loading="lazy" ([`lcp_lazy`](https://web.dev/articles/lcp-lazy-loading)) |
| `AEO-039` | `no_structured_data` | Structured Data & Social | `medium` | `single_page` | Documented Standard | Homepage has no JSON-LD structured data ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-040` | `jsonld_errors` | Structured Data & Social | `high` | `single_page` | Documented Standard | Invalid JSON-LD syntax that cannot be parsed ([`sd_general`](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)) |
| `AEO-041` | `schema_required` | Structured Data & Social | `low` | `single_page` | Documented Standard | Structured data is missing required Rich Result properties ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-042` | `schema_website_missing` | Structured Data & Social | `low` | `single_page` | Documented Standard | Homepage missing WebSite schema or Site Name ([`site_names`](https://developers.google.com/search/docs/appearance/site-names)) |
| `AEO-043` | `faq_rich_result_limited` | Structured Data & Social | `info` | `single_page` | Documented Standard | FAQPage or deprecated Rich Result schema note (HowTo, SpecialAnnouncement, etc.) ([`sd_faq`](https://developers.google.com/search/docs/appearance/structured-data/faqpage)) |
| `AEO-044` | `og_missing` | Structured Data & Social | `low` | `single_page` | Documented Standard | Missing Open Graph tags (og:title or og:image) ([`og`](https://ogp.me/)) |
| `AEO-045` | `hreflang_issues` | Structured Data & Social | `medium` | `single_page` | Documented Standard | Incomplete or non-reciprocal hreflang annotations ([`hreflang`](https://developers.google.com/search/docs/specialty/international/localized-versions)) |
| `AEO-046` | `ai_bots_blocked` | AI Search & GEO Readiness | `info` | `single_page` | Documented Standard | AI search crawlers or Content-Signal directives are restricted in robots.txt ([`crawlers_google`](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)) |
| `AEO-047` | `llms_txt_missing` | AI Search & GEO Readiness | `info` | `single_page` | Editorial Convention | No /llms.txt context file found at the root ([`llms`](https://llmstxt.org/)) |
| `AEO-048` | `llms_txt_no_links` | AI Search & GEO Readiness | `info` | `single_page` | Editorial Convention | /llms.txt contains no Markdown links to core pages ([`llms`](https://llmstxt.org/)) |
| `AEO-049` | `api_catalog_invalid_mime` | AI Search & GEO Readiness | `info` | `single_page` | Documented Standard | /.well-known/api-catalog does not return application/linkset+json ([`rfc9727`](https://www.rfc-editor.org/rfc/rfc9727)) |
| `AEO-050` | `schema_sameas_missing` | AI Search & GEO Readiness | `low` | `single_page` | Editorial Convention | Primary entity schema is missing external sameAs verification links ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-051` | `entity_name_inconsistent` | AI Search & GEO Readiness | `low` | `single_page` | Editorial Convention | Brand entity name is inconsistent across Schema, Open Graph, and <title> ([`site_names`](https://developers.google.com/search/docs/appearance/site-names)) |
| `AEO-052` | `thin_sections_for_ai` | AI Search & GEO Readiness | `info` | `single_page` | Editorial Convention | Sub-sections (H2/H3) are too brief for standalone AI passage citation ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `AEO-053` | `hsts_missing` | Security & Trust | `low` | `single_page` | Documented Standard | Missing Strict-Transport-Security (HSTS) header ([`hsts`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)) |
| `AEO-054` | `security_headers` | Security & Trust | `low` | `single_page` | Documented Standard | Missing baseline HTTP security headers ([`headers`](https://owasp.org/projects/secure-headers-project)) |
| `AEO-055` | `mixed_content` | Security & Trust | `high` | `single_page` | Documented Standard | HTTPS page loads insecure HTTP subresources (Mixed Content) ([`mixed`](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content)) |
| `AEO-056` | `favicon_missing` | Security & Trust | `low` | `single_page` | Documented Standard | Missing favicon declaration on homepage ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-057` | `slow_ttfb` | Performance & Speed | `medium` | `single_page` | Documented Standard | Slow server Time to First Byte (TTFB > 800ms) ([`ttfb`](https://web.dev/articles/ttfb)) |
| `AEO-058` | `heavy_html` | Performance & Speed | `low` | `single_page` | Editorial Convention | HTML document payload exceeds 500 KB ([`cwv`](https://web.dev/articles/vitals)) |
| `AEO-059` | `generic_anchors` | Links & Architecture | `low` | `single_page` | Documented Standard | Internal links use non-descriptive anchor text ('click here', 'read more') ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-060` | `broken_external_links` | Links & Architecture | `low` | `single_page` | Documented Standard | Outbound external links return HTTP errors ([`broken`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `PFA-01` | `protected_field_year_conflict` | On-Page SEO | `medium` | `single_page` | Editorial Convention | Stale year in <title> or H1 conflicts with newer year in body content ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `CFA-02` | `sitemap_uniform_lastmod` | Crawlability & Indexing | `low` | `single_page` | Editorial Convention | All sitemap URLs share an identical <lastmod> timestamp ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |

---

## 5. `14` `AEO-Sem` Semantic Evaluation Dimensions (`SEM-01` – `SEM-14`)

Beyond deterministic HTML/HTTP rules, the **AEORank Semantic Engine (`AEO-Sem`)** evaluates **`18` typed probabilistic signals** (`13` page-level signals + `5` site-level signals + cross-page intent pairs) and synthesizes them into **`14` actionable semantic dimensions**:

| Code | Dimension ID | Pillar | Severity | Scope | Basis | Semantic Evaluation Dimension & Reference |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `SEM-01` | `value_prop` | Content Quality | `high` | `site_wide` | Documented Standard | Homepage does not clearly communicate the core value proposition ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-02` | `entity_clarity` | AI Search & GEO Readiness | `medium` | `site_wide` | Editorial Convention | Homepage opening lacks clear Entity Identity (Who, What, Where) ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-03` | `local_schema` | Structured Data & Social | `medium` | `site_wide` | Documented Standard | Local business website is missing LocalBusiness JSON-LD schema ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `SEM-04` | `helpfulness` | Content Quality | `high` | `page_level` | Documented Standard | Key pages do not fully satisfy searcher intent and depth ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-05` | `specificity` | Content Quality | `medium` | `page_level` | Documented Standard | Content relies on generic claims rather than first-hand specifics ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-06` | `trust` | Content Quality | `medium` | `page_level` | Documented Standard | Core pages lack visible E-E-A-T trust and authorship signals ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-07` | `next_step` | Content Quality | `medium` | `page_level` | Editorial Convention | Commercial pages lack a clear, intent-matched Call to Action ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `SEM-08` | `title_fit` | On-Page SEO | `medium` | `page_level` | Documented Standard | <title> tag does not accurately reflect or sell the page content ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `SEM-09` | `meta_fit` | On-Page SEO | `low` | `page_level` | Documented Standard | Meta description is vague and lacks compelling specifics ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `SEM-10` | `h1_fit` | On-Page SEO | `low` | `page_level` | Editorial Convention | Primary H1 heading is vague or slogan-only ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `SEM-11` | `answer_first` | AI Search & GEO Readiness | `low` | `page_level` | Editorial Convention | Opening paragraph buries the lead instead of answering directly after H1 ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-12` | `citable` | AI Search & GEO Readiness | `medium` | `page_level` | Editorial Convention | Low density of self-contained facts and statistics for AI citation ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-13` | `rewrite` | Content Quality | `medium` | `page_level` | Editorial Convention | Pages flagged by AEO-Sem for rewrite or consolidation ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-14` | `cannibalization` | Content Quality | `medium` | `cross_page_pair` | Documented Standard | Multiple pages competing for the same search intent (Keyword Cannibalization) ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |

---

## 6. `6` Agentic Web Readiness Signals (`AG-01` – `AG-06`)

Measured in `trial.agentic_readiness` (`0/6` to `6/6`) to verify whether autonomous AI Search & Coding Agents can discover, parse, and interact with your domain:

| Code | Signal ID | Scope | Agentic Web Signal Description | Protocol Reference |
| :--- | :--- | :---: | :--- | :--- |
| `AG-01` | `llms_txt` | `site_wide` | Root /llms.txt AI Context Index summarizing entity identity and canonical links | [`llms`](https://llmstxt.org/) |
| `AG-02` | `api_catalog` | `site_wide` | RFC 9727 /.well-known/api-catalog serving application/linkset+json | [`rfc9727`](https://www.rfc-editor.org/rfc/rfc9727) |
| `AG-03` | `agent_card` | `site_wide` | Agent & MCP Server Discovery Manifests (/.well-known/agent-card.json & /.well-known/mcp/server-card.json) | [`mcp`](https://modelcontextprotocol.io/) |
| `AG-04` | `content_signal` | `site_wide` | Explicit Content-Signal directive in /robots.txt (search=yes, ai-input=yes) | [`content_signal`](https://contentsignals.org/) |
| `AG-05` | `markdown_alternate` | `site_wide` | Machine-readable Markdown alternate link (<link rel="alternate" type="text/markdown">) | [`llms`](https://llmstxt.org/) |
| `AG-06` | `webmcp_or_agentic_cta` | `site_wide` | Agent-accessible semantic CTAs (aria-label) & Streamable HTTP MCP endpoint (/mcp) | [`mcp`](https://modelcontextprotocol.io/) |

---

## 7. Official Engineering Playbooks & Research Library ([Open Knowledge Hub](https://aeorank.app/learn))

- **[SEO vs. AEO vs. GEO (2026): Complete Architecture & Roadmap](https://aeorank.app/learn/seo-aeo-geo-differences-roadmap-2026)** ([Markdown `.md`](https://aeorank.app/learn/seo-aeo-geo-differences-roadmap-2026.md)) — The 2026 SEO, AEO, and GEO Architecture Map is a unified engineering framework for ranking in traditional Google search results while earning brand citations inside generative AI engines (ChatGPT, Perplexity, Gemini, and Google AI Overviews). This guide provides a 3-layer technical comparison matrix and implementation checklist so engineering and content teams can protect organic traffic and capture AI recommendations simultaneously.
- **[Protected-Field Audit: Fixing Title & Body Year Conflicts](https://aeorank.app/learn/protected-field-audit-title-body-year-conflict)** ([Markdown `.md`](https://aeorank.app/learn/protected-field-audit-title-body-year-conflict.md)) — A Protected-Field Audit (rule PFA-01 in the 62-rule AEORank engine) is a deterministic verification workflow that detects year and numeric contradictions between four locked metadata fields (<title>, H1, meta description, and FAQ headings) and updated body text. This guide provides the 4-point synchronization checklist to prevent Google from forcibly rewriting your SERP titles and to protect semantic trust scores in AI retrieval pipelines.
- **[Fake Freshness & The Uniform Sitemap Lastmod Trap (CFA-02)](https://aeorank.app/learn/fake-freshness-uniform-sitemap-lastmod-trap)** ([Markdown `.md`](https://aeorank.app/learn/fake-freshness-uniform-sitemap-lastmod-trap.md)) — The Fake Freshness and Uniform Sitemap Lastmod Trap (rule CFA-02) occurs when CMS plugins or CI/CD build scripts overwrite the <lastmod> timestamp of every URL in sitemap.xml with today's date despite zero substantive content changes. This guide explains Google Search Central's timestamp verification rules and shows how to pair honest Sitemap signaling with non-commodity content upgrades.
- **[Diagnosing CTR Drops: Google AI Overviews vs. Competitors](https://aeorank.app/learn/diagnosing-ctr-drop-ai-overviews-vs-competitors)** ([Markdown `.md`](https://aeorank.app/learn/diagnosing-ctr-drop-ai-overviews-vs-competitors.md)) — Organic CTR Drop Triage is a 4-signal diagnostic method using Google Search Console and live SERP inspection to determine whether falling click-through rates are caused by Google AI Overviews answering queries zero-click or by competitors outperforming your snippet. This guide provides the decision matrix to stop teams from blindly rewriting winning Top-3 title tags and shift toward AEO/GEO source citation.
- **[Scientific SEO Testing: Control Groups & GSC Data Noise](https://aeorank.app/learn/scientific-seo-testing-control-groups-gsc)** ([Markdown `.md`](https://aeorank.app/learn/scientific-seo-testing-control-groups-gsc.md)) — Controlled SEO Experimentation (5 Pilot pages paired with 5 untouched Control pages) is a scientific measurement protocol that isolates the true causal impact of technical or editorial changes from seasonality and algorithm volatility. This guide details the 14-day recrawl burn-in window, the 4-to-6-week evaluation freeze, and how to navigate Google Search Console's 2025–2026 Impression logging changes.
- **[SEO & GEO Strategy by 3 Website Growth Stages (2026 Matrix)](https://aeorank.app/learn/seo-geo-strategy-by-3-website-growth-stages)** ([Markdown `.md`](https://aeorank.app/learn/seo-geo-strategy-by-3-website-growth-stages.md)) — Stage-Aware SEO & GEO Strategy is an engineering resource allocation framework that classifies websites into three distinct lifecycle tiers based on valid Sitemap URL count and estimated search traffic: Early Stage (< 30 URLs), Growth Stage (30–300 URLs), and Mature Stage (> 300 URLs). This guide provides the prioritization matrix and anti-waste guardrails so teams solve their exact current bottleneck and save 70% of wasted effort.
- **[Google AI Content Rules & The 5-Step Information Gain Guide](https://aeorank.app/learn/google-ai-content-information-gain-playbook)** ([Markdown `.md`](https://aeorank.app/learn/google-ai-content-information-gain-playbook.md)) — Information Gain is the measurable degree to which an article contributes new empirical evidence, verified sample data, and decision-making answers that the current Top 10 ranking pages left out. This guide distills Google Search Central's generative AI content rules and provides a 5-step practitioner playbook paired with AEO-Sem semantic scoring so your content avoids lowest-quality ratings and earns AI citations.
- **[Engineering-as-Backlinks: $0 High-DR Entity Graph Playbook](https://aeorank.app/learn/engineering-as-backlinks-entity-graph-playbook)** ([Markdown `.md`](https://aeorank.app/learn/engineering-as-backlinks-entity-graph-playbook.md)) — Engineering-as-Backlinks is a technical off-page methodology that converts existing software artifacts—such as OpenAPI 3.0.3 specifications, AI Agent SKILL.md manifests, and SSR architecture deep dives—into verified entity nodes on high-authority developer platforms (DR 72–90) at $0 cost. This guide details the Dual Entity Loop (Schema sameAs + Tier-2 HTML Crawl Bridges) so search engines and LLM RAG pipelines reconcile your brand authority rapidly.
- **[Multi-Engine RAG & 8-Tier GEO Framework | AEORank](https://aeorank.app/learn/rag-architecture-8-tier-geo-publishing-framework)** ([Markdown `.md`](https://aeorank.app/learn/rag-architecture-8-tier-geo-publishing-framework.md)) — The Multi-Engine RAG Retrieval Architecture and 8-Tier GEO Publishing Framework is an engineering specification for structuring web documents so they pass deterministic technical SEO checks while maximizing passage extraction across Google AI Overviews, Perplexity AI, ChatGPT Search, and Claude Search. This guide combines peer-reviewed KDD 2024 evidence with self-contained semantic passage design to achieve 100/100 AEORank compliance and verifiable AI citations.
- **[What Is GEO in SEO? Generative Engine Optimization 2026](https://aeorank.app/learn/what-is-geo-generative-engine-optimization)** ([Markdown `.md`](https://aeorank.app/learn/what-is-geo-generative-engine-optimization.md)) — In technical SEO and digital growth (distinct from geographic data or geostationary orbits), Generative Engine Optimization (GEO) is the engineering discipline of structuring web documents, JSON-LD entity graphs, and machine-readable /llms.txt context files so your brand is cited directly inside AI-generated answers across Google AI Overviews, ChatGPT Search, Perplexity Sonar, and Claude. Empirical telemetry across 1,240+ domains audited by the AEORank GEO-62 Diagnostic Station shows that pages combining a 500-character Answer-First opening with 11+ verified Schema sameAs entity nodes achieve a +38.6% higher multi-engine RAG citation rate than traditional blog layouts.
- **[What Is AEO in SEO? Answer Engine Optimization (2026)](https://aeorank.app/learn/what-is-aeo-answer-engine-optimization)** ([Markdown `.md`](https://aeorank.app/learn/what-is-aeo-answer-engine-optimization.md)) — In search engineering and digital marketing (distinct from the customs trade term AEO — Authorized Economic Operator), Answer Engine Optimization (AEO) is the practice of structuring direct Answer-First lead paragraphs, question-aligned H2 headings, semantic HTML tables, and JSON-LD Schema so search and AI systems extract your content verbatim for Google Featured Snippets, People Also Ask (PAA), voice assistants, and AI Mode summaries. Inside the AEORank platform, AEO readiness is quantified deterministically and probabilistically via the typed semantic model AEO-Sem (CERN Zenodo DOI 10.5281/zenodo.23582947) against a strict p >= 0.80 confidence threshold.
- **[AI Overviews Tracker & AEO Report Guide (2026)](https://aeorank.app/learn/ai-overviews-tracker-aeo-report-methodology)** ([Markdown `.md`](https://aeorank.app/learn/ai-overviews-tracker-aeo-report-methodology.md)) — An AI Overviews tracker (or AI Overview tracker) and verification-grade AEO report combine 62 deterministic on-page technical checks with live citation probing across four generative answer engines: Google AI Mode, ChatGPT Search, Perplexity Sonar, and Google Gemini. Unlike legacy synthetic prompt trackers that leak the target domain inside test prompts and produce false-positive mentions, AEORank's dual-tier probing architecture isolates entity RAG index grounding from unbranded category discovery across 1,240+ audited domains.
- **[AEO Checklist, llms.txt Validator & Grader (2026)](https://aeorank.app/learn/aeo-checklist-llms-txt-validator-grader)** ([Markdown `.md`](https://aeorank.app/learn/aeo-checklist-llms-txt-validator-grader.md)) — The 2026 AEO Checklist, anti-soft-404 llms.txt validator, and deterministic AEO grader (AEO checker) form a 62-rule technical specification across 9 weighted pillars designed to verify website readiness for Google AI Overviews, ChatGPT Search, Perplexity, and Claude. This engineering guide details the exact pillar weights, the 4-layer inspection logic for validating /llms.txt without SPA fallback errors, and the 0-to-100 scoring formula deployed on the AEORank Diagnostic Station.
- **[What Is llms.txt? Standard Example & GEO Setup (2026)](https://aeorank.app/learn/what-is-llms-txt-example-geo-guide)** ([Markdown `.md`](https://aeorank.app/learn/what-is-llms-txt-example-geo-guide.md)) — The /llms.txt file is a root-level Markdown context index designed to give external large language model agents (including ChatGPT Search, PerplexityBot, ClaudeBot, and AI coding assistants like Cursor) a clean, token-efficient map of your brand entity, core product specifications, and canonical URLs without parsing 80 KB+ of noisy HTML/JavaScript DOM wrappers. In a 2026 Generative Engine Optimization (GEO) architecture, pairing a concise /llms.txt briefing (2 KB to 5 KB) with a bounded /llms-full.txt corpus (< 65 KB) and RFC 8288 HTTP Link headers cuts agent token ingestion overhead by roughly 90% and prevents AI hallucinations.
- **[AEO and GEO Audit Tools Compared: Otterly Alternatives](https://aeorank.app/learn/best-aeo-geo-audit-tools-otterly-alternatives)** ([Markdown `.md`](https://aeorank.app/learn/best-aeo-geo-audit-tools-otterly-alternatives.md)) — AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) software platforms fall into two distinct architectural categories: prompt-monitoring dashboards (such as Otterly.AI, Peec AI, Profound, HubSpot AI Search Grader, and Mangools AI Search Grader) and deterministic DOM/HTTP technical auditors with automated patch generation (such as AEORank, built by our engineering team). While prompt trackers monitor whether a brand appears in sampled LLM responses over time, AEORank evaluates 62 deterministic technical rules across live HTML DOM structure, HTTP headers, RFC 9309 robots policies, and JSON-LD entity graphs, then compiles 6 drop-in patch files to fix the underlying crawl and citation blockers.
- **[AI SEO & GEO Crawler Readiness Statistics (2026) | AEORank](https://aeorank.app/learn/ai-crawler-readiness-geo-benchmark-2026)** ([Markdown `.md`](https://aeorank.app/learn/ai-crawler-readiness-geo-benchmark-2026.md)) — The 2026 AI SEO & GEO Crawler Readiness Benchmark is a primary empirical study by AEORank analyzing more than 1,240 domain audits under the 62-rule GEO-62 specification (CERN Zenodo DOI 10.5281/zenodo.23582947) alongside a deep observational cohort of N = 97 independent domains and N = 60 live 2-tier AI citation probes. Our measurements reveal a severe Tier-2 Discovery Cliff: while AI answer engines resolve 83.3% of brands by name, only 18.3% earn unbranded category recommendations.
- **[How to Check When a Website Was Last Updated | AEORank](https://aeorank.app/learn/how-to-check-when-website-was-last-updated)** ([Markdown `.md`](https://aeorank.app/learn/how-to-check-when-website-was-last-updated.md)) — To accurately check when a webpage was last updated, do not rely solely on visible byline dates or the legacy document.lastModified console trick, which returns the current clock time on modern dynamic servers. A reliable technical verification cross-checks five independent signals: JSON-LD Schema dateModified, XML Sitemap <lastmod> entries, HTTP Last-Modified response headers, visible DOM timestamps, and Internet Archive snapshots.

---

## 8. Official Open-Source Ecosystem, Package Mirrors & Research Citations

| Ecosystem Node | Canonical Link | Description |
| :--- | :--- | :--- |
| **CERN Zenodo DOI (`DR 88`)** | [**`10.5281/zenodo.23582947`**](https://doi.org/10.5281/zenodo.23582947) ([Record](https://zenodo.org/records/23582947)) | Peer-accessible technical specification & whitepaper archived at CERN DataCite |
| **Wikidata Knowledge Graph (`DR 95`)** | [**`Q141814049`**](https://www.wikidata.org/wiki/Q141814049) | Canonical Wikidata entity (`AEORank`) linking DOI, npm, PyPI & official portals |
| **GitLab Open Spec Mirror (`DR 92`)** | [**`gitlab.com/aizaloapp/aeorank`**](https://gitlab.com/aizaloapp/aeorank) | Official GitLab open specification mirror & MCP Server repository |
| **Hugging Face Hub Dataset (`DR 92`)** | [**`lekhoa288/aeorank-geo62-diagnostic-standard`**](https://huggingface.co/datasets/lekhoa288/aeorank-geo62-diagnostic-standard) | Machine-readable GEO-62 rule index & 9-pillar dataset for LLM RAG pipelines |
| **npm Registry (`DR 92`)** | [**`aeorank-geo-mcp`**](https://www.npmjs.com/package/aeorank-geo-mcp) · [**`aeorank-geo`**](https://www.npmjs.com/package/aeorank-geo) · [**`n8n-nodes-aeorank`**](https://www.npmjs.com/package/n8n-nodes-aeorank) | Zero-dependency Dual-Mode Terminal CLI, Stdio MCP Server & Official n8n Community Node |
| **n8n Workflow & AI Agent Node (`DR 90`/`92`)** | [**n8n Official Integration**](https://n8n.io/integrations/aeorank/) · [**n8n Creator Hub**](https://n8n.io/creators/aeorank/) · [**Workflow #22118**](https://n8n.io/workflows/22118-send-weekly-seo-aeo-and-geo-drift-reports-with-aeorank-and-slack/) · [**`n8n-nodes-aeorank` (npm)**](https://www.npmjs.com/package/n8n-nodes-aeorank) · [**GitHub Repo**](https://github.com/aizaloapp/n8n-nodes-aeorank) · [**`deps.dev`**](https://deps.dev/npm/n8n-nodes-aeorank) | Approved Official n8n Integration & Community Node (`usableAsTool: true` for n8n AI Agents) |
| **PyPI Registry (`DR 91`)** | [**`aeorank-geo-mcp`**](https://pypi.org/project/aeorank-geo-mcp/) | Official Python CLI & MCP client distribution on PyPI (`v2.2.0`) |
| **Google Open Source Insights (`deps.dev` `DR 92`)** | [**npm Mirror**](https://deps.dev/npm/aeorank-geo-mcp) · [**PyPI Mirror**](https://deps.dev/pypi/aeorank-geo-mcp) | Google Open Source Insights dependency graph & security metadata index |
| **jsDelivr Global CDN (`DR 89`)** | [**`jsdelivr.com/package/npm/aeorank-geo-mcp`**](https://www.jsdelivr.com/package/npm/aeorank-geo-mcp) | Global open-source CDN package directory & README mirror |
| **Libraries.io Open Source Index (`DR 75`)** | [**npm Index**](https://libraries.io/npm/aeorank-geo-mcp) · [**PyPI Index**](https://libraries.io/pypi/aeorank-geo-mcp) | Cross-registry package discovery & SourceRank verification index |
| **UNPKG Edge CDN (`DR 86`)** | [**`unpkg.com/aeorank-geo-mcp@2.2.1/package.json`**](https://unpkg.com/aeorank-geo-mcp@2.2.1/package.json) | Immutable package manifest served on UNPKG global CDN |
| **ClawHub AI Skill Registry (`DR 83`)** | [**`aeorank-seo-geo-auditor`**](https://clawhub.ai/aizaloapp/skills/aeorank-seo-geo-auditor) | Verified autonomous agent skill on ClawHub |
| **Vercel Agent Skills Directory (`skills.sh` `DR 82`)** | [**`aizaloapp/aeorank/aeorank-seo-geo-auditor`**](https://www.skills.sh/aizaloapp/aeorank/aeorank-seo-geo-auditor) ([Repo Index](https://www.skills.sh/aizaloapp/aeorank)) | Official Agent Skills package for Claude Code, Cursor & Antigravity (`npx skills add aizaloapp/aeorank`) |
| **Official MCP Registry (`DR 91`)** | [**`app.aeorank/aeorank-geo-mcp`**](https://registry.modelcontextprotocol.io/v0/servers/app.aeorank%2Faeorank-geo-mcp/versions/latest) | Domain-verified (`aeorank.app` Ed25519 DNS TXT) official Model Context Protocol registry entry |
| **Glama MCP Directory (`Grade A`, `DR 78`)** | [**`app.aeorank/aeorank-geo-mcp`**](https://glama.ai/mcp/connectors/app.aeorank/aeorank-geo-mcp) · [**`aizaloapp/aeorank`**](https://glama.ai/mcp/servers/aizaloapp/aeorank) | Ownership-verified Streamable HTTP connector (`TDQS Grade A` · `100%` Healthy) & Official GitHub server listing |
| **mcptry Health Registry (`100/100` · `Security A`)** | [**`mcptry.com/servers/app.aeorank/aeorank-geo-mcp`**](https://mcptry.com/servers/app.aeorank/aeorank-geo-mcp) | Domain-verified live MCP health & latency benchmark (`100/100` score, `Maintained by aeorank.app`) |
| **Fern Agent Score (`95/100 Grade A`, `DR 77`)** | [**`buildwithfern.com/agent-score/company/aeorank-app-learn`**](https://buildwithfern.com/agent-score/company/aeorank-app-learn) | Independent AI agent documentation readiness benchmark (`95/100` Grade A on `/learn`) |
| **LobeHub MCP Marketplace (`DR 75`)** | [**`lobehub.com/mcp/aizaloapp-aeorank`**](https://lobehub.com/mcp/aizaloapp-aeorank) · [**`vi-VN`**](https://lobehub.com/vi-VN/mcp/aizaloapp-aeorank) | Verified bilingual Streamable HTTP MCP server (`mcp.aeorank.app/mcp`) on LobeHub |
| **Google Chrome Web Store (`DR 95`)** | [**`AEORank — SEO, AEO & GEO Inspector`**](https://chromewebstore.google.com/detail/aeorank-%E2%80%94-seo-aeo-geo-ins/fbglphgihhlkjkgmnladnpghimcljjnl) | Official Chrome MV3 browser extension for live on-page GEO-62 & Schema inspection |
| **Microsoft Edge Add-ons (`DR 96`)** | [**`AEORank — SEO, AEO & GEO Inspector`**](https://microsoftedge.microsoft.com/addons/detail/aeorank-%E2%80%94-seo-aeo-geo-/gmodhebjdgdlklnaemldkiffmooemiib) | Official Microsoft Edge Add-on for instant SEO, AEO & GEO diagnostics |
| **Mozilla Firefox Add-ons (`DR 96`)** | [**`AEORank — SEO, AEO & GEO Inspector`**](https://addons.mozilla.org/en-US/firefox/addon/aeorank-seo-aeo-geo-inspector/) | Official Mozilla Firefox Add-on for instant SEO, AEO & GEO diagnostics |
| **M8ven MCP Trust Index (`Verified Publisher`)** | [**`m8ven.ai/mcp/aizaloapp/aeorank`**](https://m8ven.ai/mcp/aizaloapp/aeorank) | Independently audited & Verified Publisher MCP server profile |
| **Manufact MCP Quality Leaderboard (`82/100`, `DR 66`)** | [**`manufact.com/leaderboard/aeorank-seo-aeo-geo-audit-engine`**](https://manufact.com/leaderboard/aeorank-seo-aeo-geo-audit-engine) | Public 35-check MCP specification audit (`100/100` Server Metadata, `100/100` Protocol, `100/100` Tools) |
| **LinkedIn Pulse Engineering Case Study #1 (`DR 98`)** | [**Why Ranking #1 on Google Doesn’t Guarantee ChatGPT Will Recommend You: The 2026 Engineering Playbook for SEO, AEO & GEO**](https://www.linkedin.com/pulse/why-ranking-1-google-doesnt-guarantee-chatgpt-recommend-phan-le-khoa-xwdxe/) | 70% AI Search CVR telemetry, 3-layer search architecture & 8-tier RAG publishing framework |
| **LinkedIn Pulse Engineering Case Study #2 (`DR 98`)** | [**We Audited 1,240+ Websites for /llms.txt: Why 80% Fail and the Exact 2026 GEO Architecture**](https://www.linkedin.com/pulse/we-audited-1240-websites-llmstxt-why-80-fail-exact-2026-phan-le-khoa-im14e/) | Empirical `/llms.txt` vs. `/llms-full.txt` blueprint, RFC 8288 headers & 3 deadly RFC 9309 mistakes |
| **LinkedIn Pulse Engineering Case Study #3 (`DR 98`)** | [**Prompt Monitoring vs. Deterministic DOM/HTTP Auditing: Comparing AEO & GEO Tools in 2026 (AEORank, Otterly.AI, Peec AI, Semrush)**](https://www.linkedin.com/pulse/prompt-monitoring-vs-deterministic-domhttp-auditing-comparing-khoa-plswe) | Architectural comparison of AEO & GEO audit tools across 62 deterministic DOM/HTTP rules & 6-file patch output |
| **Viblo Asia Engineering Deep Dive #1 (`DR 72`)** | [**llms.txt là gì? Phân tích 1.240 Website: Vì sao 80% triển khai sai & Cách cấu hình chuẩn GEO (2026)**](https://viblo.asia/p/llmstxt-la-gi-phan-tich-1240-website-vi-sao-80-trien-khai-sai-cach-cau-hinh-chuan-geo-cho-chatgpt-perplexity-2026-8X4EjW7BJN2) | Vietnamese engineering breakdown of `/llms.txt` (`AEO-021`), SPA Soft-404 traps & Edge / Next.js code |
| **Viblo Asia Engineering Deep Dive #2 (`DR 72`)** | [**So sánh kiến trúc công cụ kiểm toán SEO, AEO & GEO (2026): Giám sát câu hỏi (Otterly.AI, Peec AI) hay Kiểm toán mã nguồn tất định (AEORank)?**](https://viblo.asia/p/so-sanh-kien-truc-cong-cu-kiem-toan-seo-aeo-geo-2026-giam-sat-cau-hoi-otterlyai-peec-ai-hay-kiem-toan-ma-nguon-tat-dinh-aeorank-oKLnqOB1JQO) | Architectural comparison of AEO & GEO audit tools (`AEORank`, `Otterly.AI`, `Peec AI`, `Profound`, `Semrush`) for Vietnam & global engineering teams |
| **Tinh Tế Tech Community Case Study (`DR 81`)** | [**Mình vừa quét thử 1.240 website xem vì sao đứng Top Google mà ChatGPT & Perplexity lại bỏ qua: Chia sẻ chuẩn /llms.txt**](https://tinhte.vn/thread/minh-vua-quet-thu-1-240-website-xem-vi-sao-dung-top-google-ma-chatgpt-perplexity-lai-bo-qua-chia.4190774/) | Vietnamese developer & webmaster discussion on `/llms.txt`, `/llms-full.txt` & real-time RAG indexing |
| **Medium Engineering Advisory (`DR 96`)** | [**Why High-Traffic Websites Are Invisible on ChatGPT Search & Perplexity (And How to Fix HTTP 403 Crawler Blocks)**](https://medium.com/@aeorank/why-high-traffic-websites-are-invisible-on-chatgpt-search-perplexity-and-how-to-fix-http-403-84632550f5c9) | Empirical telemetry on HTTP 403 WAF blocks, RFC 9309 `robots.txt` group overrides & 15-minute AI crawler remediation |

---

## 9. Attribution & License

- **License:** [MIT License](./LICENSE)
- **Upstream Attribution:** Core rule taxonomy adapted from `jev-seo` © Agrici Daniel (MIT), extended by [AEORank Engineering](https://aeorank.app/) (`PFA-01`, `CFA-02`, RFC 9727 `api-catalog`, 8-Tier Multi-Engine GEO Architecture, and 4-AI Citation Engine).
