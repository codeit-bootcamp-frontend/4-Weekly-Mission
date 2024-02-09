import {
  viewWarningText,
  hiddenWarningText,
  checkEmail,
  checkPassword,
  visiblePassword,
  InputFocusEvent,
  checkLoginStatus,
} from '/js/login.js';

import {EMPTY_INPUT, INVAILED_INPUT, CORRECT_INPUT} from '/js/variable.js';

const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const emailWarningText = document.querySelector('#email-warning-text');
const passwordWarningText = document.querySelector('#password-warning-text');
const loginForm = document.querySelector('#signin-form');
const eyeBtn = document.querySelector('#password-eye-button');

window.onload = () => {
  checkLoginStatus();
};

let inputData = {
  email: null,
  password: null,
};

const submitInput = async e => {
  e.preventDefault();
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    if (response.status === 200) {
      const result = JSON.parse(await response.text());
      localStorage.setItem('accessToken', result.data.accessToken);
      window.location.href = '/page/folder';
    } else {
      viewWarningText(emailWarningText, '이메일을 확인해 주세요.');
      viewWarningText(passwordWarningText, '비밀번호를 확인해 주세요.');
    }
  } catch (error) {
    console.log(error);
  }
};

const emailInputFocustIn = () => {
  hiddenWarningText(emailWarningText);
};

const emailInputFocustOut = () => {
  const status = checkEmail(inputData.email);
  if (status === EMPTY_INPUT)
    viewWarningText(emailWarningText, '이메일을 입력해주세요.');
  else if (status === INVAILED_INPUT)
    viewWarningText(emailWarningText, '올바른 이메일 주소가 아닙니다.');
  else if (status === CORRECT_INPUT) hiddenWarningText(emailWarningText);
};

const passwordInputFocustIn = () => {
  hiddenWarningText(passwordWarningText);
};

const passwordInputFocusOut = () => {
  const status = checkPassword(inputData.password);
  if (status === EMPTY_INPUT)
    viewWarningText(passwordWarningText, '비밀번호를  입력해주세요');
  else if (status === CORRECT_INPUT) hiddenWarningText(passwordWarningText);
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
