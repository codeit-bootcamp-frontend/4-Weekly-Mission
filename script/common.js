// form
const signForm = document.querySelector(".sign-form");

// input
const emailInput = document.querySelector(".sign-email");
const passwordInput = document.querySelector(".sign-password input");
const verifyPasswordInput = document.querySelector(
  ".sign-verify-password input"
);

// error Message
const emailErrorMessage = document.querySelector(".sign-email-error");
const passwordErrorMessage = document.querySelector(".sign-password-error");
const verifyPasswordErrorMessage = document.querySelector(
  ".sign-verify-password-error"
);

const eyeIcon = document.querySelector(".eye-icon");
const verifyEyeIcon = document.querySelector(".verify-eye-icon");
const loginBtn = document.querySelector(".sign-btn");

// eye icon click
const handleEyeIconClick = (inputElement, eyeIcon) => {
  const inputType =
    inputElement.getAttribute("type") === "password" ? "text" : "password";
  inputElement.setAttribute("type", inputType);

  inputElement === "password"
    ? eyeIcon.setAttribute("src", "../assets/svg/eye-off.svg")
    : eyeIcon.setAttribute("src", "../assets/svg/eye-on.svg");
};

export {
  signForm,
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
};
