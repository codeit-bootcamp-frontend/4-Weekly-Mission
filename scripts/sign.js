//@ts-check
import { changeBorderColor, changeDisplay } from './library/style.js';
import { getElement } from './library/document.js';
import { addTextAfter, changeText, isMatchValue, isValidate } from './library/text.js';

const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }];

const loginEmailQuery = '.login__input--email';
const loginPasswordQuery = '.login__input--password';
const emailErrorQuery = '.email__error';
const passwordErrorQuery = '.password__error';
const loginBtnQuery = '.login__btn';
const regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const loginEmail = getElement(loginEmailQuery);
const loginPassword = getElement(loginPasswordQuery);
const loginBtn = getElement(loginBtnQuery);
const eyeImg = getElement('.eye-img');

const handleEmailFocusIn = () => {
  changeDisplay(emailErrorQuery, 'none');
  changeBorderColor(loginEmailQuery, 'var(--color-primary)');
};

const handleEmailFocusOut = () => {
  if (isValidate(loginEmailQuery, regEx)) return changeBorderColor(loginEmailQuery, 'var(--color-gray-500)');
  changeDisplay(emailErrorQuery, 'block');
  changeBorderColor(loginEmailQuery, 'var(--color-red)');
  if (isMatchValue(loginEmailQuery, '')) changeText(emailErrorQuery, '이메일을 입력해 주세요.');
  else changeText(emailErrorQuery, '올바른 이메일 주소가 아닙니다.');
};

const handlePasswordFocusIn = () => {
  changeDisplay(passwordErrorQuery, 'none');
  changeBorderColor(loginPasswordQuery, 'var(--color-primary)');
};

const handlePasswordFocusOut = () => {
  if (isMatchValue(loginPasswordQuery, '')) {
    changeText(passwordErrorQuery, '비밀번호를 입력해 주세요');
    changeDisplay(passwordErrorQuery, 'block');
    changeBorderColor(loginPasswordQuery, 'var(--color-red)');
  } else changeBorderColor(loginPasswordQuery, 'var(--color-gray-500)');
};

const handleLoginClick = () => {
  if (isValidate(loginEmailQuery, regEx)) {
    if (USERS.some(user => isMatchValue(loginEmailQuery, user.id) && isMatchValue(loginPasswordQuery, user.password)))
      return (window.location.href = '../pages/folder.html');
  }
  changeText(emailErrorQuery, '이메일을 확인해 주세요.');
  changeText(passwordErrorQuery, '비밀번호를 확인해 주세요');
  changeDisplay(emailErrorQuery, 'block');
  changeDisplay(passwordErrorQuery, 'block');
  changeBorderColor(loginPasswordQuery, 'var(--color-red)');
  changeBorderColor(loginEmailQuery, 'var(--color-red)');
};

const handleImgeClick = () => {
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
    eyeImg.src = '../assets/icons/eye-on.svg';
    eyeImg.alt = 'eye-on';
  } else {
    loginPassword.type = 'password';
    eyeImg.src = '../assets/icons/eye-off.svg';
    eyeImg.alt = 'eye-off';
  }
};

/**
 * @param {KeyboardEvent} event - asdf
 * */
const handleKeyUp = event => {
  if (event.key === 'Enter') {
    loginBtn.click();
  }
};

addTextAfter(loginEmailQuery, emailErrorQuery, '');
changeDisplay(emailErrorQuery, 'none');
addTextAfter('.login__div--password', passwordErrorQuery, '');
changeDisplay(emailErrorQuery, 'none');
loginEmail?.addEventListener('focusout', handleEmailFocusOut);
loginEmail?.addEventListener('focusin', handleEmailFocusIn);
loginEmail?.addEventListener('keyup', handleKeyUp);
loginPassword?.addEventListener('focusout', handlePasswordFocusOut);
loginPassword?.addEventListener('focusin', handlePasswordFocusIn);
loginPassword?.addEventListener('keyup', handleKeyUp);
eyeImg?.addEventListener('click', handleImgeClick);
loginBtn?.addEventListener('click', handleLoginClick);
