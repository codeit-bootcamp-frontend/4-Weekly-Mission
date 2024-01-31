const querySelector = (selector) => document.querySelector(selector);

const emailInput = querySelector("#email-input");
const passwordInput = querySelector("#password-input");
const emailErrorMessage = querySelector("#email-error-message");
const passwordErrorMessage = querySelector("#password-error-message");
const loginForm = querySelector("#login-form");

const eyeOffButton = querySelector("#eye-off");
const eyeOnButton = querySelector("#eye-on");

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// 이메일 입력
emailInput.addEventListener("focusout", validateEmailInput);

function validateEmailInput() {
  const email = emailInput.value.trim();

  if (email === "") {
    showEmailErrorMessage("이메일을 입력해 주세요.");
    return;
  }

  if (!isValidateEmail(email)) {
    showEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
    return;
  }

  hideEmailErrorMessage();
}

function isValidateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function showEmailErrorMessage(message) {
  emailErrorMessage.textContent = message;
  emailErrorMessage.classList.add("show");
  emailInput.classList.add("sign-input-error");
  emailInput.classList.add("error-focus");
}

function hideEmailErrorMessage() {
  emailErrorMessage.textContent = "";
  emailErrorMessage.classList.remove("show");
  emailInput.classList.remove("sign-input-error");
  emailInput.classList.remove("error-focus");
}

// 비밀번호 입력
passwordInput.addEventListener("focusout", validatePasswordInput);

function validatePasswordInput() {
  const password = passwordInput.value.trim();

  if (password === "") {
    showPasswordErrorMessage("비밀번호를 입력해 주세요.");
    return;
  }

  hidePasswordErrorMessage();
}

function showPasswordErrorMessage(message) {
  passwordErrorMessage.textContent = message;
  passwordErrorMessage.classList.add("show");
  passwordInput.classList.add("sign-input-error");
  passwordInput.classList.add("error-focus");
}

function hidePasswordErrorMessage() {
  passwordErrorMessage.textContent = "";
  passwordErrorMessage.classList.remove("show");
  passwordInput.classList.remove("sign-input-error");
  passwordInput.classList.remove("error-focus");
}

// 이메일, 비밀번호 제출
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const testEmail = "test@codeit.com";
  const testPassword = "codeit101";

  if (email === testEmail && password === testPassword) {
    window.location.href = "/folder";
    return;
  }

  if (email !== testEmail) {
    showEmailErrorMessage("이메일을 확인해 주세요.");
  }

  if (password !== testPassword) {
    showPasswordErrorMessage("비밀번호를 확인해 주세요.");
  }
}

// 눈 아이콘 클릭시 문자열 보이거나 숨기기
eyeOffButton.addEventListener("click", handleClickEyeOffButton);
eyeOnButton.addEventListener("click", handleClickEyeOnButton);

function handleClickEyeOffButton() {
  passwordInput.type = "text";
  eyeOffButton.classList.add("hide");
  eyeOnButton.classList.remove("hide");
}

function handleClickEyeOnButton() {
  passwordInput.type = "password";
  eyeOffButton.classList.remove("hide");
  eyeOnButton.classList.add("hide");
}
