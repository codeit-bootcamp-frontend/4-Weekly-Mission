//@ts-check
import { displayChange } from './library/display.js';
import { addTextAfter, isEmptyInput } from './library/text.js';

{
  const inputEmailQuery = '.login__input--email';
  const errorTextQuery = '.login__error--text';
  const errorMessage = '이메일을 입력해주세요.';
  const inputEmail = document.querySelector(inputEmailQuery);

  const handleFocusIn = () => {
    addTextAfter(inputEmailQuery, errorMessage, errorTextQuery);
    displayChange(errorTextQuery, 'block');
  };

  const handleFocusOut = () => {
    if (isEmptyInput(inputEmailQuery)) displayChange(errorTextQuery, 'none');
  };

  inputEmail?.addEventListener('focusout', handleFocusOut);
  inputEmail?.addEventListener('focusin', handleFocusIn);
}
