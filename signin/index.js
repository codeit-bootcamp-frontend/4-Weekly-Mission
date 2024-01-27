/*********************
        Account
*********************/

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const user = new User('test@codeit.com', 'codeit101')

/*********************
       Constant
*********************/

// 유효성 검사 기준 코드
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

/*********************
      UI Constant
*********************/

const signInForm = document.querySelector('.signin-form');

const inputEmail = document.querySelector('#signin-email');
const inputPassword = document.querySelector('#signin-password');

const errorMessageEmail = document.querySelector('.errorMessage-email');
const errorMessagePassword = document.querySelector('.errorMessage-password');

/*********************
       Function
*********************/

function isEmpty(text) { return text.length === 0 };

function isEmailValid(text) { return emailPattern.test(text) };
function isPasswordValid(text) { return passwordPattern.test(text) };

function verifyAccount(email, password) { 
  if ( email !== user.email ) {
    return false
  }

  if ( password !== user.password) {
    return false
  }

  return true;
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
};

function passwordError() {
  if (isEmpty(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호를 입력해 주세요.')
    inputPassword.classList.add('red-border')
  };
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
};

function togglePasswordVisibility( { target: eyeImg } ) {
  if (eyeImg.classList.contains('eye-open')) {
    eyeImg.classList.toggle('eye-open');
    eyeImg.classList.toggle('eye-closed'); 
    eyeImg.parentElement.firstElementChild.setAttribute('type', 'password');
    return;
  }

  if (eyeImg.classList.contains('eye-closed')) {
    eyeImg.classList.toggle('eye-open');
    eyeImg.classList.toggle('eye-closed'); 
    eyeImg.parentElement.firstElementChild.setAttribute('type', 'text');
    return;
  };
};

function login(e) {
  e.preventDefault();

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (!verifyAccount(inputEmail.value, inputPassword.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };

  return location.href = '../folder/index.html';
};

/*********************
      EventHandler
*********************/

signInForm.addEventListener('focusin', changePlaceholderFocusIn);
signInForm.addEventListener('focusout', changePlaceholderFocusOut);
signInForm.addEventListener('submit', login);
signInForm.addEventListener('focusin', deleteError);
signInForm.addEventListener('click', togglePasswordVisibility)

inputEmail.addEventListener('focusout', emailError);

inputPassword.addEventListener('focusout', passwordError);