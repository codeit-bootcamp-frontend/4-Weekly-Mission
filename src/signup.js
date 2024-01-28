const SIGN_INPUT_ERROR_CLASSNAME = "signInputError";
const ERROR_MESSAGE_CLASSNAME = "errorMessageOn";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-off.svg");
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#emailErrorMessage");
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#passwordErrorMessage");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}

// const passwordValidationInput = document.querySelector("#passwordValidation");
// const passwordValidationErrorMessage = document.querySelector("#passwordValidationErrorMessage");
// passwordValidationInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
// function validatePasswordInput(password) {
//   if (password === passwordInput) {
//     setInputError(
//       { input: passwordValidationInput, errorMessage: passwordValidationErrorMessage },
//       "비밀번호가 일치하지 않아요."
//     );
//     return;
//   }
//   removeInputError({ input: passwordValidationInput, errorMessage: passwordValidationErrorMessage });
// }

const passwordToggleButton = document.querySelector("#passwordToggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const isTestUser =
    emailInput.value === TEST_USER.email && passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    location.href = "/folder";
    return;
  }
  setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
  setInputError(
    { input: passwordInput, errorMessage: passwordErrorMessage },
    "비밀번호를 확인해주세요."
  );
  setInputError(
    { input: passwordValidationInput, errorMessage: passwordValidationErrorMessage },
    "비밀번호가 일치하지 않아요."
  );
}

