/*********************
        Account
*********************/

class creatUser {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const USER_1 = new creatUser('test@codeit.com', 'codeit101')

/*********************
      UI Constant
*********************/

const SIGN_IN_FORM = document.querySelector('.signin-form');
const INPUT_EMAIL = document.querySelector('#signin-email');
const INPUT_PASSWORD = document.querySelector('#signin-password');
const ERROR_MESSAGE_EMAIL = document.querySelector('.errorMessage-email');
const ERROR_MESSAGE_PASSWORD = document.querySelector('.errorMessage-password');
const EYE_IMG = document.querySelector('.eye-img');

/*********************
       Function
*********************/

function isEmpty(text) { return text.length === 0 };

function isEmailValid(text) { return text.includes('@') };

function isAccountValid(email, password) {
  return (USER_1.email === email && USER_1.password === password);
};

function showErrorMessage(targetElement, errorMessage) {
  targetElement.classList.remove('hidden');
  targetElement.textContent = errorMessage;
};
function hideErorrMessage(targetElement) {
  targetElement.classList.add('hidden');
};

/*********************
    Event Function
*********************/

function changePlaceholderFocusIn(e) {
  e.target.setAttribute('placeholder', '내용 작성 중..');
};

function changePlaceholderFocusOut(e) {
  e.target.setAttribute('placeholder', '내용 입력');
};

function emailError() {
  if (isEmpty(INPUT_EMAIL.value)) {
    showErrorMessage(ERROR_MESSAGE_EMAIL, '이메일을 입력해 주세요.');
    INPUT_EMAIL.classList.add('red-border')
  } else if (!isEmailValid(INPUT_EMAIL.value)) {
    showErrorMessage(ERROR_MESSAGE_EMAIL, '올바른 이메일 주소가 아닙니다.')
    INPUT_EMAIL.classList.add('red-border')
  }
};

function passwordError() {
  if (isEmpty(INPUT_PASSWORD.value)) {
    showErrorMessage(ERROR_MESSAGE_PASSWORD, '비밀번호를 입력해 주세요.')
    INPUT_PASSWORD.classList.add('red-border')
  };
};

function deleteError(e) {
  if (e.target === INPUT_EMAIL) {
    hideErorrMessage(ERROR_MESSAGE_EMAIL);
    INPUT_EMAIL.classList.remove('red-border');
  };
  if (e.target === INPUT_PASSWORD) {
    hideErorrMessage(ERROR_MESSAGE_PASSWORD);
    INPUT_PASSWORD.classList.remove('red-border');
  };
};

function passwordToggle() {
  if (EYE_IMG.classList.contains('eye-open')) {
    EYE_IMG.classList.toggle('eye-open');
    EYE_IMG.classList.toggle('eye-closed'); 
    INPUT_PASSWORD.setAttribute('type', 'password');
  } else {
    EYE_IMG.classList.toggle('eye-open');
    EYE_IMG.classList.toggle('eye-closed'); 
    INPUT_PASSWORD.setAttribute('type', 'text');
  };
};

function login(e) {
  e.preventDefault();

  if (!isAccountValid(INPUT_EMAIL.value, INPUT_PASSWORD.value)) {
    showErrorMessage(ERROR_MESSAGE_EMAIL, '이메일을 확인해 주세요.');
    showErrorMessage(ERROR_MESSAGE_PASSWORD, '비밀번호를 확인해 주세요.');
    return alert('계정을 확인해주세요.')
  };

  return location.href = '../folder/index.html';
};

/*********************
      EventHandler
*********************/

SIGN_IN_FORM.addEventListener('focusin', changePlaceholderFocusIn);
SIGN_IN_FORM.addEventListener('focusout', changePlaceholderFocusOut);
SIGN_IN_FORM.addEventListener('submit', login);
SIGN_IN_FORM.addEventListener('focusin', deleteError);

INPUT_EMAIL.addEventListener('focusout', emailError);

INPUT_PASSWORD.addEventListener('focusout', passwordError);

EYE_IMG.addEventListener('click', passwordToggle);