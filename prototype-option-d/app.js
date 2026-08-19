const form = document.querySelector('#help-form');
const issueInput = document.querySelector('#issue');
const issueError = document.querySelector('#issue-error');
const formView = document.querySelector('#form-view');
const previewView = document.querySelector('#preview-view');
const successView = document.querySelector('#success-view');
const continueView = document.querySelector('#continue-view');
const liveStatus = document.querySelector('#live-status');

const previewSupport = document.querySelector('#preview-support');
const previewIssue = document.querySelector('#preview-issue');
const previewAttempts = document.querySelector('#preview-attempts');
const previewShared = document.querySelector('#preview-shared');
const previewMissing = document.querySelector('#preview-missing');

function setView(activeView, announcement) {
  [formView, previewView, successView, continueView].forEach((view) => {
    view.hidden = view !== activeView;
  });

  if (announcement) {
    liveStatus.textContent = announcement;
  }

  const firstHeading = activeView.querySelector('h2, textarea, button');
  firstHeading?.focus();
}

function getSelectedValues(selector) {
  return [...document.querySelectorAll(selector)]
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function makeList(values, emptyMessage) {
  return values.length ? values.join('; ') : emptyMessage;
}

function updatePreview() {
  const supportType = document.querySelector('input[name="supportType"]:checked').value;
  const issue = issueInput.value.trim();
  const attempts = getSelectedValues('input[name="attempt"]');
  const shared = getSelectedValues('#share-checkpoint, #share-attempts');

  previewSupport.textContent = supportType;
  previewIssue.textContent = issue;
  previewAttempts.textContent = makeList(attempts, 'Bạn chưa chọn điều đã thử.');
  previewShared.textContent = makeList(shared, 'Chỉ phần mô tả bạn vừa nhập sẽ được gửi.');
  previewMissing.textContent = attempts.length
    ? 'TA có thể cần hỏi thêm chi tiết về log lỗi hoặc cấu hình.'
    : 'TA có thể cần hỏi thêm bạn đã thử những gì trước đó.';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const issue = issueInput.value.trim();

  if (!issue) {
    issueError.textContent = 'Hãy mô tả ngắn vấn đề bạn đang gặp trước khi xem bản nháp.';
    issueInput.focus();
    return;
  }

  issueError.textContent = '';
  updatePreview();
  setView(previewView, 'Đã tạo bản nháp yêu cầu hỗ trợ. Bạn có thể kiểm tra và sửa trước khi gửi.');
});

document.querySelector('#edit-button').addEventListener('click', () => {
  setView(formView, 'Bạn đang chỉnh sửa yêu cầu hỗ trợ.');
  issueInput.focus();
});

document.querySelector('#send-button').addEventListener('click', () => {
  setView(successView, 'Đã tạo yêu cầu hỗ trợ mô phỏng. Không có dữ liệu thật được gửi.');
});

document.querySelector('#continue-button').addEventListener('click', () => {
  setView(continueView, 'Bạn chọn tự tiếp tục. Không có yêu cầu nào được gửi.');
});

document.querySelectorAll('[data-reset]').forEach((button) => {
  button.addEventListener('click', () => {
    form.reset();
    issueError.textContent = '';
    setView(formView, 'Bạn có thể tạo một yêu cầu hỗ trợ mới.');
    issueInput.focus();
  });
});
