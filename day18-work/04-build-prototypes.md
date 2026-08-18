# Chặng 4 — Build ba micro-prototype & Prototype Annotation (80 phút)

**Case:** AI Support Radar (Case C)  
**Đầu vào:** Bốn solution hypothesis trong `02-solution-options.md` và Human–AI Design Pass ở `03-human-ai-design-pass.md`.  
**Mục tiêu gate:** Mỗi option sẵn sàng để tester tự mở, thao tác A/B/C/D, trải nghiệm critical interaction và reset về bối cảnh ban đầu mà không cần người hướng dẫn giải thích.

---

## 1. Prototype Scope & Shared Context

Cả bốn options dùng chung 70% bối cảnh và thiết kế:
- **Shared Context Screen:** Dashboard Lab Coach trong buổi Lab "LoRA Fine-tuning & VRAM Optimization" (Session 02), 24 learners active, 1 Lab Coach on duty (Capacity bị giới hạn).
- **Shared Content/Data Fixture:** 4 lỗi VRAM/OOM và `target_modules` được learner opt-in chia sẻ trong 20 phút qua.
- **Visual Style & Components:** Sleek dark-mode aesthetic (Inter font, curated HSL color tokens, glassmorphism card, status pills, interactive modals).

---

## 2. Prototype Annotation (Dành cho Tester / Facilitator)

### Option C — Common-issue cluster view

- **Location:** [`day18-work/option-c-prototype.html`](file:///c:/Users/Admin/Desktop/AILAB/Day18/Track1-DAY18-ChanToDe/day18-work/option-c-prototype.html) (hoặc [`day18-work/prototypes/option-c/index.html`](file:///c:/Users/Admin/Desktop/AILAB/Day18/Track1-DAY18-ChanToDe/day18-work/prototypes/option-c/index.html))
- **We expect the tester to:**
  1. Xem cụm lỗi chung VRAM OOM được gom tự động từ văn bản lỗi learner chia sẻ.
  2. Bấm **"🔍 Xem ví dụ & Tách case"** để đọc 4 câu hỏi của 4 learner.
  3. Nhận biết Learner 3 (L07) gặp lỗi GPU cá nhân (BitsAndBytes 8-bit) và bấm **"✂️ Tách case ra khỏi cụm"** để chuyển Learner 3 sang hàng chờ Triage 1:1.
  4. Quay lại bấm **"📢 Duyệt Broadcast hướng dẫn chung"**, xem/sửa AI draft broadcast message.
  5. Đánh dấu checkbox xác nhận và bấm **"🚀 Phát Broadcast ngay"**.
  6. Quan sát kết quả thông báo thành công + chỉ số tiết kiệm capacity (~20 phút) + các nút thu hồi / correction.
  7. Bấm **"🔄 Reset trạng thái ban đầu"** để đưa prototype về điểm xuất phát.
- **Watch for:**
  - Tester có tin cậy cách gom cụm của AI không?
  - Tester có chủ động kiểm tra từng case ví dụ trước khi broadcast không?
  - Tester có phát hiện và tách lỗi cá nhân ra khỏi cụm chung không?
- **Do not explain:** Không hướng dẫn tester bấm nút nào hay giải thích cách tách case; để tester tự do tương tác.

---

## 3. Interactive Web Prototype Details (Option C)

- **File Path:** [`day18-work/option-c-prototype.html`](file:///c:/Users/Admin/Desktop/AILAB/Day18/Track1-DAY18-ChanToDe/day18-work/option-c-prototype.html)
- **Công nghệ:** HTML5, Vanilla CSS3 (Custom Dark Theme, Flex/Grid layout, Modals, Animations), JavaScript ES6 (Dynamic State Management & Reset Logic).
- **Các tính năng tương tác chính:**
  1. **Banner giới hạn năng lực AI:** Cảnh báo rõ AI gom cụm theo từ khóa text, không tự khẳng định nguyên nhân.
  2. **Modal Inspect & Split:** Cho phép xem 4 case chi tiết & bấm tách Learner 3 ra khỏi cụm (cụm tự giảm từ 4 -> 3 case).
  3. **Modal Edit & Confirm Broadcast:** AI soạn sẵn draft hướng dẫn VRAM, Lab Coach có thể sửa trực tiếp trong textarea và bắt buộc tick checkbox confirm trước khi phát.
  4. **State Phục hồi / Kiểm soát:** Sau khi broadcast, hiển thị nút *Correction* và *Thu hồi Broadcast / Đóng cụm*.
  5. **Reset Path:** Nút reset cố định ở footer giúp khôi phục toàn bộ trạng thái về 0 bất cứ lúc nào.

---

## GATE 4 — Test-ready Checklist

- [x] Option C có thể tự mở và thao tác trực tiếp trên giao diện web HTML/CSS/JS.
- [x] Bắt đầu từ bối cảnh chung (24 learners, 1 Lab Coach) và task triage thực tế.
- [x] Thể hiện rõ điểm user lấy lại quyền kiểm soát (Tách case outlier, Sửa AI draft, Tick confirm trước khi broadcast).
- [x] Có đường reset cố định về bối cảnh ban đầu (Reset Path).
- [x] Đã ghi rõ Annotation kỳ vọng tester làm gì, theo dõi điều gì và không giải thích điều gì.
