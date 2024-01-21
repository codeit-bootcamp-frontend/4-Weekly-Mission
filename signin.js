const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const errorMessage = document.createElement("p");
const loginButton = document.querySelector(".login-button");
const emailValidation =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordHide = document.querySelector(".password-eye");

function inputErrorMessage(input, errorMessage, message) {
  errorMessage.textContent = message;
  input.classList.add("error");
  errorMessage.classList.add("error-message");
}

// 유효성 검사
emailInput.addEventListener("focusout", function (e) {
  if (emailInput.value === "") {
    inputErrorMessage(emailInput, errorMessage, "이메일을 입력해 주세요.");
  } else if (!emailValidation.test(emailInput.value)) {
    inputErrorMessage(
      emailInput,
      errorMessage,
      "올바른 이메일 주소가 아닙니다."
    );
  }
  document.querySelector(".email-input-container").append(errorMessage);
});

passwordInput.addEventListener("focusout", function (e) {
  if (passwordInput.value === "") {
    inputErrorMessage(passwordInput, errorMessage, "비밀번호를 입력해 주세요.");
  }
  document.querySelector(".password-input-container").append(errorMessage);
});

// 로그인
function loginButtonEvent(e) {
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    if (emailInput.value !== "test@codeit.com") {
      inputErrorMessage(emailInput, errorMessage, "이메일을 확인해주세요.");
      document.querySelector(".email-input-container").append(errorMessage);
    } else if (passwordInput.value !== "codeit101") {
      inputErrorMessage(
        passwordInput,
        errorMessage,
        "비밀번호를 확인해 주세요."
      );
      document.querySelector(".password-input-container").append(errorMessage);
    }
  }
  e.preventDefault();
}

loginButton.addEventListener("click", loginButtonEvent);

loginButton.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    return loginButtonEvent();
  }
});
