# Chặng 4 — Build ba micro-prototype (80 phút)

**Case:** AI Support Radar (Case C)  
**Option:** B — Coach-approved Check-in  
**Đầu vào:** Day 18 input pack, Human–AI Decision Table / Critical Interactions và prototype HTML test-ready hiện tại.  
**Mục tiêu gate (GATE 4 — Test-ready):** Một người không build có thể tự mở prototype, chọn đúng vai trò, thực hiện task từ common context, tự thao tác các lựa chọn A/B/C, tìm được điểm lấy lại control và reset về trạng thái ban đầu mà không cần facilitator giải thích giao diện.

---

## 1. Scope chuẩn & Shared Elements

Option B giữ cùng bối cảnh Case C và cùng loại tình huống LoRA/VRAM với các prototype còn lại, nhưng cố ý **zoom vào một case cụ thể** để kiểm tra chất lượng check-in và cảm nhận autonomy thay vì triage nhiều learner cùng lúc.

- **Common context:** `Case L-07` — learner đang làm LoRA lab, ở Checkpoint 2 và vừa ghi nhận lỗi VRAM trong checkpoint note.
- **Shared scenario:** Đây là case kiểu L01-like từ input pack: learner gặp lỗi VRAM trong lab, có khả năng đang tự xử lý và chưa chủ động yêu cầu hỗ trợ.
- **Hai vai trong cùng một prototype:** `Learner` và `Lab Coach` dùng cùng Case L-07 nhưng nhìn thấy lượng thông tin khác nhau.
- **Learner context boundary:** Learner chỉ thấy những gì learner thực sự biết — mình vừa ghi nhận lỗi VRAM và nhận một check-in.
- **Coach context boundary:** Lab Coach thấy signal, nguồn và uncertainty; prototype nêu rõ signal này **không phải kết luận** learner đang struggle.
- **Task & desired outcome:** Kiểm tra liệu check-in do Coach duyệt có giúp learner tiếp cận support dễ hơn mà vẫn cảm thấy có quyền từ chối, bỏ qua, đổi ý hoặc opt-out.
- **Không dùng model/API thật:** AI draft và guidance đều là canned output; toàn bộ flow chạy bằng HTML/CSS/JavaScript trong một file.

**Điểm khác biệt riêng của Option B:** AI **soạn nháp**, nhưng Lab Coach phải chủ động quyết định có tạo check-in hay không, có thể sửa nội dung trước khi gửi; sau khi nhận, learner tự quyết định A/B/C, bỏ qua hoặc opt-out. AI không tự gửi và không tự kết luận learner cần hỗ trợ.

---

## 2. Option B — Coach-approved Check-in Prototype

### Link Prototype

👉 File local: `option_b_coach_approved_checkin_prototype.html` — mở trực tiếp bằng browser, không cần cài đặt hay backend.

### Flow tổng quát theo Scope chuẩn

```text
[COMMON CONTEXT]  ➔  [CRITICAL INTERACTION]  ➔  [RESULT / USER CONTROL]
 Chọn vai trò          Coach: chọn action           Learner xác nhận lựa chọn
 Case L-07             → duyệt/sửa draft            hoặc không phản hồi
 VRAM · checkpoint 2   Learner: hiểu message        Debrief ngắn
                       → chọn A/B/C                  First choice được ghi
                       → ignore / opt-out            Reset về common context
```

### 2.1 COMMON CONTEXT — Chọn đúng vai trò trước khi test

Prototype mở bằng màn hình chọn vai trò:

- **Learner:** đang làm lab và vừa nhận một message từ Lab Coach.
- **Lab Coach:** đang xem một signal có context và phải tự quyết định có follow-up hay không.

Hai vai dùng cùng `Common Context ID: L-07`, nhưng prototype **không cho learner xem evidence card phía Coach trước**, nhằm tránh priming cách learner diễn giải message.

Nút `Reset về common context` luôn đưa prototype về màn hình chọn vai trò và tạo một run mới.

---

### 2.2 LEARNER FLOW — Interpretation trước, action sau

#### Bước 1 — Learner task

Learner được đưa vào cùng tình huống:

> Ở checkpoint 2, bạn vừa gặp lỗi VRAM và đã ghi lại lỗi trong checkpoint note. Bạn vẫn đang tự xử lý theo cách bình thường của mình.

Task hiển thị trực tiếp:

> Một message từ Lab Coach vừa đến. Hãy mở và xử lý nó như bạn sẽ làm thật.

Prototype không yêu cầu tester phải thử cả A/B/C ở lượt đầu.

#### Bước 2 — Interpretation check

Sau khi mở message, learner thấy check-in:

> Mình thấy bạn đã ghi nhận lỗi VRAM ở checkpoint 2. Nếu bạn muốn, mình có thể giúp theo một trong ba cách dưới đây. Bạn không bắt buộc phải trả lời, và có thể chọn không nhận follow-up.
>
> (A) Nhận hướng dẫn giảm VRAM  
> (B) Đặt câu hỏi cho Lab Coach  
> (C) Tự tiếp tục và không cần follow-up

**Trước khi được chọn A/B/C**, tester phải ghi lại cách mình hiểu message:

- Coach thấy mình vừa ghi nhận một lỗi kỹ thuật.
- Coach nghĩ mình đang gặp khó khăn và cần được can thiệp.
- Đây có thể là một check-in thông thường, chưa chắc Coach nghĩ mình đang kẹt.
- Không chắc vì sao message này được gửi.

Tester đồng thời chọn **confidence 1–5** cho cách diễn giải đó.

Điểm này dùng để test risk hypothesis: learner có đọc check-in như một lời hỗ trợ, hay như một dấu hiệu họ đang bị theo dõi/phán xét.

#### Bước 3 — A/B/C ngang hàng + Ignore + Opt-out

Sau interpretation check, learner tự chọn hành động:

- **A — Nhận hướng dẫn giảm VRAM:** xem các bước guidance; learner tự quyết định có áp dụng hay không.
- **B — Đặt câu hỏi cho Lab Coach:** learner tự viết câu hỏi và tự chọn có gửi kèm context `VRAM error · checkpoint 2 · LoRA lab` hay không.
- **C — Tự tiếp tục, không cần follow-up:** chủ động kết thúc follow-up cho case này mà không cần giải thích lý do.
- **Bỏ qua message lúc này:** không có response nào được gửi cho Coach.
- **Opt-out:** tắt loại proactive check-in này trong tương lai nhưng vẫn giữ quyền tự raise hand / nhắn Coach khi cần.

`Ignore` được tách khỏi `C`:

- `C` = learner **chủ động phản hồi** rằng hiện tại không cần follow-up.
- `Ignore` = learner **không phản hồi gì**.

Đây là hai hành vi khác nhau và được log riêng.

#### Bước 4 — Điểm learner lấy lại control

Mỗi branch thể hiện control rõ ràng:

- **A:** có thể thử guidance, bỏ qua guidance hoặc quay lại hỏi Coach.
- **B:** Coach chỉ nhận câu hỏi sau khi learner bấm `Gửi`; learner có thể quay lại mà không gửi.
- **C:** learner không cần giải thích vì sao không muốn follow-up.
- **Opt-out:** không làm mất quyền truy cập support về sau.
- **Back:** learner có thể quay lại choices trước khi xác nhận branch.
- **Explore later:** sau khi hoàn thành first choice, tester có thể khám phá các nhánh còn lại mà không làm thay đổi dữ liệu `first choice`.

---

### 2.3 COACH FLOW — Human approval trước khi gửi

#### Bước 1 — Evidence review

Lab Coach thấy:

- **Learner:** L-07
- **Source:** checkpoint note
- **Signal:** ghi nhận lỗi VRAM ở checkpoint 2
- **Đã biết:** có một lỗi kỹ thuật được learner ghi nhận
- **Chưa biết:** learner đã tự xử lý xong chưa; learner có muốn hỗ trợ hay không

Prototype hiển thị guardrail ngay trên màn hình:

> Signal này cần context thêm; không phải kết luận learner đang “struggle”.

#### Bước 2 — Coach decision gate

Coach có ba action ngang hàng:

- **Soạn check-in:** xem AI draft rồi tự duyệt/chỉnh trước khi gửi.
- **Defer:** giữ case lại để xem sau khi có thêm context/capacity.
- **Không follow-up:** không gửi message vì signal hiện tại chưa đủ để chủ động nhắn.

AI **không tự mở draft** và **không tự gửi**.

#### Bước 3 — Duyệt/sửa AI draft

Chỉ khi Coach chọn `Soạn check-in`, prototype mới hiện AI draft.

Coach có thể:

- đọc lại signal/source/uncertainty,
- sửa toàn bộ nội dung draft,
- quay lại decision,
- hoặc bấm `Duyệt & gửi`.

Helper text nêu rõ:

> AI chỉ soạn draft. Coach quyết định nội dung cuối và có gửi hay không.

#### Bước 4 — Coach rationale

Sau action, Coach phải trả lời ngắn:

- Vì sao chọn action này? Evidence nào làm bạn tin/chưa tin?
- Còn cần context nào trước khi thấy thoải mái với quyết định?

Mục tiêu là quan sát human judgment, không chỉ ghi nhận click.

---

### 2.4 RESULT / TEST LOG / RESET PATH

Prototype ghi event vào `localStorage` theo từng run, gồm các hành vi quan trọng như:

- `role_selected`
- `message_opened`
- `interpretation_submitted`
- `first_choice`
- `message_ignored`
- `future_optout_confirmed`
- `branch_completed`
- `learner_debrief_submitted`
- `coach_decision`
- `coach_draft_sent`
- `coach_debrief_submitted`
- `run_completed`

**First choice chỉ được ghi một lần.** Nếu researcher yêu cầu tester khám phá thêm A/B/C sau đó, những click này được ghi ở exploration mode và không thay đổi first choice ban đầu.

Prototype có:

- `View / copy test log`
- `Copy log`
- `Download JSON`
- `Clear session log`
- `Reset về common context`

`Reset` tạo run mới và reset UI/state của experiment nhưng không tự xóa toàn bộ lịch sử session. `Clear session log` là hành động riêng.

---

## 3. Prototype Annotation (Dành cho Tester / Facilitator)

Annotation nên được dùng như facilitator guide, **không đọc trước cho learner** vì sẽ làm lộ hypothesis.

```text
OPTION B — Coach-approved Check-in
--------------------------------------------------------------------------------
We expect the LEARNER tester to:
Đọc message như trong tình huống thật, ghi lại mình hiểu vì sao message được gửi,
sau đó chọn hành động đầu tiên A/B/C, Ignore hoặc Opt-out.
Không cần thử tất cả lựa chọn ở lượt đầu.

Watch for — LEARNER:
Tester có hiểu message là “Coach thấy một signal” hay thành
“Coach biết mình đang struggle / đang theo dõi mình”?
Tester có nhận ra mình không bắt buộc phải phản hồi không?
First choice tự nhiên là gì?
Tester có tìm thấy Ignore / C / Opt-out khi muốn dừng follow-up không?
Tester có phân biệt Ignore với C không?
Tester có thấy điểm mình lấy lại control mà không cần facilitator chỉ ra không?
Pressure score 1–5 là bao nhiêu và vì sao?

We expect the COACH tester to:
Đọc evidence + uncertainty, tự chọn Send / Defer / No follow-up.
Nếu chọn Send, đọc và chỉnh AI draft trước khi gửi.

Watch for — COACH:
Coach có coi checkpoint note là proof learner đang struggle không?
Coach có nhận ra phần “Chưa biết” trước khi quyết định không?
Coach có cảm thấy mình thực sự có thể Defer / Không follow-up không?
Nếu sửa draft, Coach sửa wording nào?
Có wording nào Coach loại bỏ vì nghe như phán xét hoặc giám sát learner không?

Do not explain:
Không nói trước rằng prototype đang test “cảm giác bị theo dõi”.
Không nói lựa chọn nào là “đúng”.
Không giải thích C tốt hơn Ignore hay ngược lại.
Không chỉ cho tester vị trí Opt-out.
Không giải thích evidence thay cho Coach.
Không yêu cầu learner thử cả A/B/C trước khi first choice được ghi.
--------------------------------------------------------------------------------
```

---

## 4. Definition of Testable — GATE 4 Self-Check

| Tiêu chuẩn Test-Ready | Trạng thái ở Prototype Option B |
| --- | --- |
| **Tester tự mở và thao tác độc lập** | [x] Entry screen cho chọn `Learner` hoặc `Lab Coach`; mỗi vai có task và navigation riêng, không cần facilitator narrate UI. |
| **A/B/C cùng bắt đầu từ một context và task** | [x] Learner A/B/C đều xuất phát từ cùng Case L-07, cùng message và cùng interpretation step trước khi lựa chọn xuất hiện. |
| **Không làm nhiễu learner bằng Coach context** | [x] Learner không thấy evidence/uncertainty card phía Coach trước khi đọc check-in. |
| **Option tự giải thích** | [x] A/B/C có title + mô tả ngắn; Ignore và Opt-out được mô tả riêng. |
| **Nội dung đủ thật để tester ra quyết định** | [x] Dùng lỗi VRAM, Checkpoint 2 và LoRA lab; branch A có canned guidance, B có composer + context toggle, C có no-follow-up + optional future opt-out. |
| **Mỗi option có điểm user lấy lại control** | [x] A: áp dụng/bỏ guidance; B: tự viết + chỉ gửi khi bấm Send; C: từ chối không cần giải thích; Ignore: không response; Opt-out: tắt proactive check-in nhưng vẫn giữ support access. |
| **Coach giữ quyền quyết định cuối** | [x] `Soạn check-in`, `Defer`, `Không follow-up` là decision gate; AI draft chỉ xuất hiện sau khi Coach chọn soạn và chỉ được gửi khi Coach bấm `Duyệt & gửi`. |
| **Đo interpretation trước usability** | [x] Learner phải chọn cách hiểu message + confidence trước khi thấy A/B/C. |
| **Ghi được first choice tự nhiên** | [x] First choice được lưu một lần; exploration sau đó không overwrite dữ liệu ban đầu. |
| **Có debrief sau hành động** | [x] Learner trả lời về perceived knowledge, pressure, control; Coach trả lời về evidence, uncertainty và missing context. |
| **Có đường reset về common context** | [x] `Reset về common context` đưa UI về role selection, reset state/form và tạo run mới. |
| **Có test log không cần backend** | [x] Event log lưu trong `localStorage`, có View/Copy/Download JSON và Clear session log. |
| **Không cần model/API thật** | [x] AI draft/guidance là canned output; logic dùng JavaScript thuần trong một file HTML. |

### Guardrail đã kiểm tra

- [x] Prototype **không khẳng định learner đang struggle** chỉ từ checkpoint note.
- [x] Coach thấy rõ phần **Đã biết / Chưa biết** trước khi quyết định.
- [x] AI **không tự gửi** check-in; Coach phải chủ động chọn, duyệt và gửi.
- [x] Learner được nói rõ **không bắt buộc phải trả lời**.
- [x] A/B/C không phải ba mức “đúng/sai”; learner có thể quay lại và đổi ý trước khi xác nhận.
- [x] `Ignore` và `C` được tách riêng để không ép mọi learner phải phản hồi.
- [x] Learner có thể **opt-out proactive check-in** mà vẫn giữ quyền tự yêu cầu hỗ trợ.
- [x] Opt-out không tự nâng priority và không tạo penalty trong prototype.
- [x] Exploration sau first choice không ghi đè lựa chọn ban đầu.
- [x] Reset experiment state và xóa session log là hai hành động tách biệt để tránh mất evidence ngoài ý muốn.

---

## 5. Giá trị và rủi ro Prototype Option B đang kiểm tra

### Giá trị cần test

**Check-in có giảm barrier hỏi hỗ trợ mà không tạo cảm giác bị theo dõi không?**

Evidence cần quan sát:

- learner có chọn A hoặc B khi thực sự muốn hỗ trợ không;
- learner có hiểu mình vẫn có thể tự tiếp tục không;
- learner có dùng B để đặt câu hỏi theo cách của mình không;
- learner có tìm thấy C / Ignore / Opt-out khi không muốn follow-up không;
- wording có giúp learner cảm thấy đây là một offer thay vì một instruction không.

### Rủi ro cần test

**Learner có diễn giải message như một phán xét hoặc ép buộc phải trả lời không?**

Evidence cần quan sát:

- chọn interpretation `Coach nghĩ mình đang gặp khó khăn và cần được can thiệp`;
- confidence cao với interpretation đó;
- pressure score cao;
- learner nói rằng hệ thống đang “theo dõi”, “đánh giá” hoặc “biết mình đang kẹt”;
- learner không nhìn thấy cách bỏ qua / từ chối;
- learner chọn một option chỉ vì nghĩ mình “phải trả lời Coach”.

**Không dùng “tester thích prototype” làm success criterion chính.** Với Option B, meaning/interpretation quan trọng hơn visual preference.

---

## 6. Dữ liệu tối thiểu cần lấy sau mỗi test

### Learner

- Role / Run ID
- Interpretation đầu tiên
- Confidence 1–5
- First choice: `A / B / C / IGNORE / OPT_OUT`
- Branch outcome
- Pressure score 1–5
- Tester nghĩ Coach/system biết gì
- Wording nào tạo cảm giác phải phản hồi
- Tester tìm control ở đâu
- Có dùng opt-out hay không

### Lab Coach

- Action đầu tiên: `Send / Defer / No follow-up`
- Có sửa AI draft hay không
- Lý do chọn action
- Evidence nào làm Coach tin/chưa tin
- Context còn thiếu
- Có hiểu checkpoint signal ≠ proof of struggle hay không

---

## GATE 4 — Test-ready Confirmation

- [x] Một người không build có thể tự mở `option_b_coach_approved_checkin_prototype.html`, chọn vai trò, đi qua cùng Case L-07, thực hiện critical interaction, hoàn thành decision/debrief và quay về common context bằng `Reset về common context` mà không cần facilitator giải thích giao diện.
- [x] Learner có thể tự thao tác A/B/C, Ignore và Opt-out.
- [x] Coach có thể tự chọn Send / Defer / No follow-up và chỉ gửi message sau human approval.
- [x] Prototype tạo được behavioral evidence để kiểm tra cả **giá trị** và **rủi ro** của Coach-approved check-in, thay vì chỉ thu preference.
