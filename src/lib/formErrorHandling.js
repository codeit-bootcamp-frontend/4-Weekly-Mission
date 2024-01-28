import * as input from './inputVerification.js';
import * as DOM from './DOM.js';

export function handleInputFocusout(inputElement, errorElement, regex, errorMessage) {
  if (input.isFormatValue(inputElement)) {
    showErrorMsg(inputElement, errorElement, errorMessage.empty);
    return;
  }
  if (regex && !input.isRegexMatch(inputElement, regex)) {
    const combinedErrorMessage = [errorMessage.invalid, errorMessage.set].filter(msg => msg !== undefined).join(' ');
    showErrorMsg(inputElement, errorElement, combinedErrorMessage);
    return;
  }
  errorElement?.classList.add('hidden');
}

export function showErrorMsg(inputElement, textElement, text) {
  inputElement.classList.add('red-border');
  textElement?.classList.remove('hidden');
  DOM.changeText(textElement, text);
}

export function handleInputFocusin(inputElement) {
  inputElement.classList.remove('red-border');
}
