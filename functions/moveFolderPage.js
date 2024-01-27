import { emailMsg, passwordMsg, emailInput, passwordInput, passwordCheck, passwordCheckMsg } from "../elements.js";
import { EMAIL, PASSWORD } from "../auth.js";
import { changeInputColor } from "./changeInputColor.js";
import { isValidEmail, isValidPassword } from "../utils/validator.js";
import { isUseAlready } from "./isUseAlready.js";
import { isCheckPassword } from "./isCheckPassword.js";

export const moveFolderSignin = (e) => {
  const isEmailValid = emailInput.value === EMAIL;
  const isPasswordValid = passwordInput.value === PASSWORD;

  if (isEmailValid && isPasswordValid) {
    location.href = "folder.html";
  }

  emailMsg.innerHTML = !isEmailValid ? "이메일을 확인해 주세요." : "";
  passwordMsg.innerHTML = !isPasswordValid ? "비밀번호를 확인해 주세요." : "";
  changeInputColor();
};

export const moveFolderSignup = (e) => {
  const [email, password, check] = [emailInput.value, passwordInput.value, passwordCheck.value];
  const isEmailValid = email && isValidEmail(email) && !isUseAlready(email);
  const isPasswordValid = password && isValidPassword(password);
  const isPasswordCheck = check && isCheckPassword(check);

  if (isEmailValid && isPasswordValid && isPasswordCheck) {
    location.href = "folder.html";
  }

  emailMsg.innerHTML = !isEmailValid ? "이메일을 확인해 주세요." : "";
  passwordMsg.innerHTML = !isPasswordValid ? "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." : "";
  !isPasswordCheck ? passwordCheckMsg.classList.remove("hidden") : passwordCheckMsg.classList.add("hidden");
  changeInputColor();
};
