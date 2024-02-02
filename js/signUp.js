import {
  email,
  emailError,
  password,
  passwordRepeat,
  passwordError,
  eyeIcon,
  repeatEyeIcon,
  setInvalidStyle,
  setValidStyle,
  errorMessage,
  handleEmailValidation,
  togglePasswordVisibility,
  enterKey,
  redirectFolder,
  saveAccessToken,
} from "./modules/auth-utils.js";

const passwordRepeatError = document.querySelector(".passwordRepeat-error");
const signUpButton = document.querySelector(".signup-button");

/* 회원가입 이메일 유효성 검사 */
const handleEmailUsedValidation = async () => {
  const emailValue = email.value;
  const isDuplicate = await checkEmailDuplicate(emailValue);
  if (isDuplicate) {
    setInvalidStyle(email);
    emailError.innerHTML = errorMessage.EMAIL_USED_MESSAGE;
  } else {
    handleEmailValidation();
  }
};

/* 회원가입 비밀번호 유효성 검사 */
const handlePasswordFormatValidation = () => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (!passwordRegex.test(password.value)) {
    setInvalidStyle(password);
    passwordError.innerHTML = errorMessage.PASSWORD_FORMAT_MESSAGE;
  } else {
    setValidStyle(password);
    passwordError.innerHTML = "";
  }
};

/* 비밀번호 일치 유효성 검사 */
const handlePasswordMatchValidation = () => {
  if (passwordRepeat.value !== password.value) {
    setInvalidStyle(passwordRepeat);
    passwordRepeatError.innerHTML = errorMessage.PASSWORD_MATCH_MESSAGE;
  } else {
    setValidStyle(passwordRepeat);
    passwordRepeatError.innerHTML = "";
  }
};

/* 이메일 중복확인 함수 */
const checkEmailDuplicate = async (email) => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.status === 409) {
      setInvalidStyle(email);
      emailError.innerHTML = errorMessage.EMAIL_USED_MESSAGE;
    }
  } catch (error) {
    console.error("이메일 중복 확인 실패", error.message);
    return true; // 중복 확인 실패 시 중복으로 처리
  }
};

const signUpApi = async (email, password) => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    const accessToken = responseData.data.accessToken;
    saveAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    console.error("회원가입 요청 실패:", error.message);
    throw new Error("회원가입 요청 실패");
  }
};

/* 유효한 회원가입 시도 시 페이지 이동 */
const redirectToFolderPage = () => {
  const link = "./folder.html";

  if (email.value === errorMessage.ALREADY_EMAIL) {
    setInvalidStyle(email);
    emailError.innerHTML = errorMessage.EMAIL_USED_MESSAGE;
  } else if (email.value === "") {
    setInvalidStyle(email);
    emailError.innerHTML = errorMessage.EMAIL_INPUT_MESSAGE;
  } else if (password.value === "") {
    setInvalidStyle(password);
    passwordError.innerHTML = errorMessage.PASSWORD_FORMAT_MESSAGE;
  } else if (passwordRepeat.value !== password.value) {
    handlePasswordMatchValidation();
  } else {
    location.href = link;
  }
};

email.addEventListener("blur", handleEmailUsedValidation);
password.addEventListener("blur", handlePasswordFormatValidation);
passwordRepeat.addEventListener("blur", handlePasswordMatchValidation);
signUpButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", (event) => {
  enterKey(event, redirectToFolderPage);
});
eyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(password, eyeIcon);
});
repeatEyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(passwordRepeat, repeatEyeIcon);
});
