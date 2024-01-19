//@ts-check
import { changeColor, changeDisplay } from './library/style.js';
import { getElement } from './library/document.js';
import { addTextAfter, changeText, isMatchText, isValidate } from './library/text.js';

const USERS = [{ id: 'test@codeit.com', password: 'codeit101' }]

const loginEmailQuery = '.login__input--email';
const loginPasswordQuery = '.login__input--password'
const emailErrorQuery = '.email__error';
const passwordErrorQuery = '.password__error'
const loginBtnQuery = '.login__btn'

const loginEmail = getElement(loginEmailQuery);
const loginPassword = getElement(loginPasswordQuery)
const loginBtn = getElement(loginBtnQuery)

const regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

addTextAfter(loginEmailQuery, emailErrorQuery, "");
changeDisplay(emailErrorQuery, 'none')
addTextAfter('.login__div--password', passwordErrorQuery, "");
changeDisplay(emailErrorQuery, 'none')

const handleEmailFocusIn = () => {
  changeDisplay(emailErrorQuery, 'none');
  changeColor(loginEmailQuery, 'borderColor', 'var(--color-primary)');
};

const handleEmailFocusOut = () => {
  if (isValidate(loginEmailQuery, regEx)) {
    changeColor(loginEmailQuery, 'borderColor', 'var(--color-gray-500)');
    return changeDisplay(emailErrorQuery, 'none')
  }
  changeDisplay(emailErrorQuery, 'block')
  changeColor(loginEmailQuery, 'borderColor', 'var(--color-red)');
  if (isMatchText(loginEmailQuery, '')) {
    changeText(emailErrorQuery, '이메일을 입력해 주세요.')
    changeDisplay(emailErrorQuery, 'block')
  }
  else {
    changeText(emailErrorQuery, '올바른 이메일 주소가 아닙니다.')
  }
}

const handlePasswordFocusIn = () => {
  changeDisplay(passwordErrorQuery, 'none');
  changeColor(loginPasswordQuery, 'borderColor', 'var(--color-primary)');
}

const handlePassWordFocusOut = () => {
  if (isMatchText(loginPasswordQuery, '')) {
    changeText(passwordErrorQuery, "비밀번호를 입력해 주세요")
    changeDisplay(passwordErrorQuery, 'block')
    changeColor(loginPasswordQuery, 'borderColor', 'var(--color-red)');
  }
}

const handleLoginClick = () => {
  if (isValidate(loginEmailQuery, regEx)) {
    if (USERS.some(user => isMatchText(loginEmailQuery, user.id) && isMatchText(loginPasswordQuery, user.password))) return window.location.href = '../pages/folder.html'
  }
  changeText(emailErrorQuery, "이메일을 확인해 주세요.")
  changeDisplay(emailErrorQuery, 'block')
  changeText(passwordErrorQuery, "비밀번호를 확인해 주세요")
  changeDisplay(passwordErrorQuery, 'block')
}


loginEmail?.addEventListener('focusout', handleEmailFocusOut);
loginEmail?.addEventListener('focusin', handleEmailFocusIn);
loginBtn?.addEventListener('click', handleLoginClick)
loginPassword?.addEventListener('focusout', handlePassWordFocusOut)
loginPassword?.addEventListener('focusin', handlePasswordFocusIn)
