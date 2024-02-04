import { INVALID_CLASS, ADMIN_EMAIL, ADMIN_PASSWORD } from "./base.js";
import { isValidEmail } from "./inputValidation.js";
import { togglePasswordVisibility } from "./togglePasswordVisibility.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const loginButton = document.querySelector(".base-button");
  const togglePasswordIcon = document.querySelector(
    "#togglePasswordVisibility"
  );

  // 이메일 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handleEmailInput() {
    const emailValue = emailInput.value;
    const emailError = document.querySelector("#emailError");

    // 이메일 입력부분이 비어 있는 경우
    if (!emailValue) {
      emailError.textContent = "이메일을 입력해 주세요.";
      emailInput.classList.add(INVALID_CLASS);
    }
    // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효한지 확인 후 유효하지 않은 경우
    else if (!isValidEmail(emailValue)) {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add(INVALID_CLASS);
    }
    // 이메일 입력부분이 비어있지 않은 경우 + 이메일 형식이 유효한 형식인 경우
    else {
      emailError.textContent = "";
      emailInput.classList.remove(INVALID_CLASS);
    }
  }

  // 비밀번호 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handlePasswordInput() {
    const passwordValue = passwordInput.value;
    const passwordError = document.querySelector("#passwordError");

    // 비밀번호 입력부분이 비어 있는 경우
    if (!passwordValue) {
      passwordError.textContent = "비밀번호를 입력해 주세요.";
      passwordInput.classList.add(INVALID_CLASS);
    }
    // 비밀번호 입력부분이 비어있지 않은 경우
    else {
      passwordError.textContent = "";
      passwordInput.classList.remove(INVALID_CLASS);
    }
  }

  emailInput.addEventListener("blur", handleEmailInput);
  emailInput.addEventListener("input", handleEmailInput);
  passwordInput.addEventListener("blur", handlePasswordInput);
  passwordInput.addEventListener("input", handlePasswordInput);

  loginButton.addEventListener("click", function (event) {
    // 폼의 기본 제출 동작을 방지
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");

    // 정해진 이메일과 비밀번호가 입력된 경우
    if (emailValue === ADMIN_EMAIL && passwordValue === ADMIN_PASSWORD) {
      window.location.href = "/component/folder.html";
    } else {
      // 정해진 이메일이 입력되지 않은 경우
      if (emailValue !== ADMIN_EMAIL) {
        emailError.textContent = "이메일을 확인해 주세요";
        emailInput.classList.add(INVALID_CLASS);
      }
      // 정해진 비밀번호가 입력되지 않은 경우
      if (passwordValue !== ADMIN_PASSWORD) {
        passwordError.textContent = "비밀번호를 확인해 주세요";
        passwordInput.classList.add(INVALID_CLASS);
      }
    }
  });

  // 비밀번호 보이기/숨기기
  togglePasswordIcon.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, this);
  });
});
