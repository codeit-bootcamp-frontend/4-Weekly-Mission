import { emailRegex, isVaildEmail } from "../utils/isValidEmail.js";
import { querySelector } from "../utils/querySelector.js";
import { passwordTypeCheck } from "../functions/passwordTypeCheck.js";
import { updateErrorMessage } from "../functions/updateErrorMessage.js";
import { typeToText, typeToPassword } from "./functions/passwordShowHidden.js";
import { checkValidLogin } from "./functions/CheckValidLogin.js";

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
  } else if (isVaildEmail(emailValue)) {
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

/** 로그인 시도 */
function tryLogin() {
  const emailValue = emailInputBox.value;
  const passwordValue = signinPasswordInput.value;
  const errorMessage = querySelector("#email-error-message");
  const errorMessageBox = querySelector("#password-error-message");

  if (checkValidLogin(emailValue, passwordValue) === 1) {
    location.href = "folder.html";
  } else if (checkValidLogin(emailValue, passwordValue) === -1) {
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
      emailInputBox,
      true
    );
    updateErrorMessage(
      errorMessageBox,
      "비밀번호를 확인해주세요",
      signinPasswordInput,
      true
    );
  }
}

/** enter키로 로그인 */
function loginByEnter(event) {
  if (event.key === "Enter") {
    tryLogin();
  }
}

/** 비밀번호 보기 & 숨기기 **/
function passwordShowHidden() {
  const passwordEyeIcon = querySelector("#password-eye-icon"); // 눈 모양 아이콘 선택

  passwordTypeCheck(signinPasswordInput)
    ? typeToText(passwordEyeIcon, signinPasswordInput)
    : typeToPassword(passwordEyeIcon, signinPasswordInput);
}

// 이벤트 등록을 위한 변수 설정
const emailInputBox = querySelector("#signin-email-input");
const signinPasswordInput = querySelector("#signin-password-input");
const loginBtn = querySelector("#login-button");
const loginForm = querySelector("#login-form");

/** 이벤트 등록 */
emailInputBox.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signinPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
loginBtn.addEventListener("click", tryLogin); // 로그인 시도
loginForm.addEventListener("keydown", loginByEnter); // 엔터키로 로그인하기
passwordEyeIcon.addEventListener("click", passwordShowHidden); // 비밀번호 보기 & 숨기기
