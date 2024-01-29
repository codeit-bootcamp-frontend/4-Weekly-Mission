import { querySelector } from "./querySelector";
import { updateErrorMessage } from "../functions/updateErrorMessage";
import { passwordShowHidden } from "../functions/passwordShowHidden";

// signin에서 사용하는 변수
export const signinEmailInput = querySelector("#signin-email-input");
export const signinPasswordInput = querySelector("#signin-password-input");
export const loginBtn = querySelector("#login-button");
export const loginForm = querySelector("#login-form");
export const passwordEyeIcon = querySelector("#password-eye-icon");

// signup에서 사용하는 변수
export const signupEmailInput = querySelector("#signup-email-input");
export const signupPasswordInput = querySelector("#signup-password-input");
export const signupPasswordRepeatInput = querySelector(
  "#signup-password-repeat-input"
);
export const signupBtn = querySelector("#signup-button");
export const signupForm = querySelector("#signup-form");
export const eyeIconPassword = querySelector("#password-eye-icon");
export const passwordRepeatEyeIcon = querySelector("#password-repeat-eye-icon");

// 함수 정리를 위한 함수
/** 이메일 입력값에 따른 에러 메세지 출력 함수 */
export function updateEmailErrorMessage(
  errorMessage,
  message,
  inputBox,
  isError
) {
  updateErrorMessage(errorMessage, message, inputBox, isError);
}

/** 비밀번호 입력값에 따른 에러 메세지 출력 함수 */
export function updatePasswordErrorMessage(
  errorMessage,
  message,
  inputBox,
  isError
) {
  updateErrorMessage(errorMessage, message, inputBox, isError);
}

/** 비밀번호 보기 & 숨기기 함수 */
export function showHidePassword(eyeIcon, passwordInput) {
  passwordShowHidden(eyeIcon, passwordInput);
}

// 반복되는 함수
export function checkEmailValidity(event, isValidEmail) {
  const emailValue = event.target.value.trim();
  const errorMessage = querySelector("#email-error-message");
}
