# Prototype Feedback Note 2 — Feedback Instrumentation & Research Readiness

**Case:** AI Support Radar  
**Nguồn evidence:** `TEST-LOG-AI-SUPPORT-RADAR(1).md`  
**Ngày test:** 2026-08-19  
**Phương pháp:** Automated DOM/JavaScript interaction test + source review  
**Trọng tâm:** khả năng thu feedback và so sánh prototype công bằng

---

## 1. Observation summary

| Observation | Note |
| --- | --- |
| **Research logging** | B PASS; A/C/D FAIL. |
| **First action measurement** | Chỉ B có nền tảng để ghi first choice/event sequence một cách có cấu trúc. |
| **Edit / undo / defer measurement** | B có thể log; A/C/D chỉ xác nhận interaction chạy được nhưng chưa có structured research log. |
| **Data quality** | Không đồng đều giữa các option, gây rủi ro nếu so sánh A/B/C/D. |
| **Data minimization** | B đang lưu một số debrief/rationale free text; cần giảm raw text nếu không phục vụ research question. |
| **Overall readiness** | Prototype đủ tốt để tiếp tục chuẩn bị human test, nhưng instrumentation chưa đủ đồng nhất để comparative test công bằng. |

---

## 2. OBSERVED

### Kết quả tổng

- **20/23 PASS**
- **3/23 FAIL**
- Tỷ lệ pass: **87%**

### Ba FAIL

- **A06:** `log_storage_present=False`
- **C06:** `localStorage keys=[]`
- **D06:** `localStorage keys=[]`

### Option B

- B05 PASS.
- Có **27 events** đang được lưu.
- Event ví dụ có:
  - timestamp;
  - runId;
  - role;
  - event;
  - includeContext;
  - questionLength.

---

## 3. INTERPRETED

1. **Instrumentation là bottleneck lớn nhất hiện tại.**
2. Nếu human test được chạy ngay:
   - B có thể cung cấp event-level data;
   - A/C/D phụ thuộc nhiều hơn vào note thủ công.
3. Chất lượng evidence giữa prototype sẽ không cân bằng.
4. Khi đó một option có logging tốt có thể trông “có nhiều insight hơn” chỉ vì instrument tốt hơn, không phải vì UX thực sự khác.
5. B cũng cần data minimization để tránh over-collection trong nghiên cứu.

---

## 4. DECIDED — NEXT CHANGE

> **P0: dùng cùng một event schema cho cả A/B/C/D trước comparative human test.**

```json
{
  "ts": "ISO-8601",
  "runId": "...",
  "option": "A|B|C|D",
  "role": "learner|coach",
  "event": "first_action|evidence_opened|edit|confirm|undo|defer|dismiss|optout|complete",
  "contextId": "L-07",
  "metadata": {}
}
```

### Quy tắc logging

- chỉ log dữ liệu tối thiểu;
- tránh lưu nguyên văn learner text nếu không cần;
- disclosure rằng research interaction được lưu cục bộ;
- có nút clear/reset log;
- dùng cùng event naming giữa 4 option;
- phân biệt system event và user action.

---

## 5. STILL UNPROVEN

- Logging schema mới có capture đủ hesitation/recovery không.
- Dữ liệu event có cần bổ sung dwell time không, hay dwell time tạo risk diễn giải quá mức.
- Note thủ công và event log sẽ được reconcile như thế nào.
- Human test có cần screen recording hay không.
- Không thể kết luận option winner trước khi instrumentation được cân bằng.
