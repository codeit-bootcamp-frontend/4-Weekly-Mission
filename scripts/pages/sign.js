import { showError, removeError } from '../utils/errorUtils.js';
import { $emailInput, $passwordInput } from '../utils/nodes.js';

export const isValidEmail = value => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};
export const isValidPassword = value => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test(value);
};
export const isMatchPassword = value => $passwordInput.value === value;
export const isEmailExisting = async () => {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: $emailInput.value }),
    });

    if (!response.ok) {
      throw new Error();
    }

    return false;
  } catch {
    return true;
  }
};

export const checkValidEmail = e => {
  if (isValidEmail(e.target.value)) {
    removeError(e.target);
    return;
  }

  const message = e.target.value ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해주세요.';
  showError(e.target, message);
};

export const togglePassword = e => {
  e.target.classList.toggle('on');
  e.target.previousElementSibling.type = e.target.classList.contains('on') ? 'text' : 'password';
};
