# Prototype Feedback Note 3 — Privacy, Disclosure, Wording & Bias

**Case:** AI Support Radar  
**Nguồn evidence:** `TEST-LOG-AI-SUPPORT-RADAR(1).md`  
**Ngày test:** 2026-08-19  
**Phương pháp:** Automated interaction test + source review  
**Trọng tâm:** learner autonomy, consent, wording và research bias

---

## 1. Observation summary

| Observation | Note |
| --- | --- |
| **Option A** | Uncertainty rõ; silent signal được ghi `Chưa đủ dữ liệu`. |
| **Option B** | Learner có opt-out và có thể không chia sẻ context; logging tốt nhưng cần data minimization. |
| **Option C** | Disclosure nói rõ cluster từ text opt-in, nhưng broadcast tone vẫn có thể gợi cảm giác surveillance. |
| **Option D** | Agency/privacy tốt; wording preview chưa mô tả chính xác toàn bộ data gửi; default radio có thể bias first action. |
| **Risk chính** | User có thể hiểu quá mức về việc hệ thống biết gì hoặc bị ảnh hưởng bởi default/wording. |
| **Trade-off** | Rõ disclosure hơn có thể tăng text density nhưng cần thiết để bảo vệ autonomy và validity của research. |

---

## 2. OBSERVED

### Option A

- Signal mơ hồ có `Đã biết/Chưa biết`.
- Có cảnh báo rằng im lặng không phải bằng chứng learner đang struggle.
- Không phát hiện blocker wording lớn trong log.

### Option B

- Learner có thể opt-out.
- Learner có thể gửi question mà không chia sẻ context.
- Event log lưu một số free-text debrief/rationale.

### Option C

- Disclosure nói AI chỉ cluster từ text **opt-in**.
- Draft hiện có tone kiểu:
  > “Hệ thống ghi nhận một số bạn gặp vấn đề...”
- Wording này có thể tạo cảm giác hệ thống đang quan sát/monitoring nhiều hơn thực tế.

### Option D

- Privacy disclosure hiện trên form.
- Optional data có thể để trống.
- Preview có thể ghi:
  > “Chỉ phần mô tả bạn vừa nhập sẽ được gửi.”
- Nhưng preview vẫn chứa **Loại hỗ trợ**.
- Radio `Giải thích lỗi và bước tiếp theo` đang được chọn sẵn.

---

## 3. INTERPRETED

1. **Disclosure intent nhìn chung tốt nhưng wording cần chính xác hơn.**
2. D có risk về data-scope comprehension.
3. C có risk surveillance interpretation dù data source là opt-in.
4. D có measurement bias nếu first choice được dùng làm research metric trong khi một radio đã preselect.
5. B cần cân bằng research value với privacy/data minimization.

---

## 4. DECIDED — NEXT CHANGE

### Option C

Đổi wording sang:

> **“Từ các issue đã được các bạn chia sẻ ở Checkpoint 2, có một số mô tả tương tự về VRAM/CUDA OOM...”**

Mục tiêu: bám đúng consent/source thay vì dùng ngôn ngữ dễ gợi surveillance.

### Option D

Đổi disclosure preview thành:

> **“Sẽ gửi: Loại hỗ trợ + mô tả vấn đề.”**

Sau đó chỉ liệt kê optional data nếu learner đã chọn.

Trong research build:

- không preselect radio;
- hoặc không dùng first choice làm preference metric.

### Option B

- disclosure trước test rằng feedback được lưu cục bộ;
- thêm clear log;
- giảm raw free text nếu không cần.

---

## 5. STILL UNPROVEN

- Learner có cảm thấy bị giám sát với B/C không.
- Learner có hiểu data scope D sau wording mới không.
- B wording “không bắt buộc trả lời” có đủ giảm pressure không.
- Default removal ở D có thay đổi distribution first choice không.
- Không thể xác nhận autonomy cảm nhận nếu chưa có human usability test.
