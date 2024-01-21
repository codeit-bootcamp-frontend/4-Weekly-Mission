const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// 이메일 입력
emailInput.addEventListener("focusout", checkEmailInput);
emailInput.addEventListener("focus", resetInputStyle);

function checkEmailInput() {
  if (emailInput.value.trim() === "") {
    showErrorMessage("이메일을 입력해 주세요.");
  } else if (!validateEmail(emailInput.value.trim())) {
    showErrorMessage("올바른 이메일 주소가 아닙니다.");
  } else {
    hideErrorMessage();
  }
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function showErrorMessage(message) {
  emailErrorMessage.textContent = message;
  emailErrorMessage.style.display = "block";
  emailInput.classList.add("sign-input-error");
}

function hideErrorMessage() {
  emailErrorMessage.style.display = "none";
  emailInput.classList.remove("sign-input-error");
}

function resetInputStyle() {
  hideErrorMessage();
}

// 비밀번호 입력
passwordInput.addEventListener("focusout", checkPasswordInput);
passwordInput.addEventListener("focus", resetPasswordInputStyle);

function checkPasswordInput() {
  if (passwordInput.value.trim() === "") {
    showPasswordErrorMessage("비밀번호를 입력해 주세요.");
  } else {
    hidePasswordErrorMessage();
  }
}

function showPasswordErrorMessage(message) {
  passwordErrorMessage.textContent = message;
  passwordErrorMessage.style.display = "block";
  passwordInput.classList.add("sign-input-error");
}

function hidePasswordErrorMessage() {
  passwordErrorMessage.style.display = "none";
  passwordInput.classList.remove("sign-input-error");
}

function resetPasswordInputStyle() {
  hidePasswordErrorMessage();
}
