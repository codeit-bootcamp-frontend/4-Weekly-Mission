/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  showHidePassword,
} from "../signin/common.js";

// window.onload = function () {
//   // 로컬 스토리지에서 accessToken 가져오기
//   const storedAccessToken = localStorage.getItem("accessToken");

//   // accessToken이 존재하는 경우 '/folder' 페이지로 이동
//   if (storedAccessToken) {
//     window.location.href = "../folder/index.html";
//   }
// };

window.addEventListener("load", function (e) {
  const storedAccessToken = localStorage.getItem("accessToken");

  if (!storedAccessToken) {
    //안티패턴 활용
    return null;
  }

  return (window.location.href = "../folder/index.html");
});

/**
 * HTML DOM Elements
 */

const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const passwordCheck = document.querySelector("#pw-check");
const emailErrorMessage = document.querySelector(".email-error");
const pwErrorMessage = document.querySelector(".pw-error");
const pwCheckErrorMessage = document.querySelector(".pw-check-error");
const signUpButton = document.querySelector(".signup-btn");
const eyeImgElement =
  document.querySelectorAll(".eyeoff-button")[0].firstElementChild;
const eyeImgElementCheck =
  document.querySelectorAll(".eyeoff-button")[1].firstElementChild;
const signUpFormElement = document.querySelector(".signup-form");
/**
 *
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", function (event) {
  const email = emailInput.value;
  validateEmail(email);
});
passwordInput.addEventListener("focusout", function () {
  const password = passwordInput.value;
  validatePassword(password);
});
passwordCheck.addEventListener("focusout", function () {
  const passwordCheckValue = passwordCheck.value;
  const password = passwordInput.value;
  validatePasswordCheckValue(password, passwordCheckValue);
});

signUpButton.addEventListener("click", handleLogin);
signUpFormElement.addEventListener("submit", handleLogin);
// emailInput.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     event.preventDefault();
//     handleLogin(event);
//   }
// });
// passwordInput.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     event.preventDefault();
//     handleLogin(event);
//   }
// });
// passwordCheck.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     event.preventDefault();
//     handleLogin(event);
//   }
// });

/**
 * Utility Logics
 */

//사용중인 이메일인지 확인하는 함수
async function emailInUse(text) {
  try {
    const emailtext = { email: text };
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailtext),
      }
    );
    if (response.ok) {
      //사용 가능한 이메일일 때 (사용중인 이메일이 아닐 때)
      return false;
    } else {
      return true;
    }
  } catch (err) {
    alert("서버 오류가 발생했습니다.");
  }
}

//숫자로만 이루어져 있는지 판별
function isNumericString(str) {
  return /^\d+$/.test(str);
}
//문자로만 이루어져 있는지 판별
function isAlphaString(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function isStrongPassword(text) {
  return text.length >= 8 && !isNumericString(text) && !isAlphaString(text);
}

async function validateEmail(email) {
  try {
    const isEmailEmpty = isEmpty(email);
    removeError(emailErrorMessage);
    if (isEmailEmpty) {
      toggleError(emailErrorMessage, "이메일을 입력해 주세요.");
      return false;
    }
    const isValidEmailFormat = isEmailFormat(email);
    if (!isValidEmailFormat && !isEmailEmpty) {
      toggleError(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
      return false;
    }
    const isEmailInUse = await emailInUse(email);
    if (isEmailInUse) {
      toggleError(emailErrorMessage, "이미 사용중인 이메일입니다.");
      return false;
      //emailInUse 실행 중 서버 오류가 났을 때
    } else if (isEmailInUse === undefined) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
  }
}

function validatePassword(password) {
  const isPasswordEmpty = isEmpty(password);
  const isStrong = isStrongPassword(password);
  removeError(pwErrorMessage);
  if (isPasswordEmpty) {
    toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
    return false;
  } else if (!isStrong) {
    toggleError(
      pwErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  } else {
    removeError(pwErrorMessage);
    return true;
  }
}

//비밀번호 확인란
function validatePasswordCheckValue(password, passwordCheckValue) {
  if (password != passwordCheckValue) {
    toggleError(pwCheckErrorMessage, "비밀번호가 일치하지 않아요.");
    return false;
  } else {
    removeError(pwCheckErrorMessage);
    return true;
  }
}

async function handleLogin(e) {
  e.preventDefault();
  try {
    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordCheckValue = passwordCheck.value;
    const isValidEmailResult = await validateEmail(email);
    const signupInfo = { email: email, password: password };
    if (
      isValidEmailResult &&
      validatePassword(password) &&
      validatePasswordCheckValue(password, passwordCheckValue)
    ) {
      //입력한 이메일과 비밀번호를 서버에 등록하는 과정
      const validFormat = await fetch(
        "https://bootcammp-api.codeit.kr/api/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupInfo),
        }
      );
      if (!validFormat.ok) {
        throw new Error(validFormat.statusText);
      }
      location.href = "../folder/index.html";
    }
  } catch (err) {
    alert("서버 오류가 발생했습니다.");
  }
}

//눈모양 아이콘

eyeImgElement.addEventListener("click", function (event) {
  event.preventDefault();
  showHidePassword(passwordInput, eyeImgElement);
});
eyeImgElementCheck.addEventListener("click", function (event) {
  event.preventDefault();
  showHidePassword(passwordCheck, eyeImgElementCheck);
});
