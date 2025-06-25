 document.addEventListener("DOMContentLoaded", () => {
    // Sau 10 giây thì hiện dòng 2 và 3 ảnh
       
    setTimeout(() => {
      chu2.style.opacity = "1";
      chu2.style.transform = "translateY(0)";
      const anhArray = document.querySelectorAll("img");
      anhArray.forEach(img => {
        img.style.opacity="1";
        img.style.transform = "translateY(0)";
      });
    }, 3000); // 10000 ms = 10 giây
  });const chu2 = document.getElementById("mygirl");

  setTimeout(() => {
    window.location.href = "../pages/Page2.html"; // Đường dẫn đến trang bạn muốn chuyển đến
  }, 7000);
 
