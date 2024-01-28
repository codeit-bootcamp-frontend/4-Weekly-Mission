import { emailRegex, isVaildEmail } from "./utils/isValidEmail.js";
import { querySelector } from "./utils/querySelector.js";
import { passwordTypeCheck } from "./functions/passwordTypeCheck.js";
import { updateErrorMessage } from "./functions/updateErrorMessage.js";
import { typeToText, typeToPassword } from "./functions/passwordShowHidden.js";
import { checkValidLogin, validEmail } from "./functions/CheckValidLogin.js";
import { isVaildPassword } from "../utils/isValidPassword.js";
import {
  checkSignupEmail,
  checkSignupPassword,
} from "./functions/checkValidSignup.js";

// 이벤트 등록을 위한 변수 설정
const emailInputBox = querySelector("#signup-email-input");
const signupPasswordInput = querySelector("#signup-password-input");
const signupPasswordRepeatInput = querySelector(
  "#signup-password-repeat-input"
);
const signupBtn = querySelector("#signup-button");
const signupForm = querySelector("#signup-form");

/** 이메일 입력 값이 유효한 지 확인하는 함수 */
function checkEmail(event) {
  const emailValue = event.target.value.trim();
  const errorMessage = querySelector("#email-error-message");

  if (emailValue === "") {
    updateErrorMessage(
      errorMessage,
      "이메일을 입력해주세요.",
      emailInputBox,
      true
    );
  } else if (emailValue === validEmail) {
    updateErrorMessage(
      errorMessage,
      "이미 사용 중인 이메일 입니다.",
      emailInputBox,
      true
    );
  } else if (isVaildEmail(emailValue) === true) {
    updateErrorMessage(errorMessage, "", emailInputBox, false);
  } else {
    updateErrorMessage(
      errorMessage,
      "올바른 이메일 주소가 아닙니다.",
      emailInputBox,
      true
    );
  }
}

/** 비밀번호 입력 값이 유효한지 확인하는 함수 */
function checkPassword(event) {
  const passwordValue = event.target.value.trim();
  const errorMessageBox = querySelector("#password-error-message");

  if (passwordValue === "") {
    updateErrorMessage(
      errorMessageBox,
      "비밀번호를 입력해 주세요.",
      signupPasswordInput,
      true
    );
  } else if (isVaildPassword(passwordValue) === true) {
    updateErrorMessage(errorMessageBox, "", signupPasswordInput, false);
  } else {
    updateErrorMessage(
      errorMessageBox,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      signupPasswordInput,
      true
    );
  }
}

/** 비밀번호 입력값과 확인 값이 맞는지 확인 */
function checkPasswordRepeat() {
  const passwordValue = querySelector("#signup-password-input").value;
  const passwordRepeatValue = querySelector(
    "#signup-password-repeat-input"
  ).value;
  const passwordRepeatErrorMessage = querySelector(
    "#password-repeat-error-message"
  );

  passwordRepeatValue === passwordValue && passwordRepeatValue !== ""
    ? updateErrorMessage(
        passwordRepeatErrorMessage,
        "",
        signupPasswordRepeatInput,
        false
      )
    : updateErrorMessage(
        passwordRepeatErrorMessage,
        "비밀번호가 일치하지 않아요.",
        signupPasswordRepeatInput,
        true
      );
}

function trySignup() {
  if (
    emailInputBox.classList.contains("error-box") === false &&
    signupPasswordInput.classList.contains("error-box") === false &&
    signupPasswordRepeatInput.classList.contains("error-box") === false
  ) {
    location.href = "folder.html";
  }
}

/** 이벤트 등록 */
emailInputBox.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signupPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
signupPasswordRepeatInput.addEventListener("focusout", checkPasswordRepeat); // 비밀번호 확인
signupBtn.addEventListener("click", trySignup); // 회원가입 시도
// signupForm.addEventListener("keydown", signupByEnter); // 엔터키로 로그인하기
// passwordEyeIcon.addEventListener("click", passwordShowHidden); // 비밀번호 보기 & 숨기기
