import {
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_SPAN,
  ERROR_MESSAGE_WRONG_EMAIL,
  ERROR_MESSAGE_WRONG_PASSWORD,
  TEST_USER_EMAIL,
  TEST_USER_PASSWORD,
} from "./constant.js";
import {
  isFilledInput,
  isValidEmailForm,
  toggleViewPassword,
} from "./authFunctions.js";

const form = document.querySelector("form");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnSignInSubmit = document.querySelector("#btn_signin_submit");

const btnEye = document.querySelector(".btn_eye");

const checkEmailIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);

  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidEmailForm(e.target);

  if (isFilled && isValidForm) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
  } else {
    e.target.classList.add("error_input");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    } else if (!isValidForm) {
      errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    }
  }
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  const isFilled = isFilledInput(e.target);

  if (isFilled) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
  } else {
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    }
  }
};

const compareEmail = () => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(inputEmail);

  if (inputEmail.value !== TEST_USER_EMAIL) {
    errorMessageSpan.textContent = ERROR_MESSAGE_WRONG_EMAIL;
    inputEmail.classList.add("error_input");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    inputEmail.classList.remove("error_input");
  }

  return inputEmail.value === TEST_USER_EMAIL;
};

const comparePassword = () => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(inputPassword);
  const iconEye = inputPassword.parentElement.querySelector(".btn_eye");

  if (inputPassword.value !== TEST_USER_PASSWORD) {
    errorMessageSpan.textContent = ERROR_MESSAGE_WRONG_PASSWORD;
    inputPassword.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    inputPassword.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
  }

  return inputPassword.value === TEST_USER_PASSWORD;
};

const compareUser = (e) => {
  e.preventDefault();

  const isCorrectEmail = compareEmail();
  const isCorrectPassword = comparePassword();

  if (isCorrectEmail && isCorrectPassword) {
    form.submit();
  }
};

// 에러 표시 이벤트
inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);

// 폼 제출 이벤트
btnSignInSubmit.addEventListener("click", compareUser);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    compareUser(e);
  }
});

// 비밀번호 노출/가림 이벤트
btnEye.addEventListener("click", function (e) {
  toggleViewPassword(e.target);
});
