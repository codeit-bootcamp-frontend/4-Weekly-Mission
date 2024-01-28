import {
  emailInput,
  passwordInput,
  verifyPasswordInput,
  emailErrorMessage,
  passwordErrorMessage,
  verifyPasswordErrorMessage,
  eyeIcon,
  verifyEyeIcon,
  loginBtn,
  handleEyeIconClick,
} from "./common.js";

// emailInput focusout events
emailInput.addEventListener("focusout", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailErrorMessage.textContent = "이메일을 입력해 주세요";
  }
  // 바꾼 부분!
  else if (emailInput.value === "test@codeit.com") {
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다";
  } else if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다";
  } else {
    emailErrorMessage.textContent = "";
  }
});

// passwordInput focusout events
passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordErrorMessage.textContent = "비밀번호를 입력해 주세요";
  } else if (
    !/\d/.test(passwordInput.value) ||
    !/[a-zA-Z]/.test(passwordInput.value) ||
    passwordInput.value.length < 8
  ) {
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
  } else {
    passwordErrorMessage.textContent = "";
  }
});

// verifyPasswordInput focusout events
verifyPasswordInput.addEventListener("focusout", () => {
  if (verifyPasswordInput.value.trim() === "") {
    verifyPasswordErrorMessage.textContent = "비밀번호를 입력해 주세요";
  } else if (passwordInput.value !== verifyPasswordInput.value) {
    verifyPasswordErrorMessage.textContent = "비밀번호가 일치하지 않아요";
  } else {
    verifyPasswordErrorMessage.textContent = "";
  }
});

//loginBtn click event
loginBtn.addEventListener("click", (event) => {
  if (
    emailErrorMessage.textContent === "" &&
    passwordErrorMessage.textContent === "" &&
    verifyPasswordErrorMessage.textContent === ""
  ) {
    signForm.submit();
  } else {
    if (emailErrorMessage.textContent !== "") {
      emailErrorMessage.textContent = "이메일을 확인해 주세요";
    } else if (passwordErrorMessage.textContent !== "") {
      passwordErrorMessage.textContent = "비밀번호를 확인해 주세요";
    } else if (verifyPasswordErrorMessage.textContent !== "") {
      verifyPasswordErrorMessage.textContent =
        "비밀번호가 일치한지 확인해 주세요";
    }
  }
  event.preventDefault();
});

//eye-icon click event
eyeIcon.addEventListener("click", () => {
  handleEyeIconClick(passwordInput, eyeIcon);
});

//eye-icon click event
verifyEyeIcon.addEventListener("click", () => {
  handleEyeIconClick(verifyPasswordInput, verifyEyeIcon);
});
