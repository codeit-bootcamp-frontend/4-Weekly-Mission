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

const signUpHandler = (e) => {
  e.preventDefault();
  addErrorMsgToMismatchConfirm();

  const inputs = document.querySelectorAll('.input-profile', e.target);
  inputs.forEach((input) => {
    input.dispatchEvent(new Event('blur'));
  });

  const hasError = [...inputs].some((input) => {
    return input.classList.contains('js-input-profile-error');
  });
  const hasBlankInput = [...inputs].some((input) => input.value === '')

  if(hasError) return;
  if(hasBlankInput) return;

  window.location.href = '/folder.html';
}

export { addErrorMsgToDuplicateInput, addErrorMsgToMismatchConfirm, signUpHandler };
