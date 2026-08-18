# Day 18 — Input Pack: AI Support Radar (Case C)

> **Mục đích:** Bộ đầu vào tiếp nối Case C từ Day 17 để thực hiện Day 18 “Multiple Prototypes — Human–AI design”.
>
> **Nguồn Day 17:** `D:\2026. AI IN ACTION\LAB\DAY17-2A202601716-NguyenHuyToan`.
>
> **Trạng thái bằng chứng:** Nội dung được tổng hợp từ 4 lượt practice interview và reflection Day 17. Đây là bằng chứng định hướng để tạo/test prototype, **không chứng minh problem hay solution đã validated**. Nhóm chỉ có thể kết luận: *hypothesis đã được thử qua các gợi ý bên dưới; prototype tiếp theo sẽ kiểm chứng các giả định còn mở.*

## 1. Case được tiếp tục

- **Case:** Case C — AI Support Radar.
- **Actor chính:** Learner trong lab hoặc online lesson; **actor hỗ trợ:** TA/mentor.
- **Bối cảnh:** Learner có thể kẹt ở khái niệm hoặc lỗi kỹ thuật nhưng chưa hỏi hỗ trợ. TA/mentor nhận tín hiệu qua raise hand, request, checkpoint, Discord và quan sát, nhưng các tín hiệu rời rạc và cần triage thủ công.
- **Mục tiêu Day 18:** So sánh nhiều cách Human–AI phối hợp để giúp TA/mentor nhận biết và hành động với *silent struggle* mà không biến tín hiệu hành vi thành kết luận chắc chắn về learner.
- **Ngoài phạm vi:** Không làm lại problem interview; không pitch dashboard/queue/ranking như một “solution đúng” trước khi test.

### Traceability đến artifact Day 17

| Artifact cần mang sang | Nguồn Day 17 | Cách dùng ở Day 18 |
| --- | --- | --- |
| Hypothesis Problem | `docs/04_practice_reflection.md` §6; `evidence/01_interview_synthesis.md` §5 | Định hướng vấn đề, competing hypothesis và tiêu chí falsify. |
| Practice Notes | `interview/notes.md` (L01), `interview/notes_p01_ta.md` (P01), `interview/notes_p02_ta.md` (P02), `interview/03_interview_runbook_01120_completed.md` (L02) | Tạo scenario, task test và câu hỏi kiểm chứng. |
| Solution Ranking | Day 17 chỉ có **Solution Parking Lot** trong `docs/01_problem_hypothesis.md`, không có ranking hoàn chỉnh. | Ranking ở mục 4 là đánh giá thiết kế mới cho Day 18, không phải kết quả interview. |
| Conversation Guide | `docs/02_conversation_guide.md`; các sửa đổi được nêu ở `docs/04_practice_reflection.md` | Giữ các câu hỏi episode-based, counter-evidence và giới hạn không pitch solution. |

## 2. Hypothesis Problem sau practice

### Problem statement

Learner trong lab/online lesson có thể gặp khái niệm chưa hiểu hoặc lỗi kỹ thuật nhưng không hỏi TA/mentor vì ngại, chưa chắc câu hỏi đúng, hoặc ưu tiên tự xử lý bằng đọc lại, AI/search, hỏi bạn hay xem recording. Nếu workaround thiếu ngữ cảnh lab, learner có thể mất thời gian, chậm tiến độ hoặc tiếp tục khi chưa chắc đã hiểu.

TA/mentor có nhiều nguồn tín hiệu—checkpoint, raise hand, request, Discord và quan sát—nhưng chúng phân tán và thường phụ thuộc vào việc learner chủ động reach out. Vì vậy, *silent struggle* có thể được phát hiện muộn, trong khi TA vẫn phải triage thủ công.

### Hypothesis cần kiểm chứng tiếp

Nếu AI tổng hợp **nhiều tín hiệu có ngữ cảnh** thành một evidence card minh bạch để TA/mentor xem xét, thay vì tự khẳng định learner đang gặp khó khăn, thì TA/mentor có thể ưu tiên follow-up phù hợp hơn mà vẫn giữ quyền phán đoán của con người và autonomy của learner.

### Competing hypothesis và non-claims

- Nút thắt chính có thể là **capacity/hạ tầng** (số TA, thời gian, máy/mạng), không chỉ là thiếu visibility. Phát hiện sớm không tự động tạo ra hỗ trợ kịp thời.
- Thời gian dừng lâu, việc dùng AI/search, hoặc im lặng **không phải** bằng chứng chắc chắn rằng learner đang struggle; chúng có thể là hành vi học bình thường hoặc thiếu dữ liệu bối cảnh.
- Bốn lượt practice là mẫu nhỏ. Không suy ra tần suất, độ chính xác hay tỷ lệ false positive của bất kỳ signal nào.
- Chưa có bằng chứng người dùng xác nhận Support Radar, queue, dashboard hay ranking là solution đúng.

### Tín hiệu thành công cho vòng prototype/test

- TA/mentor phân biệt được **signal**, **evidence/context** và **mức độ không chắc chắn**; họ không hiểu một flag là phán quyết về learner.
- TA/mentor chọn được một hành động cụ thể (check-in, follow-up, broadcast, defer) và giải thích được vì sao.
- Learner thấy cách tiếp cận tôn trọng quyền chủ động, không giám sát/phán xét và cho phép họ từ chối hoặc yêu cầu hỗ trợ.
- Prototype hỗ trợ lỗi chung mà không bỏ sót case cá nhân, đồng thời nêu rõ khi capacity/hạ tầng khiến việc hỗ trợ phải chờ.

## 3. Practice Notes từ Day 17

> Các ghi chú dưới đây là bằng chứng theo từng lượt practice, không phải fact phổ quát. Attribution được giữ đúng theo file nguồn; không suy diễn thành note của thành viên khác trong roster.

| Nguồn / vai trò | Quan sát hữu ích cho prototype | Độ tin cậy và giới hạn |
| --- | --- | --- |
| **L01 — Learner**; `interview/notes.md`; interviewer/note-taker: Nguyễn Phi Hoàng | Learner kẹt `target_modules`/VRAM khi làm lab LoRA; đọc lại slide, đổi đáp án quiz và hỏi ChatGPT nhưng câu trả lời lệch context. Learner không hỏi Discord vì muộn/ngại bị đánh giá, nộp khi chưa tự tin rồi xem recording. Cost được ghi khoảng 3 giờ; sang lab sau vẫn lúng túng với OOM. | Case cụ thể, có timeline/consequence; là một lượt learner, không đại diện cho tất cả. Dùng để test câu hỏi: AI dựa vào đâu để biết gợi ý áp dụng đúng bối cảnh lab? |
| **P02 — TA**; `interview/notes_p02_ta.md`; interviewer/note-taker: Nguyễn Huy Toàn | TA kết hợp checkpoint, raise hand, Discord và quan sát màn hình. Learner không reach out buộc TA phải hỏi từng người. Khi lỗi chung, TA giải thích chung; khi quá tải, dùng ticket/peer-support/follow-up. | Có transcript/audio tốt nhất trong nhóm note TA. Hỗ trợ visibility/triage gap, đồng thời cho thấy capacity là bottleneck cạnh tranh. |
| **P01 — TA**; `interview/notes_p01_ta.md`; interviewer/note-taker: Nguyễn Huy Toàn | Learner rụt rè có thể nói “đã xong/không cần hỗ trợ” dù còn trục trặc. TA triage theo mức cần hoặc thứ tự raise hand, quan sát trực tiếp và dùng mic cho lỗi chung. Setup môi trường, tài nguyên/mạng có thể làm chậm cả team. | Recording hỏng; transcript là reconstructed-from-memory. Không dùng như quote verbatim hay kết luận mạnh. File note liên kết khác tên với transcript thực có, cần kiểm tra lại trước khi trích dẫn. |
| **L02 — Learner**; `interview/03_interview_runbook_01120_completed.md` | Learner dùng Gemini Assistant cạnh tài liệu và thấy tiện/rõ, nhưng vẫn phải suy nghĩ hoặc tìm thêm; không tự xử lý “rất nhanh”. | Counter-evidence quan trọng: AI/search hiện có có thể hữu ích. Note thiếu khái niệm cụ thể, thời lượng và consequence định lượng; thông tin tuyển/consent cần được đối chiếu. |

### Insight thiết kế cần mang sang

1. Không coi việc learner dùng AI/search là failure; hãy hiển thị **bối cảnh thiếu** và cách learner tự xử lý để TA chọn hỗ trợ phù hợp.
2. Tách lỗi có dấu hiệu lặp lại/nhiều người gặp khỏi case cần follow-up cá nhân; TA cần quyết định *broadcast, check-in, hay defer*, không chỉ xem một danh sách ưu tiên.
3. Mỗi flag phải cho thấy: signal nào xuất hiện, thời điểm nào, nguồn nào, điều gì còn chưa biết và lý do gợi ý hành động.
4. Prototype cần thử dưới constraint capacity: khi nhiều người cần trợ giúp, TA sẽ làm gì trước và ai/chuyện gì phải chờ?

## 4. Solution Ranking — đánh giá thiết kế cho Day 18

> **Lưu ý quan trọng:** Day 17 không có Solution Ranking hoàn chỉnh. Bảng này được tạo ở Day 18 từ evidence và Solution Parking Lot Day 17 để quyết định các prototype cần so sánh. Đây **không** là ranking do interview participant xác nhận.

### Tiêu chí và trọng số

| Tiêu chí | Trọng số | Ý nghĩa |
| --- | ---: | --- |
| Chất lượng signal và kiểm soát false positive | 30% | Không gắn nhãn silent struggle từ một hành vi đơn lẻ. |
| Actionability dưới giới hạn capacity | 25% | Giúp TA chọn hành động thực tế khi đang bận. |
| Minh bạch, autonomy và privacy | 20% | Hiển thị evidence/uncertainty; không giám sát hoặc phán xét learner. |
| Khả thi trong micro-prototype | 15% | Có thể mô phỏng trong thời lượng lab. |
| Dễ kiểm thử | 10% | Có task và tiêu chí quan sát rõ ràng. |

### Các hướng solution cần tạo prototype so sánh

| Hạng | Hướng solution | Signal (30) | Action (25) | Minh bạch (20) | Khả thi (15) | Test (10) | Tổng / 100 | Lý do ngắn |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | **Evidence-backed triage digest**: TA xem các case có nhiều signal kèm nguồn, timeline, uncertainty và hành động gợi ý. | 26 | 23 | 18 | 13 | 9 | **89** | Bám hypothesis nhất: hỗ trợ phán đoán của TA, không tự kết luận learner đang struggle. |
| 2 | **Mentor-approved check-in**: AI soạn check-in theo bối cảnh; TA duyệt/chỉnh trước khi gửi learner. | 23 | 24 | 19 | 12 | 9 | **87** | Human-in-the-loop rõ ràng, phù hợp với learner ngại hỏi; cần test cảm nhận autonomy. |
| 3 | **Common-issue cluster view**: Nhóm các lỗi/signal tương tự để TA broadcast hướng dẫn hoặc chuẩn bị support chung. | 22 | 22 | 16 | 14 | 8 | **82** | Phù hợp insight TA xử lý lỗi chung qua mic; có rủi ro che mất nhu cầu cá nhân. |
| 4 | **Automatic priority queue**: AI tự xếp/routing support chỉ từ behavioral signals. | 14 | 18 | 8 | 14 | 7 | **61** | Có vẻ nhanh nhưng rủi ro false positive, opacity và giảm quyền phán đoán của TA; chỉ dùng làm phương án phản chứng, không ưu tiên build. |

### Quyết định đầu vào cho Day 18

- **Ưu tiên để phát triển sâu:** Evidence-backed triage digest.
- **Phải so sánh trong prototype:** Mentor-approved check-in và Common-issue cluster view.
- **Câu hỏi quyết định còn mở:** TA có hành động nhanh/đúng hơn khi thấy evidence card không? Learner có thấy check-in do TA duyệt là hữu ích và không xâm phạm autonomy không? Cluster có giúp tiết kiệm capacity mà vẫn không bỏ sót case cá nhân không?

## 5. Conversation Guide cuối — tiếp tục từ Day 17

> **Nguồn:** `docs/02_conversation_guide.md`, với các điểm cần chỉnh sau practice trong `docs/04_practice_reflection.md`. File nguồn vẫn mang nhãn “Chuẩn bị phỏng vấn”; nội dung đã có các probe được reflection yêu cầu. Khi nộp, cần xác nhận/ghi revision metadata nếu nhóm gọi đây là bản “final”.
>
> **Nguyên tắc:** Mở bằng episode thật, hỏi một ý mỗi lượt, tìm counter-evidence và không hỏi participant “có thích dashboard/queue/ranking không?”. Day 18 không quay lại problem interview; guide được dùng để giữ context và thiết kế task test cụ thể.

### Big 3 cần giữ

1. Learner *silent struggle* như thế nào trong một episode cụ thể?
2. Learner dùng workaround gì, AI/search giúp hoặc thiếu ngữ cảnh ra sao, và consequence là gì?
3. TA/mentor nhận biết–triage–hành động bằng signal nào; capacity/hạ tầng làm thay đổi khả năng hỗ trợ thế nào?

### Learner flow

| Bước | Câu hỏi / mục đích |
| --- | --- |
| Episode opener | “Hãy kể lần gần nhất bạn kẹt ở **khái niệm hoặc lỗi cụ thể** trong lab/online lesson. Khi đó bạn đang làm gì?” |
| Làm rõ signal | “Điều gì cho bạn biết mình đang kẹt? Bạn có dừng lại, thử lại hay tiếp tục?” |
| Workaround | “Bạn đã đọc lại, search, dùng AI, hỏi bạn hay xem recording như thế nào?” |
| Probe AI/search | “Phần nào AI/search giúp được? Phần nào thiếu ngữ cảnh để áp dụng cho đúng lab/bài của bạn?” |
| Barrier | “Điều gì khiến bạn hỏi TA/mentor ngay, trì hoãn hoặc không hỏi?” |
| Consequence / counter-evidence | “Việc đó ảnh hưởng thời gian, tiến độ hoặc mức tự tin thế nào? Có lần nào bạn tự xử lý nhanh hoặc support đến đúng lúc không—khác ở điểm nào?” |

### TA/mentor flow

| Bước | Câu hỏi / mục đích |
| --- | --- |
| Episode opener | “Hãy kể một ca gần đây learner thực sự kẹt hoặc tỏ ra im lặng. Bạn nhận ra qua điều gì?” |
| Signal và evidence | “Bạn thấy signal cụ thể nào—checkpoint, raise hand, Discord, request hay quan sát? Signal nào dễ nhiễu/không đủ để kết luận?” |
| Triage / action | “Bạn ưu tiên ai/lỗi gì trước? Nếu biết sớm hơn, hành động của bạn có khác không?” |
| Lỗi chung và case cá nhân | “Khi nào bạn broadcast hỗ trợ chung, khi nào follow-up 1:1? Cách đó có thể bỏ sót ai không?” |
| Capacity / infrastructure | “Số TA, thời gian, máy/mạng hoặc setup ảnh hưởng quyết định support thế nào?” |
| Counter-evidence | “Có khi nào learner im lặng nhưng không cần hỗ trợ, hoặc signal trông đáng lo nhưng không phải struggle không?” |

### Script test cho các micro-prototype

1. Đưa TA một scenario mô phỏng gồm 3 learner: một case L01-like (AI/search thiếu context + chậm tiến độ), một lỗi có dấu hiệu chung, và một signal mơ hồ.
2. Với từng prototype, yêu cầu TA *think aloud*: “Bạn sẽ làm gì trước, evidence nào làm bạn tin/chưa tin, và ai/chuyện gì phải chờ nếu chỉ có 5 phút?”
3. Đưa learner mô phỏng một check-in do TA duyệt; hỏi họ diễn giải ý nghĩa của message, chọn phản hồi/opt-out và giải thích cảm giác về autonomy/privacy.
4. Không hỏi “bạn có thích giao diện không?”; quan sát hành động, lý do chọn hành động, chỗ hiểu sai và evidence cần thêm.

### Edge cases và guardrails

| Tình huống | Cách prototype cần xử lý |
| --- | --- |
| Một signal đơn lẻ như thời gian dừng lâu hoặc AI/search use | Hiển thị là tín hiệu chưa đủ kết luận; yêu cầu thêm context hoặc để TA bỏ qua. |
| Nhiều learner có lỗi giống nhau | Cho TA chọn broadcast/cluster, đồng thời hiển thị khả năng cần follow-up cá nhân. |
| TA quá tải | Nêu rõ năng lực còn lại, cho phép defer/ticket/peer-support; không hứa hỗ trợ tức thì. |
| Learner không muốn check-in hoặc không muốn chia sẻ dữ liệu | Tôn trọng opt-out; không phạt hay tự nâng mức ưu tiên. |
| AI thiếu dữ liệu/không chắc | Ghi rõ nguồn signal, phần thiếu và uncertainty; không bịa lý do hay gán nhãn learner. |

## 6. Checklist sẵn sàng bắt đầu Day 18

- [x] Chọn và giữ đúng case từ Day 17: **AI Support Radar (Case C)**.
- [x] Mang sang Hypothesis Problem sau practice, competing hypothesis và non-claims.
- [x] Mang sang Practice Notes từ L01, L02, P01, P02 kèm giới hạn nguồn.
- [x] Có Solution Ranking để quyết định prototype; đã ghi rõ đây là ranking mới của Day 18, không phải evidence interview.
- [x] Mang sang Conversation Guide, Big 3, counter-evidence và guardrails.
- [ ] Xác nhận revision metadata của `docs/02_conversation_guide.md` nếu cần gọi là “final revised guide”.
- [ ] Làm rõ attribution/roster của L02 và kiểm tra lại link transcript P01 trước khi trích dẫn chính thức.
- [ ] Tạo ít nhất 3 micro-prototype theo 3 hướng ưu tiên.
- [ ] Test các prototype với TA/mentor và learner; ghi evidence, disconfirming evidence và iteration tiếp theo.
- [ ] Chỉ sau test mới kết luận ở mức: “hypothesis đã được thử; iteration tiếp theo sẽ…”, không nói “user đã xác nhận solution này đúng”.
