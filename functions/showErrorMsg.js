import { changeInputColor } from "./changeInputColor.js";
import { emailMsg, passwordMsg, passwordCheckMsg, passwordInput } from "../elements.js";
import { isValidEmail, isValidPassword } from "../utils/validator.js";
import { isUseAlready } from "./isUseAlready.js";

export const showErrorMsgSignin = (e) => {
  const { value, classList } = e.target;
  let errorMsg = "";
  if (classList.contains("input-email")) {
    if (!value) errorMsg = "이메일을 입력해 주세요.";
    else if (!isValidEmail(value)) errorMsg = "올바른 이메일 주소가 아닙니다.";
    emailMsg.innerHTML = errorMsg;
  } else if (classList.contains("input-pw")) {
    errorMsg = value ? "" : "비밀번호를 확인해 주세요.";
    passwordMsg.innerHTML = errorMsg;
  }
  changeInputColor();
};

export const showErrorMsgSignup = (e) => {
  const { value, classList } = e.target;
  let errorMsg = "";
  if (classList.contains("input-email")) {
    if (!value) errorMsg = "이메일을 입력해 주세요.";
    else if (!isValidEmail(value)) errorMsg = "올바른 이메일 주소가 아닙니다.";
    else if (isUseAlready(value)) errorMsg = "이미 사용 중인 이메일입니다.";
    emailMsg.innerHTML = errorMsg;
  } else if (classList.contains("input-pw")) {
    if (!isValidPassword(value)) errorMsg = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordMsg.innerHTML = errorMsg;
  } else if (classList.contains("input-pw-check")) {
    if (value) {
      if (value === passwordInput.value) {
        passwordCheckMsg.classList.add("hidden");
      } else {
        passwordCheckMsg.classList.remove("hidden");
      }
    } else {
      passwordCheckMsg.classList.add("hidden");
    }
  }
  changeInputColor();
};
