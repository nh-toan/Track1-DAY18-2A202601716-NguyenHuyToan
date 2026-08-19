# Chặng 4 — Build ba micro-prototype (80 phút)

**Case:** AI Support Radar (Case C)  
**Đầu vào:** Human–AI Decision Table và Critical Interactions ở `03-human-ai-design-pass.md`.  
**Mục tiêu gate (GATE 4 — Test-ready):** Một người không build có thể tự mở, thực hiện cùng task qua A/B/C/D và quay về context ban đầu mà không cần người khác giải thích.

---

## 1. Scope chuẩn & 70% Shared Elements

Option A dùng chung khung bối cảnh với B, C, D:
- **Context screen:** Lab Coach xem digest trong một buổi lab đang diễn ra (Session 02: LoRA & VRAM Optimization), mở ở đầu Checkpoint 2.
- **Content/data fixture:** Ba case đúng theo script test ở `day18-input/README.md` §5.3 — một case L01-like (tự báo lỗi VRAM/`target_modules`, workaround thiếu context), một lỗi có dấu hiệu chung (nhiều learner mô tả giống nhau), và một signal mơ hồ (chỉ có khoảng lặng, không có nội dung).
- **Component & visual style:** Minimal calm mode, hỗ trợ cả light và dark (nút chuyển ở header). Font Bricolage Grotesque + Instrument Sans, accent teal trầm duy nhất, bo góc mềm thống nhất, không dùng badge cảnh báo đỏ để tránh gợi ý "learner đang gặp sự cố".
- **Task & desired outcome:** Lab Coach chọn hành động hỗ trợ phù hợp cho từng case và giải thích được lý do, mà không coi một behavioral signal là proof of struggle.

**Điểm khác biệt riêng của Option A:** đây là công cụ *triage* — AI chỉ trình bày bằng chứng đã có theo từng case để Lab Coach tự đọc và tự quyết định. AI không soạn tin nhắn (khác B), không gom cụm để broadcast (khác C), không chờ learner khởi tạo (khác D).

---

## 2. Option A — Evidence-backed Triage Digest Prototype

### Link Prototype

👉 [Bản chạy online (Artifact)](https://claude.ai/code/artifact/78e35f54-0919-4bd5-8f9a-5f4ba1289725)  
👉 File local: `day18-work/prototypes/prototype-option-a.html` — mở trực tiếp bằng browser, không cần cài đặt gì.

### Flow 3 bước theo Scope chuẩn

```
[COMMON CONTEXT]  ➔  [CRITICAL INTERACTION]  ➔  [RESULT / USER DECISION]
 Digest 3 learner       Mở panel bằng chứng       Trạng thái ghi trên card
 Nhãn trạng thái        Nguồn / Thời điểm         Toast xác nhận
 1 ghi chú · 3 ghi chú  Đã biết / Chưa biết       Hoàn tác từng case
 · Chưa đủ dữ liệu      5 hành động ngang hàng    Bắt đầu lại (reset path)
```

1. **COMMON CONTEXT (Màn hình bối cảnh chung):**
   - Digest liệt kê 3 learner dạng danh sách dọc, mỗi dòng gồm tên, một câu tóm tắt tín hiệu, nhãn trạng thái và mốc thời gian.
   - Dòng phụ dưới tiêu đề nêu giới hạn của AI ngay từ đầu: *"Tổng hợp tín hiệu đã có. Bạn là người quyết định."*
   - Ba nhãn trạng thái được phân biệt bằng cả màu lẫn chữ: `1 ghi chú` (Minh Anh), `3 ghi chú` (Hoài Nam), `Chưa đủ dữ liệu` (Thu Hà). Không có nhãn nào mang nghĩa "ưu tiên cao" hay "đang struggle".

2. **CRITICAL INTERACTION (Màn hình tương tác cốt lõi):**
   - Bấm vào một learner mở panel bằng chứng bên phải, gồm 4 trường ngắn: **Nguồn**, **Thời điểm**, **Đã biết**, **Chưa biết** — đúng cấu trúc evidence/uncertainty yêu cầu ở `03-human-ai-design-pass.md` §2.
   - Mỗi case kết thúc bằng một câu ghi chú nêu lý do AI đưa case vào digest và giới hạn của nó, ví dụ với Thu Hà: *"Im lặng không phải bằng chứng của việc gặp khó khăn."*
   - **Tương tác cốt lõi — chọn hành động:** 5 lựa chọn hiển thị **ngang hàng nhau**, không có gợi ý được tô đậm hay đặt mặc định: `Nhắn hỏi thăm`, `Ghé qua bàn`, `Nói chung cho cả lớp`, `Xem lại sau`, `Bỏ qua`. Lab Coach phải chọn rồi bấm `Xác nhận` — hai bước, AI không tự hành động.
   - **Đào sâu bằng chứng:** link `Xem dữ liệu gốc` mở ra các trường thô (loại tín hiệu, thời gian, có/không có yêu cầu hỗ trợ) để Lab Coach kiểm chứng thay vì tin vào bản tóm tắt.

3. **RESULT / USER DECISION & CONTROL/RECOVERY (Trạng thái kết quả & Hoàn tác):**
   - Sau khi xác nhận, hành động đã chọn hiện thành nhãn ngay trên card ở digest, kèm một toast ngắn xác nhận.
   - Đường phục hồi từng case: nút `Hoàn tác` trong panel đưa case về trạng thái chưa xử lý.
   - **Reset Path:** nút `Bắt đầu lại` ở footer đưa toàn bộ 3 case về trạng thái ban đầu để tester tiếp theo làm lại từ đầu.
   - Đóng panel (nút ✕, phím `Esc`, hoặc bấm ra ngoài) luôn quay về digest — không có ngõ cụt.

---

## 3. Prototype Annotation (Dành cho Tester)

Annotation được đặt sau link `Ghi chú facilitator` ở cuối trang, mặc định ẩn để không gợi ý cách trả lời cho tester:

```
OPTION A — Evidence-backed Triage Digest
--------------------------------------------------------------------------------
We expect the tester to:
Mở từng learner, đọc phần bằng chứng, chọn một hành động cho mỗi người
và nói to lý do dựa trên bằng chứng nào.

Watch for:
Tester có coi tín hiệu là kết luận về learner không?
Có phân biệt được "Đã biết" và "Chưa biết" khi ra quyết định không?
Có dùng "Xem lại sau" / "Bỏ qua" với Thu Hà (chỉ có khoảng lặng) không,
hay vẫn hành động như thể đó là bằng chứng chắc chắn?
Có bấm "Xem dữ liệu gốc" trước khi quyết định không?

Do not explain:
Không giải thích ý nghĩa của nhãn "Chưa đủ dữ liệu".
Không nói trước vì sao Thu Hà khác hai người còn lại.
Không gợi ý nên chọn hành động nào.
--------------------------------------------------------------------------------
```

---

## 4. Definition of Testable — GATE 4 Self-Check

| Tiêu chuẩn Test-Ready | Trạng thái ở Prototype Option A |
| --- | --- |
| **Tester tự thao tác A/B/C/D độc lập** | [x] Digest tự giải thích: nhấn vào learner → đọc bằng chứng → chọn hành động. Không cần facilitator dẫn dắt. |
| **Chung context & task ban đầu** | [x] Cùng Session 02 (LoRA & VRAM) và cùng 3 case theo script test §5.3 với các option còn lại. |
| **Nội dung đủ thật để ra quyết định** | [x] Ghi chú tự báo dùng ngôn ngữ thật của learner (`target_modules`, VRAM, lỗi driver khi load model), có mốc thời gian và số liệu so sánh với trung bình lớp. |
| **Thể hiện điểm user lấy lại control** | [x] Hai bước chọn–xác nhận, `Bỏ chọn`, `Hoàn tác`, `Xem dữ liệu gốc`. AI không tự chọn giúp và không tự gửi gì. |
| **Đường reset về common context** | [x] Nút `Bắt đầu lại` ở footer đưa cả 3 case về trạng thái ban đầu. |
| **Không cần model/API thật** | [x] Toàn bộ nội dung AI là canned output, logic bằng JavaScript thuần trong một file HTML. |

### Guardrail đã kiểm tra (theo `03-human-ai-design-pass.md` §3)

- [x] Card **không** khẳng định learner đang struggle — header và ghi chú từng case đều nêu rõ giới hạn.
- [x] Case chỉ có khoảng lặng (Thu Hà) **không** được đẩy lên ưu tiên cao; nhãn ghi đúng `Chưa đủ dữ liệu`.
- [x] Digest **không** xếp hạng learner theo mức độ khẩn cấp — thứ tự chỉ theo thời gian.
- [x] Không dùng dwell time hay việc learner dùng AI/search làm bằng chứng để gắn nhãn.

---

## GATE 4 — Test-ready Confirmation

- [x] Một người không build có thể tự mở file `prototypes/prototype-option-a.html`, đọc bằng chứng của cả 3 case, chọn hành động cho từng người và quay về context ban đầu qua nút `Bắt đầu lại` mà không cần người khác giải thích.
