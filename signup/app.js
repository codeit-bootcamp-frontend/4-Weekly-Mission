/* Service Logic */

import { isTextEmpty } from "../scripts/utils.js";
import { isValidEmailFormat, checkAccessToken } from "../scripts/service.js";
import {
  emailInput,
  passwordInput,
  confirmPasswordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  confirmPasswordErrorMessageElement,
  eyeBtn,
  eyeBtnCheck,
  formElement,
  showError,
  hideError,
  togglePassword,
  toggleConfirmPassword,
} from "./ui.js";

/********************
 * UTILITY FUNCTION
 ********************/

//회원가입 비밀번호 양식 유효성 검사
function isValidPasswordFormat(passwordInputValue) {
  //8자 미만인 경우
  if (passwordInputValue.length < 8) {
    return false;
  }

  //숫자가 없는 경우
  if (!/\d/.test(passwordInputValue)) {
    return false;
  }

  //영문이 없는 경우
  if (!/[a-zA-Z]/.test(passwordInputValue)) {
    return false;
  }

  return true;
}

//api/check-email post request
async function getDuplicateEmail(emailInputValue) {
  const url = new URL("https://bootcamp-api.codeit.kr/api/check-email");
  const email = { email: emailInputValue };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const result = await response.json();
    const errorMessage = result.error.message;

    //성공: 중복되지 않은 이메일 반환
    if (response.status === 200) {
      console.log("중복되지 않은 이메일:", result);
      return email;
    }

    //실패: null 반환
    if (response.status === 409) {
      console.error("요청 실패: 중복된 이메일", errorMessage);
      return null;
    }

    console.error("요청 오류: 서버 오류", errorMessage);
    return null;
  } catch (error) {
    console.error("에러 발생:", error.message);
    return null;
  }
}

//api/sign-up post request
async function getUserInfo(userInput) {
  const url = new URL("https://bootcamp-api.codeit.kr/api/sign-up");
  const user = userInput;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const errorMessage = result.error.message;

    //성공: 유저 정보 반환
    if (response.status === 200) {
      console.log("회원가입 성공:", result);
      //로컬 스토리지에 accessToken 저장
      localStorage.setItem("accessToken", result.accessToken);
      return user;
    }

    //실패: null 반환
    if (response.status === 400) {
      console.log("회원가입 실패:", errorMessage);
      return null;
    }

    console.log("회원가입 오류:", errorMessage);
    return null;
  } catch (error) {
    console.error("에러 발생:", error.message);
    return null;
  }
}

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
async function validateEmail() {
  const email = emailInput.value;

  //클라이언트 양식 검사
  if (isTextEmpty(email)) {
    showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
    return false;
  }

  if (!isValidEmailFormat(email)) {
    showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
    return false;
  }

  //네트워크 중복 검사
  const userEmail = await getDuplicateEmail(email);

  if (!userEmail) {
    showError(emailInput, emailErrorMessageElement, "이미 사용 중인 이메일입니다.");
    return false;
  }

  hideError(emailInput, emailErrorMessageElement);
  return true;
}

//비밀번호 에러 검사
function validatePassword() {
  const password = passwordInput.value;

  if (isTextEmpty(password)) {
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
    return false;
  }

  if (!isValidPasswordFormat(password)) {
    showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    return false;
  }

  hideError(passwordInput, passwordErrorMessageElement);
  return true;
}

//비밀번호 확인 에러 검사
function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isTextEmpty(confirmPassword)) {
    showError(confirmPasswordInput, confirmPasswordErrorMessageElement, "비밀번호를 입력해 주세요.");
    return false;
  }

  if (password !== confirmPassword) {
    showError(confirmPasswordInput, confirmPasswordErrorMessageElement, "비밀번호가 일치하지 않아요.");
    return false;
  }

  hideError(confirmPasswordInput, confirmPasswordErrorMessageElement);
  return true;
}

//버튼 클릭 / 인풋 focus 상태에서 엔터로 회원가입 로직 실행
async function handleRegister(e) {
  e.preventDefault();

  const userInput = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  //1. 클라이언트 회원가입 양식 검사
  let checkRegisterForm = true;

  if (!(await validateEmail())) {
    checkRegisterForm = false;
  }
  if (!validatePassword()) {
    checkRegisterForm = false;
  }
  if (!validateConfirmPassword()) {
    checkRegisterForm = false;
  }
  if (!checkRegisterForm) {
    return;
  }

  //2. 양식 검사 통과하면 네트워크 회원가입 요청
  const user = await getUserInfo(userInput);

  //회원가입 실패
  if (!user) {
    // console.log("회원가입 실패");
    return;
  }

  //회원가입 성공
  hideError(emailInput, emailErrorMessageElement);
  hideError(passwordInput, passwordErrorMessageElement);
  // return (location.href = "../folder/index.html");
}

/********************
 * EVENT HANDLER
 ********************/

checkAccessToken();
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
confirmPasswordInput.addEventListener("focusout", validateConfirmPassword);
formElement.addEventListener("submit", handleRegister);
eyeBtn.addEventListener("click", togglePassword);
eyeBtnCheck.addEventListener("click", toggleConfirmPassword);
