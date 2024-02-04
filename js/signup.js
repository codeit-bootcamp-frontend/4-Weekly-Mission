import { handleFocusoutInput, handleClickBlindButton } from './input.js';
import { CLASS } from './class.js';
import { API } from './api.js';

const signupForm = document.querySelector('#signup-form');

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  if (form.id !== 'signup-form') return;

  const inputs = Array.from(form.querySelectorAll('input'));

  inputs.forEach((input) => {
    input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
  });

  const isValid = !inputs.some((input) =>
    input.classList.contains(CLASS.ERROR)
  );

  if (!isValid) return;

  const isSignup = await signup({
    email: form.email?.value,
    password: form.password?.value,
  });

  if (!isSignup) return;

  window.location.href = '/folder';
}

async function signup(user = {}) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(API.getSignUpUrl(), options);

    if (!response.ok) {
      throw new Error(`TODO: ${response.status} error handling.`);
    }

    let json = await response.json();

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

signupForm.addEventListener('focusout', handleFocusoutInput);
signupForm.addEventListener('click', handleClickBlindButton);
signupForm.addEventListener('submit', handleSubmit);
