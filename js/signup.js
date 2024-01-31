import {
  viewWarningText,
  hiddenWarningText,
  checkEmail,
  checkPassword,
  visiblePassword,
  InputFocusEvent,
} from '/js/login.js';

import {TESTEMAIL, INPUTEMPTY, INPUTINVAILED} from '/js/variable.js';

const emailInput = document.querySelector('#email-input');
const emailWarningText = document.querySelector('#email-warning-text');
const passwordInput = document.querySelector('#password-input');
const passwordCheckInput = document.querySelector('#password-check-input');
const password = document.querySelector('#password');
const eyeBtn = document.querySelector('#password-eye-button');
const eyeBtnCheck = document.querySelector('#password-check-eye-button');
const signupForm = document.querySelector('#signup-form');

const PASSWORD = 1;
const PASSWORDCHECK = 2;

let isVailed = [false, false, false];
let dataInput = {
  email: null,
  password: null,
  passwordCheck: null,
};

const inputOnChange = (e, target) => {
  dataInput[target] = e.target.value;
};

const checkPasswordType = value => {
  const regex1 = new RegExp('^[0-9]*$');
  const regex2 = new RegExp('^[a-zA-Z]*$');
  if (value.length < 8) return false;
  if (regex1.test(value)) return false;
  if (regex2.test(value)) return false;

  return true;
};

const emailInputFocustOut = () => {
  if (dataInput.email === TESTEMAIL) {
    viewWarningText(emailWarningText, '이미 사용 중인 이메일입니다.');
    isVailed[0] = false;
    return;
  }

  const status = checkEmail(dataInput.email);
  if (status === INPUTEMPTY) {
    viewWarningText(emailWarningText, '이메일을 입력해주세요.');
    isVailed[0] = false;
    return;
  }

  if (status === INPUTINVAILED) {
    viewWarningText(emailWarningText, '올바른 이메일 주소가 아닙니다.');
    isVailed[0] = false;
    return;
  }
  isVailed[0] = true;
};

const emailInputFocustIn = () => {
  hiddenWarningText(emailWarningText);
};

const passwordInputFocusOut = target => {
  const type = target.id === 'password-input' ? PASSWORD : PASSWORDCHECK;
  const textTarget =
    target.parentNode.parentNode.querySelector('.warning-text');
  if (
    type === PASSWORDCHECK &&
    dataInput.password !== dataInput.passwordCheck
  ) {
    viewWarningText(textTarget, '비밀번호가 일치하지 않아요');
    isVailed[type] = false;
    return;
  }
  if (checkPassword(dataInput.password) === INPUTEMPTY) {
    viewWarningText(textTarget, '비밀번호를 입력해주세요.');
    isVailed[type] = false;
    return;
  }

  if (!checkPasswordType(dataInput.password)) {
    viewWarningText(
      textTarget,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    );
    isVailed[type] = false;
    return;
  }
  isVailed[type] = true;
};

const passwordInputFocustIn = target => {
  const textTarget =
    target.parentNode.parentNode.querySelector('.warning-text');
  hiddenWarningText(textTarget);
};

const eyeBtnOnclick = target => {
  visiblePassword(target);
};

const signupBtnOnclick = e => {
  e.preventDefault();
  emailInputFocustOut(emailInput);
  passwordInputFocusOut(passwordInput);
  passwordInputFocusOut(passwordCheckInput);
  for (let flag of isVailed) {
    if (!flag) return;
  }
  console.log(isVailed);
  window.location.href = '/page/folder';
};

InputFocusEvent(emailInput, emailInputFocustIn, e =>
  emailInputFocustOut(e.target),
);
InputFocusEvent(
  password,
  e => passwordInputFocustIn(e.target),
  e => passwordInputFocusOut(e.target),
);
eyeBtn.addEventListener('click', () => eyeBtnOnclick(eyeBtn));
eyeBtnCheck.addEventListener('click', () => eyeBtnOnclick(eyeBtnCheck));
signupForm.addEventListener('submit', signupBtnOnclick);
emailInput.addEventListener('change', e => inputOnChange(e, 'email'));
passwordInput.addEventListener('change', e => inputOnChange(e, 'password'));
passwordCheckInput.addEventListener('change', e =>
  inputOnChange(e, 'passwordCheck'),
);
