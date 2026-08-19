# Prototype Feedback Note 1 — Human Control & Recovery

**Case:** AI Support Radar  
**Nguồn evidence:** `TEST-LOG-AI-SUPPORT-RADAR(1).md`  
**Ngày test:** 2026-08-19  
**Phương pháp:** Automated DOM/JavaScript interaction test bằng Chromium headless + source review  
**Lưu ý:** Đây không phải usability test với người dùng thật.

---

## 1. Observation summary

| Observation | Note |
| --- | --- |
| **First action** | Chưa thể kết luận từ A/C/D vì chưa có event log research. B có logging infrastructure nhưng log hiện tại không đại diện cho first action tự nhiên của tester người thật. |
| **Evidence / uncertainty** | A có `Đã biết/Chưa biết` và cảnh báo về im lặng; C có disclosure chỉ cluster từ text opt-in; D có privacy disclosure; B giữ evidence trước human decision. |
| **Human confirmation** | A cần Coach confirm action; B cần Coach duyệt/chỉnh trước send; C cần explicit confirmation trước broadcast; D cần learner review/edit/confirm trước send. |
| **Recovery / control** | A có `Hoàn tác` + `Xem dữ liệu gốc`; B có `Defer`, `No follow-up`, edit, learner opt-out và optional context; C có split outlier, edit, undo broadcast; D có optional data, edit, no-send. |
| **Breakdown chính** | Không phải thiếu control; breakdown lớn hơn là chưa biết người thật có tìm thấy và hiểu đúng các control này hay không. |
| **Trade-off** | Human control khá tốt nhưng càng nhiều control càng cần instrumentation để biết user có dùng được không. |

---

## 2. OBSERVED

### Option A

- A01 PASS — trạng thái ban đầu trung tính.
- A02 PASS — uncertainty hiển thị rõ.
- A03 PASS — action cần Coach confirmation.
- A04 PASS — undo hoạt động.
- A05 PASS — xem dữ liệu gốc hoạt động.
- A06 FAIL — thiếu event log research.

### Option B

- B01 PASS — Coach có thể sửa draft trước khi gửi.
- B02 PASS — Defer không gửi message.
- B03 PASS — learner opt-out.
- B04 PASS — learner có thể không chia sẻ context.
- B05 PASS — có structured event log.

### Option C

- C01 PASS — disclosure phạm vi AI.
- C02 PASS — split outlier.
- C03 PASS — draft cập nhật và edit được.
- C04 PASS — explicit confirmation trước broadcast.
- C05 PASS — undo broadcast.
- C06 FAIL — thiếu event log research.

### Option D

- D01 PASS — privacy disclosure.
- D02 PASS — bắt buộc mô tả vấn đề.
- D03 PASS — optional data có thể để trống.
- D04 PASS — review/edit/confirm.
- D05 PASS — tự tiếp tục không gửi.
- D06 FAIL — thiếu event log research.

---

## 3. INTERPRETED

1. **Human control là điểm mạnh xuyên suốt cả 4 option.**
2. AI không tự hoàn tất critical action mà vẫn để Coach/learner xác nhận hoặc từ chối.
3. Recovery path tồn tại ở cả bốn prototype, nhưng chưa có evidence người thật có tìm thấy các đường này.
4. B là prototype dễ nghiên cứu nhất hiện tại vì event logging đã có cấu trúc.

---

## 4. DECIDED — NEXT CHANGE

> **Giữ toàn bộ control path hiện tại, nhưng chuẩn hóa event logging cho A/C/D để đo xem user có thực sự dùng recovery/control hay không.**

Schema cần tối thiểu:

- `first_action`
- `evidence_opened`
- `edit`
- `confirm`
- `undo`
- `defer`
- `dismiss`
- `optout`
- `complete`

---

## 5. STILL UNPROVEN

- Người thật có hiểu uncertainty đúng không.
- Người thật có tìm thấy undo/defer/no-send/opt-out không.
- Human confirmation có làm user chậm quá nhiều không.
- Control path nào thực sự tạo cảm giác chủ động hơn.
- Option nào tốt hơn về UX không thể kết luận từ automated test.
