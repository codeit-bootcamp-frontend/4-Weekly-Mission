import {
  userID,
  userPW,
  emailError,
  pwError,
  pwContainer,
  errorStyle,
  clearStyle,
  validEmail,
  validPassword,
  validEmailCheck,
  goUrl,
  validPasswordCheck,
  showPW,
} from "./signUtils.js";

const userPWCheck = document.querySelector(".check-password");
const checkPWError = document.querySelector(".check-pw-error");
const signUpButton = document.querySelector(".sign-up-button");
const checkPWContainer = document.querySelector(".check-pw-container");

let isValidPasswordCheck = false;

function isValidEmail(obj) {
  return obj.value !== "" && validEmailCheck(obj);
}

function isValidPassword(obj) {
  return obj.value !== "" && validPasswordCheck(obj);
}

async function signUpAPI(email, password) {
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

    storeAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error during sign-up API call:", error.message);
    throw error;
  }
}

function storeAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

async function validSignUp() {
  clearErrors();
  //check if email already exists after email validation
  let isEmailExist = isValidEmail(userID);

  if (isEmailExist) {
    await emailAlreadyExist(userID);
    isEmailExist = !emailError.textContent; //if no error message appears, isEmailExist becomes true
  }

  if (isEmailExist && isValidPassword(userPW) && isValidPasswordCheck) {
    const accessToken = await signUpAPI(userID.value, userPW.value);

    if (accessToken) {
      storeAccessToken(accessToken);
      goUrl();
    } else {
      throw new Error("Access token not found in the response");
    }
  }

  if (!isValidEmail(userID)) {
    emailError.textContent = "이메일을 다시 확인해주세요!";
    errorStyle(emailError, userID);
  }
  if (!isValidPassword(userPW)) {
    pwError.textContent = "비밀번호를 다시 확인해주세요!";
    errorStyle(pwError, userPW);
  }
  if (!isValidPasswordCheck) {
    errorStyle(checkPWError, userPWCheck);
    checkPWError.textContent = "비밀번호를 일치시켜주세요!";
  }
}

function enterLogin(e) {
  if (e.keyCode === 13) validSignUp();
}

async function emailAlreadyExist(obj) {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: obj.value }),
      }
    );

    if (response.status === 409) {
      emailError.textContent = "이미 사용 중인 이메일입니다.";
      errorStyle(emailError, userID);
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
  }
}

function checkPassword(obj) {
  if (obj.value === userPW.value) {
    clearStyle(checkPWError, userPWCheck);
    isValidPasswordCheck = true;
  } else {
    errorStyle(checkPWError, userPWCheck);
    checkPWError.textContent = "비밀번호가 일치하지 않아요.";
    isValidPasswordCheck = false;
  }
}

function clearErrors() {
  clearStyle(emailError, userID);
  clearStyle(pwError, userPW);
  clearStyle(checkPWError, userPWCheck);
}

userID.addEventListener("focusout", (e) => {
  validEmail(e.target);
  isValidEmail(e.target);
});
userPW.addEventListener("focusout", (e) => {
  validPassword(e.target);
});
userPWCheck.addEventListener("focusout", (e) => {
  checkPassword(e.target);
  isValidPassword(e.target);
});
signUpButton.addEventListener("click", validSignUp);
document.addEventListener("keypress", enterLogin);
pwContainer.addEventListener("click", showPW);
checkPWContainer.addEventListener("click", showPW);
