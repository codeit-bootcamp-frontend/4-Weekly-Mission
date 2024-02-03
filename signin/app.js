/* Service Logic */

import { isTextEmpty } from "../scripts/utils.js";
import { isValidEmailFormat, checkAccessToken } from "../scripts/service.js";
import {
  emailInput,
  passwordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  eyeBtn,
  formElement,
  showError,
  hideError,
  togglePassword,
} from "./ui.js";

/********************
 * UTILITY FUNCTION
 ********************/

//api/sign-in post request
async function getUserInfo(userInput) {
  const url = new URL("https://bootcamp-api.codeit.kr/api/sign-in");
  const user = userInput;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    //성공: 유저 정보 반환
    if (response.status === 200) {
      const result = await response.json();
      console.log("로그인 성공:", result);

      //로컬 스토리지에 accessToken 저장
      localStorage.setItem("accessToken", result.accessToken);

      return user;
    }

    //실패: null 반환
    if (response.status === 400) {
      console.error("로그인 실패: 잘못된 요청");
      return null;
    }

    console.error("로그인 오류: 서버 오류");
    return null;
  } catch (error) {
    console.error("에러 발생:", error);
    return null;
  }
}

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function validateEmail() {
  const email = emailInput.value;

  if (isTextEmpty(email)) {
    showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
    return false;
  }

  if (!isValidEmailFormat(email)) {
    showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
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

  hideError(passwordInput, passwordErrorMessageElement);
  return true;
}

//버튼 클릭 / 인풋 focus 상태에서 엔터로 로그인 로직 실행
async function handleLogin(e) {
  e.preventDefault();

  const userInput = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  //1. 클라이언트 로그인 양식 검사
  let checkLoginForm = true;

  if (!validateEmail()) {
    checkLoginForm = false;
  }
  if (!validatePassword()) {
    checkLoginForm = false;
  }
  if (!checkLoginForm) {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }

  //2. 양식 검사 통과하면 네트워크 로그인 요청
  const user = await getUserInfo(userInput);

  //로그인 실패
  if (!user) {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }

  //로그인 성공
  hideError(emailInput, emailErrorMessageElement);
  hideError(passwordInput, passwordErrorMessageElement);
  return (location.href = "../folder/index.html");
}

/********************
 * EVENT HANDLER
 ********************/

checkAccessToken();
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
formElement.addEventListener("submit", handleLogin);
eyeBtn.addEventListener("click", togglePassword);
