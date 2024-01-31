import { checkEmptyPassword, checkValidEmail, validateSignin } from './utils/validationUtils.js';
import { $emailInput, $passwordInput, $btnEye, $form } from './utils/tags.js';
import togglePassword from './utils/togglePassword.js';

$emailInput.addEventListener('focusout', checkValidEmail);
$passwordInput.addEventListener('focusout', checkEmptyPassword);
[...$btnEye].forEach(btn => btn.addEventListener('click', togglePassword));
$form.addEventListener('submit', validateSignin);
