import {
  viewWarningText,
  hiddenWarningText,
  checkEmail,
  checkPassword,
  visiblePassword,
  InputFocusEvent,
} from '/js/login.js';

import {
  TESTEMAIL,
  TESTPASSWORD,
  INPUTEMPTY,
  INPUTINVAILED,
  INPUTCORRECT,
} from '/js/variable.js';

const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const emailWarningText = document.querySelector('#email-warning-text');
const passwordWarningText = document.querySelector('#password-warning-text');
const loginForm = document.querySelector('#signin-form');
const eyeBtn = document.querySelector('#password-eye-button');

let inputData = {
  email: null,
  password: null,
};

const submitInput = e => {
  e.preventDefault();
  if (inputData.email === TESTEMAIL && inputData.password === TESTPASSWORD) {
    window.location.href = '/page/folder';
  } else {
    viewWarningText(emailWarningText, '이메일을 확인해 주세요.');
    viewWarningText(passwordWarningText, '비밀번호를 확인해 주세요.');
  }
};

const emailInputFocustIn = () => {
  hiddenWarningText(emailWarningText);
};

const emailInputFocustOut = () => {
  const status = checkEmail(inputData.email);
  if (status === INPUTEMPTY)
    viewWarningText(emailWarningText, '이메일을 입력해주세요.');
  else if (status === INPUTINVAILED)
    viewWarningText(emailWarningText, '올바른 이메일 주소가 아닙니다.');
  else if (status === INPUTCORRECT) hiddenWarningText(emailWarningText);
};

const passwordInputFocustIn = () => {
  hiddenWarningText(passwordWarningText);
};

const passwordInputFocusOut = () => {
  const status = checkPassword(inputData.password);
  if (status === INPUTEMPTY)
    viewWarningText(passwordWarningText, '비밀번호를  입력해주세요');
  else if (status === INPUTCORRECT) hiddenWarningText(passwordWarningText);
};

const eyeBtnOnclick = () => {
  visiblePassword(eyeBtn);
};

const inputOnChange = (e, target) => {
  inputData[target] = e.target.value;
};

InputFocusEvent(emailInput, emailInputFocustIn, emailInputFocustOut);
InputFocusEvent(passwordInput, passwordInputFocustIn, passwordInputFocusOut);
emailInput.addEventListener('change', e => inputOnChange(e, 'email'));
passwordInput.addEventListener('change', e => inputOnChange(e, 'password'));
loginForm.addEventListener('submit', submitInput);
eyeBtn.addEventListener('click', eyeBtnOnclick);
