import {
  handleFocusoutInput,
  handleClickBlindButton,
  removeError,
  addEmptyError,
  INPUT_TYPE,
  ON_OFF,
  validateInput,
  addPatternError,
  confirmSameUserEmail,
  addSameError,
} from './input.js';

const signupForm = document.querySelector('#signup-form');

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.id !== 'signup-form') return;

  const inputEmail = event.target['email'];
  const inputPassword = event.target['password'];
  const inputPasswordRepeat = event.target['password_repeat'];
  const messageBoxEmail = inputEmail.parentElement.nextElementSibling;
  const messageBoxPassword = inputPassword.parentElement.nextElementSibling;
  const messageBoxPasswordRepeat =
    inputPasswordRepeat.parentElement.nextElementSibling;

  removeError(inputEmail);
  removeError(inputPassword);
  removeError(inputPasswordRepeat);
  removeError(messageBoxEmail);
  removeError(messageBoxPassword);
  removeError(messageBoxPasswordRepeat);

  if (!inputEmail.value) {
    addEmptyError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    return;
  }
  if (
    inputEmail.dataset.validation?.toLowerCase() === ON_OFF.ON &&
    !validateInput(INPUT_TYPE.EMAIL, inputEmail.value, event.target)
  ) {
    addPatternError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    return;
  }
  if (!confirmSameUserEmail(inputEmail.value)) {
    addSameError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    return;
  }

  if (!inputPassword.value) {
    addEmptyError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
    return;
  }
  if (
    inputPassword.dataset.validation?.toLowerCase() === ON_OFF.ON &&
    !validateInput(INPUT_TYPE.PASSWORD, inputPassword.value, event.target)
  ) {
    addPatternError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
    return;
  }
  if (!inputPasswordRepeat.value) {
    addEmptyError(
      INPUT_TYPE.PASSWORD_REPEAT,
      inputPasswordRepeat,
      messageBoxPasswordRepeat
    );
    return;
  }
  if (
    inputPasswordRepeat.dataset.validation?.toLowerCase() === ON_OFF.ON &&
    !validateInput(
      INPUT_TYPE.PASSWORD_REPEAT,
      inputPasswordRepeat.value,
      event.target
    )
  ) {
    addPatternError(
      INPUT_TYPE.PASSWORD_REPEATRD,
      inputPasswordRepeatrd,
      messageBoxPasswordRepeat
    );
    return;
  }

  // event.target.submit();
  window.location.href = '/folder';
}

signupForm.addEventListener('focusout', handleFocusoutInput);
signupForm.addEventListener('click', handleClickBlindButton);
signupForm.addEventListener('submit', handleSubmit);
