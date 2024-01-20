import validateEmailInput from './validate.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const addErrorMessage = (parentElement, errorMessage) => {
  const errorTag = document.createElement('p');
  errorTag.innerText = errorMessage;
  parentElement.append(errorTag);
};

const removeErrorMessage = parentElement => {
  const errorTag = parentElement.querySelector('p');
  if (errorTag) {
    errorTag.remove();
  }
};

emailInput.addEventListener('blur', e => {
  const signInputBox = e.target.parentElement;
  const emailValue = e.target.value;
  const existingError = signInputBox.querySelector('p');

  if (emailValue) {
    if (validateEmailInput(emailValue)) {
      signInputBox.classList.remove('error');
      removeErrorMessage(signInputBox);
    } else if (existingError) {
      existingError.innerText = '올바른 이메일을 입력해 주세요.';
    } else {
      signInputBox.classList.add('error');
      addErrorMessage(signInputBox, '올바른 이메일을 입력해 주세요.');
    }
  } else if (existingError) {
    existingError.innerText = '이메일을 입력해 주세요.';
  } else {
    signInputBox.classList.add('error');
    addErrorMessage(signInputBox, '이메일을 입력해 주세요.');
  }
});
