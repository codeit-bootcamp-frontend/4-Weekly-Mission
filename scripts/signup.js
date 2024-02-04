import {
  INVALID_CLASS,
  FOLDER_URL,
  API_SIGN_UP,
  API_CHECK_EMAIL,
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_CONFLICT,
} from "./constants.js";
import { isValidEmail, isValidPassword } from "./inputValidation.js";
import { togglePasswordVisibility } from "./togglePasswordVisibility.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const signUpForm = document.querySelector("#signForm");
const togglePasswordIcon = document.querySelector("#togglePasswordVisibility");
const togglePasswordCheckIcon = document.querySelector(
  "#togglePasswordCheckVisibility"
);
const accessToken = localStorage.getItem("accessToken");

// 초기화
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

// 회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동
if (accessToken) {
  window.location.href = FOLDER_URL;
}

// 이메일 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
function handleEmailInput() {
  const emailValue = emailInput.value;

  // 초기화
  emailError.textContent = "";

  // 이메일 입력부분이 비어 있는 경우
  if (!emailValue.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
    emailInput.classList.add(INVALID_CLASS);
  }
  // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효하지 않은 경우
  else if (!isValidEmail(emailValue)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add(INVALID_CLASS);
  } else {
    emailInput.classList.remove(INVALID_CLASS);
  }
}

// 이메일 중복 확인 함수
async function checkEmailDuplication(email) {
  try {
    // 'https://bootcamp-api.codeit.kr/api/check-email'에 POST 요청 보내기
    const response = await fetch(API_CHECK_EMAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === HTTP_STATUS_OK) {
      const data = await response.json();
      return data.isDuplicated;
    } else if (response.status === HTTP_STATUS_CONFLICT) {
      return true;
    } else {
      throw new Error("서버 오류");
    }
  } catch (error) {
    console.error("이메일 중복 확인 오류: ", error.message);
    return false;
  }
}

// 비밀번호 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
function handlePasswordInput(event) {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  // 현재 입력 필드에 따라 에러 메시지 지우기
  if (event.target === passwordInput) {
    passwordError.textContent = "";
    passwordInput.classList.remove(INVALID_CLASS);
  } else if (event.target === confirmPasswordInput) {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove(INVALID_CLASS);
  }

  // 초기화
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

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
  // 비밀번호 입력부분이 비어있지 않은 경우 + 비밀번호 형식이 유효한 형식인 경우 + 비밀번호 길이가 8자 이상인 경우
  else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호는 8자 이상 입력해 주세요.";
    passwordInput.classList.add(INVALID_CLASS);
  }
  // 비밀번호 입력부분이 비어있지 않은 경우 + 비밀번호 형식이 유효한 형식인 경우
  else {
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
  return (
    !emailError.textContent &&
    !passwordError.textContent &&
    !confirmPasswordError.textContent
  );
}

async function handleSignUp(event) {
  console.log("Form submitted");
  event.preventDefault();

  if (!validateSignUp()) {
    // 유효성 검사에 실패한 경우
    return;
  }

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const isEmailDuplicated = await checkEmailDuplication(emailValue);

  if (isEmailDuplicated) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    emailInput.classList.add(INVALID_CLASS);
    return;
  }

  try {
    const response = await fetch(API_SIGN_UP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    if (response.status === HTTP_STATUS_OK) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      window.location.href = FOLDER_URL;
    } else if (response.status === HTTP_STATUS_BAD_REQUEST) {
      console.error("회원가입 오류");
      alert("회원가입 형식이 올바르지 않습니다.");
    } else {
      throw new Error("서버 오류");
    }
  } catch (error) {
    console.error("회원가입 요청 실패: ", error.message);
    alert("회원가입 요청에 실패했습니다.");
  }
}

signUpForm.addEventListener("submit", handleSignUp);

// // 비밀번호 보이기/숨기기 공통 이벤트 리스너 설정 함수
function setupPasswordToggle(passwordInput, toggleIcon) {
  toggleIcon.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, this);
  });
}

// 비밀번호와 비밀번호 확인 필드에 대한 토글 설정
setupPasswordToggle(passwordInput, togglePasswordIcon);
setupPasswordToggle(confirmPasswordInput, togglePasswordCheckIcon);
