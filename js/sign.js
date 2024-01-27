import { validateEmailInput } from './validate.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const eyeButton = document.querySelector('.eye-button');
const loginButton = document.querySelector('.sign-form-button');

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
      signInputBox.classList.remove('invalid-input-error');
      removeErrorMessage(signInputBox);
    } else if (existingError) {
      existingError.innerText = '올바른 이메일을 입력해 주세요.';
    } else {
      signInputBox.classList.add('invalid-input-error');
      addErrorMessage(signInputBox, '올바른 이메일을 입력해 주세요.');
    }
  } else if (existingError) {
    existingError.innerText = '이메일을 입력해 주세요.';
  } else {
    signInputBox.classList.add('invalid-input-error');
    addErrorMessage(signInputBox, '이메일을 입력해 주세요.');
  }
});

passwordInput.addEventListener('blur', e => {
  const signInputPasswordBox = e.target.parentElement;
  const passwordValue = e.target.value;
  const existingError = signInputPasswordBox.querySelector('p');

  if (passwordValue) {
    if (existingError) {
      signInputPasswordBox.classList.remove('invalid-input-error');
      removeErrorMessage(signInputPasswordBox);
    }
  } else if (existingError) {
    existingError.innerText = '비밀번호를 입력해 주세요.';
  } else {
    signInputPasswordBox.classList.add('invalid-input-error');
    addErrorMessage(signInputPasswordBox, '비밀번호를 입력해 주세요.');
  }
});

loginButton.addEventListener('click', e => {
  e.preventDefault();
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = '../pages/folder.html';
  } else {
    const emailBox = emailInput.parentElement;
    const passwordBox = passwordInput.parentElement;
    const existingEmailError = emailBox.querySelector('p');
    const existingPasswordError = passwordBox.querySelector('p');
    if (existingEmailError) {
      existingEmailError.innerText = '이메일을 확인해 주세요.';
    } else {
      emailBox.classList.add('invalid-input-error');
      addErrorMessage(emailBox, '이메일을 확인해 주세요.');
    }
    if (existingPasswordError) {
      existingPasswordError.innerText = '비밀번호를 확인해 주세요.';
    } else {
      passwordBox.classList.add('invalid-input-error');
      addErrorMessage(passwordBox, '비밀번호를 확인해 주세요.');
    }
  }
});

eyeButton.addEventListener('click', () => {
  const imgTag = eyeButton.querySelector('img');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    imgTag.src = '../images/eye-on.svg';
  } else {
    passwordInput.type = 'password';
    imgTag.src = '../images/eye-off.svg';
  }
});
