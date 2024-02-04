import { showError, removeError } from '../utils/errorUtils.js';
import { $btnEye, $confirmPasswordInput, $emailInput, $form, $passwordInput } from '../utils/nodes.js';
import {
  isEmailExisting,
  isValidEmail,
  isValidPassword,
  isMatchPassword,
  checkValidEmail,
  togglePassword,
} from '../pages/sign.js';

const checkExistEmail = async e => {
  if (await isEmailExisting(e.target.value)) {
    showError(e.target, '이미 사용 중인 이메일입니다.');
    return;
  }

  removeError(e.target);
};

const checkValidPassword = e => {
  if (!isValidPassword(e.target.value)) {
    showError(e.target, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  removeError(e.target);
};

const checkMatchPassword = e => {
  if (!isMatchPassword(e.target.value)) {
    showError(e.target, '비밀번호가 일치하지 않아요.');
    return;
  }

  removeError(e.target);
};

$emailInput.addEventListener('focusout', checkValidEmail);
$emailInput.addEventListener('focusout', checkExistEmail);
$passwordInput.addEventListener('focusout', checkValidPassword);
$confirmPasswordInput.addEventListener('focusout', checkMatchPassword);
$btnEye.forEach(btn => btn.addEventListener('click', togglePassword));
$form.addEventListener('submit', async e => {
  e.preventDefault();

  if (!isValidEmail($emailInput.value)) {
    const message = $emailInput.value ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해주세요.';
    showError($emailInput, message);
    return;
  }

  if (!isValidPassword($passwordInput.value)) {
    showError($passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  if (!isMatchPassword($confirmPasswordInput.value)) {
    showError($confirmPasswordInput, '비밀번호가 일치하지 않아요.');
    return;
  }

  try {
    const user = {
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error();
    }

    location.href = '/folder.html';
  } catch (err) {
    showError($emailInput, '이미 사용 중인 이메일입니다.');
  }
});
