# Group Feedback Synthesis — AI Support Radar

**Nguồn:** tổng hợp từ `TEST-LOG-AI-SUPPORT-RADAR(1).md` và 3 Feedback Notes độc lập:
1. Human Control & Recovery
2. Feedback Instrumentation & Research Readiness
3. Privacy, Disclosure, Wording & Bias

**Ngày:** 2026-08-19

---

## 1. Group synthesis table

| Nội dung | Feedback 1 | Feedback 2 | Feedback 3 | Pattern / khác biệt |
| --- | --- | --- | --- | --- |
| **Điểm mạnh chính** | Human control & recovery tốt | B có logging tốt | Disclosure/agency nhìn chung tốt | Prototype design đủ tốt để tiếp tục test |
| **Breakdown chính** | Chưa biết user thật có tìm thấy control | A/C/D thiếu event log | C/D có wording/bias; B cần minimization | Research readiness chưa đồng đều |
| **A** | Confirm + undo + raw data | Thiếu logging | Uncertainty rõ | Strong control, weak instrumentation |
| **B** | Edit + defer + opt-out | Logging tốt nhất | Cần minimization | Sẵn sàng nhất về research infrastructure |
| **C** | Split + confirm + undo | Thiếu logging | Tone có surveillance risk | Strong control, wording + logging cần sửa |
| **D** | Preview + edit + no-send | Thiếu logging | Data-scope wording + default bias | Strong agency, research validity cần sửa |
| **Trade-off** | Control vs speed | Data quality vs collection burden | Clarity vs text density | Không nên chọn winner trước human test |
| **Counter-evidence** | Có control không chứng minh user hiểu | Có log không chứng minh UX tốt | Có privacy text không chứng minh autonomy cảm nhận | Cần human usability evidence |

---

## 2. Pattern có evidence lặp lại

### Pattern 1 — Human control là nền tảng tốt

Cả 4 option đều có điểm dừng trước critical action:

- A: Coach confirm + undo.
- B: Coach edit/defer/no-follow-up + learner opt-out.
- C: split/edit/confirm + undo.
- D: preview/edit/confirm/no-send.

**Kết luận:** không có dấu hiệu prototype buộc AI tự quyết ở critical moment.

---

### Pattern 2 — Instrumentation là vấn đề hệ thống lớn nhất

Ba FAIL trong tổng số 23 test case đều là:

- A06 — event log FAIL;
- C06 — event log FAIL;
- D06 — event log FAIL.

B là option duy nhất có structured logging.

**Kết luận:** nếu comparative test chạy ngay, data quality sẽ lệch giữa prototype.

---

### Pattern 3 — Wording và disclosure cần chỉnh trước human test

- C: tone broadcast chưa bám consent đủ rõ.
- D: preview wording chưa khớp chính xác data sent.
- D: radio default có thể bias first action.
- B: free-text logging cần data minimization.

**Kết luận:** đây là P1/P2 quan trọng để không làm sai interpretation hoặc research measurement.

---

## 3. Khác biệt quan trọng giữa option

### Option A

**Ưu:**
- evidence/uncertainty rõ;
- raw data;
- confirmation;
- undo.

**Thiếu:**
- research event log.

### Option B

**Ưu:**
- human approval;
- defer/no-follow-up;
- opt-out;
- optional context;
- event log tốt nhất.

**Thiếu/risk:**
- cần data minimization;
- pressure/surveillance chưa được human test.

### Option C

**Ưu:**
- split outlier;
- edit;
- explicit confirmation;
- undo.

**Thiếu/risk:**
- event log;
- tone broadcast.

### Option D

**Ưu:**
- learner agency;
- optional data;
- preview/edit/no-send.

**Thiếu/risk:**
- event log;
- wording scope;
- default radio bias.

---

## 4. Một Next Change nhóm chốt

> **P0 — Chuẩn hóa event logging cho A/C/D theo cùng schema với B trước khi chạy comparative human usability test.**

Lý do:

- Tổng: **20/23 PASS**
- B: **5/5**
- A/C/D: mỗi option **5/6**
- Cả ba FAIL đều là **event log phục vụ research**

Đây là bottleneck chung và trực tiếp ảnh hưởng khả năng so sánh prototype công bằng.

---

## 5. Next changes phụ

### P1

1. **Option D**
   - sửa disclosure data sent;
   - bỏ preselected radio trong research build.

2. **Option C**
   - đổi broadcast tone để bám opt-in/consent.

### P2

3. **Option B**
   - giảm raw free-text logging;
   - thêm disclosure/clear log.

---

## 6. Evidence dẫn tới quyết định

- A/C/D không có structured event log.
- B có **27 events** được lưu.
- Human control tests ở cả 4 option đều PASS.
- Vì control design không phải blocker lớn nhất, ưu tiên nên chuyển sang **research instrumentation** để có thể thu evidence user thật đáng tin cậy.

---

## 7. Still Unproven

1. Người thật có hiểu rằng AI không kết luận learner đang struggle không.
2. Người thật có tìm được undo/defer/no-send/opt-out không.
3. Learner có cảm thấy bị surveillance với B/C không.
4. Learner có hiểu data scope D không.
5. A/C/D first action thực tế là gì.
6. Option nào tốt hơn về task performance/UX.
7. C có giảm workload thật không.
8. B/D có giảm barrier xin hỗ trợ thật không.
9. Chưa có evidence để claim solution validated.

---

## 8. Human-test acceptance criteria

- **≥ 80%** tester mô tả đúng AI **không kết luận** learner đang struggle.
- **≥ 80%** tìm được edit/defer/no-send/opt-out/undo mà không được chỉ dẫn.
- **≥ 80%** mô tả đúng dữ liệu nào được chia sẻ.
- **0 tester** hiểu rằng AI tự gửi message/broadcast/priority mà không cần human confirmation.
- Ghi riêng false-positive/misunderstanding/hesitation.
- Không dùng “Bạn có thích option này không?” làm evidence chính.

---

## 9. Group completion statement

> **Sau automated interaction test + source review, nhóm quan sát thấy:** bộ prototype đạt 20/23 PASS và có human control/recovery tốt ở cả 4 option. Tuy nhiên, feedback instrumentation chưa đồng đều vì A/C/D chưa có event logging, trong khi B đã có structured log.  
>
> **Evidence chính:** A 5/6, B 5/5, C 5/6, D 5/6; ba FAIL đều nằm ở event logging của A/C/D. Còn có các P1/P2 về tone C, wording/default bias D và data minimization B.  
>
> **Next Change:** chuẩn hóa event logging A/C/D trước comparative human usability test.  
>
> **Still Unproven:** interpretation, pressure/surveillance, first action, hesitation, recovery discovery và relative UX của A/B/C/D với người dùng thật.
