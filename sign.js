// DOM 요소들을 가져오는 함수
const get = (selector) => document.querySelector(selector);

// 아이디, 비밀번호 input 요소들
const signInputValue = get('.sign-input');
const signEmailInputValue = get('#email-input');
const signPasswordInputValue = get('#password-input');

// 에러 메시지 요소들
const emptyEmailErrorMessage = get('.empty-email-error');
const invalidEmailFormatMessage = get('.correct-email-error');
const emptyPasswordErrorMessage = get('.empty-password-error');
const emailValidationMessage = get('.email-validation-message');
const passwordValidationMessage = get('.password-validation-message');

// 눈 아이콘 버튼
const eyeButton = get('.eye-button-icon');

function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showErrorMessage(element, show) {
  if (show) {
    element.classList.add('show-error');
  } else {
    element.classList.remove('show-error');
  }
}

function handleInputError(inputValue, errorElement, inputElement) {
  if (inputValue === '') {
    showErrorMessage(errorElement, true);
    inputElement.classList.add('redBorder');
  } else {
    showErrorMessage(errorElement, false);
    inputElement.classList.remove('redBorder');
  }
}

function emailError() {
  const emailValue = signEmailInputValue.value.trim();
  handleInputError(emailValue, emptyEmailErrorMessage, signEmailInputValue);

  if (emailValue !== '') {
    emailRegexError();
  }
}

function emailRegexError() {
  const emailValue = signEmailInputValue.value.trim();
  const isValidEmail = validateEmailFormat(emailValue);

  showErrorMessage(invalidEmailFormatMessage, !isValidEmail);
}

function passwordError() {
  const passwordValue = signPasswordInputValue.value.trim();
  handleInputError(passwordValue, emptyPasswordErrorMessage, signPasswordInputValue);
}

function submitLogin() {
  const emailValue = signEmailInputValue.value.trim();
  const passwordValue = signPasswordInputValue.value.trim();
  const correctEmail = 'test@codeit.com';
  const correctPassword = 'codeit101';

  if (emailValue === correctEmail && passwordValue === correctPassword) {
    location.href = 'folder.html';
  } else {
    showErrorMessage(emailValidationMessage, true);
    showErrorMessage(passwordValidationMessage, true);
    signEmailInputValue.classList.add('redBorder');
    signPasswordInputValue.classList.add('redBorder');
  }
}

signInputValue.addEventListener('focusout', function () {
  emailError();
  passwordError();
});

document.onkeyup = function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = signPasswordInputValue.type;

  signPasswordInputValue.type = passwordFieldType === 'password' ? 'text' : 'password';
  eyeButton.src = `./images/eye-${passwordFieldType === 'password' ? 'on' : 'off'}.svg`;
};
