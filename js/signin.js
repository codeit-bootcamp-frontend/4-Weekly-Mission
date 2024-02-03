import { isVaildEmail } from "./utils/isValidEmail.js";
import { querySelector } from "./utils/commons/querySelector.js";
import { updateErrorMessage } from "./utils/updateErrorMessage.js";
import { toggleShowPassword } from "./utils/passwordShowHidden.js";
import { checkValidLogin } from "./utils/CheckValidLogin.js";
import { targetValue } from "./utils/commons/value.trim.js";

const signinEmailInput = querySelector("#signin-email-input");
const signinPasswordInput = querySelector("#signin-password-input");
const loginBtn = querySelector("#login-button");
const loginForm = querySelector("#login-form");
const passwordEyeIcon = querySelector("#password-eye-icon");

function checkEmail(event) {
  const emailValue = targetValue(event);
  const errorMessage = querySelector("#email-error-message");

  // 공백일 때
  if (emailValue === "") {
    updateErrorMessage(
      errorMessage,
      "이메일을 입력해주세요.",
      signinEmailInput,
      true
    );
  } else if (isVaildEmail(emailValue)) {
    updateErrorMessage(errorMessage, "", signinEmailInput, false);
  } else {
    updateErrorMessage(
      errorMessage,
      "올바른 이메일 주소가 아닙니다.",
      signinEmailInput,
      true
    );
  }
}

// 로그인 시도
async function tryLogin() {
  const inputUser = {
    email: signinEmailInput.value,
    password: signinPasswordInput.value,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputUser),
    });

    if (response.ok) {
      location.href = "folder.html";
    } else {
      console.log("로그인 실패");
    }
  } catch (error) {
    console.log(error.message);
  }
}

function checkPassword(event) {
  const passwordValue = event.target.value;
  const errorMessageBox = querySelector("#password-error-message");

  updateErrorMessage(
    errorMessageBox,
    passwordValue === "" ? "비밀번호를 입력해주세요." : "",
    signinPasswordInput,
    passwordValue === ""
  );
}

signinEmailInput.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signinPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
loginBtn.addEventListener("click", tryLogin); // 로그인 시도
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  tryLogin();
});
passwordEyeIcon.addEventListener("click", function () {
  toggleShowPassword(passwordEyeIcon, signinPasswordInput);
}); // 비밀번호 보기 & 숨기기
