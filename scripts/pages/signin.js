import { showError, removeError } from '../utils/errorUtils.js';
import { checkValidEmail, togglePassword } from '../pages/sign.js';
import { $emailInput, $passwordInput, $btnEye, $form } from '../utils/nodes.js';

const checkEmptyPassword = e => {
  if (!e.target.value) {
    showError(e.target, '비밀번호를 입력해주세요.');
    return;
  }

  removeError(e.target);
};

$emailInput.addEventListener('focusout', checkValidEmail);
$passwordInput.addEventListener('focusout', checkEmptyPassword);
$btnEye.forEach(btn => btn.addEventListener('click', togglePassword));
$form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const user = {
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();
    const accessToken = result.data.accessToken;

    localStorage.setItem('accessToken', accessToken);
    location.href = '/folder.html';
  } catch (err) {
    showError($emailInput, '이메일을 확인해주세요.');
    showError($passwordInput, '비밀번호를 확인해주세요.');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('accessToken')) {
    location.href = '/folder.html';
  }
});
