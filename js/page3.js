 document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(".delayed");
       const img = document.getElementById("image-container"); 
       const button = document.getElementById("next-button"); 
      setTimeout(() => {
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 2000); 
        });
      }, 2000); // đợi 3 giây trước khi bắt đầu hiện
      setTimeout(() => {
       img.style.opacity = "1";
       img.style.transform = "translateY(0)";
      }, 10000); // đợi 3 giây trước khi bắt đầu hiện
      setTimeout(() => {
       button.style.opacity = "1";
       button.style.transform = "translateY(0)";
      }, 13000); // đợi 3 giây trước khi bắt đầu hiện
    });
document.getElementById("next-button").addEventListener("click", () => {
  window.location.href = "../pages/Page4.html"; // Đổi thành URL bạn muốn
});