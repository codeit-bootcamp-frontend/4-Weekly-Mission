import { emailInput, passwordInput, passwordConfirmInput, loginForm, eyeIcons } from "../constants/dom.js";
import { signUpHandler } from "./signUp.js";
import { signInHandler } from "./signIn.js";
import * as errorHandler from "../view/addErrorMessageToInput.js";
import togglePasswordVisibility from "../view/passwordVisibility.js";

// sign-in && sign-up handler
eyeIcons.forEach((eyeIcon) => eyeIcon.addEventListener('click', togglePasswordVisibility));

emailInput.addEventListener('blur', errorHandler.addErrorMsgToBlankInput);
passwordInput.addEventListener('blur', errorHandler.addErrorMsgToBlankInput);
emailInput.addEventListener('blur', errorHandler.addErrorMsgToInvalidInput);

// only sign-in handler
if (loginForm.classList.contains('sign-in')) {
  loginForm.addEventListener('submit', signInHandler);
}

// only sign-up handler
if (loginForm.classList.contains('sign-up')) {
  emailInput.addEventListener('blur', errorHandler.addErrorMsgToDuplicateInput);
  passwordInput.addEventListener('blur', errorHandler.addErrorMsgToInvalidInput);
  passwordConfirmInput.addEventListener('blur', errorHandler.addErrorMsgToMismatchConfirm);
  loginForm.addEventListener('submit', signUpHandler);
}
