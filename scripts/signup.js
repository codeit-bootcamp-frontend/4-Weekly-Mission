import {
  INVALID_CLASS,
  ADMIN_EMAIL,
  FOLDER_URL,
  API_SIGN_UP,
  API_CHECK_EMAIL,
} from "./base.js";
import { isValidEmail, isValidPassword } from "./inputValidation.js";
import { togglePasswordVisibility } from "./togglePasswordVisibility.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const signUpButton = document.querySelector("#signForm");
const togglePasswordIcon = document.querySelector("#togglePasswordVisibility");
const togglePasswordCheckIcon = document.querySelector(
  "#togglePasswordCheckVisibility"
);
const accessToken = localStorage.getItem("accessToken");

// 회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동
if (accessToken) {
  window.location.href = FOLDER_URL;
  return;
}

// 이메일 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
function handleEmailInput() {
  const emailValue = emailInput.value;
  const emailError = document.querySelector("#emailError");

  // 이메일 입력부분이 비어 있는 경우
  if (!emailValue.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
    emailInput.classList.add(INVALID_CLASS);
  }
  // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효하지 않은 경우
  else if (!isValidEmail(emailValue)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add(INVALID_CLASS);
  }
  // test@codeit.com이 입력된 경우
  else if (emailValue === ADMIN_EMAIL) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    emailInput.classList.add(INVALID_CLASS);
  }
  // 이메일 입력부분이 비어있지 않은 경우 + 이메일 형식이 유효한 형식인 경우
  else {
    emailError.textContent = "";
    emailInput.classList.remove(INVALID_CLASS);
  }
}

// 비밀번호 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
function handlePasswordInput(event) {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  const passwordError = document.querySelector("#passwordError");
  const confirmPasswordError = document.querySelector("#confirmPasswordError");

  // 현재 입력 필드에 따라 에러 메시지 지우기
  if (event.target === passwordInput) {
    passwordError.textContent = "";
    passwordInput.classList.remove(INVALID_CLASS);
  } else if (event.target === confirmPasswordInput) {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove(INVALID_CLASS);
  }

  // 비밀번호 입력부분이 비어 있는 경우
  if (!passwordValue.trim()) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    passwordInput.classList.add(INVALID_CLASS);
  }
  // 비밀번호 입력부분이 비어있지 않는 경우 + 비밀번호 형식이 유효하지 않은 경우
  else if (!isValidPassword(passwordValue)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInput.classList.add(INVALID_CLASS);
  }
  // 비밀번호 입력부분이 비어있지 않은 경우 + 비밀번호 형식이 유효한 형식인 경우
  else {
    passwordError.textContent = "";
    passwordInput.classList.remove(INVALID_CLASS);
  }

  // 비밀번호 확인 입력부분이 비어 있는 경우
  if (!confirmPasswordValue.trim()) {
    confirmPasswordError.textContent = "비밀번호를 입력해 주세요.";
    confirmPasswordInput.classList.add(INVALID_CLASS);
  }
  // 비밀번호와 비밀번호 확인이 일치하지 않는 경우
  else if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.textContent = "비밀번호가 일치하지 않아요.";
    confirmPasswordInput.classList.add(INVALID_CLASS);
  }
  // 비밀번호 확인 입력부분이 비어있지 않은 경우 + 비밀번호 형식이 유효한 형식인 경우
  else {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove(INVALID_CLASS);
  }
}

emailInput.addEventListener("blur", handleEmailInput);
emailInput.addEventListener("input", handleEmailInput);
passwordInput.addEventListener("blur", handlePasswordInput);
passwordInput.addEventListener("input", handlePasswordInput);
confirmPasswordInput.addEventListener("blur", handlePasswordInput);
confirmPasswordInput.addEventListener("input", handlePasswordInput);

function validateSignUp() {
  const emailError = document.querySelector("#emailError").textContent;
  const passwordError = document.querySelector("#passwordError").textContent;
  const confirmPasswordError = document.querySelector(
    "#confirmPasswordError"
  ).textContent;

  return !emailError && !passwordError && !confirmPasswordError;
}

function handleSignUp(event) {
  event.preventDefault();
  if (validateSignUp()) {
    window.location.href = FOLDER_URL;
  }
}

signUpButton.addEventListener("submit", handleSignUp);

// // 비밀번호 보이기/숨기기 공통 이벤트 리스너 설정 함수
function setupPasswordToggle(passwordInput, toggleIcon) {
  toggleIcon.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, this);
  });
}

// 비밀번호와 비밀번호 확인 필드에 대한 토글 설정
setupPasswordToggle(passwordInput, togglePasswordIcon);
setupPasswordToggle(confirmPasswordInput, togglePasswordCheckIcon);
