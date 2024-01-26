import {
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_EXISTING_EMAIL,
  ERROR_MESSAGE_INCONSISTENT_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_INVALID_PASSWORD,
  ERROR_MESSAGE_SPAN,
} from "./constant.js";
import {
  isFilledInput,
  isMatchWithPassword,
  isUniqueEmail,
  isValidEmailForm,
  isValidPasswordForm,
  toggleViewPassword,
} from "./authFunctions.js";

const form = document.querySelector("form");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPasswordCheck = document.querySelector("#password_check");
const btnSignupSubmit = document.querySelector("#btn_signup_submit");

const btnEyes = document.querySelectorAll(".btn_eye");

const checkEmailIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  let isValid = false;

  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidEmailForm(e.target);
  const isUnique = isUniqueEmail(e.target);

  if (isFilled && isValidForm && isUnique) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    isValid = true;
  } else {
    e.target.classList.add("error_input");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    } else if (!isValidForm) {
      errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    } else if (!isUnique) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EXISTING_EMAIL;
    }
  }

  return isValid;
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidPasswordForm(e.target);

  if (isFilled && isValidForm) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
  } else {
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    } else if (!isValidForm) {
      errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_PASSWORD;
    }
  }

  return isValid;
};

const checkPasswordCheckIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  const isFilled = isFilledInput(e.target);
  const isMatched = isMatchWithPassword(e.target, inputPassword);

  if (isFilled && isMatched) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
  } else {
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    } else if (!isMatched) {
      errorMessageSpan.textContent = ERROR_MESSAGE_INCONSISTENT_PASSWORD;
    }
  }

  return isValid;
};

const isValidSignup = (e) => {
  e.preventDefault();

  const isValidEmail = checkEmailIsValid({ target: inputEmail });
  const isValidPassword = checkPasswordIsValid({ target: inputPassword });
  const isValidPasswordCheck = checkPasswordCheckIsValid({
    target: inputPasswordCheck,
  });

  if (isValidEmail && isValidPassword && isValidPasswordCheck) {
    form.submit();
  }
};

// 에러 표시 이벤트
inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);
inputPasswordCheck.addEventListener("focusout", checkPasswordCheckIsValid);

// 폼 제출 이벤트
btnSignupSubmit.addEventListener("click", isValidSignup);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isValidSignup(e);
  }
});

// 비밀번호 노출/가림 이벤트
btnEyes.forEach((btnEye) => {
  btnEye.addEventListener("click", function (e) {
    toggleViewPassword(e.target);
  });
});
