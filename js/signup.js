import {
  viewWarningText,
  hiddenWarningText,
  checkEmail,
  checkPassword,
  visiblePassword,
  InputFocusEvent,
} from '/js/login.js';

import {
  MAIL_TEST,
  EMPTY_INPUT,
  INVAILED_INPUT,
  CORRECT_INPUT,
} from '/js/variable.js';

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
  if (dataInput.email === MAIL_TEST) {
    viewWarningText(emailWarningText, '이미 사용 중인 이메일입니다.');
    return;
  }

  const status = checkEmail(dataInput.email);
  if (status === EMPTY_INPUT) {
    viewWarningText(emailWarningText, '이메일을 입력해주세요.');
    return;
  }

  if (status === INVAILED_INPUT) {
    viewWarningText(emailWarningText, '올바른 이메일 주소가 아닙니다.');
    return;
  }
};

const emailInputFocustIn = () => {
  hiddenWarningText(emailWarningText);
};

const checkPasswordEqual = () => {
  return dataInput.password === dataInput.passwordCheck;
};

const passwordInputFocusOut = target => {
  const type = target.id === 'password-input' ? PASSWORD : PASSWORDCHECK;
  const textTarget =
    target.parentNode.parentNode.querySelector('.warning-text');
  if (type === PASSWORDCHECK && checkPasswordEqual()) {
    viewWarningText(textTarget, '비밀번호가 일치하지 않아요');
    return;
  }
  if (checkPassword(dataInput.password) === EMPTY_INPUT) {
    viewWarningText(textTarget, '비밀번호를 입력해주세요.');
    return;
  }

  if (!checkPasswordType(dataInput.password)) {
    viewWarningText(
      textTarget,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    );
    return;
  }
};

const passwordInputFocustIn = target => {
  const textTarget =
    target.parentNode.parentNode.querySelector('.warning-text');
  hiddenWarningText(textTarget);
};

const eyeBtnOnclick = target => {
  visiblePassword(target);
};

const checkInputValidation = ([...args]) => {
  for (let {target, callback} of args) {
    for (let method of callback) {
      const result = method(target);
      if (result !== CORRECT_INPUT && result !== true) {
        return false;
      }
    }
  }
  return true;
};

const submitInput = e => {
  e.preventDefault();
  const dataInspect = [
    {target: dataInput.email, callback: [checkEmail]},
    {target: dataInput.password, callback: [checkPassword]},
    {
      target: dataInput.passwordCheck,
      callback: [checkPassword, checkPasswordEqual],
    },
  ];

  const signupPass = checkInputValidation(dataInspect);
  if (signupPass) {
    window.location.href = '/page/folder';
  } else {
    emailInput.blur(emailInputFocustOut(emailInput));
    password.blur(passwordInputFocusOut(passwordInput));
    password.blur(passwordInputFocusOut(passwordCheckInput));
  }
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
signupForm.addEventListener('submit', submitInput);
emailInput.addEventListener('change', e => inputOnChange(e, 'email'));
passwordInput.addEventListener('change', e => inputOnChange(e, 'password'));
passwordCheckInput.addEventListener('change', e =>
  inputOnChange(e, 'passwordCheck'),
);
