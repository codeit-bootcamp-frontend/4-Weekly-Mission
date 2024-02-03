import { isVaildEmail } from "./utils/isValidEmail.js";
import { querySelector } from "./utils/commons/querySelector.js";
import { updateErrorMessage } from "./utils/updateErrorMessage.js";
import { toggleShowPassword } from "./utils/passwordShowHidden.js";
import { isVaildPassword } from "./utils/isValidPassword.js";
import { targetValue } from "./utils/commons/value.trim.js";

// 이벤트 등록을 위한 변수 설정
const signupEmailInput = querySelector("#signup-email-input");
const signupPasswordInput = querySelector("#signup-password-input");
const signupPasswordRepeatInput = querySelector(
  "#signup-password-repeat-input"
);
const signupBtn = querySelector("#signup-button");
const signupForm = querySelector("#signup-form");
const eyeIconPassword = querySelector("#password-eye-icon");
const passwordRepeatEyeIcon = querySelector("#password-repeat-eye-icon");

function checkEmail(event) {
  const emailValue = targetValue(event);
  const errorMessage = querySelector("#email-error-message");

  if (emailValue === "") {
    updateErrorMessage(
      errorMessage,
      "이메일을 입력해주세요.",
      signupEmailInput,
      true
    );
  } else if (isVaildEmail(emailValue) === true) {
    updateErrorMessage(errorMessage, "", signupEmailInput, false);
  } else {
    updateErrorMessage(
      errorMessage,
      "올바른 이메일 주소가 아닙니다.",
      signupEmailInput,
      true
    );
  }
}

function checkPassword(event) {
  const passwordValue = signupPasswordInput.value;
  const errorMessageBox = querySelector("#password-error-message");

  if (passwordValue === "") {
    updateErrorMessage(
      errorMessageBox,
      "비밀번호를 입력해 주세요.",
      signupPasswordInput,
      true
    );
  } else if (isVaildPassword(passwordValue)) {
    updateErrorMessage(errorMessageBox, "", signupPasswordInput, false);
  } else {
    updateErrorMessage(
      errorMessageBox,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      signupPasswordInput,
      true
    );
    console.log(isVaildEmail(passwordValue));
  }
}

function checkPasswordRepeat() {
  const passwordValue = querySelector("#signup-password-input").value;
  const passwordRepeatValue = querySelector(
    "#signup-password-repeat-input"
  ).value;
  const passwordRepeatErrorMessage = querySelector(
    "#password-repeat-error-message"
  );

  passwordRepeatValue === passwordValue && passwordRepeatValue !== ""
    ? updateErrorMessage(
        passwordRepeatErrorMessage,
        "",
        signupPasswordRepeatInput,
        false
      )
    : updateErrorMessage(
        passwordRepeatErrorMessage,
        "비밀번호가 일치하지 않아요.",
        signupPasswordRepeatInput,
        true
      );
}

async function trySignup() {
  const inputUser = {
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputUser),
    });

    if (response.ok) {
      if (
        signupEmailInput.classList.contains("error-box") === false &&
        signupPasswordInput.classList.contains("error-box") === false &&
        signupPasswordRepeatInput.classList.contains("error-box") === false
      ) {
        location.href = "folder.html";
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

/** 이벤트 등록 */
signupEmailInput.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signupPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
signupPasswordRepeatInput.addEventListener("focusout", checkPasswordRepeat); // 비밀번호 확인

// 회원 가입
// signupBtn.addEventListener("click", trySignup);
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  trySignup();
});

// 비밀번호 보기 & 숨기기
eyeIconPassword.addEventListener("click", function () {
  toggleShowPassword(eyeIconPassword, signupPasswordInput);
});
passwordRepeatEyeIcon.addEventListener("click", function () {
  toggleShowPassword(passwordRepeatEyeIcon, signupPasswordRepeatInput);
});
