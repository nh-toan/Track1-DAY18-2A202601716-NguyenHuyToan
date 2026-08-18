# Chặng 3 — Human–AI Design Pass (30 phút)

**Case:** AI Support Radar (Case C)  
**Đầu vào:** Ba solution hypothesis trong `02-solution-options.md`.  
**Mục tiêu gate:** Với mỗi option, chỉ rõ người dùng làm gì, AI làm gì, AI được/không được tự hành động ở critical moment, evidence/uncertainty được hiển thị ra sao và user có đường kiểm soát/phục hồi.

> **Phạm vi:** Đây là review critical interaction có thể test, không phải thiết kế toàn bộ product và không thêm màn hình cho từng tiêu chí.

## 1. Bốn quyết định thiết kế dùng chung

### Expectation

- Trước khi AI hoạt động, TA biết AI chỉ **tóm tắt/nhóm dữ liệu có context**, không chẩn đoán learner đang struggle.
- TA thấy AI dựa vào nguồn nào, thời điểm nào và phần nào còn thiếu; AI không được trình bày suy đoán như sự thật.

### Role and agency

- **TA/mentor** giữ quyền quyết định hành động hỗ trợ: review, check-in, broadcast, follow-up, defer hoặc dismiss.
- **Learner** giữ quyền trả lời, bỏ qua hoặc opt-out một check-in; learner không bị phạt hoặc tự tăng ưu tiên nếu không phản hồi.
- AI hỗ trợ tổng hợp/draft/gợi ý; AI không tự gửi, tự escalation, tự route hay tự gắn nhãn learner.

### Evidence and uncertainty

- Mỗi insight phải ghi **nguồn signal**, **mốc thời gian**, **context có/thiếu** và **lý do** AI đưa ra gợi ý.
- `Im lặng`, `dwell time`, hoặc `AI/search use` đứng một mình luôn hiển thị là **insufficient evidence**, không phải proof.

### Control and recovery

- TA có thể edit, reject, dismiss, snooze/defer, xem evidence gốc và chọn quay lại luồng triage ban đầu.
- Với mọi message/broadcast, thao tác gửi cần confirmation của TA; nếu đã gửi nhầm, TA có thể gửi correction/follow-up và đánh dấu feedback để AI không lặp lại trong phiên hiện tại.

## 2. Human–AI Decision Table

| Human–AI decision | **Option A — Evidence-backed triage digest** | **Option B — Mentor-approved check-in** | **Option C — Common-issue cluster view** |
| --- | --- | --- | --- |
| **User làm gì? AI làm gì?** | **TA:** mở digest, đọc card và chọn check-in/follow-up/broadcast/defer/dismiss. **AI:** gộp evidence có context theo case, tạo summary và action menu. | **TA:** chọn case, chỉnh giọng điệu/nội dung, gửi hoặc bỏ bản nháp. **Learner:** trả lời, bỏ qua hoặc opt-out. **AI:** tạo draft check-in từ context được phép dùng. | **TA:** xem cụm, kiểm tra example/source, chọn broadcast, hỏi thêm, tạo follow-up riêng hoặc bỏ qua. **AI:** gom issue/error opt-in theo chủ đề và tạo draft broadcast. |
| **AI Act / Ask / Don’t Act? Vì sao?** | **Ask, không Act.** AI có thể đề xuất action nhưng phải hỏi/đợi TA chọn, vì dữ liệu không chắc chắn và action ảnh hưởng việc learner được tiếp cận hỗ trợ. | **Ask, không Act.** AI không được tự gửi message; TA phê duyệt vì tone, timing và context có thể gây cảm giác bị theo dõi. Learner vẫn quyết định phản hồi. | **Ask, không Act.** AI không tự broadcast hay ưu tiên learner cá nhân; TA review vì cụm có thể gom sai và broadcast có thể thiếu ngữ cảnh. |
| **User hiểu capability/limit bằng gì?** | Header trên card: “Tóm tắt hỗ trợ triage, không phải đánh giá mức độ struggle.” Card nêu rõ chỉ sử dụng nguồn, thời điểm và dữ liệu hiện có. | Trước khi gửi, draft ghi: “Nội dung do AI soạn từ [context]; TA đã/ cần chỉnh và xác nhận.” Learner nhận được message nói rõ đây là check-in tùy chọn của TA. | Header: “Cụm issue tương tự, không phải danh sách learner cần ưu tiên.” Mỗi cụm nêu quy tắc gom và không khẳng định mọi learner trong cụm gặp cùng nguyên nhân. |
| **Evidence/uncertainty được thể hiện thế nào?** | Card có `Nguồn`, `Timeline`, `Điều biết được`, `Điều chưa biết`, `Vì sao AI gợi ý`. Ví dụ: “Learner tự báo VRAM; chưa có request hỗ trợ; không đủ dữ liệu để kết luận mức độ kẹt.” | Draft cho TA xem phần context nguồn và một badge `thiếu thông tin` khi không có learner self-report. Draft không được dùng ngôn ngữ khẳng định như “bạn đang gặp khó khăn”. | Cụm hiển thị số case, ví dụ issue (đã ẩn định danh khi không cần), khoảng thời gian, nguồn text và mức độ tương đồng. Có cảnh báo: “Cần TA review trước khi broadcast; có thể có nhu cầu 1:1 ngoài cụm.” |
| **User kiểm soát và recovery thế nào?** | TA có `Xem evidence`, `Sửa action`, `Dismiss`, `Snooze/Defer`, `Đánh dấu không liên quan`; không action nào được tự gửi. Sau dismiss/defer, TA quay lại digest và có thể mở card gốc. | TA có `Edit`, `Không gửi`, `Lưu nháp`, `Gửi sau confirmation`. Learner có `Trả lời`, `Bỏ qua`, `Không muốn nhận check-in tương tự`. TA có thể gửi correction/follow-up nếu message chưa phù hợp. | TA có `Xem ví dụ`, `Tách case`, `Chỉnh draft`, `Không broadcast`, `Tạo follow-up riêng`. Sau broadcast, TA có thể gửi correction, đóng cụm hoặc chuyển một case về triage digest. |

## 3. Critical interaction cần đưa vào prototype

### Option A — Triage card

- **Critical moment:** TA thấy card cho learner có một self-report về VRAM nhưng chưa có help request.
- **Prototype phải kiểm tra:** TA có hiểu card không nói learner “đang struggle” không; TA chọn action gì và dựa vào evidence nào; TA có dùng `defer/dismiss` khi chưa đủ context không.
- **Không được prototype:** tự highlight learner là ưu tiên cao chỉ vì im lặng/dwell time/AI use.

### Option B — Check-in approval

- **Critical moment:** TA xem và chỉnh bản nháp check-in trước khi gửi; learner nhận message và chọn phản hồi/opt-out.
- **Prototype phải kiểm tra:** TA có thấy đủ quyền chỉnh/không gửi không; learner hiểu check-in là tùy chọn không; cách diễn đạt nào tạo cảm giác hỗ trợ thay vì giám sát.
- **Không được prototype:** AI tự gửi check-in hoặc coi việc learner không phản hồi là signal để escalated.

### Option C — Cluster/broadcast review

- **Critical moment:** TA thấy cụm VRAM/configuration gồm nhiều issue tương tự và quyết định broadcast hay follow-up riêng.
- **Prototype phải kiểm tra:** TA có tin cụm đủ để hành động không; TA có tìm/nhìn thấy sự khác biệt cần tách case không; broadcast có giúp tiết kiệm capacity mà không bỏ sót learner cần 1:1 không.
- **Không được prototype:** tự broadcast hoặc tự suy luận tất cả learner trong cụm có cùng nguyên nhân/mức độ khó khăn.

## 4. Feedback and data check

| Câu hỏi kiểm tra | Quyết định cho prototype |
| --- | --- |
| Feedback có ảnh hưởng phiên hiện tại/lần sau không? | `Dismiss`, `snooze`, `edit` và `opt-out` có hiệu lực ngay trong **phiên prototype hiện tại**. Không giả định lưu lịch sử/huấn luyện mô hình ở giai đoạn test này. |
| Dữ liệu nhạy cảm được learner rút quyền không? | Có. Learner có thể không chia sẻ self-report, bỏ qua check-in hoặc opt-out message tương tự. Prototype chỉ hiển thị data đã được scenario/learner cho phép. |
| Khi AI không chắc, system làm gì? | Hiển thị thiếu context và đề nghị TA xem evidence/hỏi thêm/defer; không tự tạo priority, message hay escalation. |
| Khi TA thiếu capacity, system làm gì? | Cho phép TA chọn defer, ticket hoặc peer-support và diễn đạt rõ thời gian/khả năng phản hồi; không hứa hỗ trợ tức thì. |

## GATE 3 — Human control

- [x] Mỗi option nêu rõ user làm gì và AI làm gì.
- [x] AI chỉ **Ask/Assist**, không tự Act tại critical moment có rủi ro.
- [x] Capability, limit, evidence và uncertainty được hiển thị cụ thể.
- [x] User có đường edit/reject/dismiss/snooze/defer hoặc opt-out để kiểm soát và phục hồi.
- [x] Có data/feedback check cho dữ liệu nhạy cảm và quyền rút lại của learner.


## 5. Human–AI Decision Pass — Option D dự phòng: Learner-initiated help brief

> **Critical interaction:** Learner muốn nhờ hỗ trợ cho lỗi/khái niệm đang kẹt nhưng chưa biết phải viết gì hoặc có nên chia sẻ checkpoint nào. AI chỉ hỗ trợ cấu trúc thông tin; learner xác nhận trước khi bất cứ dữ liệu nào tới TA.

| Human–AI decision | Option D — Learner-initiated help brief |
| --- | --- |
| **User làm gì? AI làm gì?** | **Learner:** chủ động mở “Cần hỗ trợ”, chọn loại hỗ trợ, mô tả lỗi/khái niệm, chọn điều đã thử và dữ liệu đính kèm, rồi sửa/xác nhận gửi hoặc tự tiếp tục. **TA:** review request và chọn check-in, trả lời, broadcast, ticket hoặc defer. **AI:** đề xuất cấu trúc symptom–điều đã thử–mục tiêu hỗ trợ, tóm tắt bản nháp và hỏi một câu làm rõ khi cần. |
| **AI Act / Ask / Don’t Act? Vì sao?** | **Ask, không Act.** AI có thể hỏi learner có muốn đưa checkpoint/điều đã thử vào brief không, nhưng không tự lấy/đính kèm dữ liệu, không tự gửi request và không tự xếp ưu tiên. Việc chia sẻ thông tin và gọi hỗ trợ thuộc quyền learner; TA giữ quyết định phản hồi. |
| **User hiểu capability/limit bằng gì?** | Màn hình nói rõ: “AI chỉ giúp bạn viết yêu cầu từ thông tin bạn nhập/chọn; AI không xem tiến độ ẩn, không đánh giá năng lực và không bảo đảm TA phản hồi ngay.” Trước khi gửi, learner thấy phần nào sẽ được gửi cho TA. |
| **Evidence/uncertainty được thể hiện thế nào?** | Brief chia rõ `Learner tự mô tả`, `Learner chọn đính kèm`, `Điều đã thử`, `Câu hỏi cần hỗ trợ` và `Thông tin còn thiếu`. Nếu learner bỏ trống context, AI hiện “TA có thể cần hỏi thêm”, thay vì suy đoán nguyên nhân hoặc mức độ kẹt. |
| **User kiểm soát và recovery thế nào?** | Learner có `Sửa`, `Xóa đính kèm`, `Lưu nháp`, `Không gửi/Tự tiếp tục` và `Gửi sau confirmation`; sau khi gửi có thể gửi correction hoặc yêu cầu hủy follow-up nếu chưa được xử lý. TA có thể `Yêu cầu làm rõ`, `Defer`, `Chuyển ticket` hoặc phản hồi; không có thao tác nào tự động thay learner quyết định chia sẻ. |

### Điều cần test ở Option D

1. Learner có hoàn thành help brief và gửi request dễ hơn so với việc tự viết câu hỏi tự do không?
2. Learner có hiểu chính xác dữ liệu nào được gửi và có cảm thấy đủ quyền `Không gửi/Tự tiếp tục` không?
3. TA có nhận được đủ context để chọn cách hỗ trợ mà không phải hỏi lại quá nhiều không?
4. Khi learner không khởi tạo request, Option D không cung cấp signal nào cho TA—đây là giới hạn được hiển thị rõ, không phải lỗi để AI tự suy đoán.

### Feedback and data check cho Option D

- `Sửa/Xóa/Lưu nháp/Không gửi` có hiệu lực ngay trong phiên hiện tại; prototype không lưu dữ liệu để huấn luyện mô hình.
- Learner chọn từng checkpoint/đính kèm trước khi chia sẻ và có thể từ chối mọi đính kèm.
- Feedback của TA về brief chỉ hỗ trợ phản hồi trong case hiện tại; không tự thay đổi cách AI đánh giá learner ở các phiên sau.
