import { toDisplayBlock, toDisplayNone } from './library/display.js';
import { addTextAfter, isEmptyInput } from './library/text.js';

{
  const inputEmailQuery = '.login__input--email';
  const inputEmail = document.querySelector(inputEmailQuery);
  const errorTextQuery = '.login__error--text';
  const errorMessage = '이메일을 입력해주세요.';
  const handleFocusIn = () => {
    addTextAfter(inputEmailQuery, errorMessage, errorTextQuery);
    toDisplayNone(errorTextQuery);
  };

  const handleFocusOut = () => {
    if (isEmptyInput(inputEmailQuery)) toDisplayBlock(errorTextQuery);
  };
  inputEmail.addEventListener('focusout', handleFocusOut);

  inputEmail.addEventListener('focusin', handleFocusIn);
}
