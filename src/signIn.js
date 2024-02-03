import { ERROR_MESSAGES } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwError,
  pwInput,
  form,
  pwToggle,
  validateEmail,
  validatePw,
  eyeToggle,
  showError,
} from "./auth.js";
import { getToken } from "./token.js";

const handleFail = () => {
  showError(emailError, emailInput, ERROR_MESSAGES.email_check);
  showError(pwError, pwInput, ERROR_MESSAGES.password_check);
};

const handleSignIn = async (e) => {
  e.preventDefault();
  const baseURL = "https://bootcamp-api.codeit.kr";

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const userData = {
    email: email,
    password: password,
  };
  try {
    const res = await fetch(`${baseURL}/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      const token = await res.json();
      getToken(token);
      alert("로그인 성공!");
      window.location.href = "folder.html";
    } else {
      throw new Error("로그인 실패");
    }
  } catch (e) {
    console.error(e);
    alert("이메일 혹은 비밀번호를 확인해주세요!");
    handleFail();
  }
};

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePw);
form.addEventListener("submit", handleSignIn);
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
