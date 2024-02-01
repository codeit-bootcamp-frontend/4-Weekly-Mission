const loginBtn = document.querySelector(".login-btn");

// Landing 페이지에서 accessToken 확인
document.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("access-token");
  loginBtn.addEventListener("click", () => {
    accessToken
      ? (window.location.href = "/folder")
      : (window.location.href = "/signin");
  });
});
