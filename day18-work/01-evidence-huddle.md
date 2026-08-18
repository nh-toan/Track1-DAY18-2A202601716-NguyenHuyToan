# Chặng 1 — Tổng hợp evidence (15 phút)

**Case:** AI Support Radar (Case C)  
**Mục tiêu gate:** Chốt Hypothesis Problem có đủ user, situation, job, barrier, consequence; nêu được observation Day 17 và điều chưa biết.

> **Nguyên tắc làm việc:** Các mục “user đã làm/nói” là tóm tắt có trace về note Day 17, không phải fact phổ quát. Cột diễn giải là giả thuyết của nhóm để kiểm chứng tiếp.

## 1. Evidence huddle

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
| --- | --- | --- |
| **L01 — Learner**; `interview/notes.md` | Khi làm lab LoRA, learner kẹt `target_modules`/VRAM; đọc lại slide, đổi đáp án quiz và hỏi ChatGPT nhưng câu trả lời thiếu ngữ cảnh. Learner không hỏi Discord vì muộn/ngại bị đánh giá, nộp khi chưa tự tin, sau đó xem recording. Cost được ghi khoảng 3 giờ. | Workaround tự học/AI có thể không đủ bối cảnh lab; rào cản hỏi hỗ trợ có thể kéo dài thời gian kẹt. Một case này không chứng minh tất cả learner dùng AI đều struggle. |
| **P02 — Lab Coach**; `interview/notes_p02_ta.md` | Lab Coach kết hợp checkpoint, raise hand, Discord và quan sát màn hình. Khi learner không reach out, Lab Coach phải hỏi từng người. Khi lỗi chung, Lab Coach giải thích chung; quá tải thì ticket/peer-support/follow-up. | Visibility của Lab Coach bị phân mảnh; nhu cầu không chỉ là phát hiện signal mà còn là chọn hành động phù hợp dưới constraint capacity. |
| **P01 — Lab Coach**; `interview/notes_p01_ta.md` | Learner rụt rè đôi khi nói “đã xong/không cần hỗ trợ” dù còn trục trặc. Lab Coach triage theo mức cần hoặc thứ tự raise hand; setup, tài nguyên hoặc mạng có thể làm chậm cả team. | Im lặng/hoàn thành bề ngoài không đủ để kết luận learner ổn hoặc đang struggle. Capacity/hạ tầng là competing hypothesis. **Lưu ý:** recording hỏng; note/transcript là reconstructed-from-memory. |
| **L02 — Learner**; `interview/03_interview_runbook_01120_completed.md` | Learner dùng Gemini Assistant cạnh tài liệu, thấy tiện/rõ nhưng vẫn phải suy nghĩ hoặc tìm thêm; không tự xử lý “rất nhanh”. | Đây là counter-evidence: AI/search hiện có có thể giúp. Vấn đề không thể giản lược thành “learner dùng AI là thất bại”. Note thiếu concept, thời lượng và consequence cụ thể. |

## 2. Những điểm rút ra từ evidence

- **Behavior/workaround lặp lại:** learner tự xử lý bằng slide, quiz, AI/search, recording hoặc hỏi bạn trước khi/chưa hỏi Lab Coach; Lab Coach dùng nhiều nguồn signal và phải triage thủ công.
- **Evidence mâu thuẫn hoặc đáng chú ý:** AI/search vừa có thể thiếu context (L01) vừa có thể tiện/rõ (L02). Im lặng không đồng nghĩa struggle (P01), và biết sớm không đảm bảo Lab Coach có capacity để phản hồi (P02/P01).
- **Suy đoán cần tránh:** Không suy ra tần suất silent struggle, không coi dwell time/AI use/im lặng là proof, không coi dashboard/queue là solution được user xác nhận.

## 3. Hypothesis Problem tiếp tục

> **Khi learner đang làm lab hoặc học online và gặp lỗi kỹ thuật hoặc khái niệm chưa hiểu, learner gặp khó khăn trong việc xác định cách xử lý phù hợp và quyết định khi nào cần hỏi Lab Coach / mentor, vì ngại hỏi, chưa chắc câu hỏi của mình đúng, và workaround như AI/search có thể thiếu ngữ cảnh của lab; điều này dẫn đến mất thời gian, chậm tiến độ hoặc tiếp tục bài khi chưa tự tin đã hiểu đúng.**

### Kiểm tra cấu trúc

| Thành phần | Nội dung đã chốt |
| --- | --- |
| **User** | Learner trong lab hoặc online lesson; Lab Coach / mentor là actor hỗ trợ bị ảnh hưởng bởi visibility/triage. |
| **Situation** | Learner kẹt ở lỗi kỹ thuật hoặc khái niệm trong lúc làm bài/lab. |
| **Job** | Xác định bước xử lý phù hợp và quyết định có/ khi nào hỏi hỗ trợ. |
| **Barrier** | Ngại hỏi, chưa chắc câu hỏi đúng, workaround thiếu context, signal tới Lab Coach rời rạc. |
| **Consequence** | Mất thời gian, chậm tiến độ, tiếp tục khi chưa chắc hiểu; Lab Coach có thể phát hiện muộn và triage thủ công. |

### Evidence ban đầu hỗ trợ hypothesis

1. **L01:** learner đã thử slide/quiz/ChatGPT trước, không hỏi Discord vì muộn/ngại bị đánh giá và ghi nhận khoảng 3 giờ chi phí khi kẹt VRAM/`target_modules`.
2. **P02:** Lab Coach phải ghép checkpoint, raise hand, Discord và quan sát; learner không reach out làm Lab Coach phải hỏi từng người.

### Điều vẫn chưa được chứng minh

- Signal nào (hoặc tổ hợp signal nào) đủ hữu ích để Lab Coach follow-up mà không tạo false positive?
- Capacity/hạ tầng có phải nguyên nhân chính khiến hỗ trợ chậm hơn là thiếu visibility không?
- Learner có thấy một check-in chủ động từ Lab Coach hữu ích và tôn trọng autonomy/privacy không?
- Không có evidence rằng người dùng đã xác nhận AI Support Radar, priority queue hay dashboard là solution đúng.

## GATE 1 — Evidence continuity

- [x] Hypothesis có user, situation, job, barrier và consequence.
- [x] Có ít nhất một observation thực tế Day 17 (L01 và P02) hỗ trợ hypothesis.
- [x] Có counter-evidence (L02), competing hypothesis (capacity/hạ tầng) và điều chưa biết.
- [x] Không tuyên bố hypothesis/problem/solution đã validated.

