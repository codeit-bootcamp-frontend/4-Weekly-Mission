import {MASTER_ACCOUNT, ERROR_MESSAGE, $} from './constants.js';

const addErrorMsgToDuplicateInput = (e) => {
    const errorMsg = $('.input-error-msg', e.target.parentNode);

    if(e.target.value === MASTER_ACCOUNT.EMAIL)
    {
        e.target.classList.add('js-input-profile-error');
        errorMsg.classList.remove('hidden');
        errorMsg.textContent = ERROR_MESSAGE.EMAIL.DUPLICATE;
    }
}

const addErrorMsgToMismatchConfirm = (e) => {
  if(e.target.value === '') return;

  const errorMsg = $('.input-error-msg', e.target.parentNode);
  const passwordInput = $('.password');

  if(e.target.value !== passwordInput.value) {
    e.target.classList.add('js-input-profile-error');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = ERROR_MESSAGE.PASSWORD_CONFIRM.MISMATCH;
  }
  else {
    e.target.classList.remove('js-input-profile-error');
    errorMsg.classList.add('hidden');
  }
}

const signUpHandler = (e) => {
  e.preventDefault();
  
  const inputs = document.querySelectorAll('.input-profile', e.target);
  const hasError = [...inputs].some((input) => {
    return input.classList.contains('js-input-profile-error');
  });

  if(!hasError) {
    window.location.href = '/folder.html';
  }
}

export { addErrorMsgToDuplicateInput, addErrorMsgToMismatchConfirm, signUpHandler };
