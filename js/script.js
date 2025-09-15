// Hàm format số với dấu phẩy ngăn cách
Number.prototype.format = function (n) {
    const r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
};

// Hàm easing easeOutExpo (giống jQuery UI)
function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

// Hàm animate counter
function animateCounter(element, duration = 10000) {
    const start = 0;
    const end = parseInt(element.textContent, 10);
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress); // dùng easing
        const value = start + (end - start) * eased;

        element.textContent = value.format() + "%"; // Thêm dấu % sau số

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Chạy cho tất cả các phần tử có class "count"
document.querySelectorAll('.count-1').forEach(el => {
    animateCounter(el, 2000); // 10 giây
})
document.querySelectorAll('.count-2').forEach(el => {
    animateCounter(el, 2000);})
document.querySelectorAll('.count-3').forEach(el => {
    animateCounter(el, 2000); })


    // Lắng nghe sự kiện khi cuộn trang
window.addEventListener("scroll", function () {

  // Lấy phần tử header trong HTML (có class .header)
  const header = document.querySelector(".header");

  // Kiểm tra xem người dùng đã cuộn xuống quá 50px chưa
  if (window.scrollY > 50) {
    // Nếu có → thêm class "scrolled" vào header
    // Khi đó CSS .header.scrolled sẽ được áp dụng (ví dụ: background trắng)
    header.classList.add("scrolled");
  } else {
    // Nếu chưa (ngược lên trên cùng) → bỏ class "scrolled"
    // Header quay lại trạng thái trong suốt ban đầu
    header.classList.remove("scrolled");
  }
});

