# Chặng 4 — Build ba micro-prototype (80 phút)

**Case:** AI Support Radar (Case C)  
**Đầu vào:** Human–AI Decision Table và Critical Interactions ở `03-human-ai-design-pass.md`.  
**Mục tiêu gate (GATE 4 — Test-ready):** Một người không build có thể tự mở, thực hiện cùng task qua A/B/C/D và quay về context ban đầu mà không cần người khác giải thích.

---

## 1. Scope chuẩn & 70% Shared Elements

Cả 4 options (A, B, C, D) dùng chung **~70% khung bối cảnh và tài nguyên**:
- **Context screen:** Lab Coach Dashboard trong một buổi thực hành lab (Session 02: LoRA & VRAM Optimization, 24 active learners, thời gian còn lại 35 phút).
- **Content/data fixture:** Scenario learner bị kẹt với lỗi VRAM / CUDA Out of Memory ở Checkpoint 2 khi chèn LoRA adapter (`target_modules`, `batch_size`, `gradient_checkpointing`).
- **Component & visual style:** Premium Dark mode theme với hiệu ứng Glassmorphism (sử dụng 2 font Outfit & Inter, transluscent cards với backdrop blur, glowing badge status, blurred modal overlay, dynamic gradient buttons và micro-animations).
- **Task & desired outcome:** Lab Coach nhận diện tình huống, đưa ra hành động hỗ trợ phù hợp (triage 1:1, broadcast hướng dẫn chung, follow-up riêng hoặc defer) mà không coi một behavioral signal là proof of struggle.

---

## 2. Option C — Common-Issue Cluster View Prototype

### Link Prototype
👉 [Link chạy Prototype Option C](file:///c:/Users/Admin/Desktop/AILAB/Day18/Track1-DAY18-ChanToDe/day18-work/prototypes/option-c-prototype.html)

### Flow 3 bước theo Scope chuẩn

```
[COMMON CONTEXT] ➔ [CRITICAL INTERACTION] ➔ [RESULT / USER DECISION]
  Dashboard 24 learners     Gom cụm 4 issue opt-in       Phát Broadcast chung
  4 Opt-in issues           Mức tương đồng 88%           Result banner xanh
  Session LoRA & VRAM       Xem ví dụ & Tách case 3      Tách Learner 3 triage 1:1
                            Duyệt/chỉnh nháp broadcast   Undo / Reset Path
```

1. **COMMON CONTEXT (Màn hình bối cảnh chung):**
   - Header hiển thị bối cảnh buổi lab: 24 active learners, 4 opt-in issue signals, 1 Coach on duty.
   - Limit banner nêu rõ giới hạn của AI: *"Cụm issue được gom tự động từ văn bản lỗi learner opt-in chia sẻ. Cụm không khẳng định mọi learner gặp cùng nguyên nhân gốc."*

2. **CRITICAL INTERACTION (Màn hình tương tác cốt lõi):**
   - AI gom 4 case có mô tả giống nhau thành **Cụm #1: Lỗi VRAM CUDA Out of Memory & target_modules** với **Mức tương đồng 88%**.
   - Thẻ cảnh báo Uncertainty: *"Gom cụm dựa vào từ khóa issue text. Có thể có learner gặp lỗi phần cứng khác cùng từ khóa OOM."*
   - **Tương tác 1: Inspect & Split Case:** Lab Coach bấm `🔍 Xem ví dụ & Tách case` ➔ Mở modal danh sách 4 case ➔ Phát hiện Learner 3 gặp lỗi phần cứng (GPU GTX cũ không hỗ trợ 8-bit) ➔ Bấm `✂️ Tách case ra khỏi cụm` ➔ Learner 3 chuyển sang hàng chờ Triage 1:1.
   - **Tương tác 2: Duyệt Broadcast:** Lab Coach bấm `📢 Duyệt Broadcast hướng dẫn chung` ➔ AI tạo draft 3 bước tháo gỡ ➔ Lab Coach có thể sửa nội dung ➔ Đánh dấu checkbox xác nhận ➔ Bấm `🚀 Phát Broadcast ngay`.

3. **RESULT / USER DECISION & CONTROL/RECOVERY (Trạng thái kết quả & Hoàn tác):**
   - Result Banner xanh thông báo: *"📢 Đã phát Broadcast thành công! Tiết kiệm ước tính ~20 phút triage cá nhân."*
   - Đường phục hồi: Nút `✏️ Gửi Correction` và `↩️ Thu hồi Broadcast / Mở lại cụm`.
   - Danh sách case tách riêng (Learner 3) hiển thị bên dưới để Lab Coach follow-up 1:1.
   - **Reset Path (Đường reset về context):** Nút `🔄 Reset trạng thái ban đầu` ở footer cho phép phục hồi prototype về trạng thái 0 bất kỳ lúc nào để tester mới thực hiện lại.

---

## 3. Prototype Annotation (Dành cho Tester)

Đặt annotation ngoài frame chính để tester nắm quyền hạn và mục tiêu test mà không làm xao nhãng giao diện:

```
OPTION C — Common-Issue Cluster View
--------------------------------------------------------------------------------
We expect the tester to: 
Review cụm lỗi, xem ví dụ đại diện, bấm "Tách case" đối với Learner 3 (outlier), 
duyệt/chỉnh bản nháp broadcast và xác nhận gửi.

Watch for: 
Lab Coach có tin tưởng cách gom cụm dựa trên text không? 
Có kiểm tra ví dụ đại diện trước khi broadcast không? 
Có chủ động tách case gặp lỗi khác nguyên nhân ra khỏi cụm không?

Do not explain: 
Không giải thích nút "Tách case" hay nhắc tester sửa nội dung broadcast. 
Để tester tự tương tác và tự đưa ra quyết định.
--------------------------------------------------------------------------------
```

---

## 4. Definition of Testable — GATE 4 Self-Check

| Tiêu chuẩn Test-Ready | Trạng thái ở Prototype Option C |
| --- | --- |
| **Tester tự thao tác A/B/C/D độc lập** | [x] Giao diện tự giải thích (self-explaining), có limit banner và annotation card rõ ràng. |
| **Chung context & task ban đầu** | [x] Dùng chung 70% context (Session 02 LoRA & VRAM, 24 learners, 4 opt-in issues). |
| **Nội dung đủ thật để ra quyết định** | [x] Dữ liệu issue text thật từ case L01/L03/L07/L12 (CUDA OOM, batch size, target_modules, bitsandbytes). |
| **User lấy lại control (Control & Recovery)** | [x] Tách case outlier, chỉnh nội dung broadcast draft, require confirmation checkbox, undo broadcast. |
| **Đường reset về common context** | [x] Có nút `🔄 Reset trạng thái ban đầu (Reset Path)` phục hồi toàn bộ state JS về ban đầu. |
| **Không cần model/API thật** | [x] Dùng canned AI outputs và logic JavaScript tương tác linh hoạt. |

---

## GATE 4 — Test-ready Confirmation

- [x] Một người không build có thể tự mở file `prototypes/option-c-prototype.html`, thực hiện task triage/broadcast/split-case và quay về context ban đầu qua nút Reset mà không cần người khác giải thích.
