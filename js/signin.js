import {
  handleFocusoutInput,
  handleClickBlindButton,
  removeError,
  INPUT_TYPE,
  addLoginError,
} from './input.js';
import { USER_TEST } from './test.js';
import { API } from './api.js';

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

  // if (USER_TEST.EMAIL !== inputEmail.value) {
  //   addLoginError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
  //   return;
  // } else if (USER_TEST.PASSWORD !== inputPassword.value) {
  //   addLoginError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
  //   return;
  // }

  const isSignin = await signin({
    email: inputEmail.value,
    password: inputPassword.value,
  });

  if (!isSignin) {
    addLoginError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    addLoginError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
    return;
  }

  window.location.href = '/folder';
}

async function signin(user) {
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
      throw Error(`TODO: ${response.status} response error handling`);
    }

    let json = await response.json();

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

signinForm.addEventListener('focusout', handleFocusoutInput);
signinForm.addEventListener('click', handleClickBlindButton);
signinForm.addEventListener('submit', handleSubmit);
