import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

//이메일 확인 기능
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);
function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

//패스워드, 재입력란 확인기능
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }

  if (
    password.length < 8 ||
    !/[a-zA-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

const passwordCheckInput = document.querySelector("#passwordcheck");
const passwordCheckErrorMessage = document.querySelector(
  "#passwordcheck-error-message"
);
passwordCheckInput.addEventListener("focusout", (event) =>
  validatePasswordCheckInput(event.target.value)
);
function validatePasswordCheckInput(passwordcheck) {
  if (passwordCheckInput.value !== passwordInput.value) {
    setInputError(
      { input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
      "비밀번호가 일치하지 않습니다"
    );
    return;
  }
  removeInputError({
    input: passwordCheckInput,
    errorMessage: passwordCheckErrorMessage,
  });
}

//눈모양 토글
const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const passwordCheckToggleButton = document.querySelector(
  "#passwordcheck-toggle"
);
passwordCheckToggleButton.addEventListener("click", () =>
  togglePassword(passwordCheckInput, passwordCheckToggleButton)
);

//6주차 추가 - 이메일 확인 리퀘스트
async function checkAccounts(id) {
  const Account = {
    email: id,
  };
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(Account),
    }
  );

  if (response.status === 409) {
    alert("이미 존재하는 이메일입니다.");
    return;
  }
}

async function signUpRequest(id, pass) {
  const Account = {
    email: id,
    password: pass,
  };
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(Account),
  });
  if (response.status === 200) {
    location.href = "/folder";
    return;
  }
}

//클릭시 기능
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const isValidUser =
    emailInput.value !== TEST_USER.email &&
    passwordInput.value === passwordCheckInput.value &&
    emailInput.value !== "" &&
    passwordInput.value !== "";

  checkAccounts(emailInput.value);

  if (isValidUser) {
    signUpRequest(emailInput.value, passwordInput.value);
  }
}
