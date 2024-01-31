import { $btnEye, $confirmPasswordInput, $emailInput, $form, $passwordInput } from './utils/tags.js';
import togglePassword from './utils/togglePassword.js';
import {
  checkValidEmail,
  checkExistEmail,
  checkValidPassword,
  checkMatchPassword,
  validateRegistration,
} from './utils/validationUtils.js';

$emailInput.addEventListener('focusout', checkValidEmail);
$emailInput.addEventListener('focusout', checkExistEmail);
$passwordInput.addEventListener('focusout', checkValidPassword);
$confirmPasswordInput.addEventListener('focusout', checkMatchPassword);
[...$btnEye].forEach(btn => btn.addEventListener('click', togglePassword));
$form.addEventListener('submit', validateRegistration);
