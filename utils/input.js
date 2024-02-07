import { validateEmail, validatePassword } from "./validation.js";

/**
 * 사용자 입력이 잘못된 경우 inputElement의 클래스를 변경하여 에러 표시
 *
 * @param {element} inputElement - html input element
 */
export function handleInputError(inputElement) {
  inputElement.classList.remove("sign-input");
  inputElement.classList.add("sign-input-error");
}

/**
 * 사용자 입력이 올바른 경우 inputElement의 클래스를 변경하여 에러 표시 해제
 *
 * @param {element} inputElement  - html input element
 */
export function handleInputSuccess(inputElement) {
  inputElement.classList.remove("sign-input-error");
  inputElement.classList.add("sign-input");
}

/**
 * 이메일 입력 이벤트 핸들러
 *
 * @param {'signin' | 'signup'} page - 회원가입 페이지인지 로그인 페이지인지 구분
 */
export function handleEmailInput(page) {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();

  if (!validateEmail(email, emailError, page)) {
    handleInputError(emailInput);
  } else {
    handleInputSuccess(emailInput);
  }
}

/**
 * 비밀번호 입력 이벤트 핸들러
 */
export function handlePasswordInput() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const password = passwordInput.value.trim();

  if (!validatePassword(password, passwordError)) {
    handleInputError(passwordInput);
  } else {
    handleInputSuccess(passwordInput);
  }
}

/**
 * 비밀번호 확인 입력 이벤트 핸들러
 */
export function handlePasswordCheckInput() {
  const passwordInput = document.getElementById("password");
  const passwordCheckInput = document.getElementById("password-check");
  const passwordCheckError = document.getElementById("passwordCheckError");
  const password = passwordInput.value.trim();
  const passwordCheck = passwordCheckInput.value.trim();

  if (passwordCheck === "") {
    passwordCheckError.textContent = "비밀번호를 입력해주세요.";
    passwordCheckInput.classList.remove("sign-input");
    passwordCheckInput.classList.add("sign-input-error");
  } else if (password !== passwordCheck) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckInput.classList.remove("sign-input");
    passwordCheckInput.classList.add("sign-input-error");
  } else {
    passwordCheckError.textContent = "";
    passwordCheckInput.classList.remove("sign-input-error");
    passwordCheckInput.classList.add("sign-input");
  }
}

let isEyeOn1 = false;
let isEyeOn2 = false;
/**
 * 눈 아이콘 클릭 이벤트 핸들러
 *
 * @param {'eye1' | 'eye2'} eye - eye1 : 비밀번호 입력 / eye2 : 비밀번호 확인 입력
 */
export function handleEyeClick(eye) {
  const eyeIcon = document.getElementById(eye);
  const passwordInput1 = document.getElementById("password");
  const passwordInput2 = document.getElementById("password-check");

  if (eye === "eye1") {
    isEyeOn1 = !isEyeOn1;
    if (isEyeOn1) {
      passwordInput1.setAttribute("type", "text");
      eyeIcon.setAttribute("src", "./assets/sign/eye-on.svg");
    } else {
      passwordInput1.setAttribute("type", "password");
      eyeIcon.setAttribute("src", "./assets/sign/eye-off.svg");
    }
  }

  if (eye === "eye2") {
    isEyeOn2 = !isEyeOn2;
    if (isEyeOn2) {
      passwordInput2.setAttribute("type", "text");
      eyeIcon.setAttribute("src", "./assets/sign/eye-on.svg");
    } else {
      passwordInput2.setAttribute("type", "password");
      eyeIcon.setAttribute("src", "./assets/sign/eye-off.svg");
    }
  }
}
