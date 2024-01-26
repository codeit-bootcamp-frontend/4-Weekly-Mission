import {
  CHECK_EMPTY_INPUT,
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_EXISTING_EMAIL,
  ERROR_MESSAGE_INCONSISTENT_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_INVALID_PASSWORD,
  ERROR_MESSAGE_SPAN,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  SRC_IMG_CLOSE_EYE,
  SRC_IMG_OPEN_EYE,
  TEST_USER_EMAIL,
} from "./constant.js";

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPasswordCheck = document.querySelector("#password_check");
const btnSignupSubmit = document.querySelector("#btn_signup_submit");
const form = document.querySelector("form");
const btnEyes = document.querySelectorAll(".btn_eye");

const checkEmailIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  let isValid = false;

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    e.target.classList.add("error_input");
  } else if (!REGEX_EMAIL.test(e.target.value)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    e.target.classList.add("error_input");
  } else if (e.target.value === TEST_USER_EMAIL) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EXISTING_EMAIL;
    e.target.classList.add("error_input");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    isValid = true;
  }
  return isValid;
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else if (!REGEX_PASSWORD.test(e.target.value)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
  }
  return isValid;
};

const checkPasswordCheckIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  if (e.target.value !== inputPassword.value) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INCONSISTENT_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
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

const toggleViewPassword = (e) => {
  const targetInput =
    e.target.parentElement.parentElement.querySelector("input");
  if (targetInput.getAttribute("type") === "password") {
    targetInput.setAttribute("type", "text");
    e.target.setAttribute("src", SRC_IMG_OPEN_EYE);
  } else {
    targetInput.setAttribute("type", "password");
    e.target.setAttribute("src", SRC_IMG_CLOSE_EYE);
  }
};

inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);
inputPasswordCheck.addEventListener("focusout", checkPasswordCheckIsValid);

btnSignupSubmit.addEventListener("click", isValidSignup);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isValidSignup(e);
  }
});

btnEyes.forEach((btnEye) => {
  console.log(btnEye);
  btnEye.addEventListener("click", toggleViewPassword);
});
