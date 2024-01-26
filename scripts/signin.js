import {
  checkEmail,
  checkPassword,
  validateEmailAndPassword,
} from "./utils/validationUtils.js";
import { $emailInput, $passwordInput, $btnEye, $form } from "./utils/tags.js";
import togglePassword from "./utils/togglePassword.js";

$emailInput.addEventListener("focusout", checkEmail);
$passwordInput.addEventListener("focusout", checkPassword);
$btnEye.addEventListener("click", togglePassword);
$form.addEventListener("submit", validateEmailAndPassword);
