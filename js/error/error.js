import { isInputValid } from '../validation.js';

export function createErrorMessage(inputElement, message) {

  if (!isInputValid(inputElement)) {
    inputElement.classList.remove("error");
    inputElement.parentElement.querySelector('.error-message').remove();
  }

  const newError = document.createElement("p");
  newError.textContent = message;
  newError.classList.add("error-message");
  inputElement.classList.add("error");
  inputElement.parentElement.appendChild(newError);
}