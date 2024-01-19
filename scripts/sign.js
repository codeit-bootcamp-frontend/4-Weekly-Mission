//@ts-check
import { displayChange } from './library/display.js';
import { getElement } from './library/document.js';
import { addTextAfter, changeText, isEmptyInput, isValidate } from './library/text.js';

const inputEmailQuery = '.login__input--email';
const errorTextQuery = '.login__error--text';
const inputEmail = getElement(inputEmailQuery);
const regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

addTextAfter(inputEmailQuery, errorTextQuery, "");
displayChange(errorTextQuery, 'none')

const handleFocusIn = () => {
  displayChange(errorTextQuery, 'none');
};

const handleFocusOut = () => {
  if (isValidate(inputEmailQuery, regEx)) return displayChange(errorTextQuery, 'none')
  displayChange(errorTextQuery, 'block')
  if (isEmptyInput(inputEmailQuery)) changeText(errorTextQuery, '이메일을 입력해 주세요.')
  else changeText(errorTextQuery, '올바른 이메일 주소가 아닙니다.')
}

inputEmail?.addEventListener('focusout', handleFocusOut);
inputEmail?.addEventListener('focusin', handleFocusIn);
