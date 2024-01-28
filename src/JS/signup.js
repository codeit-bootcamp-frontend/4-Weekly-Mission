import { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn, eyeBtn, eyeOff, eyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, checkEmail, checkPassword, toggleEyeBtn } from './sign.js';

emailInput.addEventListener('focusout', checkEmail);
