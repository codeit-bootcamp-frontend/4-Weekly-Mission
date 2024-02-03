const querySelector = (selector) => document.querySelector(selector);

const emailInput = querySelector("#email-input");
const passwordInput = querySelector("#password-input");
const emailErrorMessage = querySelector("#email-error-message");
const passwordErrorMessage = querySelector("#password-error-message");
const passwordConfirmInput = querySelector("#password-confirm-input");
const passwordConfirmErrorMessage = querySelector("#password-confirm-error-message");
const loginForm = querySelector("#login-form");

const eyeOffButton = querySelector("#eye-off");
const eyeOnButton = querySelector("#eye-on");
const eyeOffConfirmButton = querySelector("#eye-off-confirm");
const eyeOnConfirmButton = querySelector("#eye-on-confirm");

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 이메일 입력
emailInput.addEventListener("focusout", validateEmailInput);

function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

function validateEmailInput() {
  const email = emailInput.value.trim();
  const TEST_EMAIL = "test@codeit.com";

  if (email === "") {
    showEmailErrorMessage("이메일을 입력해 주세요.");
    return;
  }

  if (!isValidateEmail(email)) {
    showEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
    return;
  }

  if (email === TEST_EMAIL) {
    showEmailErrorMessage("이미 사용 중인 이메일입니다.");
    return;
  }

  hideEmailErrorMessage();
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

function isValidPassword(password) {
  return PASSWORD_REGEX.test(password);
}

function validatePasswordInput() {
  const password = passwordInput.value.trim();

  if (password === "") {
    showPasswordErrorMessage("비밀번호를 입력해 주세요.");
    return;
  }

  if (!isValidatePassword(password)) {
    showPasswordErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
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

// 비밀번호 확인
passwordConfirmInput.addEventListener("focusout", validatePasswordConfirmInput);

function validatePasswordConfirmInput() {
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();

  if (password !== passwordConfirm) {
    showPasswordConfirmErrorMessage("비밀번호가 일치하지 않아요.");
    return;
  }

  hidePasswordConfirmErrorMessage();
}

function showPasswordConfirmErrorMessage(message) {
  passwordConfirmErrorMessage.textContent = message;
  passwordConfirmErrorMessage.classList.add("show");
  passwordConfirmInput.classList.add("sign-input-error");
  passwordConfirmInput.classList.add("error-focus");
}

function hidePasswordConfirmErrorMessage() {
  passwordConfirmErrorMessage.textContent = "";
  passwordConfirmErrorMessage.classList.remove("show");
  passwordConfirmInput.classList.remove("sign-input-error");
  passwordConfirmInput.classList.remove("error-focus");
}

// 이메일, 비밀번호, 비밀번호 확인 제출
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();

  let isValid = true;

  if (!isValidateEmail(email)) {
    showEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
    isValid = false;
  } else {
    hideEmailErrorMessage();
  }

  if (!isValidatePassword(password)) {
    showPasswordErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    isValid = false;
  } else {
    hidePasswordErrorMessage();
  }

  if (password !== passwordConfirm) {
    showPasswordConfirmErrorMessage("비밀번호가 일치하지 않아요.");
    isValid = false;
  } else {
    hidePasswordConfirmErrorMessage();
  }

  if (isValid) {
    window.location.href = "/folder";
  }
}

// 눈 아이콘 클릭시 비밀번호 보이거나 숨기기
eyeOffButton.addEventListener("click", handleClickEyeOffButton);
eyeOnButton.addEventListener("click", handleClickEyeOnButton);
eyeOffConfirmButton.addEventListener("click", handleClickEyeOffConfirmButton);
eyeOnConfirmButton.addEventListener("click", handleClickEyeOnConfirmButton);

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

function handleClickEyeOffConfirmButton() {
  passwordConfirmInput.type = "text";
  eyeOffConfirmButton.classList.add("hide");
  eyeOnConfirmButton.classList.remove("hide");
}

function handleClickEyeOnConfirmButton() {
  passwordConfirmInput.type = "password";
  eyeOffConfirmButton.classList.remove("hide");
  eyeOnConfirmButton.classList.add("hide");
}
