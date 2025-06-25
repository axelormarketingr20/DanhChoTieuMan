 document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(".delayed");
       const img = document.getElementById("image-container"); 
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
    });

  setTimeout(() => {
    window.location.href = "../pages/Page3.html"; // Đường dẫn đến trang bạn muốn chuyển đến
  }, 17000);