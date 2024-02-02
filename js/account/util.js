import { EMAIL_REGEX } from "./constant.js";

export function emailTest(email, emailError) {
  if (!email.value?.trim()) {
    console.log("check");
    console.log(emailError);
    emailError.textContent = "이메일을 입력해 주세요.";
    email.classList.add("inputError");
    return true;
  }
  if (!EMAIL_REGEX.test(email.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("inputError");
    return true;
  }
}
