# Chặng 2 — Chọn ba Solution Options (20 phút)

**Case:** AI Support Radar (Case C)  
**Điểm xuất phát:** Hypothesis Problem ở `01-evidence-huddle.md`.  
**Mục tiêu gate:** Ba option cùng user, situation, task và desired outcome; khác nhau có ý nghĩa ở mechanism/cách phân chia công việc Human–AI.

> **Lưu ý:** Day 17 chỉ có Solution Parking Lot, không có solution ranking được participant xác nhận. Ba option dưới đây là **solution hypotheses** để tạo micro-prototype, không phải lời hứa tính năng hay conclusion từ interview.

## 1. Giữ nguyên quyết định chung cho A/B/C

| Thành phần | Quyết định chung cho A/B/C |
| --- | --- |
| **Target user** | Lab Coach / mentor đang hỗ trợ learner trong lab hoặc online lesson. Learner là người bị ảnh hưởng và giữ quyền chọn phản hồi/opt-out. |
| **Situation** | Trong một buổi lab có thời gian/capacity hạn chế; learner có thể kẹt nhưng chưa chủ động hỏi, còn Lab Coach nhận các tín hiệu rời rạc. |
| **Task** | Quyết định hỗ trợ gì trước: check-in 1:1, broadcast hướng dẫn chung, follow-up/ticket, hay defer khi chưa đủ evidence/capacity. |
| **Desired outcome** | Lab Coach chọn được hành động phù hợp và giải thích được lý do; learner nhận hỗ trợ tôn trọng autonomy/privacy; không coi một behavioral signal là proof của struggle. |
| **Content/data feature** | Chỉ dùng dữ liệu có ngữ cảnh và/hoặc được learner đồng ý chia sẻ: checkpoint/issue description, help request, self-reported status, error chủ đề, thời điểm, nguồn signal và khả năng của Lab Coach. Không dùng dwell time, AI/search use hoặc im lặng một mình để gắn nhãn learner. |

## 2. Ba cách giải

| Thành phần khác biệt | **Option A — Evidence-backed triage digest** | **Option B — Coach-approved check-in** | **Option C — Common-issue cluster view** |
| --- | --- | --- | --- |
| **Solution mechanism** | AI tổng hợp nhiều signal có ngữ cảnh thành evidence card theo từng learner/case để Lab Coach review và chọn hành động. | AI soạn một check-in ngắn, dựa trên issue/context đã được learner chia sẻ; Lab Coach duyệt/chỉnh trước khi gửi. | AI nhóm các issue/error được learner opt-in chia sẻ thành cụm lỗi chung; Lab Coach review rồi chọn broadcast hoặc follow-up riêng. |
| **User làm gì?** | Lab Coach đọc nguồn, timeline và phần thiếu; chọn check-in, follow-up, broadcast, defer hoặc dismiss. | Lab Coach chọn recipient, sửa giọng điệu/nội dung, gửi hoặc bỏ qua. Learner có thể trả lời, bỏ qua hoặc opt-out. | Lab Coach xem cụm, kiểm tra ví dụ/source, chọn broadcast hướng dẫn chung, hỏi thêm, tạo follow-up riêng hoặc bỏ qua. |
| **AI làm gì?** | Tóm tắt/nhóm evidence, nêu uncertainty và đề xuất **các** action khả dĩ; không tự ưu tiên hay gửi hỗ trợ. | Tạo bản nháp có thể chỉnh sửa, gợi ý một câu hỏi làm rõ; không tự gửi, không tự escalation. | Phát hiện điểm chung từ issue/error text được phép dùng, nêu số lượng/mức không chắc chắn và draft nội dung broadcast; không tự broadcast. |
| **Trigger** | Lab Coach chủ động mở digest khi bắt đầu checkpoint hoặc khi có request/signal mới; không có auto-alert từ một signal đơn lẻ. | Lab Coach khởi tạo check-in từ một case đã có context, hoặc sau learner tự báo “cần hỗ trợ”; không tự nhắn chỉ vì learner im lặng. | Lab Coach mở khi nhiều learner opt-in báo lỗi/issue tương tự hoặc khi Lab Coach muốn review checkpoint theo chủ đề. |
| **Trade-off chính** | Evidence minh bạch và hỗ trợ triage tốt, nhưng card có thể nhiều thông tin và vẫn tốn thời gian review. | Giảm rào cản tiếp cận với learner ngại hỏi, nhưng tạo thêm thông điệp/notification và cần bảo vệ quyền không phản hồi. | Hỗ trợ lỗi lặp lại, tiết kiệm capacity, nhưng có nguy cơ làm mờ nhu cầu cá nhân hoặc gom sai các lỗi chỉ trông giống nhau. |

## 3. Mô tả ngắn từng option để dùng khi prototype

### Option A — Evidence-backed triage digest

Lab Coach nhận một danh sách **evidence card**, mỗi card ghi rõ: nguồn signal, thời điểm, issue/checkpoint liên quan, thông tin còn thiếu và các hành động có thể chọn. Ví dụ: *“Learner A tự báo ‘kẹt VRAM’ sau checkpoint 2, đã thử theo slide; chưa có help request. Không đủ dữ liệu để kết luận mức độ kẹt. Gợi ý: mở check-in / xem chi tiết / defer.”*

- **Giá trị cần test:** Card có giúp Lab Coach hành động nhanh hơn mà vẫn hiểu lý do và uncertainty không?
- **Rủi ro cần test:** Card có biến thành một priority queue “hộp đen” hoặc làm Lab Coach quá tải thông tin không?

### Option B — Coach-approved check-in

Lab Coach mở một case có context và nhận bản nháp check-in, ví dụ: *“Mình thấy bạn đã ghi nhận lỗi VRAM ở checkpoint 2. Bạn muốn (A) nhận hướng dẫn giảm VRAM, (B) đặt câu hỏi cho Lab Coach, hay (C) tự tiếp tục và không cần follow-up?”* Lab Coach sửa và chủ động gửi; learner có thể trả lời, bỏ qua hoặc opt-out.

- **Giá trị cần test:** Check-in có giảm barrier hỏi hỗ trợ mà không tạo cảm giác bị theo dõi không?
- **Rủi ro cần test:** Learner có diễn giải message như một phán xét/ép buộc phải trả lời không?

### Option C — Common-issue cluster view

Lab Coach thấy một cụm như: *“4 learner đã opt-in chia sẻ lỗi liên quan đến VRAM/configuration trong 20 phút qua; 2 người đã thử đọc lại slide. Cụm chỉ dựa vào nội dung issue, không suy ra họ đang struggle.”* Lab Coach chọn draft broadcast, chỉnh sửa, gửi cho nhóm liên quan hoặc tạo follow-up riêng.

- **Giá trị cần test:** Cụm có giúp Lab Coach xử lý lỗi chung nhanh hơn và giải phóng capacity không?
- **Rủi ro cần test:** Việc gom cụm có che mất learner cần hỗ trợ 1:1 hoặc broadcast sai ngữ cảnh không?

## 4. Distance check

- **A khác B:** A ưu tiên *Lab Coach review evidence rồi tự chọn action*; B ưu tiên *Lab Coach chủ động tạo và duyệt một cuộc check-in tới learner*. A là công cụ triage, B là công cụ giao tiếp có human approval.
- **B khác C:** B giải quyết *một learner/case* và cần consent/opt-out ở mức cá nhân; C giải quyết *pattern nhiều learner* và quyết định broadcast hay follow-up.
- **A khác C:** A nhóm evidence theo **case/learner** để giữ bối cảnh; C nhóm theo **issue chung** để tối ưu xử lý hàng loạt. C không tự tạo ranking cá nhân.

> Không có option nào chỉ khác label, layout hoặc wording. Cả ba cùng giải quyết một task, nhưng khác mechanism, trigger, phân công Human–AI và trade-off.

## GATE 2 — Meaningful options

- [x] A/B/C giữ nguyên target user, situation, task và desired outcome.
- [x] A/B/C khác nhau ở cơ chế, vai trò user/AI, trigger và trade-off.
- [x] Có ít nhất ba option (không chỉ một feature với ba tên khác nhau).
- [x] Đã nêu rõ các rủi ro để test; chưa chốt option thắng trước khi prototype/test.

<<<<<<< HEAD

## 5. Option D dự phòng — Learner-initiated help brief

> **Vai trò:** Đây là candidate thứ tư để nhóm cân nhắc/so sánh. Khi đi qua Gate 2 chính thức, nhóm vẫn chọn **ba** option mạnh nhất để prototype.

### Cơ chế

Learner chủ động bấm **“Cần hỗ trợ”**, chọn loại hỗ trợ mong muốn và mô tả ngắn: lỗi/khái niệm đang kẹt, điều đã thử, và checkpoint liên quan. AI chỉ hỗ trợ biến thông tin đó thành một **help brief** rõ ràng. Learner xem, sửa, chọn dữ liệu đính kèm và xác nhận gửi; TA/mentor nhận một request có context rồi tự quyết định check-in, hỗ trợ 1:1, hướng dẫn chung, ticket hoặc defer.

| Thành phần | Option D — Learner-initiated help brief |
| --- | --- |
| **Solution mechanism** | Learner tự khởi tạo một support request có cấu trúc; AI giúp tổ chức/tóm tắt thông tin đã được learner cung cấp hoặc đồng ý đính kèm. |
| **User làm gì?** | **Learner:** chọn loại hỗ trợ, viết/sửa help brief, quyết định dữ liệu nào được gửi và xác nhận gửi hoặc tự tiếp tục. **TA:** review request và chọn cách phản hồi. |
| **AI làm gì?** | Gợi ý một câu hỏi làm rõ, tóm tắt symptom–điều đã thử–mục tiêu hỗ trợ và tạo bản nháp. AI không tự đính kèm dữ liệu, gửi request hay xếp mức ưu tiên. |
| **Trigger** | Chỉ do learner chủ động chọn “Cần hỗ trợ”; không trigger từ im lặng, dwell time, AI/search use hoặc suy luận hành vi. |
| **Trade-off chính** | Autonomy/privacy cao và TA nhận được context rõ hơn, nhưng không giải quyết hết silent struggle của learner không khởi tạo request; cần test liệu form có làm tăng hay giảm barrier hỏi hỗ trợ. |

### Giá trị và rủi ro cần test

- **Giá trị:** Learner có cảm thấy việc gửi request dễ hơn so với viết một câu hỏi tự do/đợi TA không? TA có nhận được đủ bối cảnh để giảm số lượt hỏi lại không?
- **Rủi ro:** Form có khiến learner thấy phải cung cấp quá nhiều thông tin hoặc bỏ cuộc trước khi gửi không? Learner có hiểu AI chỉ dựa trên dữ liệu họ chọn chia sẻ không?

### Distance check với A/B/C

- **D khác A:** A bắt đầu từ evidence mà TA review; D bắt đầu từ **request do learner chủ động tạo**. A hỗ trợ TA triage, D giảm barrier để learner diễn đạt nhu cầu.
- **D khác B:** B là **TA-initiated check-in** tới learner; D là **learner-initiated request** tới TA. B kiểm tra cách tiếp cận chủ động của mentor, D kiểm tra autonomy và khả năng tự gọi hỗ trợ.
- **D khác C:** C xử lý pattern lỗi của nhiều learner; D giữ ngữ cảnh và quyền chọn dữ liệu của **một learner**. C ưu tiên broadcast/cluster, D ưu tiên request hỗ trợ có cấu trúc.
=======
>>>>>>> 4de4edd35abb74091a255faf670abade842aabd1
