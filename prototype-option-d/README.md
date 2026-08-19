# Chặng 4 — Micro-prototype: Option D

## Prototype

- **Option:** D — Learner-initiated help brief.
- **Cách mở:** Mở trực tiếp `index.html` bằng trình duyệt.
- **Công nghệ:** HTML, CSS và JavaScript thuần; không cần cài package, server hay API key.
- **Dữ liệu:** Toàn bộ việc gửi/AI là mô phỏng cục bộ trong trình duyệt. Không có network request, lưu trữ dữ liệu hoặc model thật.

## Scope chuẩn

| Thành phần | Nội dung |
| --- | --- |
| **Common context** | Learner đang ở Lab LoRA, Checkpoint 2 và gặp lỗi VRAM. |
| **Critical interaction** | Learner quyết định mô tả gì, chọn dữ liệu nào được gửi, rồi review bản AI tóm tắt trước khi xác nhận hoặc không gửi. |
| **User control** | Learner có `Tự tiếp tục, không gửi`, `Quay lại chỉnh sửa`, bỏ chọn dữ liệu và chỉ gửi sau confirmation. |
| **Visible outcome** | Trạng thái xác nhận cho biết request đã được tạo mô phỏng; hoặc trạng thái tự tiếp tục xác nhận không có request nào được gửi. |

## Hai trạng thái chính để test

1. **Form request:** Chọn loại hỗ trợ, mô tả issue, chọn điều đã thử và dữ liệu tùy chọn.
2. **Preview/confirmation:** Hiển thị nguồn thông tin, phần còn thiếu, disclosure về capability/limit của AI và các lựa chọn chỉnh sửa/gửi.

Trạng thái outcome sau đó chỉ xác nhận hành động để tester thấy rõ request có/không được gửi trong prototype.

## Prototype annotation

```text
OPTION: D — Learner-initiated help brief
I expect the tester to: tự mô tả vấn đề, cân nhắc thông tin nào muốn chia sẻ, rồi review hoặc sửa bản nháp trước khi quyết định gửi/tự tiếp tục.
Watch for: hành động đầu tiên; lúc do dự khi chọn dữ liệu; tester có hiểu AI không tự lấy dữ liệu và TA có thể cần hỏi thêm không; tester dùng edit/không gửi ở đâu.
Do not explain: ý nghĩa các checkbox, AI disclosure hoặc nút "Tự tiếp tục". Chỉ hỗ trợ nếu tester không thể tiếp tục do lỗi kỹ thuật.
```

## Gate 4 — Test-ready

- [x] Có common context và critical interaction rõ ràng.
- [x] Có hai trạng thái chính và visible outcome.
- [x] Có action có ý nghĩa: chọn/chỉnh dữ liệu, preview, xác nhận gửi hoặc tự tiếp tục.
- [x] Có control/recovery: edit, bỏ chọn dữ liệu, không gửi, bắt đầu lại.
- [x] Có annotation để facilitator test mà không cần giải thích thêm.
