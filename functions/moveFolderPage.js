import { emailMsg, passwordMsg, emailInput, passwordInput, passwordCheck, passwordCheckMsg } from "../elements.js";
import { EMAIL, PASSWORD } from "../auth.js";
import { changeInputColor } from "./changeInputColor.js";
import { isValidEmail, isValidPassword } from "../utils/validator.js";
import { isUseAlready } from "./isUseAlready.js";
import { isPasswordCorrect } from "./isPasswordCorrect.js";
import { ERROR_MESSAGES } from "../utils/messages.js";
import { redirectToFolderPage } from "../utils/redirectToFolderPage.js";

/**
 * 에러메시지를 노출하고 싶은 Element와 노출하고 싶은 메시지를 받아서 단순 UI를 변경해주는 함수
 * @param {HTMLElement} 메시지 Element
 * @param {string}  노출하고 싶은 에러메시지
 */
const showErrorMessage = (messageElement, errorMessage) => {
  if (errorMessage) {
    messageElement.innerHTML = errorMessage; // 오류 메시지를 표시
    messageElement.style.display = "block"; // 메시지가 보이도록 설정
  } else {
    messageElement.style.display = "none"; // 오류 메시지가 없으면 메시지를 숨김
  }
};

export const moveFolderSignin = (e) => {
  const isEmailValid = emailInput.value === EMAIL;
  const isPasswordValid = passwordInput.value === PASSWORD;

  if (isEmailValid && isPasswordValid) {
    redirectToFolderPage("folder.html");
  }

  showErrorMessage(emailMsg, isEmailValid ? "" : ERROR_MESSAGES.emptyEmail);
  showErrorMessage(passwordMsg, isPasswordValid ? "" : ERROR_MESSAGES.emptyPassword);

  changeInputColor();
};

export const moveFolderSignup = (e) => {
  const [email, password, check] = [emailInput.value, passwordInput.value, passwordCheck.value];
  const isEmailValid = email && isValidEmail(email) && !isUseAlready(email);
  const isPasswordValid = password && isValidPassword(password);
  const isPasswordCheck = check && isPasswordCorrect(password, check);

  if (isEmailValid && isPasswordValid && isPasswordCheck) {
    redirectToFolderPage("folder.html");
  }

  showErrorMessage(emailMsg, isEmailValid ? "" : ERROR_MESSAGES.emptyEmail);
  showErrorMessage(passwordMsg, isPasswordValid ? "" : ERROR_MESSAGES.invalidPassword);
  showErrorMessage(emailMsg, isPasswordCheck ? "" : ERROR_MESSAGES.incorrectPassword);
  // emailMsg.innerHTML = !isEmailValid ? "이메일을 확인해 주세요." : "";
  // passwordMsg.innerHTML = !isPasswordValid ? "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." : "";
  // !isPasswordCheck ? passwordCheckMsg.classList.remove("hidden") : passwordCheckMsg.classList.add("hidden");
  changeInputColor();
};
