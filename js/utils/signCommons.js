import { querySelector } from "./querySelector";
import { updateErrorMessage } from "../functions/updateErrorMessage";
import { passwordShowHidden } from "../functions/passwordShowHidden";
import { checkValidLogin } from "../functions/CheckValidLogin";
import {
  signinEmailInput,
  signinPasswordInput,
  loginBtn,
  loginForm,
  passwordEyeIcon,
  signupEmailInput,
  signupPasswordInput,
  signupPasswordRepeatInput,
  signupBtn,
  signupForm,
  eyeIconPassword,
  passwordRepeatEyeIcon,
} from "./commonsBase";

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
/** 이메일 유효값 확인 */
// export function checkEmailValidity(event, isValidEmail) {
//   const emailInput = event.target;
//   const emailValue = event.target.value.trim();
//   const errorMessage = querySelector("#email-error-message");

//   if (emailValue === "") {
//     updateEmailErrorMessage(
//       errorMessage,
//       "이메일을 입력해주세요.",
//       emailInput,
//       signinEmailInput,
//       true
//     );
//   } else if (emailValue === isValidEmail) {
//     updateEmailErrorMessage(
//       errorMessage,
//       "이미 사용 중인 이메일 입니다.",
//       emailInput,
//       true
//     );
//   } else if (isValidEmail(emailValue)) {
//     updateEmailErrorMessage(errorMessage, "", emailInput, false);
//   } else {
//     updateEmailErrorMessage(
//       errorMessage,
//       "올바른 이메일 주소가 아닙니다.",
//       emailInput,
//       true
//     );
//   }
// }

export function checkPasswordValidity(event, isValidPassword) {
  const passwordInput = event.target;
  const passwordValue = event.target.value.trim();
  const errorMessageBox = querySelector("#password-error-message");

  if (passwordValue === "") {
    updatePasswordErrorMessage(
      errorMessageBox,
      "비밀번호를 입력해 주세요.",
      passwordInput,
      true
    );
  } else if (isValidPassword(passwordValue)) {
    updatePasswordErrorMessage(errorMessageBox, "", passwordInput, false);
  } else {
    updatePasswordErrorMessage(
      errorMessageBox,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      passwordInput,
      true
    );
  }
}

export function checkPasswordRepeatValidity() {
  const passwordValue = signupPasswordInput.value;
  const passwordRepeatValue = signupPasswordRepeatInput.value;
  const passwordRepeatErrorMessage = querySelector(
    "#password-repeat-error-message"
  );

  if (passwordRepeatValue === passwordValue && passwordRepeatValue !== "") {
    updatePasswordErrorMessage(
      passwordRepeatErrorMessage,
      "",
      signupPasswordRepeatInput,
      false
    );
  } else {
    updatePasswordErrorMessage(
      passwordRepeatErrorMessage,
      "비밀번호가 일치하지 않아요.",
      signupPasswordRepeatInput,
      true
    );
  }
}

export function trySignup() {
  if (
    !signinEmailInput.classList.contains("error-box") &&
    !signupPasswordInput.classList.contains("error-box") &&
    !signupPasswordRepeatInput.classList.contains("error-box")
  ) {
    location.href = "folder.html";
  }
}

export function tryLogin(checkValidLogin) {
  const emailValue = signinEmailInput.value;
  const passwordValue = signinPasswordInput.value;
  const errorMessage = querySelector("#email-error-message");
  const errorMessageBox = querySelector("#password-error-message");

  const loginResult = checkValidLogin(emailValue, passwordValue);
  if (loginResult === 1) {
    location.href = "folder.html";
  } else if (loginResult === -1) {
    updatePasswordErrorMessage(
      errorMessageBox,
      "비밀번호를 확인해주세요",
      signinPasswordInput,
      true
    );
  } else {
    updateEmailErrorMessage(
      errorMessage,
      "이메일을 확인해주세요.",
      signinEmailInput,
      true
    );
    updatePasswordErrorMessage(
      errorMessageBox,
      "비밀번호를 확인해주세요",
      signinEmailInput,
      true
    );
  }
}
