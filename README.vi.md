# Bộ Tiêu Chuẩn Kiểm Toán Mở AEORank GEO-62 & Đặc Tả REST API v1

[![AEORank Score Badge](https://aeorank.app/api/v1/badge/aeorank.app.svg)](https://aeorank.app/vi)
[![Trạm Kiểm Toán Trực Tuyến](https://img.shields.io/badge/Trạm_Kiểm_Toán-aeorank.app/vi-10B981?style=flat-square)](https://aeorank.app/vi)
[![OpenAPI 3.0.3](https://img.shields.io/badge/OpenAPI-3.0.3-6366F1?style=flat-square)](https://aeorank.app/openapi.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](./LICENSE)

> 🌐 **Ngôn ngữ:** **[🇬🇧 English (`README.md`)](./README.md)** | **🇻🇳 Tiếng Việt**  
> 📖 **Tài liệu GitHub Pages:** **[Tài liệu Tiếng Việt (`/aeorank/vi/`)](https://aizaloapp.github.io/aeorank/vi/)** | **[English Docs (`/aeorank/`)](https://aizaloapp.github.io/aeorank/)**

> **Danh Mục 62 Quy Tắc Kỹ Thuật Công Khai, Mẫu Cấu Hình Chuẩn & Đặc Tả REST API v1 của [AEORank Vietnam (`aeorank.app/vi`)](https://aeorank.app/vi)** — Hệ thống Kiểm toán Kỹ thuật SEO Google, Tối ưu Hóa Công cụ Trả lời (AEO) và Tối ưu Hóa Tìm kiếm AI Tạo sinh (GEO).

---

## 1. Tổng Quan & Vì Sao Nên Dùng Động Cơ Kiểm Toán AEORank?

**AEORank** đánh giá website toàn diện trên **9 trụ cột kỹ thuật**, kết hợp **62 quy tắc kiểm tra tất định** (`56` quy tắc cấp trang + `6` quy tắc cấp toàn Sitemap bám sát Google Search Central & RFC 9727) cùng **Động cơ Ngữ nghĩa AEORank (`AEO-Sem`)** và **kiểm tra trích dẫn thực tế trên 4 AI** (*Perplexity, Google AI Mode, ChatGPT, Google Gemini*).

### Bảng Đối Chiếu Giải Pháp Tự Phục Vụ AEORank vs. Tự Quét Bằng LLM Agent
| Phương Pháp | Chi Phí | Phát Hiện Ăn Thịt Từ Khóa & Trang Mồ Côi Toàn Sitemap | Kiểm Tra Trích Dẫn 4-AI + DataForSEO + SE Ranking Backlinks | Báo Cáo PDF 50 Trang + Bảng Tính Excel P1/P2/P3 + Giám Sát Tự Động |
| :--- | :--- | :--- | :--- | :--- |
| **Tự viết script bằng LLM Agent** | **$15–$25** tiền token LLM + **$50+** phí thuê bao API | Dễ bị tràn bộ nhớ ngữ cảnh khi đối chiếu 3.100 điểm kiểm tra | ❌ Phải tự mua tài khoản API riêng lẻ | ❌ Chỉ xuất văn bản thô trên màn hình |
| **[Kiểm Toán Chuyên Sâu 50 Trang ($9 / lần)](https://aeorank.app/dich-vu)** | **$9 USD** (`99.000đ` — trả 1 lần) | ✅ Quét đồ thị liên kết xuyên suốt toàn bộ Sitemap | ✅ Tích hợp sẵn (`Perplexity`, `AI Mode`, `ChatGPT`, `Gemini`) | ✅ Báo cáo PDF 50 trang + File `.xlsx` dựng sẵn công thức |
| **[Giám Sát Độ Trôi Hàng Tuần ($19/tháng · $149/năm)](https://aeorank.app/dich-vu)** | **$19/tháng** (2 domain) · **$149/năm** (3 domain) | ✅ Tự động quét ngầm hàng tuần + Quét lại tức thì (On-demand) | ✅ Cảnh báo sớm khi tụt điểm hoặc phát sinh lỗi `P1` mới | ✅ [Bảng Điều Khiển Đa Tên Miền](https://aeorank.app/dashboard) |
| **AEORank v1 Edge API (`/api/v1/*`)** | Từ **$0** (Sandbox) / Trả theo credit | ✅ Phản hồi JSON tất định `< 2.5s` | ✅ Hỗ trợ trên cổng `/api/v1/audit/full` | ✅ Chuẩn JSON Schema v2 tích hợp CI/CD |

---

## 2. Công Thức Chấm Điểm 9 Trụ Cột Chuẩn Hóa (`Tổng Trọng Số 115 → 100%`)

Mỗi trụ cột bắt đầu từ `100` điểm và trừ điểm tất định theo mức độ nghiêm trọng của lỗi (`critical: -25`, `high: -12`, `medium: -6`, `low: -2`). Đối với 2 trụ cột `content` (Chất lượng Nội dung) và `ai` (Trích dẫn AI & GEO), khi bật thẩm định ngữ nghĩa `AEO-Sem`, điểm số kết hợp **70% xác suất ngữ nghĩa `AEO-Sem`** + **30% quy tắc kỹ thuật tất định**.

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

## 3. AEORank v1 REST API & Huy Hiệu Điểm Số SVG Động

### 3.1. Nhúng Huy Hiệu Điểm Số Trực Tiếp (`GET /api/v1/badge/{domain}.svg`)
Dán mã Markdown dưới đây vào `README.md` hoặc chân trang website để hiển thị điểm số chuẩn GEO-62 theo thời gian thực:
```markdown
[![Verified by AEORank](https://aeorank.app/api/v1/badge/ten-mien-cua-ban.vn.svg)](https://aeorank.app/vi?domain=ten-mien-cua-ban.vn)
```

### 3.2. Các Điểm Cuối REST API (`https://aeorank.app`)
1. **`GET /api/v1/rules?lang=vi`** — Truy xuất danh mục 62 quy tắc kỹ thuật và bảng trọng số Tiếng Việt (`$0`, công khai).
2. **`POST /api/v1/audit/sandbox`** — Kiểm thử nhanh môi trường Cloud Sandbox (`< 10ms`, `0 credit`, `Authorization: Bearer demo`).
3. **`POST /api/v1/audit/technical`** — Kiểm toán trực tiếp 56 quy tắc trang chủ + Sitemap + Khoảng trống Thực thể `sameAs` + Sinh bản nháp `/llms.txt` (`1 credit`, `< 2.5s`).
4. **`POST /api/v1/audit/full`** — Kiểm toán toàn diện Kỹ thuật + Ngữ nghĩa `AEO-Sem` + Kiểm tra trích dẫn trực tiếp trên Perplexity & Google AI Mode (`5 credits`, tự động hoàn credit nếu máy chủ đích lỗi kết nối).

```bash
# Kiểm thử miễn phí ngay lập tức với khóa Sandbox:
curl -X POST "https://aeorank.app/api/v1/audit/sandbox" \
  -H "Authorization: Bearer demo" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://aeorank.app/vi", "lang": "vi"}'
```

---

## 4. Danh Mục 62 Quy Tắc Kiểm Toán Kỹ Thuật (`56 Cấp Trang + 6 Cấp Toàn Sitemap`)

| Mã Quy Tắc | Định Danh Kỹ Thuật | Trụ Cột | Mức Độ | Phạm Vi | Mô Tả Quy Tắc (Tiếng Việt) |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `AEO-001` | `robots_missing` | Thu thập & Lập chỉ mục | `low` | `single_page` | Thiếu tệp robots.txt |
| `AEO-002` | `robots_blocks_site` | Thu thập & Lập chỉ mục | `critical` | `single_page` | robots.txt chặn bot tìm kiếm trên toàn trang |
| `AEO-003` | `sitemap_missing` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Không tìm thấy XML sitemap |
| `AEO-004` | `sitemap_errors` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Tệp Sitemap không truy cập được hoặc lỗi định dạng |
| `AEO-005` | `sitemap_bad_urls` | Thu thập & Lập chỉ mục | `medium` | `multi_page_sitemap` | Sitemap chứa URL bị chuyển hướng, lỗi hoặc gắn noindex |
| `AEO-006` | `not_in_sitemap` | Thu thập & Lập chỉ mục | `low` | `single_page` | Trang cho phép lập chỉ mục nhưng thiếu trong Sitemap |
| `AEO-007` | `http_errors` | Thu thập & Lập chỉ mục | `high` | `single_page` | Các trang trả về lỗi HTTP (4xx/5xx) |
| `AEO-008` | `broken_internal_links` | Liên kết & Kiến trúc | `high` | `single_page` | Liên kết nội bộ trỏ tới URL bị hỏng |
| `AEO-009` | `redirect_chains` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Chuỗi chuyển hướng nhiều chặng (Redirect chains) |
| `AEO-010` | `links_to_redirects` | Liên kết & Kiến trúc | `low` | `single_page` | Liên kết nội bộ đi qua URL trung gian chuyển hướng |
| `AEO-011` | `noindex` | Thu thập & Lập chỉ mục | `high` | `single_page` | Các trang bị loại khỏi kết quả tìm kiếm bởi thẻ noindex |
| `AEO-012` | `canonical_missing` | Thu thập & Lập chỉ mục | `low` | `single_page` | Trang thiếu thẻ liên kết chuẩn (rel=canonical) |
| `AEO-013` | `canonical_elsewhere` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Thẻ Canonical trỏ sang một URL khác |
| `AEO-014` | `canonical_broken` | Thu thập & Lập chỉ mục | `high` | `single_page` | URL đích trong thẻ Canonical bị chuyển hướng hoặc báo lỗi |
| `AEO-015` | `soft_404` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Trang không tồn tại nhưng vẫn trả về HTTP 200 (Soft 404) |
| `AEO-016` | `host_temporary_redirect` | Thu thập & Lập chỉ mục | `low` | `single_page` | Chuyển hướng tên miền hoặc HTTPS đang dùng mã tạm thời (302/307) |
| `AEO-017` | `host_variant` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Cả hai bản www và non-www đều đang chạy độc lập |
| `AEO-018` | `no_https` | Bảo mật & Tín nhiệm | `high` | `single_page` | Website chưa chạy HTTPS hoặc HTTP không tự chuyển hướng sang HTTPS |
| `AEO-019` | `deep_pages` | Liên kết & Kiến trúc | `low` | `multi_page_sitemap` | Các trang nằm sâu hơn 3 lần nhấp chuột từ trang chủ |
| `AEO-020` | `orphan_pages` | Liên kết & Kiến trúc | `medium` | `multi_page_sitemap` | Trang có trong Sitemap nhưng không có liên kết nội bộ trỏ tới (Trang mồ côi) |
| `AEO-021` | `js_dependent` | Thu thập & Lập chỉ mục | `medium` | `single_page` | Nội dung chính chỉ xuất hiện sau khi chạy JavaScript |
| `AEO-022` | `title_missing` | Tối ưu On-page | `high` | `single_page` | Trang thiếu thẻ tiêu đề (<title>) |
| `AEO-023` | `title_duplicate` | Tối ưu On-page | `medium` | `multi_page_sitemap` | Trùng lặp thẻ tiêu đề (<title>) giữa các trang |
| `AEO-024` | `title_length` | Tối ưu On-page | `low` | `single_page` | Tiêu đề (<title>) quá ngắn hoặc quá dài |
| `AEO-025` | `multiple_titles` | Tối ưu On-page | `low` | `single_page` | Có nhiều hơn một thẻ <title> trên cùng một trang |
| `AEO-026` | `meta_missing` | Tối ưu On-page | `medium` | `single_page` | Trang thiếu thẻ mô tả (meta description) |
| `AEO-027` | `meta_duplicate` | Tối ưu On-page | `low` | `multi_page_sitemap` | Trùng lặp thẻ meta description giữa các trang |
| `AEO-028` | `meta_length` | Tối ưu On-page | `low` | `single_page` | Thẻ mô tả (meta description) quá ngắn hoặc quá dài |
| `AEO-029` | `h1_missing` | Tối ưu On-page | `medium` | `single_page` | Trang thiếu thẻ tiêu đề chính (H1) |
| `AEO-030` | `h1_multiple` | Tối ưu On-page | `low` | `single_page` | Trang có nhiều thẻ H1 cùng lúc |
| `AEO-031` | `heading_skips` | Tối ưu On-page | `low` | `single_page` | Thứ tự phân cấp thẻ Heading bị nhảy bậc (ví dụ H1 xuống thẳng H3) |
| `AEO-032` | `lang_missing` | Tối ưu On-page | `low` | `single_page` | Thiếu thuộc tính khai báo ngôn ngữ (html lang) |
| `AEO-033` | `viewport_missing` | Tối ưu On-page | `high` | `single_page` | Thiếu thẻ meta viewport cho thiết bị di động |
| `AEO-034` | `thin_content` | Chất lượng Nội dung | `medium` | `single_page` | Trang có quá ít nội dung chính (Thin content) |
| `AEO-035` | `duplicate_content` | Chất lượng Nội dung | `medium` | `multi_page_sitemap` | Các trang có nội dung văn bản chính giống hệt nhau |
| `AEO-036` | `images_alt` | Tối ưu On-page | `medium` | `single_page` | Hình ảnh thiếu thuộc tính văn bản thay thế (alt) |
| `AEO-037` | `images_dimensions` | Hiệu năng & Tốc độ | `low` | `single_page` | Hình ảnh chưa khai báo kích thước width và height |
| `AEO-038` | `lcp_image_lazy` | Hiệu năng & Tốc độ | `low` | `single_page` | Hình ảnh đầu trang (ứng viên LCP) đang gắn thuộc tính loading=lazy |
| `AEO-039` | `no_structured_data` | Dữ liệu cấu trúc & Chia sẻ | `medium` | `single_page` | Trang chủ chưa có dữ liệu cấu trúc (Schema JSON-LD) |
| `AEO-040` | `jsonld_errors` | Dữ liệu cấu trúc & Chia sẻ | `high` | `single_page` | Lỗi cú pháp JSON-LD không thể phân tích |
| `AEO-041` | `schema_required` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Dữ liệu cấu trúc (Schema) thiếu thuộc tính bắt buộc cho Rich Results |
| `AEO-042` | `schema_website_missing` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Trang chủ thiếu dữ liệu cấu trúc WebSite hoặc tên trang (Site Name) |
| `AEO-043` | `faq_rich_result_limited` | Dữ liệu cấu trúc & Chia sẻ | `info` | `single_page` | Schema FAQPage: Google chỉ hiển thị Rich Results cho trang Chính phủ & Y tế |
| `AEO-044` | `og_missing` | Dữ liệu cấu trúc & Chia sẻ | `low` | `single_page` | Thiếu thẻ Open Graph (og:title hoặc og:image) |
| `AEO-045` | `hreflang_issues` | Dữ liệu cấu trúc & Chia sẻ | `medium` | `single_page` | Khai báo đa ngôn ngữ (hreflang) chưa đầy đủ |
| `AEO-046` | `ai_bots_blocked` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Một số trình thu thập AI đang bị chặn trong robots.txt |
| `AEO-047` | `llms_txt_missing` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Chưa có tệp llms.txt tại thư mục gốc |
| `AEO-048` | `llms_txt_no_links` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Tệp llms.txt chưa có liên kết Markdown dẫn tới tài liệu chi tiết |
| `AEO-049` | `api_catalog_invalid_mime` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Endpoint /.well-known/api-catalog chưa trả về chuẩn MIME application/linkset+json |
| `AEO-050` | `schema_sameas_missing` | Sẵn sàng cho Tìm kiếm AI (GEO) | `low` | `single_page` | Thực thể chính trên trang chủ thiếu liên kết hồ sơ xác thực (sameAs) |
| `AEO-051` | `entity_name_inconsistent` | Sẵn sàng cho Tìm kiếm AI (GEO) | `low` | `single_page` | Tên thương hiệu khai báo giữa Schema, Open Graph và tiêu đề trang chủ chưa đồng nhất |
| `AEO-052` | `thin_sections_for_ai` | Sẵn sàng cho Tìm kiếm AI (GEO) | `info` | `single_page` | Nhiều phân đoạn dưới tiêu đề phụ (H2/H3) quá ngắn để trích dẫn độc lập |
| `AEO-053` | `hsts_missing` | Bảo mật & Tín nhiệm | `low` | `single_page` | Thiếu HTTP header bảo mật Strict-Transport-Security (HSTS) |
| `AEO-054` | `security_headers` | Bảo mật & Tín nhiệm | `low` | `single_page` | Thiếu các HTTP header bảo mật cơ bản |
| `AEO-055` | `mixed_content` | Bảo mật & Tín nhiệm | `high` | `single_page` | Trang HTTPS đang tải tài nguyên qua giao thức HTTP không an toàn |
| `AEO-056` | `favicon_missing` | Bảo mật & Tín nhiệm | `low` | `single_page` | Chưa khai báo biểu tượng trang (Favicon) |
| `AEO-057` | `slow_ttfb` | Hiệu năng & Tốc độ | `medium` | `single_page` | Thời gian phản hồi máy chủ chậm (TTFB > 0.8 giây) |
| `AEO-058` | `heavy_html` | Hiệu năng & Tốc độ | `low` | `single_page` | Tài liệu HTML quá nặng (trên 500 KB) |
| `AEO-059` | `generic_anchors` | Liên kết & Kiến trúc | `low` | `single_page` | Liên kết nội bộ sử dụng văn bản neo (anchor text) chung chung |
| `AEO-060` | `broken_external_links` | Liên kết & Kiến trúc | `low` | `single_page` | Liên kết trỏ ra ngoài (Outbound links) trả về lỗi HTTP |
| `PFA-01` | `protected_field_year_conflict` | Tối ưu On-page | `medium` | `single_page` | Tiêu đề (<title>/H1) chứa năm cũ mâu thuẫn với năm mới hơn trong bài viết |
| `CFA-02` | `sitemap_uniform_lastmod` | Thu thập & Lập chỉ mục | `low` | `single_page` | Hầu hết URL trong Sitemap có cùng một ngày <lastmod> giống hệt nhau |

---

## 5. Thư Viện Chuyên Đề Kỹ Thuật SEO, AEO & GEO ([Trung Tâm Tri Thức Mở](https://aeorank.app/tri-thuc))

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

## 6. Hệ Sinh Thái Mã Nguồn Mở, Thư Mục Vệ Tinh (Package Mirrors) & Công Bố Học Thuật

| Điểm Nút Hệ Sinh Thái | Liên Kết Chính Thức | Mô Tả Chi Tiết |
| :--- | :--- | :--- |
| **CERN Zenodo DOI (`DR 88`)** | [**`10.5281/zenodo.23582947`**](https://doi.org/10.5281/zenodo.23582947) ([Bản ghi](https://zenodo.org/records/23582947)) | Công bố khoa học & đặc tả kỹ thuật chuẩn GEO-62 lưu trữ tại CERN DataCite |
| **Đồ Thị Tri Thức Wikidata (`DR 95`)** | [**`Q141814049`**](https://www.wikidata.org/wiki/Q141814049) | Thực thể định danh chính thức (`AEORank`) kết nối mã DOI, npm, PyPI & cổng chính |
| **Bộ Dữ Liệu Hugging Face (`DR 92`)** | [**`lekhoa288/aeorank-geo62-diagnostic-standard`**](https://huggingface.co/datasets/lekhoa288/aeorank-geo62-diagnostic-standard) | Bộ dữ liệu chuẩn mở 62 quy tắc & trọng số 9 trụ cột phục vụ huấn luyện LLM / RAG |
| **Kho Gói npm (`DR 92`)** | [**`aeorank-geo-mcp`**](https://www.npmjs.com/package/aeorank-geo-mcp) | Gói CLI & Model Context Protocol (MCP) cho môi trường Node.js |
| **Kho Gói Python PyPI (`DR 91`)** | [**`aeorank-geo-mcp`**](https://pypi.org/project/aeorank-geo-mcp/) | Gói CLI & thư viện tích hợp Python chính thức trên PyPI |
| **Google Open Source Insights (`deps.dev` `DR 92`)** | [**Bản sao npm**](https://deps.dev/npm/aeorank-geo-mcp) · [**Bản sao PyPI**](https://deps.dev/pypi/aeorank-geo-mcp) | Hồ sơ đồ thị phụ thuộc & kiểm định bảo mật nguồn mở của Google (`deps.dev`) |
| **Mạng Phân Phối jsDelivr CDN (`DR 89`)** | [**`jsdelivr.com/package/npm/aeorank-geo-mcp`**](https://www.jsdelivr.com/package/npm/aeorank-geo-mcp) | Trang danh bạ CDN toàn cầu và bản sao tài liệu kỹ thuật tự động |
| **Chỉ Mục Nguồn Mở Libraries.io (`DR 75`)** | [**Chỉ mục npm**](https://libraries.io/npm/aeorank-geo-mcp) · [**Chỉ mục PyPI**](https://libraries.io/pypi/aeorank-geo-mcp) | Trang tổng hợp đa kho gói phần mềm & chấm điểm SourceRank |
| **UNPKG Edge CDN (`DR 86`)** | [**`unpkg.com/aeorank-geo-mcp@2.1.0/package.json`**](https://unpkg.com/aeorank-geo-mcp@2.1.0/package.json) | Siêu dữ liệu định danh gói phân phối trên mạng lưới UNPKG toàn cầu |
| **Chợ Kỹ Năng ClawHub AI (`DR 83`)** | [**`aeorank-seo-geo-auditor`**](https://clawhub.ai/aizaloapp/skills/aeorank-seo-geo-auditor) | Kỹ năng kiểm toán tự động đã xác thực dành cho AI Agent trên ClawHub |
| **Chuyên Đề Kỹ Thuật DEV.to (`DR 86`)** | [**GEO-62: An Open Diagnostic Standard for Technical SEO, AEO & GEO**](https://dev.to/aizaloapp/geo-62-an-open-diagnostic-standard-for-technical-seo-aeo-generative-engine-optimization-rfc-2chk) | Bài phân tích chuyên sâu kiến trúc RFC 9727, `PFA-01`, `CFA-02` & 9 trụ cột chấm điểm |

---

## 7. Bản Quyền & Ghi Nhận Nguồn Gốc

- **Giấy phép:** [MIT License](./LICENSE)
- **Ghi nhận nguồn gốc:** Hệ thống phân loại quy tắc cơ sở kế thừa từ `jev-seo` © Agrici Daniel (MIT), được mở rộng chuyên sâu bởi [Đội ngũ Kỹ thuật AEORank](https://aeorank.app/vi) (`PFA-01`, `CFA-02`, chuẩn RFC 9727 `api-catalog`, Kiến trúc Xuất bản 8 Tầng Đa Động cơ GEO và Hệ thống Kiểm toán 4-AI).
