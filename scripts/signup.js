import { isValidEmail } from "./inputValidation.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");

  // 이메일 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handleEmailInput() {
    const emailValue = emailInput.value;
    const emailError = document.querySelector("#emailError");

    // 이메일 입력부분이 비어 있는 경우
    if (!emailValue) {
      emailError.textContent = "이메일을 입력해 주세요.";
      emailInput.classList.add("invalid");
      // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효한지 확인 후 유효하지 않은 경우
    } else if (!isValidEmail(emailValue)) {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add("invalid");
      // test@codeit.com이 입력된 경우
    } else if (emailValue === "test@codeit.com") {
      emailError.textContent = "이미 사용 중인 이메일입니다.";
      emailInput.classList.add("invalid");
      // 이메일 입력부분이 비어있지 않은 경우 + 이메일 형식이 유효한 형식인 경우
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
    }
  }

  emailInput.addEventListener("blur", handleEmailInput);
  emailInput.addEventListener("input", handleEmailInput);
});
