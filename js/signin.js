import {
  handleFocusoutInput,
  handleClickBlindButton,
  removeError,
  INPUT_TYPE,
  addLoginError,
} from './common/input.js';
import { API } from './api/api.js';
import { isLogin } from './api/auth.js';
import * as UTILS from './common/utils.js';

const signinForm = document.querySelector('#signin-form');

async function handleSubmit(event) {
  event.preventDefault();

  if (event.target.id !== 'signin-form') return;

  const inputEmail = event.target['email'];
  const inputPassword = event.target['password'];
  const messageBoxEmail = inputEmail.parentElement.nextElementSibling;
  const messageBoxPassword = inputPassword.parentElement.nextElementSibling;

  removeError(inputEmail);
  removeError(inputPassword);
  removeError(messageBoxEmail);
  removeError(messageBoxPassword);

  const isSignin = await signin({
    email: inputEmail.value,
    password: inputPassword.value,
  });

  if (!isSignin) {
    addLoginError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    addLoginError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
    return;
  }

  UTILS.redirect('/folder');
}

async function signin(user = {}) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(API.getSignInUrl(), options);

    if (!response.ok) {
      throw new Error(`TODO: ${response.status} error handling.`);
    }

    let result = await response.json();

    const accessToken = result.data?.accessToken;
    const refreshToken = result.data?.refreshToken;

    UTILS.setLocalStorage('accessToken', accessToken);
    UTILS.setLocalStorage('refreshToken', refreshToken);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

signinForm.addEventListener('focusout', handleFocusoutInput);
signinForm.addEventListener('click', handleClickBlindButton);
signinForm.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', async () => {
  try {
    if (await isLogin()) UTILS.redirect('/folder');
  } catch (error) {
    console.log(`TODO: handling ${error}`);
  }
});
