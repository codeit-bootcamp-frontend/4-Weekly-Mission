import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
  saveAccessTokenToLocalStorage,
  redirectToFolderPage,
} from "./utils.js";
/**
 * 이메일 입력 필드를 검증하고 에러 메시지를 표시
 * @param {string} email - 검증할 이메일 주소
 */
function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
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

/**
 * 비밀번호 입력 필드를 검증하고 에러 메시지를 표시
 * @param {string} password - 검증할 비밀번호
 */
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}

/**
 * 회원가입 양식을 제출
 * @param {Event} event - 제출 이벤트
 */
async function submitForm(event) {
  event.preventDefault();

  const isTestUser =
    emailInput.value === TEST_USER.email && passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: TEST_USER.email,
          password: TEST_USER.password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        handleSuccessLoginOrSignup(responseData.accessToken);
      } else {
        const responseData = await response.json();
        setInputError({ input: emailInput, errorMessage: emailErrorMessage }, responseData.message);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  } else {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 확인해주세요."
    );
  }
}
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
