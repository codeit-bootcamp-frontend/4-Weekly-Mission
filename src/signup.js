import {
    setInputError,
    removeInputError,
    isEmailValid,
    checkingPassword,
    checkPasswordType,
    togglePassword,
    TEST_USER,
} from "./utils.js";

/**
 * 이메일 입력 필드의 유효성을 검사하고 에러를 처리
 * @param {string} email - 검사할 이메일 주소
 */
async function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage },
    "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }

  // 이메일 중복 확인 요청
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!response.ok) {
      const responseData = await response.json();
      setInputError({ input: emailInput, errorMessage: emailErrorMessage }, responseData.message);
      return;
    }
  } catch (error) {
    console.error("이메일 중복 확인 중 오류 발생:", error);
    return;
  }

  // 중복이 없는 경우
  emailCheck = true;
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

/**
 * 회원가입 양식을 제출하고 유효성을 검사
 * @param {Event} event - 제출 이벤트
 */
async function submitForm(event) {
  event.preventDefault();

  if (emailCheck && passwordCheck && isPasswordSame) {
    // 회원가입 요청
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      if (response.ok) {
        location.href = "/folder";
      } else {
        const responseData = await response.json();
        console.error("서버에서 반환된 오류 메시지:", responseData);
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    }
  } else {
    validateEmailInput(emailInput.value);
    validatePasswordInput(passwordInput, passwordErrorMessage1);
    validatePasswordInput(checkingPassowrdInput, passwordErrorMessage2);
  }
}

/**
 * 회원가입 양식을 제출하고 유효성을 검사
 * @param {Event} event - 제출 이벤트
 */
function validatePasswordInput(inputedPassword, errorMessage) {
  const password = inputedPassword.value;
    if (password === "") {
      setInputError(
        { input: inputedPassword, errorMessage: errorMessage },
        "비밀번호를 입력해주세요."
      );
      return;
    }
    if(inputedPassword === passwordInput && (inputedPassword.value.trim().length < 8 || checkPasswordType(inputedPassword.value))){
      setInputError(
          { input: inputedPassword, errorMessage: errorMessage },
          "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
        );
        return;
    }
    passwordCheck = true;
    if(inputedPassword === checkingPassowrdInput && !checkingPassword(passwordInput.value, checkingPassowrdInput.value)){
      setInputError(
          { input: checkingPassowrdInput, errorMessage: passwordErrorMessage2 },
          "비밀번호가 일치하지 않아요."
      )
      return;
  }
    isPasswordSame = true;
    removeInputError({ input: inputedPassword, errorMessage: errorMessage });
};
  
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
let emailCheck = false;
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

const passwordInput = document.querySelector("#password");
const checkingPassowrdInput = document.querySelector("#check-password")
const passwordErrorMessage1 = document.querySelector("#password-error-message1");
const passwordErrorMessage2 = document.querySelector("#password-error-message2");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target, passwordErrorMessage1));
checkingPassowrdInput.addEventListener("focusout", (event) => validatePasswordInput(event.target, passwordErrorMessage2)
);

let passwordCheck = false;
let isPasswordSame = false;

const passwordToggleButton = document.querySelector("#password-toggle");
const checkingPasswordToggleButton = document.querySelector("#checking-password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);
checkingPasswordToggleButton.addEventListener("click", () =>
  togglePassword(checkingPassowrdInput, checkingPasswordToggleButton)
);

const signForm = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button");
signForm.addEventListener("submit", submitForm);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      submitButton.click();
  }
});

submitButton.addEventListener("click", function(){
    submitForm();
});