export const VALID_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

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
  const passwordValue = passwordInput.value;
  if (!passwordValue) {
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 입력해주세요');
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
