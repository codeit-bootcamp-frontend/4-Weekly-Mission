import {
  INVALID_CLASS,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  FOLDER_URL,
  API_SIGN_IN,
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
} from "./base.js";
import { isValidEmail } from "./inputValidation.js";
import { togglePasswordVisibility } from "./togglePasswordVisibility.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const loginButton = document.querySelector(".base-button");
  const togglePasswordIcon = document.querySelector(
    "#togglePasswordVisibility"
  );
  const accessToken = localStorage.getItem("accessToken");

  // 로그인 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동
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
    // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효한지 확인 후 유효하지 않은 경우
    else if (!isValidEmail(emailValue)) {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add(INVALID_CLASS);
    }
    // 이메일 입력부분이 비어있지 않은 경우 + 이메일 형식이 유효한 형식인 경우
    else {
      emailError.textContent = "";
      emailInput.classList.remove(INVALID_CLASS);
    }
  }

  // 비밀번호 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handlePasswordInput() {
    const passwordValue = passwordInput.value;
    const passwordError = document.querySelector("#passwordError");

    // 비밀번호 입력부분이 비어 있는 경우
    if (!passwordValue.trim()) {
      passwordError.textContent = "비밀번호를 입력해 주세요.";
      passwordInput.classList.add(INVALID_CLASS);
    }
    // 비밀번호 입력부분이 비어있지 않은 경우
    else {
      passwordError.textContent = "";
      passwordInput.classList.remove(INVALID_CLASS);
    }
  }

  emailInput.addEventListener("blur", handleEmailInput);
  emailInput.addEventListener("input", handleEmailInput);
  passwordInput.addEventListener("blur", handlePasswordInput);
  passwordInput.addEventListener("input", handlePasswordInput);

  loginButton.addEventListener("click", async function (event) {
    // 폼의 기본 제출 동작을 방지
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");

    // 정해진 이메일과 비밀번호가 입력된 경우
    if (emailValue === ADMIN_EMAIL && passwordValue === ADMIN_PASSWORD) {
      window.location.href = FOLDER_URL;
    } else {
      // 정해진 이메일이 입력되지 않은 경우
      if (emailValue !== ADMIN_EMAIL) {
        emailError.textContent = "이메일을 확인해 주세요";
        emailInput.classList.add(INVALID_CLASS);
      }
      // 정해진 비밀번호가 입력되지 않은 경우
      if (passwordValue !== ADMIN_PASSWORD) {
        passwordError.textContent = "비밀번호를 확인해 주세요";
        passwordInput.classList.add(INVALID_CLASS);
      }
    }

    async function signInAndRedirect(email, password) {
      try {
        // 'https://bootcamp-api.codeit.kr/api/sign-in'에 POST 요청 보내기
        const response = await fetch(API_SIGN_IN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        // 응답코드 200 : 로그인 성공
        if (response.status === HTTP_STATUS_OK) {
          const data = await response.json();
          localStorage.setItem("accessToken", data.accessToken);
          window.location.href = FOLDER_URL;
        }
        // 응답코드 400 : 로그인 오류
        else if (response.status === HTTP_STATUS_BAD_REQUEST) {
          console.error("로그인 오류: 잘못된 요청");
          alert("로그인 오류: 잘못된 요청");
        }
        // 그외 응답코드
        else {
          const errorData = await response.json();
          console.error("로그인 실패: ", errorData.message);
          alert("로그인 실패: ", errorData.message);
        }
      } catch (error) {
        console.error("요청 실패: ", error.message);
        alert("요청 실패: ", error.message);
      }
    }

    signInAndRedirect(emailValue, passwordValue);
  });

  // 비밀번호 보이기/숨기기
  togglePasswordIcon.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, this);
  });
});
