import { VALID_USER, EMAIL_REGEX, PASSWORD_REGEX } from './constants.js';

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

export const handlePasswordInputFocusOut = (passwordInput, passwordErrorMessage) => {
  const passwordValue = passwordInput.value.trim();

  if (!PASSWORD_REGEX.test(passwordValue)) {
    displayError(
      passwordInput,
      passwordErrorMessage,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    );
    return;
  }
};

export function handleEmailInputFocusIn(emailInput, emailErrorMessage) {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    displayError(emailInput, emailErrorMessage, '이메일을 입력해 주세요.');
    return;
  }
  if (!isEmailValid(emailValue)) {
    displayError(emailInput, emailErrorMessage, '이메일을 확인해 주세요.');
    return;
  }
}

export function togglePasswordVisibility(passwordInput, eyeIcon, imgSrc, inputType) {
  eyeIcon.src = `../assets/icon/${imgSrc}`;
  passwordInput.type = inputType;
}

// export function checkDuplicateEmail(emailInput, emailErrorMessage) {
//   if (isEmailAlreadyUsed(emailInput)) {
//     displayError(emailInput, emailErrorMessage, '이미 사용 중인 이메일입니다.');
//   }
// }

// 이메일 중복 확인 함수
export async function checkDuplicateEmail(emailInput, emailErrorMessage) {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    displayError(emailInput, emailErrorMessage, '이메일을 입력해 주세요.');
    return false;
  }
  if (!isEmailValid(emailValue)) {
    displayError(emailInput, emailErrorMessage, '올바른 이메일 형식이 아닙니다.');
    return false;
  }

  // 이메일 중복 확인
  const { success, duplicated } = await checkEmailDuplicate(emailValue);
  if (!success) {
    console.error('이메일 중복 확인에 실패했습니다.');
    return false;
  }
  if (duplicated) {
    displayError(emailInput, emailErrorMessage, '이미 사용 중인 이메일입니다.');
    return false;
  }

  clearError(emailInput, emailErrorMessage);
  return true;
}

export function isEmailAlreadyUsed(emailInput) {
  return emailInput.value.trim() === VALID_USER.email;
}

export function redirectIfAccessTokenExists() {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder'; // accessToken이 있으면 /folder 페이지로 이동
  }
}
