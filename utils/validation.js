const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(.{1,7}|[a-zA-Z]+|\d+)$/;

export function handleInputError(inputElement) {
  inputElement.classList.remove("sign-input");
  inputElement.classList.add("sign-input-error");
}

export function handleInputSuccess(inputElement) {
  inputElement.classList.remove("sign-input-error");
  inputElement.classList.add("sign-input");
}

export function validateEmail(email, emailError) {
  if (email === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  } else if (email === "test@codeit.com") {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

export function validatePassword(password, passwordError) {
  if (password === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    return false;
  } else if (passwordRegex.test(password)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}
