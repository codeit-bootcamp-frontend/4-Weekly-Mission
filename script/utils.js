import { VALID_USER, EMAIL_REGEX } from './constants.js';

export function createErrorMessage(id, text) {
  const errorMessage = document.getElementById(id) || document.createElement('div');
  errorMessage.id = id;
  errorMessage.className = 'error-message text-medium';
  errorMessage.innerText = text;
  return errorMessage;
}

export function authenticateUser(email, password) {
  return email === VALID_USER.email && password === VALID_USER.password;
}

export function isEmailValid(email) {
  return EMAIL_REGEX.test(email);
}

export function displayError(inputElement, errorMessageElement, message) {
  inputElement.classList.add('error-box');
  errorMessageElement.innerText = message;
}

export function clearError(inputElement, errorMessageElement) {
  inputElement.classList.remove('error-box');
  errorMessageElement.innerText = '';
}

export function handlePasswordInputFocusOut(passwordInput, passwordErrorMessage) {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue.length < 8 || !(/[a-zA-Z]/.test(passwordValue) && /\d/.test(passwordValue))) {
    displayError(
      passwordInput,
      passwordErrorMessage,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    );
    return;
  }

  clearError(passwordInput, passwordErrorMessage);
}

export function handlePasswordCheckInputFocusOut(passwordcheckInput, passwordCheckErrorMessage) {
  const passwordValue = passwordcheckInput.value;
  if (!passwordValue) {
    displayError(passwordcheckInput, passwordCheckErrorMessage, '비밀번호가 일치하지 않아요.');
  } else {
    clearError(passwordcheckInput, passwordCheckErrorMessage);
  }
}

export function handleEmailInputFocusIn(emailInput, emailErrorMessage) {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    displayError(emailInput, emailErrorMessage, '이메일을 입력해 주세요.');
  } else if (!isEmailValid(emailValue)) {
    displayError(emailInput, emailErrorMessage, '이메일을 확인해 주세요.');
  }
}

export function togglePasswordVisibility(passwordInput, eyeIcon, imgSrc, inputType) {
  eyeIcon.src = `../assets/icon/${imgSrc}`;
  passwordInput.type = inputType;
}
