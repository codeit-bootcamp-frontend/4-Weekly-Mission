import { EXIST_EMAIL, EXIST_PASSWORD } from './constant.js';
import { showError, removeError } from './errorUtils.js';
import { $confirmPasswordInput, $emailInput, $passwordInput } from './tags.js';

const isValidEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test($emailInput.value);
};
const isValidPassword = () => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test($passwordInput.value);
};
const isMatchPassword = () => $passwordInput.value === $confirmPasswordInput.value;
const isEmailExisting = () => $emailInput.value === EXIST_EMAIL;
const isPasswordExisting = () => $passwordInput.value === EXIST_PASSWORD;

const checkValidEmail = () => {
  if (isValidEmail()) {
    removeError($emailInput);
    return;
  }

  const message = $emailInput.value ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해주세요.';
  showError($emailInput, message);
};

const checkExistEmail = () => {
  if (!isEmailExisting()) return;
  showError($emailInput, '이미 사용 중인 이메일입니다.');
};

const checkEmptyPassword = () => {
  if ($passwordInput.value) {
    removeError($passwordInput);
    return;
  }

  showError($passwordInput, '비밀번호를 입력해주세요.');
};

const checkValidPassword = () => {
  if (isValidPassword()) {
    removeError($passwordInput);
    return;
  }

  showError($passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
};

const checkMatchPassword = () => {
  if (isMatchPassword()) {
    removeError($confirmPasswordInput);
    return;
  }

  showError($confirmPasswordInput, '비밀번호가 일치하지 않아요.');
};

const validateSignin = e => {
  if (isEmailExisting() && isPasswordExisting()) return;

  e.preventDefault();
  showError($emailInput, '이메일을 확인해주세요.');
  showError($passwordInput, '비밀번호를 확인해주세요.');
};

const validateRegistration = e => {
  if (isValidEmail() && isValidPassword() && isMatchPassword() && !isEmailExisting()) return;

  e.preventDefault();
  checkValidEmail();
  checkExistEmail();
  checkValidPassword();
  checkMatchPassword();
};

export {
  checkValidEmail,
  checkExistEmail,
  checkEmptyPassword,
  checkValidPassword,
  checkMatchPassword,
  validateSignin,
  validateRegistration,
};
