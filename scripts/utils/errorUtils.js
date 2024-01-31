import { findErrorMessage } from './tags.js';

const removeError = $input => {
  const $msg = findErrorMessage($input);
  $input.classList.remove('error');
  $msg.classList.add('hidden');
};

const showError = ($input, errorMessage) => {
  const $msg = findErrorMessage($input);
  $msg.textContent = errorMessage;
  $input.classList.add('error');
  $msg.classList.remove('hidden');
};

export { removeError, showError };
