import { REGEX } from './constants/message.js';

const inputError = (e, condition, elements, errorMessage) => {
  if (condition) return;
  elements.inputErrorArea.textContent = errorMessage;
  elements.input.classList.add('error');
};
const isEmpty = e => e.target.value;
const isValidEmail = input => REGEX.email.test(input);

export { inputError, isEmpty, isValidEmail };
