import { emailMsg, passwordMsg, emailInput, passwordInput, passwordCheck, passwordCheckMsg } from "../elements.js";
import { changeInputColor } from "./changeInputColor.js";
import { isValidEmail, isValidPassword } from "./validator.js";
import { isPasswordCorrect } from "./isPasswordCorrect.js";
import { ERROR_MESSAGES } from "./messages.js";
import { redirectToFolderPage } from "./redirectToFolderPage.js";
import { login, signup } from "./auth.js";

/**
 * 에러메시지를 노출하고 싶은 Element와 노출하고 싶은 메시지를 받아서 단순 UI를 변경해줍니다.
 * @param {HTMLElement} messageElement - 메시지 Element
 * @param {HTMLElement} inputElement - input Element
 * @param {string}  errorMessage - 노출하고 싶은 에러메시지
 */
const showErrorMessage = (messageElement, inputElement, errorMessage) => {
  if (errorMessage) {
    messageElement.innerHTML = errorMessage; // 오류 메시지를 표시
    messageElement.style.display = "block"; // 메시지가 보이도록 설정
    changeInputColor(messageElement, inputElement);
  } else {
    messageElement.style.display = "none"; // 오류 메시지가 없으면 메시지를 숨김
  }
};

/**
 * 로그인 성공 시 folder.html로 이동합니다.
 * 실패 시 에러 메시지를 띄웁니다.
 */
export const moveFolderSignin = () => {
  const dataToSubmit = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  login(dataToSubmit)
    .then(() => {
      //redirectToFolderPage("folder.html");
    })
    .catch(() => {
      showErrorMessage(emailMsg, emailInput, ERROR_MESSAGES.emptyEmail);
      showErrorMessage(passwordMsg, passwordInput, ERROR_MESSAGES.emptyPassword);
    });
};

/**
 * 회원가입 성공 시 folder.html로 이동합니다.
 * 실패 시 에러 메시지를 띄웁니다.
 */
export const moveFolderSignup = (e) => {
  const [email, password, check] = [emailInput.value, passwordInput.value, passwordCheck.value];
  const isEmailValid = email && isValidEmail(email);
  const isPasswordValid = password && isValidPassword(password);
  const isPasswordCheck = check && isPasswordCorrect(password, check);

  if (isEmailValid && isPasswordValid && isPasswordCheck) {
    const dataToSubmit = {
      email: email,
    };

    signup(dataToSubmit)
      .then(() => {
        redirectToFolderPage("folder.html");
      })
      .catch(() => {
        showErrorMessage(emailMsg, emailInput, ERROR_MESSAGES.emptyEmail);
      });
  }

  showErrorMessage(emailMsg, emailInput, isEmailValid ? "" : ERROR_MESSAGES.emptyEmail);
  showErrorMessage(passwordMsg, passwordInput, isPasswordValid ? "" : ERROR_MESSAGES.invalidPassword);
  showErrorMessage(passwordCheckMsg, passwordCheck, isPasswordCheck ? "" : ERROR_MESSAGES.incorrectPassword);
};
