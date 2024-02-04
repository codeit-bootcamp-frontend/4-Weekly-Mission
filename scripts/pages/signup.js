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
import { ERROR_MESSAGE, API } from '../utils/constant.js';

const checkExistEmail = async e => {
  if (await isEmailExisting(e.target.value)) {
    showError(e.target, ERROR_MESSAGE.existEmail);
    return;
  }

  removeError(e.target);
};

const checkValidPassword = e => {
  if (!isValidPassword(e.target.value)) {
    showError(e.target, ERROR_MESSAGE.invalidatePassword);
    return;
  }

  removeError(e.target);
};

const checkMatchPassword = e => {
  if (!isMatchPassword(e.target.value)) {
    showError(e.target, ERROR_MESSAGE.confirmPasswordMatch);
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
    const message = $emailInput.value ? ERROR_MESSAGE.invalidateEmail : ERROR_MESSAGE.emptyEmail;
    showError($emailInput, message);
    return;
  }

  if (!isValidPassword($passwordInput.value)) {
    showError($passwordInput, ERROR_MESSAGE.invalidatePassword);
    return;
  }

  if (!isMatchPassword($confirmPasswordInput.value)) {
    showError($confirmPasswordInput, ERROR_MESSAGE.confirmPasswordMatch);
    return;
  }

  try {
    const user = {
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    const response = await fetch(API.signUp, {
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
    showError($emailInput, ERROR_MESSAGE.existEmail);
  }
});
