import { EMAIL_REGEX } from "./constant.js";

export function emailTest(email, emailError) {
  if (!email.value?.trim()) {
    console.log("check");
    console.log(emailError);
    // emailError.textContent = "이메일을 입력해 주세요.";
    // email.classList.add("inputError");
    setInputError(email, emailError, "이메일을 입력해 주세요.");
    return true;
  }
  if (!EMAIL_REGEX.test(email.value)) {
    // emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    // email.classList.add("inputError");
    setInputError(email, emailError, "올바른 이메일 주소가 아닙니다.");

    return true;
  }
}

export function onInput(target, targetError) {
  function handler(e) {
    targetError.textContent = "";
    e.target.classList.remove("inputError");
  }

  target.addEventListener("input", handler);
}

export function iconToggle(input, iconImage) {
  if (input.type === "password") {
    iconImage.src = "/assets/eye-on.svg";
    input.type = "text";
  } else {
    iconImage.src = "/assets/eye-off.svg";
    input.type = "password";
  }
}

export function setInputError(item, itemError, errorMessage) {
  itemError.textContent = errorMessage;
  item.classList.add("inputError");
}
