# Chặng 5–6 — Test Plan, Feedback Notes & Group Synthesis

**Case:** AI Support Radar (Case C)  
**Nguồn evidence:** `TEST-LOG-AI-SUPPORT-RADAR(1).md`  
**Ngày test:** 2026-08-19  
**Phạm vi:** Prototype A / B / C / D trong `day18-work/prototypes`  
**Phương pháp thực tế:** Automated interaction test trên DOM/JavaScript bằng Chromium headless + review source code. Không có backend/API thật.

> **Quan trọng:** Bản này dùng **evidence thật từ test log**, không còn dùng feedback tester mô phỏng.  
> Tuy nhiên, nguồn test hiện tại **không phải usability test với người dùng thật**, nên các mục yêu cầu 3 tester, first action tự nhiên, hesitation, interpretation, cảm giác surveillance/autonomy và preference giữa option **chưa thể coi là đã hoàn tất**.

---

# 7. Chặng 5 — Chuẩn bị test

## 1. Context và mục tiêu test đã thực hiện

Bộ test hiện tại kiểm tra hai lớp:

1. **Behavior của prototype**
   - evidence / uncertainty có hiển thị không;
   - action có cần human confirmation không;
   - edit / defer / không gửi / opt-out / undo có hoạt động không;
   - privacy/disclosure có xuất hiện không.

2. **Feedback instrumentation**
   - prototype có lưu event log phục vụ research không;
   - có đủ dữ liệu để đo first action, edit, undo, defer, opt-out và drop-off hay không.

### Mục tiêu thực tế của lượt test

> Xác nhận rằng bốn prototype giữ được human control ở critical moment và đánh giá xem feedback instrumentation hiện tại có đủ đồng đều để chạy comparative usability test hay chưa.

---

## 2. Test coverage

### Option A — Evidence-backed triage

Đã kiểm tra:

- trạng thái ban đầu trung tính;
- uncertainty cho signal mơ hồ;
- human confirmation trước action;
- undo/recovery;
- xem dữ liệu gốc;
- event log phục vụ research.

### Option B — Coach-approved check-in

Đã kiểm tra:

- Coach duyệt/chỉnh trước gửi;
- Defer không gửi message;
- learner opt-out;
- learner có thể không chia sẻ context;
- event log.

### Option C — Common-issue cluster

Đã kiểm tra:

- disclosure phạm vi AI;
- split outlier sang 1:1;
- draft cập nhật sau split và sửa được;
- explicit confirmation trước broadcast;
- undo broadcast;
- event log.

### Option D — Learner-initiated help brief

Đã kiểm tra:

- disclosure privacy;
- validation phần mô tả vấn đề;
- optional data có thể để trống;
- review/edit/confirm;
- tự tiếp tục không gửi;
- event log.

---

## 3. Observation focus thực tế

Do đây là automated interaction test, observation focus được chuyển từ “hành vi tự nhiên của tester” sang:

| # | Observation focus | Dữ liệu có thể kết luận |
| --- | --- | --- |
| 1 | **Control path** | Có edit / defer / dismiss / opt-out / undo / no-send hay không |
| 2 | **Evidence & uncertainty** | Disclosure, `Đã biết/Chưa biết`, dữ liệu gốc, opt-in text có xuất hiện không |
| 3 | **Confirmation boundary** | AI có tự gửi hay cần human/learner confirmation |
| 4 | **Recovery** | Có thể quay lại/sửa/undo/tách case hay không |
| 5 | **Instrumentation** | Có log được event phục vụ research hay không |

### Không thể kết luận từ automated log hiện tại

- tester làm gì đầu tiên một cách tự nhiên;
- tester có do dự hay hiểu sai không;
- tester có cảm giác bị giám sát không;
- tester có thực sự hiểu uncertainty không;
- tester chọn A/B/C/D vì trade-off nào;
- visual hierarchy có bias hành vi người thật không.

---

## 4. Test result tổng

| Option | PASS | FAIL | Kết luận |
| --- | ---: | ---: | --- |
| **A** | 5/6 | 1 | Evidence/uncertainty và recovery tốt; thiếu event log research |
| **B** | 5/5 | 0 | Hoàn chỉnh nhất về human control + instrumentation |
| **C** | 5/6 | 1 | Broadcast/split/undo tốt; thiếu event log research |
| **D** | 5/6 | 1 | Agency/privacy tốt; thiếu event log research, còn wording/bias cần sửa |
| **Tổng** | **20/23** | **3/23** | **87% pass rate** |

---

# 8. Chặng 6 — Test evidence thực tế

## 1. Phương pháp

**Không có 3 tester người thật trong log hiện tại.**

Thay vào đó:

- Chromium headless chạy interaction tests;
- DOM/JavaScript state được kiểm tra;
- source code được review;
- các kết quả PASS/FAIL và observed state được ghi lại.

Do đó ba “Prototype Feedback Note” dưới đây được điền theo **evidence batch**, không giả danh là ba tester.

---

# 9. Prototype Feedback Note — Evidence Batch 1: Option A

**Tester/context:** Không áp dụng — automated DOM/JavaScript test + source review  
**Relevant-context level:** Không áp dụng  
**Prototype:** A — Evidence-backed triage  
**Result:** **5/6 PASS**

| Observation | Note |
| --- | --- |
| **First action** | **Không có dữ liệu người dùng thật.** A chưa có event log research nên không thể đo first action tự nhiên đáng tin cậy. |
| **Chỗ dừng, do dự hoặc hiểu sai** | **Không đo được** bằng automated interaction test. |
| **Evidence được đọc hay bỏ qua** | Không đo được “đọc/bỏ qua”, nhưng UI đã xác nhận có `Đã biết/Chưa biết`, cảnh báo về im lặng và `Xem dữ liệu gốc`. |
| **Cách user sửa/lấy lại control** | Đã xác nhận `Hoàn tác` hoạt động; trạng thái được restore về `Chưa đủ dữ liệu`. |
| **Option được chọn** | Không áp dụng — không có comparative human choice. |
| **Lý do và trade-off** | Không có dữ liệu preference người thật. Trade-off kỹ thuật: control/evidence tốt nhưng instrumentation yếu. |
| **Counter-evidence** | A có control tốt nhưng **không có event log**, nên chưa đủ dữ liệu research để kết luận người dùng có thực sự dùng các control đó. |

## OBSERVED

- **A01 PASS:** trạng thái ban đầu trung tính: `1 ghi chú`, `3 ghi chú`, `Chưa đủ dữ liệu`.
- **A02 PASS:** signal mơ hồ hiển thị `Đã biết/Chưa biết` và cảnh báo về im lặng.
- **A03 PASS:** action chỉ hoàn tất sau Coach confirmation; final status được test là `Xem lại sau`.
- **A04 PASS:** Undo/recovery hoạt động; restore về `Chưa đủ dữ liệu`.
- **A05 PASS:** `Xem dữ liệu gốc` mở được.
- **A06 FAIL:** không có research event log (`log_storage_present=False`).

## INTERPRETED

- Human control/safety của A khá mạnh ở critical decision.
- A có evidence và uncertainty đủ để **cho phép** tester phân biệt signal với conclusion, nhưng automated test không chứng minh tester người thật sẽ hiểu đúng.
- Không có event log làm dữ liệu A yếu hơn B nếu đem so first action/edit/undo/drop-off.

## DECIDED — NEXT CHANGE

> **Thêm event logging chuẩn hóa cho Option A trước comparative usability test.**

Schema tối thiểu nên log:

- `first_action`
- `evidence_opened`
- `confirm`
- `undo`
- `dismiss`
- `complete`

Không cần lưu nguyên văn nội dung learner nếu không phục vụ câu hỏi nghiên cứu.

## STILL UNPROVEN

- Người thật có hiểu `Chưa đủ dữ liệu` đúng không.
- Có ai coi số lượng ghi chú là proxy cho mức độ struggle không.
- Có ai tìm thấy `Xem dữ liệu gốc` và `Hoàn tác` mà không được hướng dẫn không.
- First action và hesitation thật chưa được đo.

---

# 10. Prototype Feedback Note — Evidence Batch 2: Option B và C

## 10.1 Option B — Coach-approved check-in

**Tester/context:** Không áp dụng — automated DOM/JavaScript test + source review  
**Result:** **5/5 PASS**

| Observation | Note |
| --- | --- |
| **First action** | B có event log có cấu trúc nên **có khả năng** đo first choice trong human test; log hiện tại chưa phải behavior của tester người thật. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Automated test không đo được hesitation/interpretation. |
| **Evidence được đọc hay bỏ qua** | Không đo được read/ignore thực tế. |
| **Cách user sửa/lấy lại control** | Coach edit draft; Defer không gửi; learner có thể không chia sẻ context; learner opt-out. |
| **Option được chọn** | Không áp dụng. |
| **Lý do và trade-off** | B có instrumentation tốt nhất; nhưng logging free-text cần data minimization. |
| **Counter-evidence** | Có event log tốt không đồng nghĩa UX đã tốt; vẫn cần human test để đo pressure/surveillance interpretation. |

### OBSERVED — B

- **B01 PASS:** Coach có thể duyệt/chỉnh trước gửi; `draft_active=True`, `edited=True`.
- **B02 PASS:** Defer giữ case để xem sau và không gửi message cho learner.
- **B03 PASS:** learner opt-out; `outcome=opted_out`.
- **B04 PASS:** learner có thể gửi question mà không chia sẻ context; log ghi `includeContext=False`.
- **B05 PASS:** event log đầy đủ; test ghi nhận **27 events** đang được lưu.

### INTERPRETED — B

- Đây là option có instrumentation mạnh nhất.
- Human approval, defer, opt-out và optional context đều hoạt động đúng về mặt prototype.
- Tuy nhiên B đang lưu một số debrief/rationale dạng free text, nên có privacy/data-minimization risk trong nghiên cứu.

### DECIDED — NEXT CHANGE — B

> Giữ event log, nhưng thêm disclosure trước test rằng feedback được lưu cục bộ và có nút clear; giảm lưu raw free text nếu không thực sự cần.

### STILL UNPROVEN — B

- Learner có cảm giác bị monitoring không.
- Learner có thấy “không bắt buộc trả lời” là đủ giảm pressure không.
- Coach có hiểu đúng khác biệt Defer / No follow-up không.
- Tester có tự tìm thấy opt-out không.

---

## 10.2 Option C — Common-issue cluster

**Result:** **5/6 PASS**

| Observation | Note |
| --- | --- |
| **First action** | Không có event log, nên không đo được tester inspect cluster trước hay broadcast trước. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Không đo được bằng automated test. |
| **Evidence được đọc hay bỏ qua** | UI disclosure xác nhận AI cluster từ text opt-in; không đo được tester có thực sự đọc disclosure. |
| **Cách user sửa/lấy lại control** | Có split outlier, sửa draft, explicit confirmation và undo broadcast. |
| **Option được chọn** | Không áp dụng. |
| **Lý do và trade-off** | Capacity/control path tốt về structure; thiếu logging nên chưa thể nghiên cứu behavior công bằng với B. |
| **Counter-evidence** | Control path tốt nhưng tone draft vẫn có thể tạo cảm giác surveillance. |

### OBSERVED — C

- **C01 PASS:** disclosure nói rõ AI chỉ cluster từ text opt-in.
- **C02 PASS:** tách outlier sang 1:1; cluster còn 3 learners.
- **C03 PASS:** draft broadcast cập nhật sau split và sửa được.
- **C04 PASS:** broadcast cần explicit confirmation.
- **C05 PASS:** undo broadcast hoạt động.
- **C06 FAIL:** không có event log research; `localStorage keys=[]`.

### INTERPRETED — C

- Human control ở broadcast path tốt.
- Split outlier + confirmation + undo là guardrail mạnh.
- Tone “Hệ thống ghi nhận một số bạn gặp vấn đề...” vẫn có thể bị hiểu như surveillance dù source là opt-in.

### DECIDED — NEXT CHANGE — C

1. Thêm event logging chuẩn hóa.
2. Đổi tone broadcast thành:
   > **“Từ các issue đã được các bạn chia sẻ ở Checkpoint 2, có một số mô tả tương tự về VRAM/CUDA OOM...”**

### STILL UNPROVEN — C

- Tester có inspect/split trước broadcast không.
- Similarity/cluster có khiến tester over-trust không.
- Learner có thấy broadcast tone hiện tại bị giám sát không.
- Có giảm workload thật so với xử lý 1:1 không.

---

# 11. Prototype Feedback Note — Evidence Batch 3: Option D

**Tester/context:** Không áp dụng — automated DOM/JavaScript test + source review  
**Prototype:** D — Learner-initiated help brief  
**Result:** **5/6 PASS**

| Observation | Note |
| --- | --- |
| **First action** | Không đo được; D không có event log và radio mặc định có thể bias first action. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Không đo được behavior người thật. Source review phát hiện wording disclosure chưa hoàn toàn nhất quán. |
| **Evidence được đọc hay bỏ qua** | Privacy disclosure có hiển thị; chưa biết learner có hiểu chính xác data gửi hay không. |
| **Cách user sửa/lấy lại control** | Có thể bỏ optional data, preview, quay lại edit, confirm send hoặc tự tiếp tục không gửi. |
| **Option được chọn** | Không áp dụng. |
| **Lý do và trade-off** | Agency/privacy tốt về structure; measurement bị bias vì default radio + không có event log. |
| **Counter-evidence** | UI có privacy disclosure nhưng preview text vẫn có thể mô tả thiếu dữ liệu thực tế được gửi. |

## OBSERVED

- **D01 PASS:** disclosure privacy hiện trên form.
- **D02 PASS:** phần mô tả vấn đề là bắt buộc trước preview.
- **D03 PASS:** optional data có thể để trống; preview vẫn chạy.
- **D04 PASS:** review/edit/confirm trước send hoạt động.
- **D05 PASS:** có đường `Tự tiếp tục, không gửi`.
- **D06 FAIL:** không có research event log; `localStorage keys=[]`.

### Vấn đề source review phát hiện

1. Khi learner không chọn optional data, preview ghi:
   > “Chỉ phần mô tả bạn vừa nhập sẽ được gửi.”

   nhưng preview vẫn chứa **Loại hỗ trợ**. Wording này chưa mô tả chính xác data được gửi.

2. Radio:
   > `Giải thích lỗi và bước tiếp theo`

   đang được preselect, có thể bias first action/preference nếu human test dùng lựa chọn đầu tiên làm metric.

## INTERPRETED

- D cho learner agency tốt về chọn data, preview, edit và no-send.
- Nhưng privacy comprehension cần chính xác tuyệt đối; wording hiện tại có thể làm learner hiểu sai scope dữ liệu.
- Default radio làm measurement research kém sạch.

## DECIDED — NEXT CHANGE

1. Sửa disclosure preview thành dạng chính xác:
   > **“Sẽ gửi: Loại hỗ trợ + mô tả vấn đề”**
   rồi liệt kê từng optional field nếu learner đã chọn.

2. Bỏ preselected radio trong research build.

3. Thêm event logging chuẩn hóa:
   - `first_action`
   - `field_selected`
   - `optional_data_selected`
   - `preview`
   - `edit`
   - `confirm`
   - `dismiss/no_send`
   - `complete`

## STILL UNPROVEN

- Learner có hiểu chính xác data scope sau khi sửa wording không.
- Learner có tìm thấy no-send path mà không cần facilitator không.
- Structured help brief có thực sự giảm barrier hỏi hỗ trợ không.
- TA có nhận đủ context để giảm số lượt hỏi lại không.

---

# 12. Group Feedback Synthesis — từ test log thực tế

| Nội dung | A | B | C | D | Pattern / khác biệt |
| --- | --- | --- | --- | --- | --- |
| **Human control** | Confirm + undo + raw data | Edit + defer + no-follow-up + opt-out | Split + edit + confirm + undo | Preview + edit + no-send | **Cả 4 đều có recovery/control ở critical moment** |
| **Uncertainty/disclosure** | Đã biết/Chưa biết + silence warning | Evidence + optional context | Opt-in cluster disclosure | Privacy/data disclosure | Guardrail khá nhất quán về structure |
| **Instrumentation** | **FAIL** | **PASS** | **FAIL** | **FAIL** | Đây là breakdown lớn nhất của feedback system |
| **First action** | Không đo được | Có infrastructure để đo | Không đo được | Không đo được + default bias | Chưa thể compare fair |
| **Recovery path** | PASS | PASS | PASS | PASS | Recovery là điểm mạnh xuyên suốt |
| **Wording/bias issue** | Chưa phát hiện blocker trong log | Data minimization | Surveillance tone | Data-scope wording + default radio | Cần sửa trước human test |
| **Overall** | 5/6 | 5/5 | 5/6 | 5/6 | B hoàn chỉnh nhất về instrumentation |

---

## Pattern có evidence lặp lại

### 1. Human control / safety là điểm mạnh

Cả bốn option đều không để AI tự hoàn tất critical action một cách không kiểm soát:

- A cần Coach confirm và có undo.
- B cần Coach duyệt/edit, có defer và learner opt-out.
- C cần explicit confirmation, split outlier và undo.
- D cần learner preview/edit/confirm hoặc no-send.

### 2. Instrumentation là breakdown chung

- A: thiếu event log.
- C: thiếu event log.
- D: thiếu event log.
- Chỉ B có structured log.

Điều này làm data quality không đồng đều và khiến comparative usability test dễ bị lệch.

### 3. Disclosure tốt về intent nhưng còn risk ở wording

- C có disclosure opt-in nhưng broadcast tone vẫn có thể gợi cảm giác surveillance.
- D có privacy disclosure nhưng câu mô tả “chỉ phần mô tả...” không khớp hoàn toàn với data preview.
- B có logging tốt nhưng cần disclosure + data minimization cho research data.

---

## Khác biệt quan trọng

- **B** là option duy nhất hiện sẵn sàng nhất về instrumentation.
- **A** mạnh về evidence/recovery nhưng không đo được research behavior.
- **C** mạnh về broadcast control nhưng tone cần bám consent hơn.
- **D** mạnh về learner agency nhưng research build có bias từ default radio và wording data scope chưa chính xác.

---

## Một Next Change nhóm chốt

> **P0: Chuẩn hóa event logging cho A/C/D theo cùng schema với B trước khi chạy comparative human usability test.**

### Schema tối thiểu

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

### Nguyên tắc

- log event + metadata tối thiểu;
- tránh lưu nguyên văn learner text nếu không cần;
- có disclosure research;
- có clear/reset log;
- dùng cùng naming/schema ở A/B/C/D.

---

## Evidence dẫn tới Next Change

> Tổng test đạt **20/23 PASS**, nhưng cả ba FAIL đều nằm ở event logging của **A, C, D**. B là prototype duy nhất có structured event log và đã ghi được 27 events. Vì mục tiêu tiếp theo là comparative usability test, instrumentation không đồng đều là rủi ro lớn nhất đối với chất lượng evidence.

---

## Still Unproven sau test log

1. Người thật có hiểu rằng AI **không kết luận learner đang struggle** hay không.
2. Người thật có tìm được edit/defer/no-send/opt-out/undo mà không cần facilitator không.
3. Learner có cảm giác bị surveillance với B/C không.
4. Learner có hiểu chính xác dữ liệu nào được chia sẻ ở D không.
5. First action/hesitation thực tế của A/C/D.
6. A/B/C/D option nào tốt hơn về UX hoặc outcome thực tế.
7. Capacity gain của C.
8. Barrier reduction của B/D.
9. Prototype design đã khá tốt để test, nhưng **chưa thể claim validated UX** từ automated log hiện tại.

---

# 13. Cách chốt Next Change

## Next Change hiện tại

**Không chọn “winner” A/B/C/D.**

Chọn:

> **Chuẩn hóa instrumentation trước, sau đó mới chạy comparative human usability test.**

### P0

- event logging cho A/C/D.

### P1

- D: sửa wording data scope.
- D: bỏ default radio ở research build.
- C: sửa broadcast tone bám opt-in/consent hơn.

### P2

- B: data minimization + disclosure/clear log.

---

# 14. Decision lens riêng cho AI Support Radar

## 1. Signal → judgment

**Evidence có:** prototype đã có uncertainty/disclosure guardrails.

**Chưa biết:** người thật có diễn giải đúng không.

### Acceptance criterion đề xuất

> **≥ 80% tester mô tả đúng rằng AI không kết luận learner đang struggle.**

---

## 2. AI → human control

**Evidence có:** cả 4 option đều có human/learner control tại critical moment.

### Acceptance criterion đề xuất

> **Không có tester hiểu rằng AI tự gửi message/broadcast/priority mà không cần human confirmation.**

---

## 3. Capacity → actionability

**Evidence có:** flow/action chạy được.

**Chưa biết:** interaction có thực sự giúp ra quyết định nhanh hơn trong tình huống thật không.

---

## 4. Autonomy → support

**Evidence có:**

- B: defer / optional context / opt-out.
- D: optional data / edit / no-send.
- C: opt-in source disclosure.

**Chưa biết:** learner có thật sự cảm thấy autonomy được giữ không.

### Acceptance criteria đề xuất

- **≥ 80%** tìm được edit/defer/no-send/opt-out/undo mà không được chỉ dẫn.
- **≥ 80%** mô tả đúng dữ liệu nào được chia sẻ.

---

# 15. GATE 5 — Learning, not praise

## Trạng thái theo evidence hiện tại

- [ ] Có **3 Feedback Notes độc lập từ 3 tester người thật**.  
  **Chưa đạt:** hiện là automated test + source review.

- [ ] Mỗi tester đã dùng cả A/B/C với cùng outcome task.  
  **Chưa có human test.**

- [ ] Đã ghi first action người thật.  
  **Chưa đạt:** A/C/D thiếu logging; B chỉ có infrastructure.

- [ ] Có evidence về hesitation/misunderstanding người thật.  
  **Chưa đạt.**

- [x] Có evidence prototype về **human control / recovery**.

- [x] Có evidence về **edit / defer / no-send / opt-out / undo** ở critical path.

- [ ] Có option được người thật chọn + lý do + trade-off.  
  **Không được suy ra từ automated test.**

- [x] Có counter-evidence / failure evidence:
  - A/C/D thiếu event log;
  - C tone có surveillance risk;
  - D wording/data-scope và default bias;
  - B logging cần data minimization.

- [x] Group synthesis nêu pattern, không vote.

- [x] Nhóm chốt đúng **một Next Change P0**:
  **chuẩn hóa event logging A/C/D**.

- [x] Next Change có evidence cụ thể:
  **3/3 FAIL đều là event-log failure của A/C/D.**

- [x] Có Still Unproven.

- [x] Không claim solution đã validated.

---

# GATE 5 — Completion statement

> **Sau lượt automated interaction test + source review, nhóm quan sát thấy:** 20/23 test case PASS. Human control/recovery ở cả bốn prototype hoạt động tốt, nhưng feedback instrumentation chưa đồng đều; A/C/D đều thiếu structured event log trong khi B đã có logging đầy đủ.  
>
> **Evidence chính:** A 5/6, B 5/5, C 5/6, D 5/6; cả ba FAIL đều là event log research của A/C/D. Ngoài ra source review phát hiện C có tone broadcast dễ gợi surveillance, D có wording data-scope chưa nhất quán và default radio có thể bias first action, B cần data minimization cho free-text research log.  
>
> **Next Change:** Chuẩn hóa event logging cho A/C/D theo cùng schema tối thiểu với B trước khi chạy comparative human usability test; sau đó sửa P1 wording/bias của C/D và P2 data minimization của B.  
>
> **Still Unproven:** UX với người thật; interpretation uncertainty; surveillance/pressure; first action/hesitation; khả năng tìm opt-out/undo không hướng dẫn; option nào tốt hơn trong use case thật.

---

# 16. Acceptance criteria cho human test tiếp theo

- **≥ 80%** tester mô tả đúng rằng AI **không kết luận** learner đang struggle.
- **≥ 80%** tìm được **edit / defer / không gửi / opt-out / undo** mà không được chỉ dẫn.
- **≥ 80%** mô tả đúng **dữ liệu nào được chia sẻ**.
- **0 tester** hiểu rằng AI tự gửi message/broadcast/priority mà không cần human confirmation.
- Ghi riêng false-positive / misunderstanding / hesitation.
- Không dùng câu “Bạn có thích option này không?” làm evidence chính.

---

# 17. Kết luận dùng cho báo cáo

> **Bộ prototype hiện có nền tảng Human–AI control tốt và đạt 87% pass rate trong automated interaction test, nhưng chưa đủ evidence để kết luận option nào có UX tốt nhất. Bottleneck chính hiện tại là instrumentation: chỉ Option B có event log có cấu trúc, còn A/C/D chưa đo được first action và recovery behavior một cách đồng đều. Vì vậy bước tiếp theo không phải chọn winner mà là chuẩn hóa logging, sửa các wording/bias đã phát hiện, rồi chạy human usability test theo acceptance criteria đã chốt.**
