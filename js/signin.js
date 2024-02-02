import { isVaildEmail } from "./utils/isValidEmail.js";
import { querySelector } from "./utils/commons/querySelector.js";
import { updateErrorMessage } from "./utils/updateErrorMessage.js";
import { toggleShowPassword } from "./utils/passwordShowHidden.js";
import { checkValidLogin } from "./utils/CheckValidLogin.js";
import { targetValue } from "./utils/commons/value.trim.js";
import {
  SIGNIN_SUCCESS_VALUE,
  PASSWORD_INVALID_VALUE,
  NOT,
} from "./utils/constants.js";

// 이벤트 등록을 위한 변수 설정
const signinEmailInput = querySelector("#signin-email-input");
const signinPasswordInput = querySelector("#signin-password-input");
const loginBtn = querySelector("#login-button");
const loginForm = querySelector("#login-form");
const passwordEyeIcon = querySelector("#password-eye-icon");

/** 이메일 입력 값이 유효한 지 확인하는 함수 */
function checkEmail(event) {
  const emailValue = targetValue(event);
  const errorMessage = querySelector("#email-error-message");

  // 공백일 때
  if (emailValue === "") {
    updateErrorMessage(
      errorMessage,
      "이메일을 입력해주세요.",
      signinEmailInput,
      true
    );
    // 이메일 형식에 맞을 때
  } else if (isVaildEmail(emailValue)) {
    updateErrorMessage(errorMessage, "", signinEmailInput, false);
  } // 이메일 형식에 맞지 않을 때
  else {
    updateErrorMessage(
      errorMessage,
      "올바른 이메일 주소가 아닙니다.",
      signinEmailInput,
      true
    );
  }
}

function tryLogin() {
  const emailValue = signinEmailInput.value;
  const passwordValue = signinPasswordInput.value;
  const errorMessage = querySelector("#email-error-message");
  const errorMessageBox = querySelector("#password-error-message");

  const loginResult = checkValidLogin(emailValue, passwordValue);

  if (loginResult === SIGNIN_SUCCESS_VALUE) {
    location.href = "folder.html";
  } else if (loginResult === PASSWORD_INVALID_VALUE) {
    updateErrorMessage(
      errorMessageBox,
      "비밀번호를 확인해주세요",
      signinPasswordInput,
      true
    );
  } else {
    updateErrorMessage(
      errorMessage,
      "이메일을 확인해주세요.",
      signinEmailInput,
      true
    );
    updateErrorMessage(
      errorMessageBox,
      "비밀번호를 확인해주세요",
      signinEmailInput,
      true
    );
  }
}

/** 비밀번호 입력 유무 확인 */
function checkPassword(event) {
  const passwordValue = event.target.value;
  const errorMessageBox = querySelector("#password-error-message");

  updateErrorMessage(
    errorMessageBox,
    passwordValue === "" ? "비밀번호를 입력해주세요." : "",
    signinPasswordInput,
    passwordValue === ""
  );
}

/** 이벤트 등록 */
signinEmailInput.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signinPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
loginBtn.addEventListener("click", tryLogin); // 로그인 시도
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  tryLogin();
});
passwordEyeIcon.addEventListener("click", function () {
  toggleShowPassword(passwordEyeIcon, signinPasswordInput);
}); // 비밀번호 보기 & 숨기기
