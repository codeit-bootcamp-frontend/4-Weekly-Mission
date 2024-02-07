import { ERROR_MESSAGE, API } from '../utils/constant.js';
import { $emailInput, $passwordInput, $btnEye, $form } from '../utils/nodes.js';
import { showError, removeError } from '../utils/errorUtils.js';
import { checkValidEmail, togglePassword } from '../pages/sign.js';

const checkEmptyPassword = e => {
  if (!e.target.value) {
    showError(e.target, ERROR_MESSAGE.emptyPassword);
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

    const response = await fetch(API.signIn, {
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
    showError($emailInput, ERROR_MESSAGE.confirmEmail);
    showError($passwordInput, ERROR_MESSAGE.confirmPassword);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('accessToken')) {
    location.href = '/folder.html';
  }
});
