document.addEventListener("DOMContentLoaded", () => {
       const h3 = document.getElementById("stk"); 
      setTimeout(() => {
       h3.style.opacity = "1";
       h3.style.transform = "translateY(0)";
      }, 3000); // đợi 3 giây trước khi bắt đầu hiện
    });