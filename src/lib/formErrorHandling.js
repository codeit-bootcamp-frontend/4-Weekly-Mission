import * as input from './inputVerification.js';
import * as DOM from './DOM.js';

/**
 * 
 * @param {*} inputElement - input element
 * @param {*} errorElement - error element
 * @param {*} regex - 유효성
 * @param {*} errorMessage - error message
 * @returns 
 */
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

/**
 * 
 * @param {*} inputElement - input element
 * @param {*} textElement - text element
 * @param {*} text - 보여줄 text
 */
export function showErrorMsg(inputElement, textElement, text) {
  inputElement.classList.add('red-border');
  textElement?.classList.remove('hidden');
  DOM.changeText(textElement, text);
}

export function handleInputFocusin(inputElement) {
  inputElement.classList.remove('red-border');
}
