const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const loginForm = document.querySelector("#login-form");

const eyeOffButton = document.querySelector(".eye-off");
const eyeOnButton = document.querySelector(".eye-on");

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// 이메일 입력
emailInput.addEventListener("focusout", checkEmailInput);
emailInput.addEventListener("focus", resetInputStyle);

function checkEmailInput() {
  if (emailInput.value.trim() === "") {
    showEmailErrorMessage("이메일을 입력해 주세요.");
  } else if (!validateEmail(emailInput.value.trim())) {
    showEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
  } else {
    hideErrorMessage();
  }
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function showEmailErrorMessage(message) {
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

// 이메일, 비밀번호 제출
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "test@codeit.com" && password === "codeit101") {
    window.location.href = "/folder";
  } else {
    if (email !== "test@codeit.com") {
      showEmailErrorMessage("이메일을 확인해 주세요.");
    }
    if (password !== "codeit101") {
      showPasswordErrorMessage("비밀번호를 확인해 주세요.");
    }
  }
}

// 눈 모양 아이콘 클릭시 문자열 보이게
eyeOffButton.addEventListener("click", function () {
  passwordInput.type = "text";
  eyeOffButton.style.display = "none";
  eyeOnButton.style.display = "block";
});

eyeOnButton.addEventListener("click", function () {
  passwordInput.type = "password";
  eyeOnButton.style.display = "none";
  eyeOffButton.style.display = "block";
});
