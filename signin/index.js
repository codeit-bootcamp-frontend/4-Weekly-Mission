import {
  emailInput,
  passwordInput,
  loginBtn,
  eyeBtn,
  checkEmailError,
  checkPasswordError,
  checkLogin,
  checkLoginByEnter,
  togglePassword,
} from "../js/utility.js";

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", checkEmailError);
passwordInput.addEventListener("focusout", checkPasswordError);
loginBtn.addEventListener("click", checkLogin);
document.body.addEventListener("keypress", checkLoginByEnter);
eyeBtn.addEventListener("click", togglePassword);
