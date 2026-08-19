# Chặng 5 — Chuẩn bị test: Option D (15 phút)

**Prototype cần test:** `prototype-option-d/index.html`  
**Option:** D — Learner-initiated help brief  
**Mục tiêu:** Quan sát learner có hiểu quyền kiểm soát dữ liệu và có hoàn thành được một yêu cầu hỗ trợ có context hay không. Đây không phải bài kiểm tra khả năng của tester.

## 1. Context và outcome task

### Relevant context

Mở đầu bằng một câu ngắn, tối đa khoảng 2 phút:

> “Gần đây bạn có từng gặp lỗi hoặc khái niệm chưa hiểu trong lab và phải tự tìm cách xử lý trước khi biết có nên hỏi TA/mentor không?”

Nếu tester chưa có trải nghiệm liên quan, dùng scenario trung tính:

> “Hãy tưởng tượng bạn đang làm Lab LoRA ở Checkpoint 2, gặp lỗi VRAM và đã thử đọc lại slide nhưng chưa chắc bước tiếp theo.”

Không khẳng định rằng tester chắc chắn cần AI/TA, không dẫn dắt họ phải thấy vấn đề.

### Outcome task

> “Trong tình huống này, hãy dùng cách bạn thấy phù hợp để tạo một yêu cầu hỗ trợ cho TA về lỗi VRAM. Chỉ chia sẻ những thông tin bạn muốn chia sẻ.”

Task mô tả **kết quả cần đạt**, không nói họ phải bấm nút nào, chọn checkbox nào hay phải gửi request.

## 2. Observation focus

Chỉ theo dõi tối đa ba điểm:

1. **First action và hesitation:** Tester bắt đầu ở đâu? Họ có do dự khi chọn loại hỗ trợ hoặc trước lúc chia sẻ dữ liệu không?
2. **Evidence read/ignored và misunderstanding:** Tester có đọc disclosure “AI chỉ dùng thông tin bạn nhập/chọn” không? Họ có hiểu AI không tự lấy dữ liệu hoặc không bảo đảm TA phản hồi ngay không?
3. **Control/recovery:** Tester có nhận ra có thể bỏ chọn dữ liệu, quay lại sửa hoặc chọn `Tự tiếp tục, không gửi` không? Khi đổi ý, họ làm gì?

### Note sheet tối thiểu

| Thời điểm | Hành động/lời nói quan sát được | Evidence màn hình | Diễn giải tạm thời | Câu hỏi follow-up |
| --- | --- | --- | --- | --- |
| Bắt đầu task |  |  |  |  |
| Chọn/chia sẻ dữ liệu |  |  |  |  |
| Preview hoặc tự tiếp tục |  |  |  |  |
| Kết thúc |  |  |  |  |

## 3. Luật facilitation

1. Tester tự cầm chuột/bàn phím và tự điều khiển prototype.
2. Đọc nguyên outcome task một lần; không chỉ click path hay giải thích các icon/nút/checkbox.
3. Không hỏi câu dẫn hướng như “Bạn có thích không?” hoặc “Bạn có thấy AI hữu ích không?”.
4. Khi tester im lặng, dùng câu trung lập: **“Bạn có thể nói suy nghĩ của mình nhé.”**
5. Khi tester hỏi “cái này hoạt động như thế nào?”, không giải thích ngay; hỏi lại: **“Theo bạn, nó nên hoạt động như thế nào?”**
6. Chỉ hỗ trợ khi có lỗi kỹ thuật khiến tester không thể tiếp tục; ghi rõ đó là intervention của facilitator.

## 4. Debrief ngắn sau task

Hỏi sau khi tester hoàn thành/dừng task:

1. “Bạn hiểu thông tin nào sẽ được gửi cho TA?”
2. “Nếu không muốn gửi phần nào đó, bạn sẽ làm gì?”
3. “Điều gì khiến bạn quyết định gửi hoặc không gửi yêu cầu?”
4. “Bạn mong TA phản hồi/hoạt động như thế nào sau khi nhận brief?”

Không kết luận solution đúng chỉ vì một tester hoàn thành task. Ghi cả evidence hỗ trợ lẫn evidence làm giả thuyết ban đầu.

## 5. Tiêu chí ghi nhận sau test

| Câu hỏi cần trả lời | Tín hiệu quan sát được |
| --- | --- |
| Learner có hiểu agency không? | Họ mô tả đúng quyền chọn/bỏ dữ liệu, sửa hoặc không gửi. |
| Brief có giảm barrier diễn đạt không? | Họ viết được yêu cầu mà không cần facilitator viết hộ; nêu rõ chỗ vẫn khó. |
| AI disclosure có đủ rõ không? | Họ phân biệt được AI tóm tắt input với AI theo dõi/đánh giá họ. |
| TA có nhận đủ context không? | Đánh giá qua phần brief được tạo và câu hỏi follow-up cần thiết; chưa khẳng định nếu chưa test với TA. |

## Gate 5 — Ready to test

- [x] Có một relevant context ngắn hoặc scenario trung tính.
- [x] Có một outcome task, không mô tả click path.
- [x] Có ba observation focus có thể ghi nhận.
- [x] Có luật facilitation chống dẫn dắt và script phục hồi khi tester im lặng/hỏi cách hoạt động.
- [x] Có note sheet và debrief để ghi evidence, misunderstanding và iteration tiếp theo.
