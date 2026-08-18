# Chặng 3 — Human–AI Design Pass (30 phút)

**Case:** AI Support Radar (Case C)  
**Đầu vào:** Ba đến bốn solution hypothesis trong `02-solution-options.md`.  
**Mục tiêu gate:** Với mỗi option, chỉ rõ người dùng làm gì, AI làm gì, AI được/không được tự hành động ở critical moment, evidence/uncertainty được hiển thị ra sao và user có đường kiểm soát/phục hồi.

> **Phạm vi:** Đây là review critical interaction có thể test, không phải thiết kế toàn bộ product và không thêm màn hình cho từng tiêu chí.

## 1. Bốn quyết định thiết kế dùng chung

### Expectation

- Trước khi AI hoạt động, Lab Coach và Learner biết AI chỉ **tóm tắt/nhóm dữ liệu có context**, không chẩn đoán learner đang struggle hay tự khẳng định nguyên nhân.
- Lab Coach/Learner thấy AI dựa vào nguồn nào, thời điểm nào và phần nào còn thiếu; AI không được trình bày suy đoán như sự thật.

### Role and agency

- **Lab Coach / mentor** giữ quyền quyết định hành động hỗ trợ: review, check-in, broadcast, follow-up, defer hoặc dismiss.
- **Learner** giữ quyền trả lời, bỏ qua, opt-out một check-in hoặc tự quyết định đính kèm dữ liệu khi chủ động gửi help brief; learner không bị phạt hoặc tự tăng ưu tiên nếu không phản hồi.
- AI hỗ trợ tổng hợp/draft/gợi ý; AI không tự gửi, tự escalation, tự route hay tự gắn nhãn learner.

### Evidence and uncertainty

- Mỗi insight phải ghi **nguồn signal**, **mốc thời gian**, **context có/thiếu** và **lý do** AI đưa ra gợi ý.
- `Im lặng`, `dwell time`, hoặc `AI/search use` đứng một mình luôn hiển thị là **insufficient evidence**, không phải proof.

### Control and recovery

- Lab Coach có thể edit, reject, dismiss, snooze/defer, xem evidence gốc và chọn quay lại luồng triage ban đầu.
- Learner có thể sửa, xóa đính kèm, lưu nháp, hủy gửi brief hoặc gửi correction nếu cần.
- Với mọi message/broadcast/request, thao tác gửi cần confirmation của người dùng (Lab Coach hoặc Learner); nếu đã gửi nhầm, người dùng có thể gửi correction/follow-up.

## 2. Human–AI Decision Table (Options A, B, C, D)

| Human–AI decision | **Option A — Evidence-backed triage digest** | **Option B — Coach-approved check-in** | **Option C — Common-issue cluster view** | **Option D — Learner-initiated help brief** |
| --- | --- | --- | --- | --- |
| **User làm gì? AI làm gì?** | **Lab Coach:** mở digest, đọc card và chọn check-in/follow-up/broadcast/defer/dismiss. **AI:** gộp evidence có context theo case, tạo summary và action menu. | **Lab Coach:** chọn case, chỉnh giọng điệu/nội dung, gửi hoặc bỏ bản nháp. **Learner:** trả lời, bỏ qua hoặc opt-out. **AI:** tạo draft check-in từ context được phép dùng. | **Lab Coach:** xem cụm, kiểm tra example/source, chọn broadcast, hỏi thêm, tạo follow-up riêng hoặc bỏ qua. **AI:** gom issue/error opt-in theo chủ đề và tạo draft broadcast. | **Learner:** chủ động mở “Cần hỗ trợ”, chọn loại hỗ trợ, mô tả lỗi/khái niệm, chọn điều đã thử và dữ liệu đính kèm, rồi sửa/xác nhận gửi hoặc tự tiếp tục. **Lab Coach:** review request và chọn cách phản hồi. **AI:** gợi ý cấu trúc brief và tóm tắt bản nháp. |
| **AI Act / Ask / Don’t Act? Vì sao?** | **Ask, không Act.** AI có thể đề xuất action nhưng phải hỏi/đợi Lab Coach chọn, vì dữ liệu không chắc chắn và action ảnh hưởng việc learner được tiếp cận hỗ trợ. | **Ask, không Act.** AI không được tự gửi message; Lab Coach phê duyệt vì tone, timing và context có thể gây cảm giác bị theo dõi. Learner vẫn quyết định phản hồi. | **Ask, không Act.** AI không tự broadcast hay ưu tiên learner cá nhân; Lab Coach review vì cụm có thể gom sai và broadcast có thể thiếu ngữ cảnh. | **Ask, không Act.** AI không tự đính kèm dữ liệu, không tự gửi request và không tự xếp ưu tiên. Việc chia sẻ thông tin thuộc quyền learner; Lab Coach giữ quyền chọn cách phản hồi. |
| **User hiểu capability/limit bằng gì?** | Header trên card: “Tóm tắt hỗ trợ triage, không phải đánh giá mức độ struggle.” Card nêu rõ chỉ sử dụng nguồn, thời điểm và dữ liệu hiện có. | Trước khi gửi, draft ghi: “Nội dung do AI soạn từ [context]; Lab Coach đã/ cần chỉnh và xác nhận.” Learner nhận được message nói rõ đây là check-in tùy chọn của Lab Coach. | Header: “Cụm issue tương tự, không phải danh sách learner cần ưu tiên.” Mỗi cụm nêu quy tắc gom và không khẳng định mọi learner trong cụm gặp cùng nguyên nhân. | Màn hình ghi rõ: “AI chỉ giúp bạn viết yêu cầu từ thông tin bạn nhập/chọn; AI không xem tiến độ ẩn và không bảo đảm phản hồi ngay.” Learner thấy chính xác nội dung trước khi gửi. |
| **Evidence/uncertainty được thể hiện thế nào?** | Card có `Nguồn`, `Timeline`, `Điều biết được`, `Điều chưa biết`, `Vì sao AI gợi ý`. Ví dụ: “Learner tự báo VRAM; chưa có request hỗ trợ; không đủ dữ liệu để kết luận mức độ kẹt.” | Draft cho Lab Coach xem phần context nguồn và một badge `thiếu thông tin` khi không có learner self-report. Draft không được dùng ngôn ngữ khẳng định như “bạn đang gặp khó khăn”. | Cụm hiển thị số case, ví dụ issue (ẩn định danh khi không cần), khoảng thời gian, nguồn text và mức độ tương đồng. Cảnh báo: “Cần Lab Coach review trước khi broadcast.” | Brief chia rõ `Learner tự mô tả`, `Learner chọn đính kèm`, `Điều đã thử` và `Thông tin còn thiếu`. Nếu bỏ trống context, AI hiện badge “Cần làm rõ thêm”. |
| **User kiểm soát và recovery thế nào?** | Lab Coach có `Xem evidence`, `Sửa action`, `Dismiss`, `Snooze/Defer`, `Đánh dấu không liên quan`. Sau dismiss/defer, quay lại digest và có thể mở card gốc. | Lab Coach có `Edit`, `Không gửi`, `Lưu nháp`, `Gửi sau confirmation`. Learner có `Trả lời`, `Bỏ qua`, `Không nhận check-in tương tự`. | Lab Coach có `Xem ví dụ`, `Tách case`, `Chỉnh draft`, `Không broadcast`, `Tạo follow-up riêng`. Sau broadcast, có thể gửi correction hoặc chuyển case về triage digest. | Learner có `Sửa`, `Xóa đính kèm`, `Lưu nháp`, `Không gửi/Tự tiếp tục` và `Gửi sau confirmation`. Lab Coach có `Yêu cầu làm rõ`, `Defer`, `Chuyển ticket` hoặc phản hồi 1:1. |

## 3. Critical interaction cần đưa vào prototype

### Option A — Triage card

- **Critical moment:** Lab Coach thấy card cho learner có một self-report về VRAM nhưng chưa có help request.
- **Prototype phải kiểm tra:** Lab Coach có hiểu card không nói learner “đang struggle” không; Lab Coach chọn action gì và dựa vào evidence nào; Lab Coach có dùng `defer/dismiss` khi chưa đủ context không.
- **Không được prototype:** tự highlight learner là ưu tiên cao chỉ vì im lặng/dwell time/AI use.

### Option B — Check-in approval

- **Critical moment:** Lab Coach xem và chỉnh bản nháp check-in trước khi gửi; learner nhận message và chọn phản hồi/opt-out.
- **Prototype phải kiểm tra:** Lab Coach có thấy đủ quyền chỉnh/không gửi không; learner hiểu check-in là tùy chọn không; cách diễn đạt nào tạo cảm giác hỗ trợ thay vì giám sát.
- **Không được prototype:** AI tự gửi check-in hoặc coi việc learner không phản hồi là signal để escalated.

### Option C — Cluster/broadcast review

- **Critical moment:** Lab Coach thấy cụm VRAM/configuration gồm nhiều issue tương tự và quyết định broadcast hay follow-up riêng.
- **Prototype phải kiểm tra:** Lab Coach có tin cụm đủ để hành động không; Lab Coach có tìm/nhìn thấy sự khác biệt cần tách case không; broadcast có giúp tiết kiệm capacity mà không bỏ sót learner cần 1:1 không.
- **Không được prototype:** tự broadcast hoặc tự suy luận tất cả learner trong cụm có cùng nguyên nhân/mức độ khó khăn.

### Option D — Learner-initiated help brief

- **Critical moment:** Learner kẹt lỗi kỹ thuật/khái niệm, chọn bấm "Cần hỗ trợ", chọn dữ liệu đính kèm và xem/sửa AI draft brief trước khi bấm gửi cho Lab Coach.
- **Prototype phải kiểm tra:** Learner có thấy dễ tạo request hơn viết tự do không; learner có hiểu dữ liệu nào được gửi không; Lab Coach nhận request có đủ bối cảnh để xử lý nhanh không.
- **Không được prototype:** AI tự lấy dữ liệu ẩn/tiến độ mà learner chưa đồng ý chia sẻ, hoặc AI tự gửi request thay learner.

## 4. Feedback and data check

| Câu hỏi kiểm tra | Quyết định cho prototype |
| --- | --- |
| Feedback có ảnh hưởng phiên hiện tại/lần sau không? | `Dismiss`, `snooze`, `edit` và `opt-out` có hiệu lực ngay trong **phiên prototype hiện tại**. Không giả định lưu lịch sử/huấn luyện mô hình ở giai đoạn test này. |
| Dữ liệu nhạy cảm được learner rút quyền không? | Có. Learner có thể không chia sẻ self-report, bỏ qua check-in, chọn đính kèm hoặc opt-out message tương tự. Prototype chỉ hiển thị data đã được scenario/learner cho phép. |
| Khi AI không chắc, system làm gì? | Hiển thị thiếu context và đề nghị Lab Coach xem evidence/hỏi thêm/defer (ở A/B/C) hoặc báo badge "Cần làm rõ thêm" ở brief (ở D); không tự tạo priority, message hay escalation. |
| Khi Lab Coach thiếu capacity, system làm gì? | Cho phép Lab Coach chọn defer, ticket hoặc peer-support và diễn đạt rõ thời gian/khả năng phản hồi; không hứa hỗ trợ tức thì. |

## GATE 3 — Human control

- [x] Mỗi option (A, B, C, D) nêu rõ user làm gì và AI làm gì.
- [x] AI chỉ **Ask/Assist**, không tự Act tại critical moment có rủi ro.
- [x] Capability, limit, evidence và uncertainty được hiển thị cụ thể.
- [x] User (chính và hỗ trợ) có đường edit/reject/dismiss/snooze/defer hoặc opt-out/không gửi để kiểm soát và phục hồi.
- [x] Có data/feedback check cho dữ liệu nhạy cảm và quyền rút lại của learner.

