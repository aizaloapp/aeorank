# Bộ Tiêu Chuẩn Kiểm Toán Mở AEORank GEO-62, Ngữ Nghĩa AEO-Sem & Đặc Tả API v1

[![AEORank Score Badge](https://aeorank.app/api/v1/badge/aeorank.app.svg)](https://aeorank.app/vi)
[![M8ven Score](https://m8ven.ai/badge/mcp/aizaloapp-aeorank-1xqjbq?v=172201fa2cfa751f7e7967d26ca744b5)](https://m8ven.ai/mcp/aizaloapp-aeorank-1xqjbq?s=readme)
[![Trạm Kiểm Toán Trực Tuyến](https://img.shields.io/badge/Trạm_Kiểm_Toán-aeorank.app/vi-10B981?style=flat-square)](https://aeorank.app/vi)
[![OpenAPI 3.0.3](https://img.shields.io/badge/OpenAPI-3.0.3-6366F1?style=flat-square)](https://aeorank.app/openapi.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](./LICENSE)

> 🌐 **Ngôn ngữ:** **[🇬🇧 English (`README.md`)](./README.md)** | **🇻🇳 Tiếng Việt**  
> 📖 **Tài liệu GitHub Pages:** **[Tài liệu Tiếng Việt (`/aeorank/vi/`)](https://aizaloapp.github.io/aeorank/vi/)** | **[English Docs (`/aeorank/`)](https://aizaloapp.github.io/aeorank/)**

> **Danh Mục `62` Chỉ Số Kỹ Thuật Công Khai + `14` Chỉ Số Ngữ Nghĩa `AEO-Sem` + `6` Tín Hiệu Agentic Web, Mẫu Cấu Hình Chuẩn & Đặc Tả REST/MCP API của [AEORank Vietnam (`aeorank.app/vi`)](https://aeorank.app/vi)** — Hệ thống Kiểm toán Kỹ thuật SEO Google, Tối ưu Hóa Công cụ Trả lời (AEO) và Tối ưu Hóa Tìm kiếm AI Tạo sinh (GEO).

---

## 1. Tổng Quan & Vì Sao Nên Dùng Động Cơ Kiểm Toán AEORank?

**AEORank** đánh giá website toàn diện trên **9 trụ cột kỹ thuật**, kết hợp **`62` quy tắc kiểm tra tất định** (`56` quy tắc cấp trang + `6` quy tắc cấp toàn Sitemap bám sát Google Search Central & RFC 9727) cùng **`14` chỉ số thẩm định ngữ nghĩa `AEO-Sem`** (tổng hợp từ `18` tín hiệu phân loại ngữ nghĩa), **`6` tín hiệu sẵn sàng cho Tác nhân AI (Agentic Web)** và **kiểm tra trích dẫn thực tế trên 4 AI** (*Perplexity, Google AI Mode, ChatGPT, Google Gemini*).

### Bảng Đối Chiếu Giải Pháp Tự Phục Vụ AEORank vs. Tự Quét Bằng LLM Agent
| Phương Pháp | Chi Phí | Phát Hiện Ăn Thịt Từ Khóa & Trang Mồ Côi Toàn Sitemap | Kiểm Tra Trích Dẫn 4-AI + Đồ Thị Từ Khóa & Backlink | Báo Cáo PDF Điều Hành + Bảng Tính Excel P1/P2/P3 + Giám Sát Tự Động |
| :--- | :--- | :--- | :--- | :--- |
| **Tự viết script bằng LLM Agent** | **$15–$25** tiền token LLM + **$50+** phí thuê bao API | Dễ bị tràn bộ nhớ ngữ cảnh khi đối chiếu 3.100 điểm kiểm tra | ❌ Phải tự mua tài khoản API riêng lẻ | ❌ Chỉ xuất văn bản thô trên màn hình |
| **[Kiểm Toán Chuyên Sâu 50 URL (`229.000đ` / lần)](https://aeorank.app/dich-vu)** | **`229.000đ`** (`~$9 USD` — trả 1 lần) | ✅ Quét đồ thị liên kết xuyên suốt tối đa 50 URL Sitemap | ✅ Tích hợp sẵn (`Perplexity`, `AI Mode`, `ChatGPT`, `Gemini`) | ✅ Báo cáo PDF 15+ trang (50 URL) + File `.xlsx` dựng sẵn công thức |
| **[Giám Sát Độ Trôi Hàng Tuần (`490.000đ/tháng` · `3.790.000đ/năm`)](https://aeorank.app/dich-vu)** | **`490.000đ/tháng`** (2 domain) · **`3.790.000đ/năm`** (3 domain) | ✅ Tự động quét ngầm hàng tuần + Quét lại tức thì (On-demand) | ✅ Cảnh báo sớm khi tụt điểm hoặc phát sinh lỗi `P1` mới | ✅ [Bảng Điều Khiển Đa Tên Miền](https://aeorank.app/dashboard) |
| **AEORank v1 Edge API & Cổng `/mcp`** | Từ **$0** (Sandbox / MCP) / Trả theo credit | ✅ Phản hồi JSON tất định `< 2.5s` | ✅ Hỗ trợ trên cổng `/api/v1/audit/full` | ✅ Chuẩn JSON Schema v2 tích hợp CI/CD |

---

## 2. Công Thức Chấm Điểm 9 Trụ Cột Chuẩn Hóa (`Tổng Trọng Số 115 → 100%`) & Mô Hình Khấu Trừ

Mỗi trụ cột bắt đầu từ `100` điểm và trừ điểm tất định theo mức độ nghiêm trọng của lỗi (`critical: -25`, `high: -12`, `medium: -6`, `low: -2`, `info: 0`) nhân với hệ số độ phủ trang ảnh hưởng (`deduction = max_deduction * (0.5 + 0.5 * reach)`, trong đó `reach = 1.0` đối với lỗi cấp toàn trang).
- **Chất lượng Nội dung (`content`) & Sẵn sàng cho Tìm kiếm AI (`ai`):** Kết hợp **70% điểm thẩm định ngữ nghĩa `AEO-Sem`** + **30% quy tắc kỹ thuật tất định**.
- **Hiệu năng & Tốc độ (`performance`):** Kết hợp **50% điểm Lighthouse Mobile (PageSpeed Insights)** + **50% quy tắc kỹ thuật**.

$$\text{Điểm Tổng Thể} = \text{round}\left(\frac{\sum_{i=1}^{9} \text{Score}_i \times w_i}{115}\right)$$

| Mã Trụ Cột | Tên Trụ Cột Đánh Giá (Tiếng Việt) | Trọng Số Thô ($w_i$) | Tỷ Trọng Chuẩn Hóa (%) |
| :--- | :--- | :---: | :---: |
| `crawl` | **Thu thập & Lập chỉ mục** | `20` | **17.39%** |
| `onpage` | **Tối ưu On-page** | `15` | **13.04%** |
| `content` | **Chất lượng Nội dung** | `20` | **17.39%** |
| `links` | **Liên kết & Kiến trúc** | `10` | **8.7%** |
| `structured` | **Dữ liệu cấu trúc & Chia sẻ** | `8` | **6.96%** |
| `ai` | **Sẵn sàng cho Tìm kiếm AI (GEO)** | `12` | **10.43%** |
| `performance` | **Hiệu năng & Tốc độ** | `10` | **8.7%** |
| `security` | **Bảo mật & Tín nhiệm** | `5` | **4.35%** |
| `visibility` | **Độ phủ Tìm kiếm & Uy tín** | `15` | **13.04%** |
| **Tổng Cộng** | **9 Trụ Cột Kiểm Toán** | **`115`** | **`100.0%`** |

---

## 3. Dòng Lệnh Terminal (`npx -y aeorank-geo`), Cổng Remote MCP (`https://aeorank.app/mcp`) & REST API v1

### 3.0. Chạy Trực Tiếp Từ Terminal — CLI & Cổng CI/CD Không Cần Khóa (`Node.js >= 18`, 0 Thư Viện Phụ Thuộc)
Một gói npm duy nhất (`aeorank-geo` / `aeorank-geo-mcp`) hoạt động đồng thời như CLI kiểm toán trên Terminal và máy chủ Stdio MCP cục bộ:
```bash
# 1. Chạy kiểm toán trực tiếp 62 quy tắc + Ngữ nghĩa AEO-Sem (1 dòng lệnh, không cần API key):
npx -y aeorank-geo audit https://example.com

# 2. Xem lại báo cáo đã lưu (Markdown hoặc --json) không tốn thêm lượt quét:
npx -y aeorank-geo report

# 3. Xuất chỉ thị sửa lỗi cho AI Coding Agent + Gói bản vá 5-Tab:
npx -y aeorank-geo fix

# 4. Lấy liên kết chia sẻ báo cáo trên trình duyệt:
npx -y aeorank-geo share

# 5. So sánh 2 bản chụp trước/sau & khóa điểm sàn CI/CD (trả về mã lỗi 1 nếu tụt điểm):
npx -y aeorank-geo compare before.json after.json --min-score 80

# 6. Tra cứu ngoại tuyến bất kỳ quy tắc GEO-62, chỉ số AEO-Sem hoặc tín hiệu Agentic Web:
npx -y aeorank-geo rules PFA-01
```

### 3.1. Kết Nối Trực Tiếp Trợ Lý Lập Trình AI Qua Remote MCP (`0đ`, Streamable HTTP JSON-RPC 2.0)
Gắn trực tiếp đường dẫn `https://aeorank.app/mcp` vào **Cursor**, **Windsurf** hoặc **Claude Desktop** để sử dụng ngay 4 công cụ chính thức:
- **`lookup_rule`** — Tra cứu chi tiết bất kỳ chỉ số nào trong bộ `62` quy tắc `GEO-62`, `14` chỉ số ngữ nghĩa `AEO-Sem` và `6` tín hiệu Agentic Web.
- **`list_entity_sources`** — Truy xuất danh mục các nền tảng Thực thể & Học thuật (`DR 70–98`, `$0`) phục vụ đồng bộ Đồ thị Tri thức `sameAs`.
- **`search_knowledge_playbooks`** — Tìm kiếm chuyên đề kỹ thuật trong Trung Tâm Tri Thức Mở (`/tri-thuc` & `/learn`).
- **`run_sandbox_audit`** — Chạy kiểm thử chẩn đoán mẫu tức thì (`0 credit`).

```json
// Cấu hình cho Cursor (~/.cursor/mcp.json):
{
  "mcpServers": {
    "aeorank": { "url": "https://aeorank.app/mcp" }
  }
}

// Cấu hình cho Windsurf (~/.codeium/windsurf/mcp_config.json):
{
  "mcpServers": {
    "aeorank": { "serverUrl": "https://aeorank.app/mcp" }
  }
}

// Cấu hình cho Claude Desktop (claude_desktop_config.json):
{
  "mcpServers": {
    "aeorank": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://aeorank.app/mcp"]
    }
  }
}
```

### 3.2. Nhúng Huy Hiệu Điểm Số Trực Tiếp (`GET /api/v1/badge/{domain}.svg`)
Dán mã Markdown dưới đây vào `README.md` hoặc chân trang website để hiển thị điểm số chuẩn GEO-62 theo thời gian thực:
```markdown
[![Verified by AEORank](https://aeorank.app/api/v1/badge/ten-mien-cua-ban.vn.svg)](https://aeorank.app/vi?domain=ten-mien-cua-ban.vn)
```

### 3.3. Các Điểm Cuối REST API (`https://aeorank.app`)
1. **`GET /api/v1/rules?lang=vi`** — Truy xuất danh mục `62` quy tắc kỹ thuật, `14` chỉ số ngữ nghĩa `AEO-Sem`, `6` tín hiệu Agentic Web và bảng trọng số Tiếng Việt (`$0`, công khai).
2. **`POST /api/v1/audit/sandbox`** — Kiểm thử nhanh môi trường Cloud Sandbox (`< 10ms`, `0 credit`, `Authorization: Bearer demo`).
3. **`POST /api/v1/audit/technical`** — Kiểm toán trực tiếp `56` quy tắc trang chủ + Sitemap + Khoảng trống Thực thể `sameAs` + Sinh bản nháp `/llms.txt` (`1 credit`, `< 2.5s`).
4. **`POST /api/v1/audit/full`** — Kiểm toán toàn diện Kỹ thuật + Ngữ nghĩa `AEO-Sem` + Kiểm tra trích dẫn trực tiếp trên Perplexity & Google AI Mode (`5 credits`, tự động hoàn credit nếu máy chủ đích lỗi kết nối).

```bash
# Kiểm thử miễn phí ngay lập tức với khóa Sandbox:
curl -X POST "https://aeorank.app/api/v1/audit/sandbox" \
  -H "Authorization: Bearer demo" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://aeorank.app/vi", "lang": "vi"}'
```

---

## 4. Danh Mục `62` Chỉ Số Kiểm Toán Kỹ Thuật (`56` Cấp Trang + `6` Cấp Toàn Sitemap)

> **Phân loại phạm vi & căn cứ:**
> - **`single_page` (`56` chỉ số):** Kiểm tra trực tiếp trên trang chủ trong lượt quét 15 giây và trên từng URL trong gói Kiểm toán Chuyên sâu 50 URL.
> - **`multi_page_sitemap` (`6` chỉ số):** Kiểm tra chéo trên đồ thị Sitemap toàn trang (`AEO-005` (`sitemap_bad_urls`), `AEO-019` (`deep_pages`), `AEO-020` (`orphan_pages`), `AEO-023` (`title_duplicate`), `AEO-027` (`meta_duplicate`), `AEO-035` (`duplicate_content`)).
> - **Căn cứ (`Basis`):** Phân định rõ giữa **Chuẩn tài liệu** (*Google Search Central, IETF RFC, W3C/WHATWG, MDN, OWASP*) và **Quy ước biên tập** (*ngưỡng thực hành tốt về độ dài ký tự, độ sâu nhấp chuột...*).

| Mã Chỉ Số | Định Danh Kỹ Thuật | Trụ Cột | Mức Độ | Phạm Vi | Căn Cứ | Mô Tả Quy Tắc & Chuẩn Tham Chiếu |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `AEO-001` | `robots_missing` | Thu thập & Lập chỉ mục | `low` | `single_page` | Chuẩn tài liệu | Thiếu tệp robots.txt ([`robots`](https://developers.google.com/search/docs/crawling-indexing/robots/intro)) |
| `AEO-002` | `robots_blocks_site` | Thu thập & Lập chỉ mục | `critical` | `single_page` | Chuẩn tài liệu | robots.txt chặn bot tìm kiếm trên toàn trang ([`robots`](https://developers.google.com/search/docs/crawling-indexing/robots/intro)) |
| `AEO-003` | `sitemap_missing` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Không tìm thấy XML sitemap ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-004` | `sitemap_errors` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Tệp Sitemap không truy cập được hoặc lỗi định dạng ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-005` | `sitemap_bad_urls` | Thu thập & Lập chỉ mục | `medium` | `multi_page_sitemap` | Chuẩn tài liệu | Sitemap chứa URL bị chuyển hướng, lỗi hoặc gắn noindex ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-006` | `not_in_sitemap` | Thu thập & Lập chỉ mục | `low` | `single_page` | Chuẩn tài liệu | Trang cho phép lập chỉ mục nhưng thiếu trong Sitemap ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |
| `AEO-007` | `http_errors` | Thu thập & Lập chỉ mục | `high` | `single_page` | Chuẩn tài liệu | Các trang trả về lỗi HTTP (4xx/5xx) ([`http`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-008` | `broken_internal_links` | Liên kết & Kiến trúc | `high` | `single_page` | Chuẩn tài liệu | Liên kết nội bộ trỏ tới URL bị hỏng ([`broken`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-009` | `redirect_chains` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Chuỗi chuyển hướng nhiều chặng (Redirect chains) ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-010` | `links_to_redirects` | Liên kết & Kiến trúc | `low` | `single_page` | Chuẩn tài liệu | Liên kết nội bộ đi qua URL trung gian chuyển hướng ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-011` | `noindex` | Thu thập & Lập chỉ mục | `high` | `single_page` | Chuẩn tài liệu | Các trang bị loại khỏi kết quả tìm kiếm bởi thẻ noindex ([`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing)) |
| `AEO-012` | `canonical_missing` | Thu thập & Lập chỉ mục | `low` | `single_page` | Chuẩn tài liệu | Trang thiếu thẻ liên kết chuẩn (rel=canonical) ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-013` | `canonical_elsewhere` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Thẻ Canonical trỏ sang một URL khác ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-014` | `canonical_broken` | Thu thập & Lập chỉ mục | `high` | `single_page` | Chuẩn tài liệu | URL đích trong thẻ Canonical bị chuyển hướng hoặc báo lỗi ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-015` | `soft_404` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Trang không tồn tại nhưng vẫn trả về HTTP 200 (Soft 404) ([`soft404`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `AEO-016` | `host_temporary_redirect` | Thu thập & Lập chỉ mục | `low` | `single_page` | Chuẩn tài liệu | Chuyển hướng tên miền hoặc HTTPS đang dùng mã tạm thời (302/307) ([`redirects`](https://developers.google.com/search/docs/crawling-indexing/301-redirects)) |
| `AEO-017` | `host_variant` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Cả hai bản www và non-www đều đang chạy độc lập ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-018` | `no_https` | Bảo mật & Tín nhiệm | `high` | `single_page` | Chuẩn tài liệu | Website chưa chạy HTTPS hoặc HTTP không tự chuyển hướng sang HTTPS ([`https`](https://developers.google.com/search/docs/appearance/page-experience)) |
| `AEO-019` | `deep_pages` | Liên kết & Kiến trúc | `low` | `multi_page_sitemap` | Quy ước biên tập | Các trang nằm sâu hơn 3 lần nhấp chuột từ trang chủ ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-020` | `orphan_pages` | Liên kết & Kiến trúc | `medium` | `multi_page_sitemap` | Chuẩn tài liệu | Trang có trong Sitemap nhưng không có liên kết nội bộ trỏ tới (Trang mồ côi) ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-021` | `js_dependent` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuẩn tài liệu | Nội dung chính chỉ xuất hiện sau khi chạy JavaScript ([`js`](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)) |
| `AEO-022` | `title_missing` | Tối ưu On-page | `high` | `single_page` | Chuẩn tài liệu | Trang thiếu thẻ tiêu đề (<title>) ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-023` | `title_duplicate` | Tối ưu On-page | `medium` | `multi_page_sitemap` | Chuẩn tài liệu | Trùng lặp thẻ tiêu đề (<title>) giữa các trang ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-024` | `title_length` | Tối ưu On-page | `low` | `single_page` | Quy ước biên tập | Tiêu đề (<title>) quá ngắn hoặc quá dài ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-025` | `multiple_titles` | Tối ưu On-page | `low` | `single_page` | Chuẩn tài liệu | Có nhiều hơn một thẻ <title> trên cùng một trang ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `AEO-026` | `meta_missing` | Tối ưu On-page | `medium` | `single_page` | Chuẩn tài liệu | Trang thiếu thẻ mô tả (meta description) ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-027` | `meta_duplicate` | Tối ưu On-page | `low` | `multi_page_sitemap` | Chuẩn tài liệu | Trùng lặp thẻ meta description giữa các trang ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-028` | `meta_length` | Tối ưu On-page | `low` | `single_page` | Quy ước biên tập | Thẻ mô tả (meta description) quá ngắn hoặc quá dài ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `AEO-029` | `h1_missing` | Tối ưu On-page | `medium` | `single_page` | Quy ước biên tập | Trang thiếu thẻ tiêu đề chính (H1) ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-030` | `h1_multiple` | Tối ưu On-page | `low` | `single_page` | Quy ước biên tập | Trang có nhiều thẻ H1 cùng lúc ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-031` | `heading_skips` | Tối ưu On-page | `low` | `single_page` | Quy ước biên tập | Thứ tự phân cấp thẻ Heading bị nhảy bậc (ví dụ H1 xuống thẳng H3) ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-032` | `lang_missing` | Tối ưu On-page | `low` | `single_page` | Chuẩn tài liệu | Thiếu thuộc tính khai báo ngôn ngữ (html lang) ([`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang)) |
| `AEO-033` | `viewport_missing` | Tối ưu On-page | `high` | `single_page` | Chuẩn tài liệu | Thiếu thẻ meta viewport cho thiết bị di động ([`mobile`](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)) |
| `AEO-034` | `thin_content` | Chất lượng Nội dung | `medium` | `single_page` | Quy ước biên tập | Trang có quá ít nội dung chính (Thin content) ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `AEO-035` | `duplicate_content` | Chất lượng Nội dung | `medium` | `multi_page_sitemap` | Chuẩn tài liệu | Các trang có nội dung văn bản chính giống hệt nhau ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |
| `AEO-036` | `images_alt` | Tối ưu On-page | `medium` | `single_page` | Chuẩn tài liệu | Hình ảnh thiếu thuộc tính văn bản thay thế (alt) ([`images`](https://developers.google.com/search/docs/appearance/google-images)) |
| `AEO-037` | `images_dimensions` | Hiệu năng & Tốc độ | `low` | `single_page` | Chuẩn tài liệu | Hình ảnh chưa khai báo kích thước width và height ([`cls`](https://web.dev/articles/optimize-cls)) |
| `AEO-038` | `lcp_image_lazy` | Hiệu năng & Tốc độ | `low` | `single_page` | Quy ước biên tập | Hình ảnh đầu trang (ứng viên LCP) đang gắn thuộc tính loading=lazy ([`lcp_lazy`](https://web.dev/articles/lcp-lazy-loading)) |
| `AEO-039` | `no_structured_data` | Dữ liệu cấu trúc & Chia sẻ | `medium` | `single_page` | Chuẩn tài liệu | Trang chủ chưa có dữ liệu cấu trúc (Schema JSON-LD) ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-040` | `jsonld_errors` | Dữ liệu cấu trúc & Chia sẻ | `high` | `single_page` | Chuẩn tài liệu | Lỗi cú pháp JSON-LD không thể phân tích ([`sd_general`](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)) |
| `AEO-041` | `schema_required` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Chuẩn tài liệu | Dữ liệu cấu trúc (Schema) thiếu thuộc tính bắt buộc cho Rich Results ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-042` | `schema_website_missing` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Chuẩn tài liệu | Trang chủ thiếu dữ liệu cấu trúc WebSite hoặc tên trang (Site Name) ([`site_names`](https://developers.google.com/search/docs/appearance/site-names)) |
| `AEO-043` | `faq_rich_result_limited` | Dữ liệu cấu trúc & Chia sẻ | `info` | `single_page` | Chuẩn tài liệu | Schema FAQPage hoặc Schema ngừng hỗ trợ Rich Results (HowTo, SpecialAnnouncement...) ([`sd_faq`](https://developers.google.com/search/docs/appearance/structured-data/faqpage)) |
| `AEO-044` | `og_missing` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Chuẩn tài liệu | Thiếu thẻ Open Graph (og:title hoặc og:image) ([`og`](https://ogp.me/)) |
| `AEO-045` | `hreflang_issues` | Dữ liệu cấu trúc & Chia sẻ | `medium` | `single_page` | Chuẩn tài liệu | Khai báo đa ngôn ngữ (hreflang) chưa đầy đủ ([`hreflang`](https://developers.google.com/search/docs/specialty/international/localized-versions)) |
| `AEO-046` | `ai_bots_blocked` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Chuẩn tài liệu | Một số trình thu thập AI hoặc chỉ thị Content-Signal đang chặn trong robots.txt ([`crawlers_google`](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)) |
| `AEO-047` | `llms_txt_missing` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Quy ước biên tập | Chưa có tệp llms.txt tại thư mục gốc ([`llms`](https://llmstxt.org/)) |
| `AEO-048` | `llms_txt_no_links` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Quy ước biên tập | Tệp llms.txt chưa có liên kết Markdown dẫn tới tài liệu chi tiết ([`llms`](https://llmstxt.org/)) |
| `AEO-049` | `api_catalog_invalid_mime` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Chuẩn tài liệu | Endpoint /.well-known/api-catalog chưa trả về chuẩn MIME application/linkset+json ([`rfc9727`](https://www.rfc-editor.org/rfc/rfc9727)) |
| `AEO-050` | `schema_sameas_missing` | Sẵn sàng cho Tìm kiếm AI (GEO) | `low` | `single_page` | Quy ước biên tập | Thực thể chính trên trang chủ thiếu liên kết hồ sơ xác thực (sameAs) ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `AEO-051` | `entity_name_inconsistent` | Sẵn sàng cho Tìm kiếm AI (GEO) | `low` | `single_page` | Quy ước biên tập | Tên thương hiệu khai báo giữa Schema, Open Graph và tiêu đề trang chủ chưa đồng nhất ([`site_names`](https://developers.google.com/search/docs/appearance/site-names)) |
| `AEO-052` | `thin_sections_for_ai` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Quy ước biên tập | Nhiều phân đoạn dưới tiêu đề phụ (H2/H3) quá ngắn để trích dẫn độc lập ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `AEO-053` | `hsts_missing` | Bảo mật & Tín nhiệm | `low` | `single_page` | Chuẩn tài liệu | Thiếu HTTP header bảo mật Strict-Transport-Security (HSTS) ([`hsts`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)) |
| `AEO-054` | `security_headers` | Bảo mật & Tín nhiệm | `low` | `single_page` | Chuẩn tài liệu | Thiếu các HTTP header bảo mật cơ bản ([`headers`](https://owasp.org/projects/secure-headers-project)) |
| `AEO-055` | `mixed_content` | Bảo mật & Tín nhiệm | `high` | `single_page` | Chuẩn tài liệu | Trang HTTPS đang tải tài nguyên qua giao thức HTTP không an toàn ([`mixed`](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content)) |
| `AEO-056` | `favicon_missing` | Bảo mật & Tín nhiệm | `low` | `single_page` | Chuẩn tài liệu | Chưa khai báo biểu tượng trang (Favicon) ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `AEO-057` | `slow_ttfb` | Hiệu năng & Tốc độ | `medium` | `single_page` | Chuẩn tài liệu | Thời gian phản hồi máy chủ chậm (TTFB > 0.8 giây) ([`ttfb`](https://web.dev/articles/ttfb)) |
| `AEO-058` | `heavy_html` | Hiệu năng & Tốc độ | `low` | `single_page` | Quy ước biên tập | Tài liệu HTML quá nặng (trên 500 KB) ([`cwv`](https://web.dev/articles/vitals)) |
| `AEO-059` | `generic_anchors` | Liên kết & Kiến trúc | `low` | `single_page` | Chuẩn tài liệu | Liên kết nội bộ sử dụng văn bản neo (anchor text) chung chung ([`links`](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) |
| `AEO-060` | `broken_external_links` | Liên kết & Kiến trúc | `low` | `single_page` | Chuẩn tài liệu | Liên kết trỏ ra ngoài (Outbound links) trả về lỗi HTTP ([`broken`](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)) |
| `PFA-01` | `protected_field_year_conflict` | Tối ưu On-page | `medium` | `single_page` | Quy ước biên tập | Tiêu đề (<title>/H1) chứa năm cũ mâu thuẫn với năm mới hơn trong bài viết ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `CFA-02` | `sitemap_uniform_lastmod` | Thu thập & Lập chỉ mục | `low` | `single_page` | Quy ước biên tập | Hầu hết URL trong Sitemap có cùng một ngày <lastmod> giống hệt nhau ([`sitemaps`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)) |

---

## 5. `14` Chỉ Số Thẩm Định Ngữ Nghĩa `AEO-Sem` (`SEM-01` – `SEM-14`)

Bên cạnh `62` quy tắc HTML/HTTP tất định, **Động cơ Ngữ nghĩa AEORank (`AEO-Sem`)** thẩm định **`18` tín hiệu phân loại xác suất** (`13` tín hiệu cấp trang + `5` tín hiệu cấp toàn trang + đối chiếu cặp trang trùng ý định) để tổng hợp thành **`14` chỉ số phát hiện ngữ nghĩa**:

| Mã Chỉ Số | Định Danh Ngữ Nghĩa | Trụ Cột | Mức Độ | Phạm Vi | Căn Cứ | Mô Tả Chỉ Số Ngữ Nghĩa & Tài Liệu Tham Chiếu |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `SEM-01` | `value_prop` | Chất lượng Nội dung | `high` | `site_wide` | Chuẩn tài liệu | Trang chủ chưa nêu rõ giá trị cốt lõi của sản phẩm/dịch vụ ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-02` | `entity_clarity` | Sẵn sàng cho Tìm kiếm AI (GEO) | `medium` | `site_wide` | Quy ước biên tập | Trang chủ chưa nêu rõ định danh thực thể (Ai, Làm gì, Ở đâu) ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-03` | `local_schema` | Dữ liệu cấu trúc & Chia sẻ | `medium` | `site_wide` | Chuẩn tài liệu | Doanh nghiệp địa phương nhưng thiếu dữ liệu cấu trúc LocalBusiness ([`sd`](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)) |
| `SEM-04` | `helpfulness` | Chất lượng Nội dung | `high` | `page_level` | Chuẩn tài liệu | Các trang quan trọng chưa đáp ứng trọn vẹn nhu cầu thông tin của người đọc ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-05` | `specificity` | Chất lượng Nội dung | `medium` | `page_level` | Chuẩn tài liệu | Nội dung còn mang tính khái quát, thiếu chi tiết thực tế độc bản ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-06` | `trust` | Chất lượng Nội dung | `medium` | `page_level` | Chuẩn tài liệu | Các trang chính thiếu bằng chứng về chuyên môn và độ tin cậy (E-E-A-T) ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-07` | `next_step` | Chất lượng Nội dung | `medium` | `page_level` | Quy ước biên tập | Trang thương mại thiếu lời kêu gọi hành động (CTA) rõ ràng ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `SEM-08` | `title_fit` | Tối ưu On-page | `medium` | `page_level` | Chuẩn tài liệu | Thẻ tiêu đề (<title>) chưa phản ánh sát hoặc chưa thu hút so với nội dung ([`title`](https://developers.google.com/search/docs/appearance/title-link)) |
| `SEM-09` | `meta_fit` | Tối ưu On-page | `low` | `page_level` | Chuẩn tài liệu | Thẻ mô tả (meta description) còn chung chung, kém hấp dẫn ([`snippet`](https://developers.google.com/search/docs/appearance/snippet)) |
| `SEM-10` | `h1_fit` | Tối ưu On-page | `low` | `page_level` | Quy ước biên tập | Tiêu đề chính (H1) chưa nêu rõ chủ đề của trang ([`starter`](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) |
| `SEM-11` | `answer_first` | Sẵn sàng cho Tìm kiếm AI (GEO) | `low` | `page_level` | Quy ước biên tập | Mở bài đi vòng vo, chưa trả lời trực diện ngay sau thẻ H1 ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-12` | `citable` | Sẵn sàng cho Tìm kiếm AI (GEO) | `medium` | `page_level` | Quy ước biên tập | Ít thông tin/số liệu độc lập dễ trích dẫn cho công cụ trả lời AI ([`ai`](https://developers.google.com/search/docs/appearance/ai-features)) |
| `SEM-13` | `rewrite` | Chất lượng Nội dung | `medium` | `page_level` | Quy ước biên tập | Các trang AEO-Sem khuyến nghị viết lại hoặc hợp nhất nội dung ([`helpful`](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| `SEM-14` | `cannibalization` | Chất lượng Nội dung | `medium` | `cross_page_pair` | Chuẩn tài liệu | Các cặp trang có nguy cơ tự cạnh tranh cùng một ý định tìm kiếm (Cannibalization) ([`canonical`](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)) |

---

## 6. `6` Tín Hiệu Sẵn Sàng Cho Tác Nhân AI — Agentic Web (`AG-01` – `AG-06`)

Được đo lường trực tiếp trong đối tượng `trial.agentic_readiness` (thang điểm `0/6` đến `6/6`) nhằm đánh giá khả năng các tác nhân tìm kiếm và lập trình AI tự động khám phá, đọc hiểu và gọi công cụ trên tên miền:

| Mã Tín Hiệu | Định Danh | Phạm Vi | Mô Tả Tín Hiệu Agentic Web (2026) | Chuẩn Giao Thức |
| :--- | :--- | :---: | :--- | :--- |
| `AG-01` | `llms_txt` | `site_wide` | Tệp chỉ mục ngữ cảnh AI /llms.txt tại thư mục gốc tóm tắt thực thể và liên kết chính | [`llms`](https://llmstxt.org/) |
| `AG-02` | `api_catalog` | `site_wide` | Danh mục API /.well-known/api-catalog trả về chuẩn application/linkset+json (RFC 9727) | [`rfc9727`](https://www.rfc-editor.org/rfc/rfc9727) |
| `AG-03` | `agent_card` | `site_wide` | Hồ sơ khám phá Tác nhân & Máy chủ MCP (/.well-known/agent-card.json & /.well-known/mcp/server-card.json) | [`mcp`](https://modelcontextprotocol.io/) |
| `AG-04` | `content_signal` | `site_wide` | Chỉ thị quyền sử dụng nội dung Content-Signal trong /robots.txt (search=yes, ai-input=yes) | [`content_signal`](https://contentsignals.org/) |
| `AG-05` | `markdown_alternate` | `site_wide` | Liên kết phiên bản Markdown song song (<link rel="alternate" type="text/markdown">) | [`llms`](https://llmstxt.org/) |
| `AG-06` | `webmcp_or_agentic_cta` | `site_wide` | Nút hành động ngữ nghĩa cho Agent (aria-label) & Điểm cuối giao thức Streamable HTTP MCP (/mcp) | [`mcp`](https://modelcontextprotocol.io/) |

---

## 7. Thư Viện Chuyên Đề Kỹ Thuật SEO, AEO & GEO ([Trung Tâm Tri Thức Mở](https://aeorank.app/tri-thuc))

- **[Bản Đồ SEO, AEO & GEO 2026: Từ Xếp Hạng Đến Trích Dẫn AI](https://aeorank.app/tri-thuc/seo-aeo-geo-khac-nhau-the-nao)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/seo-aeo-geo-khac-nhau-the-nao.md)) — Bản đồ SEO, AEO và GEO năm 2026 là khung kiến trúc tối ưu hóa hiển thị toàn diện trên cả kết quả tìm kiếm Google truyền thống lẫn các công cụ trả lời AI tạo sinh (ChatGPT, Perplexity, Gemini, AI Overviews). Chuyên đề này cung cấp bảng đối chiếu kỹ thuật 3 tầng và quy trình triển khai thực tế giúp doanh nghiệp vừa giữ vững thứ hạng từ khóa vừa gia tăng tỷ lệ được AI điểm tên khuyên dùng.
- **[Protected-Field Audit: Xử Lý Lỗi Lệch Pha Tiêu Đề Và Nội Dung](https://aeorank.app/tri-thuc/protected-field-audit-loi-lech-pha-tieu-de)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/protected-field-audit-loi-lech-pha-tieu-de.md)) — Protected-Field Audit (Kiểm toán trường bảo vệ) là quy trình kỹ thuật tự động đối chiếu và đồng bộ con số, mốc năm giữa 4 trường khóa cứng (<title>, H1, meta description, tiêu đề FAQ) với phần thân bài viết sau mỗi lần cập nhật. Tài liệu này cung cấp danh sách kiểm tra 4 điểm (quy tắc PFA-01 trong bộ 62 tiêu chí AEORank) giúp bạn khắc phục triệt để lỗi lệch pha tiêu đề khiến Google tự ý viết lại Title và làm giảm điểm trích dẫn AI.
- **[Bẫy Tươi Mới Giả Tạo (Fake Freshness) & Lỗi Lastmod Sitemap](https://aeorank.app/tri-thuc/bay-tuoi-moi-gia-tao-lastmod-sitemap)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/bay-tuoi-moi-gia-tao-lastmod-sitemap.md)) — Bẫy tươi mới giả tạo (Fake Freshness) và lỗi đồng phục <lastmod> trong Sitemap (quy tắc CFA-02) là sai lầm kỹ thuật khi hệ thống tự động gán cùng một ngày cập nhật mới cho toàn bộ URL mà không có thay đổi nội dung thực chất. Chuyên đề này giải thích cơ chế xác thực dấu thời gian của Google Search Central và hướng dẫn cách cấu hình Sitemap trung thực kết hợp bổ sung dữ liệu phi hàng hóa (Non-commodity Data).
- **[Chẩn Đoán Tụt CTR: Do Google AI Overviews Hay Do Đối Thủ Vượt?](https://aeorank.app/tri-thuc/mat-click-do-ai-overviews-hay-doi-thu)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/mat-click-do-ai-overviews-hay-doi-thu.md)) — Quy trình chẩn đoán sụt giảm tỷ lệ nhấp (CTR Triage) là phương pháp đối chiếu 4 tín hiệu trên Google Search Console và SERP để phân định rõ nguyên nhân mất Click đến từ hộp trả lời Google AI Overviews hay do đối thủ cạnh tranh vượt mặt. Chuyên đề này cung cấp ma trận phân loại thực chiến giúp bạn tránh sai lầm tự đập bỏ thẻ <title> đang giữ Top 1–3 và chuyển sang tối ưu trích dẫn nguồn AEO/GEO.
- **[Kỷ Luật Đo Lường SEO: Nhóm Đối Chứng & Vùng Nhiễu Dữ Liệu GSC](https://aeorank.app/tri-thuc/ky-luat-do-luong-seo-nhom-doi-chung)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/ky-luat-do-luong-seo-nhom-doi-chung.md)) — Kỷ luật đo lường SEO có nhóm đối chứng (5 trang Pilot + 5 trang Control) là phương pháp thực nghiệm khoa học giúp tách biệt tác động thật của thay đổi kỹ thuật khỏi yếu tố mùa vụ và nhiễu dữ liệu trên Google Search Console. Chuyên đề này cung cấp quy trình thiết lập cửa sổ chờ 14 ngày, chu kỳ đo 4–6 tuần chẵn và cách lọc nhiễu Impressions trong giai đoạn 2025–2026.
- **[Chiến Lược SEO & GEO Theo 3 Giai Đoạn Tăng Trưởng Website](https://aeorank.app/tri-thuc/chien-luoc-seo-theo-3-giai-doan-tang-truong)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/chien-luoc-seo-theo-3-giai-doan-tang-truong.md)) — Chiến lược SEO & GEO theo 3 giai đoạn tăng trưởng là ma trận phân bổ nguồn lực kỹ thuật dựa trên quy mô URL thực tế trong Sitemap và lưu lượng truy cập tự nhiên: Giai đoạn Sơ khai (dưới 30 URL), Giai đoạn Tăng trưởng (30–300 URL) và Giai đoạn Trưởng thành (trên 300 URL). Tài liệu này cung cấp bảng định tuyến ưu tiên và danh mục các việc cần tránh ở từng giai đoạn, giúp doanh nghiệp tập trung đúng nút thắt tăng trưởng và tiết kiệm 70% công sức kỹ thuật.
- **[Quy Chuẩn Nội Dung AI & Playbook 5 Bước Tạo Information Gain](https://aeorank.app/tri-thuc/luat-google-ai-content-information-gain)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/luat-google-ai-content-information-gain.md)) — Information Gain (Giá trị thông tin gia tăng) là thước đo mức độ một bài viết cung cấp thêm bằng chứng thực tế, số liệu định lượng và câu trả lời hữu ích mà 10 kết quả đang xếp hạng đầu tiên trên Google đã bỏ sót. Chuyên đề này tổng hợp quy chuẩn chính thức của Google Search Central về nội dung tạo sinh AI và cung cấp Playbook thực nghiệm 5 bước kết hợp bộ chấm điểm ngữ nghĩa AEO-Sem giúp bài viết thoát khỏi mức đánh giá thấp nhất (Lowest Rating).
- **[Engineering-as-Backlinks: Xây Dựng Thực Thể AI & DR Cao ($0)](https://aeorank.app/tri-thuc/chien-luoc-backlink-ky-thuat-thuc-the-ai)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/chien-luoc-backlink-ky-thuat-thuc-the-ai.md)) — Engineering-as-Backlinks (Kỹ thuật hóa tài sản liên kết) là phương pháp chuyển hóa trực tiếp các đặc tả kỹ thuật sẵn có của sản phẩm (như OpenAPI 3.0.3, tệp kỹ năng Agent SKILL.md và bài phân tích kiến trúc chuyên sâu) thành các điểm nút thực thể xác thực trên những nền tảng công nghệ uy tín (DR 72–90) với chi phí $0. Chuyên đề này trình bày kiến trúc Vòng lặp Thực thể Kép (sameAs + Tier-2 Crawl Bridge) giúp công cụ tìm kiếm và các hệ thống RAG nhận diện nhất quán thương hiệu của bạn.
- **[Kiến trúc RAG đa động cơ & Khung xuất bản 8 tầng GEO | AEORank](https://aeorank.app/tri-thuc/kien-truc-rag-khung-xuat-ban-8-tang-geo)** ([Bản `.md` cho AI](https://aeorank.app/tri-thuc/kien-truc-rag-khung-xuat-ban-8-tang-geo.md)) — Kiến trúc RAG đa động cơ và Khung xuất bản 8 tầng GEO là phương pháp thiết kế tài liệu kỹ thuật dựa trên cơ chế truy xuất tăng cường sinh (Retrieval-Augmented Generation) của Google AI Overviews, Perplexity AI, ChatGPT Search và Claude Search. Chuyên đề này đối chiếu chứng cứ học thuật từ nghiên cứu KDD 2024 với kiến trúc cắt đoạn ngữ nghĩa thực tế, giúp bài viết vừa đạt 100/100 điểm kỹ thuật AEORank vừa tối đa hóa xác suất được trích dẫn nguyên văn.

---

## 8. Hệ Sinh Thái Mã Nguồn Mở, Thư Mục Vệ Tinh (Package Mirrors) & Công Bố Học Thuật

| Điểm Nút Hệ Sinh Thái | Liên Kết Chính Thức | Mô Tả Chi Tiết |
| :--- | :--- | :--- |
| **CERN Zenodo DOI (`DR 88`)** | [**`10.5281/zenodo.23582947`**](https://doi.org/10.5281/zenodo.23582947) ([Bản ghi](https://zenodo.org/records/23582947)) | Công bố khoa học & đặc tả kỹ thuật chuẩn GEO-62 lưu trữ tại CERN DataCite |
| **Đồ Thị Tri Thức Wikidata (`DR 95`)** | [**`Q141814049`**](https://www.wikidata.org/wiki/Q141814049) | Thực thể định danh chính thức (`AEORank`) kết nối mã DOI, npm, PyPI & cổng chính |
| **Kho Đặc Tả Mở GitLab (`DR 92`)** | [**`gitlab.com/aizaloapp/aeorank`**](https://gitlab.com/aizaloapp/aeorank) | Kho lưu trữ đặc tả mở & máy chủ MCP chính thức trên GitLab |
| **Bộ Dữ Liệu Hugging Face (`DR 92`)** | [**`lekhoa288/aeorank-geo62-diagnostic-standard`**](https://huggingface.co/datasets/lekhoa288/aeorank-geo62-diagnostic-standard) | Bộ dữ liệu chuẩn mở 62 quy tắc & trọng số 9 trụ cột phục vụ huấn luyện LLM / RAG |
| **Kho Gói npm (`DR 92`)** | [**`aeorank-geo-mcp`**](https://www.npmjs.com/package/aeorank-geo-mcp) · [**`aeorank-geo`**](https://www.npmjs.com/package/aeorank-geo) · [**`n8n-nodes-aeorank`**](https://www.npmjs.com/package/n8n-nodes-aeorank) | Gói Dual-Mode Terminal CLI, Stdio MCP & Tích hợp n8n chính thức cho Node.js |
| **Tích Hợp n8n Workflow & AI Agent (`DR 90`/`92`)** | [**`n8n-nodes-aeorank` (npm)**](https://www.npmjs.com/package/n8n-nodes-aeorank) · [**Kho GitHub**](https://github.com/aizaloapp/n8n-nodes-aeorank) · [**`deps.dev`**](https://deps.dev/npm/n8n-nodes-aeorank) · [**`jsDelivr`**](https://www.jsdelivr.com/package/npm/n8n-nodes-aeorank) | Gói n8n Community Node có chứng thực SLSA Provenance (`usableAsTool: true` cho n8n AI Agent) |
| **Kho Gói Python PyPI (`DR 91`)** | [**`aeorank-geo-mcp`**](https://pypi.org/project/aeorank-geo-mcp/) | Gói CLI & thư viện tích hợp Python chính thức trên PyPI (`v2.2.0`) |
| **Google Open Source Insights (`deps.dev` `DR 92`)** | [**Bản sao npm**](https://deps.dev/npm/aeorank-geo-mcp) · [**Bản sao PyPI**](https://deps.dev/pypi/aeorank-geo-mcp) | Hồ sơ đồ thị phụ thuộc & kiểm định bảo mật nguồn mở của Google (`deps.dev`) |
| **Mạng Phân Phối jsDelivr CDN (`DR 89`)** | [**`jsdelivr.com/package/npm/aeorank-geo-mcp`**](https://www.jsdelivr.com/package/npm/aeorank-geo-mcp) | Trang danh bạ CDN toàn cầu và bản sao tài liệu kỹ thuật tự động |
| **Chỉ Mục Nguồn Mở Libraries.io (`DR 75`)** | [**Chỉ mục npm**](https://libraries.io/npm/aeorank-geo-mcp) · [**Chỉ mục PyPI**](https://libraries.io/pypi/aeorank-geo-mcp) | Trang tổng hợp đa kho gói phần mềm & chấm điểm SourceRank |
| **UNPKG Edge CDN (`DR 86`)** | [**`unpkg.com/aeorank-geo-mcp@2.2.1/package.json`**](https://unpkg.com/aeorank-geo-mcp@2.2.1/package.json) | Siêu dữ liệu định danh gói phân phối trên mạng lưới UNPKG toàn cầu |
| **Chợ Kỹ Năng ClawHub AI (`DR 83`)** | [**`aeorank-seo-geo-auditor`**](https://clawhub.ai/aizaloapp/skills/aeorank-seo-geo-auditor) | Kỹ năng kiểm toán tự động đã xác thực dành cho AI Agent trên ClawHub |
| **Google Chrome Web Store (`DR 95`)** | [**`AEORank — SEO, AEO & GEO Inspector`**](https://chromewebstore.google.com/detail/aeorank-%E2%80%94-seo-aeo-geo-ins/fbglphgihhlkjkgmnladnpghimcljjnl) | Tiện ích mở rộng trình duyệt Chrome chính thức kiểm tra nhanh GEO-62 & Schema |
| **Microsoft Edge Add-ons (`DR 96`)** | [**`AEORank — SEO, AEO & GEO Inspector`**](https://microsoftedge.microsoft.com/addons/detail/aeorank-%E2%80%94-seo-aeo-geo-/gmodhebjdgdlklnaemldkiffmooemiib) | Tiện ích mở rộng trình duyệt Microsoft Edge chính thức chẩn đoán SEO, AEO & GEO |
| **Chỉ Mục Tin Cậy M8ven MCP (`Verified Publisher`)** | [**`m8ven.ai/mcp/aizaloapp/aeorank`**](https://m8ven.ai/mcp/aizaloapp/aeorank) | Hồ sơ máy chủ MCP đã xác thực quyền sở hữu Publisher độc lập trên M8ven |
| **Chuyên Đề Kỹ Thuật DEV.to (`DR 86`)** | [**GEO-62: An Open Diagnostic Standard for Technical SEO, AEO & GEO**](https://dev.to/aizaloapp/geo-62-an-open-diagnostic-standard-for-technical-seo-aeo-generative-engine-optimization-rfc-2chk) | Bài phân tích chuyên sâu kiến trúc RFC 9727, `PFA-01`, `CFA-02` & 9 trụ cột chấm điểm |

---

## 9. Bản Quyền & Ghi Nhận Nguồn Gốc

- **Giấy phép:** [MIT License](./LICENSE)
- **Ghi nhận nguồn gốc:** Hệ thống phân loại quy tắc cơ sở kế thừa từ `jev-seo` © Agrici Daniel (MIT), được mở rộng chuyên sâu bởi [Đội ngũ Kỹ thuật AEORank](https://aeorank.app/vi) (`PFA-01`, `CFA-02`, chuẩn RFC 9727 `api-catalog`, Kiến trúc Xuất bản 8 Tầng Đa Động cơ GEO và Hệ thống Kiểm toán 4-AI).
