const optionData = {
  A: {
    short: 'Evidence triage',
    title: 'Option A — Evidence-backed triage digest',
    subtitle: 'Lab Coach review evidence theo từng case rồi tự chọn hành động.',
    role: 'Lab Coach',
    summary: 'Tổng hợp nhiều signal có ngữ cảnh thành evidence card minh bạch để hỗ trợ triage.',
    trigger: 'Coach mở digest ở checkpoint hoặc khi có request/signal mới.',
    user: 'Đọc nguồn, timeline, phần còn thiếu và chọn hành động phù hợp.',
    ai: 'Tóm tắt evidence, nêu uncertainty và liệt kê nhiều action khả dĩ.',
    tradeoff: 'Minh bạch và dễ triage hơn, nhưng vẫn cần thời gian review.',
    contextHeading: 'Case learner cần được review',
    privacy: 'Không suy luận từ 1 signal',
    aiHeading: 'Evidence digest do AI tổng hợp',
    decisionHeading: 'Coach chọn bước tiếp theo'
  },
  B: {
    short: 'Coach check-in',
    title: 'Option B — Coach-approved check-in',
    subtitle: 'AI soạn check-in nhưng Coach phải duyệt/chỉnh trước khi gửi.',
    role: 'Lab Coach',
    summary: 'Giảm rào cản tiếp cận learner bằng một check-in ngắn có human approval.',
    trigger: 'Coach mở một case đã có context hoặc sau learner tự báo cần hỗ trợ.',
    user: 'Chọn recipient, chỉnh nội dung, gửi hoặc bỏ qua. Learner có thể không phản hồi.',
    ai: 'Tạo draft check-in và gợi ý câu hỏi làm rõ; không tự gửi hay escalation.',
    tradeoff: 'Dễ tiếp cận hơn nhưng có thể tăng notification hoặc tạo cảm giác bị theo dõi.',
    contextHeading: 'Case có đủ context để cân nhắc check-in',
    privacy: 'Learner có quyền bỏ qua / opt-out',
    aiHeading: 'Draft check-in có thể chỉnh sửa',
    decisionHeading: 'Coach duyệt, sửa hoặc không gửi'
  },
  C: {
    short: 'Issue cluster',
    title: 'Option C — Common-issue cluster view',
    subtitle: 'AI nhóm issue đã opt-in thành cụm để Coach cân nhắc broadcast hoặc follow-up.',
    role: 'Lab Coach',
    summary: 'Nhìn pattern lỗi chung để xử lý capacity tốt hơn mà không làm mất quyền review.',
    trigger: 'Nhiều learner opt-in chia sẻ lỗi tương tự hoặc Coach review theo chủ đề.',
    user: 'Kiểm tra ví dụ/source, broadcast, hỏi thêm, follow-up riêng hoặc bỏ qua.',
    ai: 'Nhóm nội dung issue được phép dùng, nêu uncertainty và tạo draft broadcast.',
    tradeoff: 'Tiết kiệm capacity nhưng có thể gom sai hoặc che nhu cầu cá nhân.',
    contextHeading: 'Một cụm issue đang xuất hiện trong lab',
    privacy: 'Chỉ dùng issue đã opt-in',
    aiHeading: 'Cluster summary và draft broadcast',
    decisionHeading: 'Coach chọn cách xử lý cụm'
  },
  D: {
    short: 'Help brief',
    title: 'Option D — Learner-initiated help brief',
    subtitle: 'Learner chủ động tạo request và quyết định dữ liệu nào được chia sẻ.',
    role: 'Learner',
    summary: 'Trao quyền khởi tạo cho learner, AI chỉ giúp cấu trúc thông tin đã được cung cấp.',
    trigger: 'Chỉ khi learner chủ động bấm “Cần hỗ trợ”.',
    user: 'Chọn loại hỗ trợ, mô tả vấn đề, chọn dữ liệu đính kèm và xác nhận gửi.',
    ai: 'Gợi ý câu hỏi làm rõ và tóm tắt symptom–điều đã thử–mục tiêu hỗ trợ.',
    tradeoff: 'Autonomy/privacy cao nhưng không phát hiện silent struggle nếu learner không khởi tạo.',
    contextHeading: 'Bạn đang gặp lỗi VRAM ở Checkpoint 2',
    privacy: 'Bạn chọn dữ liệu được gửi',
    aiHeading: 'AI cấu trúc help brief từ nội dung bạn nhập',
    decisionHeading: 'Bạn kiểm tra và xác nhận trước khi gửi'
  }
};

let currentOption = 'A';
let selectedAction = null;

const overviewView = document.querySelector('#overviewView');
const optionView = document.querySelector('#optionView');
const overviewGrid = document.querySelector('#overviewGrid');
const outcomeBlock = document.querySelector('#outcomeBlock');

function buildOverview() {
  overviewGrid.innerHTML = Object.entries(optionData).map(([key, item]) => `
    <button class="overview-option" type="button" data-open-option="${key}">
      <span class="option-letter">${key}</span>
      <span>
        <h3>${item.title.replace(`Option ${key} — `, '')}</h3>
        <p>${item.summary}</p>
      </span>
    </button>
  `).join('');

  overviewGrid.querySelectorAll('[data-open-option]').forEach(btn => {
    btn.addEventListener('click', () => showOption(btn.dataset.openOption));
  });
}

function setActiveTab(key) {
  document.querySelectorAll('.option-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.option === key);
  });
}

function showOverview() {
  overviewView.hidden = false;
  optionView.hidden = true;
  setActiveTab(currentOption);
}

function showOption(key) {
  currentOption = key;
  selectedAction = null;
  overviewView.hidden = true;
  optionView.hidden = false;
  outcomeBlock.hidden = true;
  setActiveTab(key);
  renderOption();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderOption() {
  const d = optionData[currentOption];
  document.querySelector('#optionTitle').textContent = d.title;
  document.querySelector('#optionSubtitle').textContent = d.subtitle;
  document.querySelector('#rolePill').textContent = d.role;
  document.querySelector('#contextHeading').textContent = d.contextHeading;
  document.querySelector('#privacyBadge').textContent = d.privacy;
  document.querySelector('#aiHeading').textContent = d.aiHeading;
  document.querySelector('#decisionHeading').textContent = d.decisionHeading;
  document.querySelector('#snapshotTitle').textContent = d.short;
  document.querySelector('#snapshotTrigger').textContent = d.trigger;
  document.querySelector('#snapshotUser').textContent = d.user;
  document.querySelector('#snapshotAI').textContent = d.ai;
  document.querySelector('#snapshotTradeoff').textContent = d.tradeoff;

  renderContext(currentOption);
  renderAI(currentOption);
  renderDecision(currentOption);
}

function renderContext(key) {
  const el = document.querySelector('#contextBody');
  const templates = {
    A: `
      <div class="info-row"><span class="icon-box">👤</span><div><strong>Learner L-07 · checkpoint 2</strong><p>Tự báo “kẹt VRAM” sau khi chạy cấu hình LoRA. Chưa có help request chính thức.</p></div></div>
      <div class="info-row"><span class="icon-box">⏱</span><div><strong>12 phút trước</strong><p>Nguồn signal: learner note + checkpoint issue description. Không dùng im lặng, dwell time hay AI/search use.</p></div></div>
    `,
    B: `
      <div class="info-row"><span class="icon-box">👤</span><div><strong>Learner L-07 · lỗi VRAM</strong><p>Learner đã chủ động ghi issue ở checkpoint 2. Coach đang cân nhắc có nên mở check-in.</p></div></div>
      <div class="info-row"><span class="icon-box">🔐</span><div><strong>Quyền của learner</strong><p>Learner có thể trả lời, bỏ qua message hoặc opt-out khỏi kiểu check-in chủ động này.</p></div></div>
    `,
    C: `
      <div class="cluster-head"><strong>VRAM / configuration</strong><span class="source">4 learner · 20 phút</span></div>
      <p>4 learner đã opt-in chia sẻ issue liên quan đến VRAM/configuration. 2 người nói đã đọc lại slide trước khi gửi issue.</p>
      <div class="notice">Cụm chỉ dựa trên nội dung issue đã được chia sẻ, không kết luận cả 4 learner đều đang “struggle”.</div>
    `,
    D: `
      <div class="info-row"><span class="icon-box">🧑‍💻</span><div><strong>Lab LoRA · Checkpoint 2</strong><p>Bạn đang gặp lỗi CUDA out of memory khi chạy cấu hình mô hình.</p></div></div>
      <div class="info-row"><span class="icon-box">🛡️</span><div><strong>Bạn quyết định việc chia sẻ</strong><p>AI không tự lấy tiến độ, lịch sử tìm kiếm hay dữ liệu khác ngoài những gì bạn nhập/chọn.</p></div></div>
    `
  };
  el.innerHTML = templates[key];
}

function renderAI(key) {
  const el = document.querySelector('#aiBody');
  const templates = {
    A: `
      <div class="evidence-card"><div class="evidence-head"><strong>Issue được learner tự báo</strong><span class="source">Nguồn: checkpoint note</span></div><p>“Kẹt VRAM khi chạy checkpoint 2; đã thử theo slide nhưng chưa rõ nên giảm tham số nào.”</p></div>
      <div class="evidence-card"><div class="evidence-head"><strong>Thông tin còn thiếu</strong><span class="source">Uncertainty</span></div><p>Chưa biết log lỗi cụ thể, cấu hình batch size, và learner muốn hướng dẫn nhanh hay review 1:1.</p></div>
      <div class="notice">AI chỉ tóm tắt evidence và khoảng trống thông tin; không xếp learner vào priority queue tự động.</div>
    `,
    B: `
      <div class="draft-card">
        <strong>Draft check-in</strong>
        <div class="field"><label for="draftB">Coach có thể chỉnh trước khi gửi</label><textarea id="draftB">Mình thấy bạn đã ghi nhận lỗi VRAM ở checkpoint 2. Bạn muốn nhận hướng dẫn giảm VRAM, đặt câu hỏi cho Lab Coach, hay tự tiếp tục và không cần follow-up?</textarea></div>
        <p>Gợi ý câu hỏi làm rõ: “Bạn đang gặp lỗi ở bước load model hay lúc training?”</p>
      </div>
    `,
    C: `
      <div class="cluster-card"><div class="cluster-head"><strong>AI cluster summary</strong><span class="source">Confidence: vừa</span></div><p>Điểm chung: lỗi memory/configuration khi load hoặc train. Một case có thể khác nguyên nhân, nên cần review ví dụ trước broadcast.</p></div>
      <div class="draft-card" style="margin-top:10px"><strong>Draft broadcast</strong><div class="field"><textarea id="draftC">Nếu bạn đang gặp lỗi VRAM ở checkpoint 2, hãy thử giảm batch size và kiểm tra lại cấu hình precision trước. Nếu lỗi vẫn còn, gửi log ngắn để Lab Coach xem thêm.</textarea></div></div>
    `,
    D: `
      <div class="form-card">
        <div class="field"><label for="issueD">Bạn đang kẹt ở đâu?</label><textarea id="issueD">Khi chạy checkpoint 2, mình gặp CUDA out of memory và chưa biết nên giảm VRAM ở đâu.</textarea></div>
        <div class="check-row">
          <label class="check-chip"><input type="checkbox" id="attemptSlide" checked> Đã đọc lại slide</label>
          <label class="check-chip"><input type="checkbox" id="attemptRetry"> Đã thử đổi cấu hình</label>
          <label class="check-chip"><input type="checkbox" id="shareCheckpoint" checked> Chia sẻ checkpoint 2</label>
        </div>
        <div class="notice">AI sẽ chỉ dùng phần mô tả và các mục bạn chọn ở trên để tạo help brief.</div>
      </div>
    `
  };
  el.innerHTML = templates[key];
}

function choice(label, desc, action) {
  return `<button type="button" class="choice-btn" data-action="${action}"><strong>${label}</strong><span>${desc}</span></button>`;
}

function renderDecision(key) {
  const el = document.querySelector('#decisionBody');
  const templates = {
    A: `
      <div class="choice-grid">
        ${choice('Mở check-in', 'Hỏi learner muốn được hỗ trợ theo cách nào.', 'checkin')}
        ${choice('Follow-up 1:1', 'Review trực tiếp case và log lỗi.', 'followup')}
        ${choice('Broadcast hướng dẫn', 'Dùng khi đây là lỗi chung đã đủ evidence.', 'broadcast')}
        ${choice('Defer', 'Chờ thêm context hoặc capacity.', 'defer')}
      </div>
    `,
    B: `
      <div class="choice-grid">
        ${choice('Duyệt & gửi', 'Gửi draft sau khi Coach đã review/chỉnh.', 'send')}
        ${choice('Sửa thêm', 'Tiếp tục điều chỉnh tone hoặc câu hỏi.', 'edit')}
        ${choice('Defer', 'Chưa gửi, chờ thêm context.', 'defer')}
        ${choice('Không follow-up', 'Signal hiện tại chưa đủ để chủ động nhắn.', 'dismiss')}
      </div>
    `,
    C: `
      <div class="choice-grid">
        ${choice('Duyệt broadcast', 'Gửi hướng dẫn chung sau khi review draft.', 'broadcast')}
        ${choice('Xem ví dụ & tách case', 'Kiểm tra case có thể khác pattern.', 'inspect')}
        ${choice('Follow-up 1:1', 'Mở hỗ trợ riêng cho learner cần context khác.', 'followup')}
        ${choice('Bỏ qua cụm', 'Không hành động khi evidence chưa đủ.', 'dismiss')}
      </div>
    `,
    D: `
      <div class="choice-grid">
        ${choice('Xem bản nháp help brief', 'AI cấu trúc lại nội dung bạn vừa cung cấp.', 'preview')}
        ${choice('Sửa mô tả', 'Tiếp tục chỉnh nội dung trước khi gửi.', 'edit')}
        ${choice('Tự tiếp tục', 'Không gửi request vào lúc này.', 'continue')}
        ${choice('Bỏ chọn dữ liệu đính kèm', 'Giảm thông tin chia sẻ trước khi tạo brief.', 'privacy')}
      </div>
    `
  };
  el.innerHTML = templates[key];
  el.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => selectAction(btn.dataset.action, btn));
  });
}

function selectAction(action, btn) {
  selectedAction = action;
  document.querySelectorAll('#decisionBody .choice-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const outcomes = getOutcome(currentOption, action);
  document.querySelector('#outcomeTitle').textContent = outcomes.title;
  document.querySelector('#outcomeText').textContent = outcomes.text;
  outcomeBlock.hidden = false;
  outcomeBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getOutcome(key, action) {
  const maps = {
    A: {
      checkin: ['Đã chọn mở check-in', 'Coach vẫn là người quyết định nội dung và thời điểm gửi; AI không tự nhắn learner.'],
      followup: ['Đã chọn follow-up 1:1', 'Case được chuyển sang review riêng để lấy thêm log/config trước khi kết luận.'],
      broadcast: ['Đã chọn cân nhắc broadcast', 'Coach cần kiểm tra xem lỗi có thật sự là pattern chung trước khi dùng hướng dẫn cho nhiều learner.'],
      defer: ['Đã defer case', 'Chưa có hành động gửi ra ngoài. Case có thể được xem lại khi có thêm context hoặc capacity.']
    },
    B: {
      send: ['Check-in đã được duyệt mô phỏng', 'Prototype ghi nhận rằng Coach đã review nội dung trước khi gửi. Không có message thật được gửi.'],
      edit: ['Tiếp tục chỉnh draft', 'Bạn có thể sửa trực tiếp nội dung ở phần “AI hỗ trợ” rồi mới quyết định gửi.'],
      defer: ['Đã defer check-in', 'Coach chưa gửi message và có thể quay lại khi có thêm context.'],
      dismiss: ['Không follow-up', 'Coach quyết định signal hiện tại chưa đủ để chủ động liên hệ learner.']
    },
    C: {
      broadcast: ['Broadcast được duyệt mô phỏng', 'Coach đã review draft và chọn dùng hướng dẫn chung. Không có broadcast thật được gửi.'],
      inspect: ['Mở bước inspect', 'Coach nên xem ví dụ/source và tách những case không cùng nguyên nhân trước khi xử lý cả cụm.'],
      followup: ['Chuyển sang follow-up 1:1', 'Một learner có thể nhận hỗ trợ riêng thay vì bị gom hoàn toàn vào pattern chung.'],
      dismiss: ['Đã bỏ qua cụm', 'Không có broadcast hay follow-up nào được tự động tạo.']
    },
    D: {
      preview: ['Help brief đã được tạo mô phỏng', buildHelpBrief()],
      edit: ['Bạn vẫn đang chỉnh sửa', 'Không có request nào được gửi. Bạn có thể sửa phần mô tả hoặc lựa chọn dữ liệu chia sẻ.'],
      continue: ['Bạn chọn tự tiếp tục', 'Chưa có yêu cầu hỗ trợ nào được gửi. Bạn có thể quay lại tạo request bất cứ lúc nào.'],
      privacy: ['Đã nhắc lại quyền kiểm soát dữ liệu', 'Bạn có thể bỏ chọn checkpoint hoặc bất kỳ nội dung đính kèm nào trước khi tạo help brief.']
    }
  };
  const [title, text] = maps[key][action];
  return { title, text };
}

function buildHelpBrief() {
  const issue = document.querySelector('#issueD')?.value.trim() || 'Chưa có mô tả.';
  const attempts = [];
  if (document.querySelector('#attemptSlide')?.checked) attempts.push('đã đọc lại slide');
  if (document.querySelector('#attemptRetry')?.checked) attempts.push('đã thử đổi cấu hình');
  const shared = document.querySelector('#shareCheckpoint')?.checked ? 'có chia sẻ checkpoint 2' : 'không đính kèm checkpoint';
  return `Bản nháp: ${issue} Điều đã thử: ${attempts.length ? attempts.join(', ') : 'chưa chọn'}. Dữ liệu chia sẻ: ${shared}. Learner vẫn phải xác nhận trước khi gửi.`;
}

function resetCurrentOption() {
  selectedAction = null;
  outcomeBlock.hidden = true;
  renderOption();
}

buildOverview();
showOverview();

document.querySelectorAll('.option-tab').forEach(btn => {
  btn.addEventListener('click', () => showOption(btn.dataset.option));
});
document.querySelector('#overviewBtn').addEventListener('click', showOverview);
document.querySelector('#backOverviewBtn').addEventListener('click', showOverview);
document.querySelector('#resetOptionBtn').addEventListener('click', resetCurrentOption);
