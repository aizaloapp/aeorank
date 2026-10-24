# AEORank GEO-62 Open Diagnostic Index & Edge API Specification

[![AEORank Score Badge](https://aeorank.app/api/v1/badge/aeorank.app.svg)](https://aeorank.app/)
[![Live Station](https://img.shields.io/badge/Live_Scanner-aeorank.app-10B981?style=flat-square)](https://aeorank.app/)
[![OpenAPI 3.0.3](https://img.shields.io/badge/OpenAPI-3.0.3-6366F1?style=flat-square)](https://aeorank.app/openapi.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](./LICENSE)

> 🌐 **Language:** **🇬🇧 English (Global)** | **[🇻🇳 Đọc bản Tiếng Việt (`README.vi.md`)](./README.vi.md)**  
> 📖 **GitHub Pages Documentation:** **[English Docs (`/aeorank/`)](https://aizaloapp.github.io/aeorank/)** | **[Tài liệu Tiếng Việt (`/aeorank/vi/`)](https://aizaloapp.github.io/aeorank/vi/)**

> **Official Public Rule Index, Starter Configuration Templates & REST API Specification for [AEORank (`aeorank.app`)](https://aeorank.app/)** — The Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) Diagnostic Station.

---

## 1. Overview & Why Use the AEORank Execution Engine?

**AEORank** evaluates websites across **9 core pillars** combining **62 deterministic technical checks** (`56` single-page rules + `6` multi-page Sitemap rules anchored in Google Search Central & RFC 9727) with **AEORank Semantic Engine (`AEO-Sem`)** typed probabilistic semantic judgments and **live 4-AI citation checks** (*Perplexity, Google AI Mode, ChatGPT, Google Gemini*).

### Self-Serve Diagnostic Tiers vs. DIY Agent Scraping
| Approach | Cost | Multi-Page Cannibalization & Orphan Detection | Live AI Citations + DataForSEO + SE Ranking Backlinks | Executive PDF + P1/P2/P3 Excel Action Plan + Drift Guard |
| :--- | :--- | :--- | :--- | :--- |
| **DIY with LLM Coding Agent** | **$15–$25** in LLM tokens + **$50+** API minimums | Prone to context window truncation across 3,100 checks | ❌ Requires separate paid API accounts | ❌ Raw console text |
| **[Single Deep Audit ($9 One-Time)](https://aeorank.app/pricing)** | **$9 USD** one-time | ✅ Full 50-page cross-sitemap graph inspection | ✅ Included (`Perplexity`, `AI Mode`, `ChatGPT`, `Gemini`) | ✅ 50-Page PDF + Formula-ready `.xlsx` |
| **[Weekly Drift Guard ($19/mo or $149/yr)](https://aeorank.app/pricing)** | **$19/mo** (2 domains) · **$149/yr** (3 domains) | ✅ Automated weekly background scans + On-demand rescans | ✅ Continuous AI citation & P1 regression alerts | ✅ [Multi-Domain Live Dashboard](https://aeorank.app/en/dashboard) |
| **AEORank v1 Edge API (`/api/v1/*`)** | From **$0** (Sandbox) / Pay-per-credit | ✅ Deterministic `< 2.5s` JSON response | ✅ Available on `/api/v1/audit/full` | ✅ JSON Schema v2 for CI/CD & Dashboards |

---

## 2. Normalized 9-Pillar Scoring Formula (`Base 115 → 100%`)

Each pillar starts at `100` points and is deducted deterministically by rule severity (`critical: -25`, `high: -12`, `medium: -6`, `low: -2`). For `content` and `ai`, when AEORank Semantic Engine (`AEO-Sem`) evaluation is active, the pillar score blends **70% AEO-Sem probabilistic judgment** + **30% deterministic rules**.

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

## 3. AEORank v1 REST API & Dynamic SVG Score Badge

### 3.1. Embed Your Opt-In Score Badge (`GET /api/v1/badge/{domain}.svg`)
Add your live AEORank score badge to your repository `README.md` or website footer:
```markdown
[![Verified by AEORank](https://aeorank.app/api/v1/badge/your-domain.com.svg)](https://aeorank.app/?domain=your-domain.com)
```

### 3.2. API Endpoints (`https://aeorank.app`)
1. **`GET /api/v1/rules?lang=en|vi`** — Fetch the public 62-rule index and normalized pillar weights (`$0`, public).
2. **`POST /api/v1/audit/sandbox`** — Zero-latency Cloud Sandbox response (`< 10ms`, `0 credits`, `Authorization: Bearer demo`).
3. **`POST /api/v1/audit/technical`** — Live 56-rule homepage + Sitemap + Entity Gap + `/llms.txt` generator (`1 credit`, `< 2.5s`).
4. **`POST /api/v1/audit/full`** — Full Technical + `AEO-Sem` Semantic + Live Perplexity & Google AI Mode citation check (`5 credits`, auto-refunds on connection error).

```bash
# Test immediately with the zero-cost Sandbox key:
curl -X POST "https://aeorank.app/api/v1/audit/sandbox" \
  -H "Authorization: Bearer demo" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://aeorank.app", "lang": "en"}'
```

---

## 4. Public Index of 62 Diagnostic Rules (`56 Single-Page + 6 Multi-Page`)

> *Note: To prevent automated threshold gaming and protect proprietary execution heuristics, this public index lists the canonical rule codes, categories, severities, and scopes referenced in AEORank reports.*

| Code | Rule ID | Pillar | Severity | Scope | Rule Description |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `AEO-001` | `robots_missing` | Crawlability & Indexing | `low` | `single_page` | Missing robots.txt file |
| `AEO-002` | `robots_blocks_site` | Crawlability & Indexing | `critical` | `single_page` | robots.txt blocks search crawlers across the site |
| `AEO-003` | `sitemap_missing` | Crawlability & Indexing | `medium` | `single_page` | XML sitemap not found |
| `AEO-004` | `sitemap_errors` | Crawlability & Indexing | `medium` | `single_page` | Sitemap is unreachable or contains malformed XML |
| `AEO-005` | `sitemap_bad_urls` | Crawlability & Indexing | `medium` | `multi_page_sitemap` | Sitemap contains redirecting, broken, or noindex URLs |
| `AEO-006` | `not_in_sitemap` | Crawlability & Indexing | `low` | `single_page` | Indexable pages missing from XML sitemap |
| `AEO-007` | `http_errors` | Crawlability & Indexing | `high` | `single_page` | Pages returning HTTP 4xx or 5xx errors |
| `AEO-008` | `broken_internal_links` | Links & Architecture | `high` | `single_page` | Internal links pointing to broken URLs |
| `AEO-009` | `redirect_chains` | Crawlability & Indexing | `medium` | `single_page` | Multi-hop redirect chains detected |
| `AEO-010` | `links_to_redirects` | Links & Architecture | `low` | `single_page` | Internal links pointing to redirecting URLs |
| `AEO-011` | `noindex` | Crawlability & Indexing | `high` | `single_page` | Pages excluded from search by noindex directive |
| `AEO-012` | `canonical_missing` | Crawlability & Indexing | `low` | `single_page` | Page missing rel=canonical tag |
| `AEO-013` | `canonical_elsewhere` | Crawlability & Indexing | `medium` | `single_page` | Canonical tag points to a different URL |
| `AEO-014` | `canonical_broken` | Crawlability & Indexing | `high` | `single_page` | Canonical target URL redirects or returns an error |
| `AEO-015` | `soft_404` | Crawlability & Indexing | `medium` | `single_page` | Non-existent URL returns HTTP 200 (Soft 404) |
| `AEO-016` | `host_temporary_redirect` | Crawlability & Indexing | `low` | `single_page` | Domain or HTTPS redirect uses temporary status (302/307) |
| `AEO-017` | `host_variant` | Crawlability & Indexing | `medium` | `single_page` | Both www and non-www host variants resolve independently |
| `AEO-018` | `no_https` | Security & Trust | `high` | `single_page` | Site does not enforce HTTPS or HTTP fails to redirect to HTTPS |
| `AEO-019` | `deep_pages` | Links & Architecture | `low` | `multi_page_sitemap` | Important pages buried more than 3 clicks from the homepage |
| `AEO-020` | `orphan_pages` | Links & Architecture | `medium` | `multi_page_sitemap` | Sitemap pages with zero incoming internal links (Orphan pages) |
| `AEO-021` | `js_dependent` | Crawlability & Indexing | `medium` | `single_page` | Primary content requires client-side JavaScript rendering |
| `AEO-022` | `title_missing` | On-Page SEO | `high` | `single_page` | Page is missing a <title> tag |
| `AEO-023` | `title_duplicate` | On-Page SEO | `medium` | `multi_page_sitemap` | Duplicate <title> tags across multiple pages |
| `AEO-024` | `title_length` | On-Page SEO | `low` | `single_page` | <title> tag is too short or too long |
| `AEO-025` | `multiple_titles` | On-Page SEO | `low` | `single_page` | Multiple <title> tags found on the same page |
| `AEO-026` | `meta_missing` | On-Page SEO | `medium` | `single_page` | Page is missing a meta description |
| `AEO-027` | `meta_duplicate` | On-Page SEO | `low` | `multi_page_sitemap` | Duplicate meta descriptions across multiple pages |
| `AEO-028` | `meta_length` | On-Page SEO | `low` | `single_page` | Meta description is too short or too long |
| `AEO-029` | `h1_missing` | On-Page SEO | `medium` | `single_page` | Page is missing a primary H1 heading |
| `AEO-030` | `h1_multiple` | On-Page SEO | `low` | `single_page` | Page contains multiple H1 headings |
| `AEO-031` | `heading_skips` | On-Page SEO | `low` | `single_page` | Heading hierarchy skips levels (e.g. H1 directly to H3) |
| `AEO-032` | `lang_missing` | On-Page SEO | `low` | `single_page` | Missing HTML lang attribute on <html> |
| `AEO-033` | `viewport_missing` | On-Page SEO | `high` | `single_page` | Missing mobile meta viewport tag |
| `AEO-034` | `thin_content` | Content Quality | `medium` | `single_page` | Page has very thin body content |
| `AEO-035` | `duplicate_content` | Content Quality | `medium` | `multi_page_sitemap` | Pages with near-identical main body text |
| `AEO-036` | `images_alt` | On-Page SEO | `medium` | `single_page` | Images missing descriptive alt text |
| `AEO-037` | `images_dimensions` | Performance & Speed | `low` | `single_page` | Images missing explicit width and height attributes |
| `AEO-038` | `lcp_image_lazy` | Performance & Speed | `low` | `single_page` | Above-the-fold hero image uses loading="lazy" |
| `AEO-039` | `no_structured_data` | Structured Data & Social | `medium` | `single_page` | Homepage has no JSON-LD structured data |
| `AEO-040` | `jsonld_errors` | Structured Data & Social | `high` | `single_page` | Invalid JSON-LD syntax that cannot be parsed |
| `AEO-041` | `schema_required` | Structured Data & Social | `low` | `single_page` | Structured data is missing required Rich Result properties |
| `AEO-042` | `schema_website_missing` | Structured Data & Social | `low` | `single_page` | Homepage missing WebSite schema or Site Name |
| `AEO-043` | `faq_rich_result_limited` | Structured Data & Social | `info` | `single_page` | FAQPage schema note: Google restricts FAQ Rich Results to gov/health sites |
| `AEO-044` | `og_missing` | Structured Data & Social | `low` | `single_page` | Missing Open Graph tags (og:title or og:image) |
| `AEO-045` | `hreflang_issues` | Structured Data & Social | `medium` | `single_page` | Incomplete or non-reciprocal hreflang annotations |
| `AEO-046` | `ai_bots_blocked` | AI Search & GEO Readiness | `info` | `single_page` | AI search crawlers are blocked in robots.txt |
| `AEO-047` | `llms_txt_missing` | AI Search & GEO Readiness | `info` | `single_page` | No /llms.txt context file found at the root |
| `AEO-048` | `llms_txt_no_links` | AI Search & GEO Readiness | `info` | `single_page` | /llms.txt contains no Markdown links to core pages |
| `AEO-049` | `api_catalog_invalid_mime` | AI Search & GEO Readiness | `info` | `single_page` | /.well-known/api-catalog does not return application/linkset+json |
| `AEO-050` | `schema_sameas_missing` | AI Search & GEO Readiness | `low` | `single_page` | Primary entity schema is missing external sameAs verification links |
| `AEO-051` | `entity_name_inconsistent` | AI Search & GEO Readiness | `low` | `single_page` | Brand entity name is inconsistent across Schema, Open Graph, and <title> |
| `AEO-052` | `thin_sections_for_ai` | AI Search & GEO Readiness | `info` | `single_page` | Sub-sections (H2/H3) are too brief for standalone AI passage citation |
| `AEO-053` | `hsts_missing` | Security & Trust | `low` | `single_page` | Missing Strict-Transport-Security (HSTS) header |
| `AEO-054` | `security_headers` | Security & Trust | `low` | `single_page` | Missing baseline HTTP security headers |
| `AEO-055` | `mixed_content` | Security & Trust | `high` | `single_page` | HTTPS page loads insecure HTTP subresources (Mixed Content) |
| `AEO-056` | `favicon_missing` | Security & Trust | `low` | `single_page` | Missing favicon declaration on homepage |
| `AEO-057` | `slow_ttfb` | Performance & Speed | `medium` | `single_page` | Slow server Time to First Byte (TTFB > 800ms) |
| `AEO-058` | `heavy_html` | Performance & Speed | `low` | `single_page` | HTML document payload exceeds 500 KB |
| `AEO-059` | `generic_anchors` | Links & Architecture | `low` | `single_page` | Internal links use non-descriptive anchor text ('click here', 'read more') |
| `AEO-060` | `broken_external_links` | Links & Architecture | `low` | `single_page` | Outbound external links return HTTP errors |
| `PFA-01` | `protected_field_year_conflict` | On-Page SEO | `medium` | `single_page` | Stale year in <title> or H1 conflicts with newer year in body content |
| `CFA-02` | `sitemap_uniform_lastmod` | Crawlability & Indexing | `low` | `single_page` | All sitemap URLs share an identical <lastmod> timestamp |

---

## 5. Official Engineering Playbooks & Research Library ([Open Knowledge Hub](https://aeorank.app/learn))

- **[SEO vs. AEO vs. GEO (2026): Complete Architecture & Roadmap](https://aeorank.app/learn/seo-aeo-geo-differences-roadmap-2026)** ([Markdown `.md`](https://aeorank.app/learn/seo-aeo-geo-differences-roadmap-2026.md)) — The 2026 SEO, AEO, and GEO Architecture Map is a unified engineering framework for ranking in traditional Google search results while earning brand citations inside generative AI engines (ChatGPT, Perplexity, Gemini, and Google AI Overviews). This guide provides a 3-layer technical comparison matrix and implementation checklist so engineering and content teams can protect organic traffic and capture AI recommendations simultaneously.
- **[Protected-Field Audit: Fixing Title & Body Year Conflicts](https://aeorank.app/learn/protected-field-audit-title-body-year-conflict)** ([Markdown `.md`](https://aeorank.app/learn/protected-field-audit-title-body-year-conflict.md)) — A Protected-Field Audit (rule PFA-01 in the 62-rule AEORank engine) is a deterministic verification workflow that detects year and numeric contradictions between four locked metadata fields (<title>, H1, meta description, and FAQ headings) and updated body text. This guide provides the 4-point synchronization checklist to prevent Google from forcibly rewriting your SERP titles and to protect semantic trust scores in AI retrieval pipelines.
- **[Fake Freshness & The Uniform Sitemap Lastmod Trap (CFA-02)](https://aeorank.app/learn/fake-freshness-uniform-sitemap-lastmod-trap)** ([Markdown `.md`](https://aeorank.app/learn/fake-freshness-uniform-sitemap-lastmod-trap.md)) — The Fake Freshness and Uniform Sitemap Lastmod Trap (rule CFA-02) occurs when CMS plugins or CI/CD build scripts overwrite the <lastmod> timestamp of every URL in sitemap.xml with today's date despite zero substantive content changes. This guide explains Google Search Central's timestamp verification rules and shows how to pair honest Sitemap signaling with non-commodity content upgrades.
- **[Diagnosing CTR Drops: Google AI Overviews vs. Competitors](https://aeorank.app/learn/diagnosing-ctr-drop-ai-overviews-vs-competitors)** ([Markdown `.md`](https://aeorank.app/learn/diagnosing-ctr-drop-ai-overviews-vs-competitors.md)) — Organic CTR Drop Triage is a 4-signal diagnostic method using Google Search Console and live SERP inspection to determine whether falling click-through rates are caused by Google AI Overviews answering queries zero-click or by competitors outperforming your snippet. This guide provides the decision matrix to stop teams from blindly rewriting winning Top-3 title tags and shift toward AEO/GEO source citation.
- **[Scientific SEO Testing: Control Groups & GSC Data Noise](https://aeorank.app/learn/scientific-seo-testing-control-groups-gsc)** ([Markdown `.md`](https://aeorank.app/learn/scientific-seo-testing-control-groups-gsc.md)) — Controlled SEO Experimentation (5 Pilot pages paired with 5 untouched Control pages) is a scientific measurement protocol that isolates the true causal impact of technical or editorial changes from seasonality and algorithm volatility. This guide details the 14-day recrawl burn-in window, the 4-to-6-week evaluation freeze, and how to navigate Google Search Console's 2025–2026 Impression logging changes.
- **[SEO & GEO Strategy by 3 Website Growth Stages (2026 Matrix)](https://aeorank.app/learn/seo-geo-strategy-by-3-website-growth-stages)** ([Markdown `.md`](https://aeorank.app/learn/seo-geo-strategy-by-3-website-growth-stages.md)) — Stage-Aware SEO & GEO Strategy is an engineering resource allocation framework that classifies websites into three distinct lifecycle tiers based on valid Sitemap URL count and estimated search traffic: Early Stage (< 30 URLs), Growth Stage (30–300 URLs), and Mature Stage (> 300 URLs). This guide provides the prioritization matrix and anti-waste guardrails so teams solve their exact current bottleneck and save 70% of wasted effort.
- **[Google AI Content Rules & The 5-Step Information Gain Guide](https://aeorank.app/learn/google-ai-content-information-gain-playbook)** ([Markdown `.md`](https://aeorank.app/learn/google-ai-content-information-gain-playbook.md)) — Information Gain is the measurable degree to which an article contributes new empirical evidence, verified sample data, and decision-making answers that the current Top 10 ranking pages left out. This guide distills Google Search Central's generative AI content rules and provides a 5-step practitioner playbook paired with AEO-Sem semantic scoring so your content avoids lowest-quality ratings and earns AI citations.
- **[Engineering-as-Backlinks: $0 High-DR Entity Graph Playbook](https://aeorank.app/learn/engineering-as-backlinks-entity-graph-playbook)** ([Markdown `.md`](https://aeorank.app/learn/engineering-as-backlinks-entity-graph-playbook.md)) — Engineering-as-Backlinks is a technical off-page methodology that converts existing software artifacts—such as OpenAPI 3.0.3 specifications, AI Agent SKILL.md manifests, and SSR architecture deep dives—into verified entity nodes on high-authority developer platforms (DR 72–90) at $0 cost. This guide details the Dual Entity Loop (Schema sameAs + Tier-2 HTML Crawl Bridges) so search engines and LLM RAG pipelines reconcile your brand authority rapidly.
- **[Multi-Engine RAG Architecture & 8-Tier GEO Framework | AEORank](https://aeorank.app/learn/rag-architecture-8-tier-geo-publishing-framework)** ([Markdown `.md`](https://aeorank.app/learn/rag-architecture-8-tier-geo-publishing-framework.md)) — The Multi-Engine RAG Retrieval Architecture and 8-Tier GEO Publishing Framework is an engineering specification for structuring web documents so they pass deterministic technical SEO checks while maximizing passage extraction across Google AI Overviews, Perplexity AI, ChatGPT Search, and Claude Search. This guide combines peer-reviewed KDD 2024 evidence with self-contained semantic passage design to achieve 100/100 AEORank compliance and verifiable AI citations.

---

## 6. Official Open-Source Ecosystem, Package Mirrors & Research Citations

| Ecosystem Node | Canonical Link | Description |
| :--- | :--- | :--- |
| **CERN Zenodo DOI (`DR 88`)** | [**`10.5281/zenodo.23582947`**](https://doi.org/10.5281/zenodo.23582947) ([Record](https://zenodo.org/records/23582947)) | Peer-accessible technical specification & whitepaper archived at CERN DataCite |
| **Wikidata Knowledge Graph (`DR 95`)** | [**`Q141814049`**](https://www.wikidata.org/wiki/Q141814049) | Canonical Wikidata entity (`AEORank`) linking DOI, npm, PyPI & official portals |
| **Hugging Face Hub Dataset (`DR 92`)** | [**`lekhoa288/aeorank-geo62-diagnostic-standard`**](https://huggingface.co/datasets/lekhoa288/aeorank-geo62-diagnostic-standard) | Machine-readable GEO-62 rule index & 9-pillar dataset for LLM RAG pipelines |
| **npm Registry (`DR 92`)** | [**`aeorank-geo-mcp`**](https://www.npmjs.com/package/aeorank-geo-mcp) | Zero-dependency CLI & Model Context Protocol (MCP) package for Node.js |
| **PyPI Registry (`DR 91`)** | [**`aeorank-geo-mcp`**](https://pypi.org/project/aeorank-geo-mcp/) | Official Python CLI & MCP client distribution on PyPI |
| **Google Open Source Insights (`deps.dev` `DR 92`)** | [**npm Mirror**](https://deps.dev/npm/aeorank-geo-mcp) · [**PyPI Mirror**](https://deps.dev/pypi/aeorank-geo-mcp) | Google Open Source Insights dependency graph & security metadata index |
| **jsDelivr Global CDN (`DR 89`)** | [**`jsdelivr.com/package/npm/aeorank-geo-mcp`**](https://www.jsdelivr.com/package/npm/aeorank-geo-mcp) | Global open-source CDN package directory & README mirror |
| **Libraries.io Open Source Index (`DR 75`)** | [**npm Index**](https://libraries.io/npm/aeorank-geo-mcp) · [**PyPI Index**](https://libraries.io/pypi/aeorank-geo-mcp) | Cross-registry package discovery & SourceRank verification index |
| **UNPKG Edge CDN (`DR 86`)** | [**`unpkg.com/aeorank-geo-mcp@2.1.0/package.json`**](https://unpkg.com/aeorank-geo-mcp@2.1.0/package.json) | Immutable package manifest served on UNPKG global CDN |
| **ClawHub AI Skill Registry (`DR 83`)** | [**`aeorank-seo-geo-auditor`**](https://clawhub.ai/aizaloapp/skills/aeorank-seo-geo-auditor) | Verified autonomous agent skill on ClawHub |
| **DEV.to Engineering Deep Dive (`DR 86`)** | [**GEO-62: An Open Diagnostic Standard for Technical SEO, AEO & GEO**](https://dev.to/aizaloapp/geo-62-an-open-diagnostic-standard-for-technical-seo-aeo-generative-engine-optimization-rfc-2chk) | Technical architecture breakdown of RFC 9727, `PFA-01`, `CFA-02` & 9-pillar scoring |

---

## 7. Attribution & License

- **License:** [MIT License](./LICENSE)
- **Upstream Attribution:** Core rule taxonomy adapted from `jev-seo` © Agrici Daniel (MIT), extended by [AEORank Engineering](https://aeorank.app/) (`PFA-01`, `CFA-02`, RFC 9727 `api-catalog`, 8-Tier Multi-Engine GEO Architecture, and 4-AI Citation Engine).
