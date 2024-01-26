import {
  createErrorMessage,
  authenticateUser,
  isEmailValid,
  displayError,
  clearError,
  handlePasswordInputFocusOut,
  handleEmailInputFocusIn,
  togglePasswordVisibility,
} from './utils.js';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signInButton = document.getElementById('cta');
  const watchPassword = document.getElementById('eye-button');

  const emailErrorMessage = createErrorMessage('email-error', '');
  const passwordErrorMessage = createErrorMessage('password-error', '');

  emailInput.after(emailErrorMessage);
  passwordInput.after(passwordErrorMessage);

  emailInput.addEventListener('focusin', function () {
    clearError(emailInput, emailErrorMessage);
  });

  emailInput.addEventListener('focusout', function () {
    handleEmailInputFocusIn(emailInput, emailErrorMessage);
  });

  passwordInput.addEventListener('focusout', function () {
    handlePasswordInputFocusOut(passwordInput, passwordErrorMessage);
  });

  signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    emailInput.blur();
    passwordInput.blur();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (authenticateUser(emailValue, passwordValue)) {
      window.location.href = '../folder.html';
      return;
    }

    displayError(emailInput, emailErrorMessage, '이메일을 확인 해주세요.');
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 확인 해주세요.');
  });

  watchPassword.addEventListener('click', function () {
    const eyeIcon = document.getElementById('eye-icon');
    const imgSrc = passwordInput.type === 'password' ? 'eye-on.svg' : 'eye-off.svg';

    togglePasswordVisibility(
      passwordInput,
      eyeIcon,
      imgSrc,
      passwordInput.type === 'password' ? 'text' : 'password'
    );
  });
});
