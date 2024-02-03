import MASTER_ACCOUNT from '../constants/accounts.js';
import ERROR_MESSAGE from '../constants/errorMessage.js';
import { $ } from '../constants/dom.js';
import { isValid } from '../constants/validate.js';

// 비어있는 인풋에 에러메시지 추가
const addErrorMsgToBlankInput = (e) => {
  const errorMsg = $('.input-error-msg', e.target.parentNode);

  if(e.target.value !== '') {
    e.target.classList.remove('js-input-profile-error');
    errorMsg.classList.add('hidden') ;
    return;
  }

  e.target.classList.add('js-input-profile-error');
  errorMsg.classList.remove('hidden');

  // input이 email인지 password인지 체크
  if(e.target.getAttribute('id') === 'email') {
    errorMsg.textContent = ERROR_MESSAGE.EMAIL.BLANK;
  }
  else {
    errorMsg.textContent = ERROR_MESSAGE.PASSWORD.BLANK;
  }
}

const addErrorMsgToInvalidInput = (e) => {
  if(e.target.value === '') return;

  const errorMsg = $('.input-error-msg', e.target.parentNode);
  const inputType = e.target.getAttribute('id');  // emailInput id : 'email', passwordInput id : 'password'
  
  if(isValid[`${inputType}`](e.target.value)) {
    e.target.classList.remove('js-input-profile-error');
    errorMsg.classList.add('hidden');
    return;
  }

  e.target.classList.add('js-input-profile-error');
  errorMsg.classList.remove('hidden');
  errorMsg.textContent = ERROR_MESSAGE[`${inputType.toUpperCase()}`].INVALID;

}

const addErrorMsgToIncorrectInput = (input) => {
  const errorMsg = $('.input-error-msg', input.parentNode);
  input.classList.add('js-input-profile-error');
  errorMsg.classList.remove('hidden');     
  
  // input이 email인지 password인지 체크
  if(input.getAttribute('id') === 'email') {
    errorMsg.textContent = ERROR_MESSAGE.EMAIL.INCORRECT;
  }
  else {
    errorMsg.textContent = ERROR_MESSAGE.PASSWORD.INCORRECT;
  }
}

const addErrorMsgToDuplicateInput = (e) => {
  const errorMsg = $('.input-error-msg', e.target.parentNode);

  if(e.target.value === MASTER_ACCOUNT.EMAIL)
  {
      e.target.classList.add('js-input-profile-error');
      errorMsg.classList.remove('hidden');
      errorMsg.textContent = ERROR_MESSAGE.EMAIL.DUPLICATE;
  }
}

const addErrorMsgToMismatchConfirm = () => {
const passwordInput = $('.password');
const passwordConfirmInput = $('.password-confirm');
const errorMsg = $('.input-error-msg', passwordConfirmInput.parentNode);

if(passwordConfirmInput.value === passwordInput.value) {
  passwordConfirmInput.classList.remove('js-input-profile-error');
  errorMsg.classList.add('hidden'); 
  return;
}

passwordConfirmInput.classList.add('js-input-profile-error');
errorMsg.classList.remove('hidden');
errorMsg.textContent = ERROR_MESSAGE.PASSWORD_CONFIRM.MISMATCH;
}

export { addErrorMsgToBlankInput, addErrorMsgToInvalidInput, addErrorMsgToIncorrectInput, addErrorMsgToDuplicateInput, addErrorMsgToMismatchConfirm };
