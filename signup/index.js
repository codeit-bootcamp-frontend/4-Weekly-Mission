/*********************
       Import
*********************/

import {
  User,
  user,
  isEmpty,
  isEmailValid,
  isPasswordValid,
  showErrorMessage,
  hideErorrMessage,
  changePlaceholderFocusIn,
  changePlaceholderFocusOut,
  togglePasswordVisibility,
} from "../scripts/utils.js";

/*********************
      UI Constant
*********************/

const signupForm = document.querySelector('.signup-form');

const inputEmail = document.querySelector('#signup-email');
const inputPassword = document.querySelector('#signup-password');
const inputPasswordCheck = document.querySelector('#signup-password-check');

const errorMessageEmail = document.querySelector('.errorMessage-email');
const errorMessagePassword = document.querySelector('.errorMessage-password');
const errorMessagePasswordCheck = document.querySelector('.errorMessage-password-check');

/*********************
       Function
*********************/

function isEmailDuplicated(text) { return user.email === text };

/*********************
    Event Function
*********************/

function emailError() {
  if (isEmpty(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 입력해 주세요.');
    inputEmail.classList.add('red-border');
    return;
  } 

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '올바른 이메일 주소가 아닙니다.')
    inputEmail.classList.add('red-border');
    return;
  }

  if (isEmailDuplicated(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이미 사용 중인 이메일입니다.');
    inputEmail.classList.add('red-border');
    return;
  }
};

function passwordError() {
  if (isEmpty(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호를 입력해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };
};

function passwordCheckError() {
  if (isEmpty(inputPasswordCheck.value)) {
    showErrorMessage(errorMessagePasswordCheck, '비밀번호를 입력해 주세요.')
    inputPasswordCheck.classList.add('red-border')
    return;
  };

  if (inputPasswordCheck.value !== inputPassword.value) {
    showErrorMessage(errorMessagePasswordCheck, '비밀번호가 일치하지 않습니다.')
    inputPasswordCheck.classList.add('red-border')
    return;
  }
};

function deleteError(e) {
  if (e.target === inputEmail) {
    hideErorrMessage(errorMessageEmail);
    inputEmail.classList.remove('red-border');
  };

  if (e.target === inputPassword) {
    hideErorrMessage(errorMessagePassword);
    inputPassword.classList.remove('red-border');
  };

  if (e.target === inputPasswordCheck) {
    hideErorrMessage(errorMessagePasswordCheck);
    inputPasswordCheck.classList.remove('red-border');
  };
};

// 비밀번호가 visible 하게 되면 type = 'text' 가 되면서, 한글 비밀번호 설정이 가능해지다보니 넣은 함수입니다. 이런 방식보다 더 효율적인 방법이 있는지 궁금합니다.
function onlyEngPassword() {
  const filteredValue = inputPassword.value.replace(/[^a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\^_`{|}~]/g, '');
  inputPassword.value = filteredValue;
};

// signup 함수도 login 함수처럼 이메일 검사 -> 비밀번호 검사 -> 비밀번호 확인 검사 순으로 로직을 만들어서 하는게 좋을까요?
function signup(e) {
  e.preventDefault();

  const inputs = [ inputEmail, inputPassword, inputPasswordCheck ];

  for (const input of inputs) {
    input.focus();
    input.blur();
  };

  const filteredInputs = inputs.filter( (input) => input.classList.contains('red-border') );

  if (filteredInputs.length) {
    for (const input of filteredInputs) {
      const error = input.parentElement.lastElementChild;
      showErrorMessage(error, '확인 후 다시 작성해주세요.');
    };
    return;
  };
  
  return location.href = '../folder/index.html';
};

/*********************
      EventHandler
*********************/

signupForm.addEventListener('focusin', changePlaceholderFocusIn);
signupForm.addEventListener('focusout', changePlaceholderFocusOut);
signupForm.addEventListener('submit', signup);
signupForm.addEventListener('click', togglePasswordVisibility);
signupForm.addEventListener('focusin', deleteError);

inputEmail.addEventListener('focusout', emailError);

inputPassword.addEventListener('focusout', passwordError);
inputPassword.addEventListener('input', onlyEngPassword);

inputPasswordCheck.addEventListener('focusout', passwordCheckError);