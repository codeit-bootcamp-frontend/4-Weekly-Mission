export function isValidEmail(email) {
  return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,})$/.test(email);
}

export function createErrorMessage(message, inputElement) {
  const existingErrorMessage = inputElement.parentElement.querySelector('.error-message');

  // 이미 같은 종류의 에러 메시지가 표시되어 있다면 중복 표시 방지
  if (!existingErrorMessage || existingErrorMessage.textContent !== message) {
    const newError = document.createElement("p");
    newError.textContent = message;
    newError.classList.add("error-message");

    inputElement.classList.add("error");

    // 이미 에러 메시지가 있다면 제거
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }

    // 에러 메시지 추가
    inputElement.parentElement.appendChild(newError);
  }
}

export function validateEmail(emailInput) {
  const emailError = emailInput.parentElement.querySelector(".error-message");

  if (emailError) {
    emailError.remove();
    emailInput.classList.remove("error");
  }

  if (emailInput.value === "") {
    createErrorMessage("이메일을 입력해 주세요.", emailInput);
  } else if (!isValidEmail(emailInput.value)) {
    createErrorMessage("올바른 이메일 주소가 아닙니다.", emailInput);
  }
}

export function validatePassword(passwordInput) {
  const passwordError = passwordInput.parentElement.querySelector(".error-message");

  if (passwordError) {
    passwordError.remove();
    passwordInput.classList.remove("error");
  }

  if (passwordInput.value === "") {
    createErrorMessage("비밀번호를 입력해 주세요.", passwordInput);
  }
}