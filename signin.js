/*
4주차 주요 추가 사항: sign.js
이전 코드는 코드잇에서 제공한 3주차 템플릿 사용

세부 사항
이메일과 비밀번호 입력 필드의 유효성 검사.
올바른 로그인 정보 입력 시 페이지 이동.
에러 메시지 표시 및 디자인 적용.
로그인 실행 시 로그인 버튼 클릭 또는 Enter키 입력 인식.
비밀번호 가시성 토글 및 아이콘 변경.
*/

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const togglePassword = document.getElementById("toggle-password");
  const eyeIcon = document.getElementById("eye-icon");

  emailInput.addEventListener("focusout", function() {
    if (!emailInput.value) {
      emailError.textContent = "이메일을 입력해 주세요.";
      /* 이메일 유효성 검사 더 상세하게 수정 필요 */
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {  
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    } else {
      emailError.textContent = "";
    }
  });

  passwordInput.addEventListener("focusout", function() {
    if (!passwordInput.value) {
      passwordError.textContent = "비밀번호를 입력해 주세요.";
    } else {
      passwordError.textContent = "";
    }
  });

  togglePassword.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    eyeIcon.src = type === "password" ? "./images/eye-off.svg" : "./images/eye.svg";
  });

  document.querySelector(".sign-form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
      window.location.href = "folder/folder.html";
    } else {
      if (emailInput.value !== "test@codeit.com") {
        emailError.textContent = "이메일을 확인해 주세요.";
      }
      if (passwordInput.value !== "codeit101") {
        passwordError.textContent = "비밀번호를 확인해 주세요.";
      }
    }
  });
});