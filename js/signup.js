import { handleFocusoutInput, handleClickBlindButton } from './input.js';
import { CLASS } from './class.js';

const signupForm = document.querySelector('#signup-form');

function handleSubmit(event) {
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

  // event.target.submit();
  window.location.href = '/folder';
}

signupForm.addEventListener('focusout', handleFocusoutInput);
signupForm.addEventListener('click', handleClickBlindButton);
signupForm.addEventListener('submit', handleSubmit);
