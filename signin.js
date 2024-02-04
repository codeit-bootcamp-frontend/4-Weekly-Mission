import { isValidEmail, alreadyLogin } from "./sign.js";
import { ErrorMessage } from "./constant.js";
import { signIn } from "./api.js";

const myInputEmail = document.querySelector('.input-email');
const myInputPassword = document.querySelector('.input-password');
const errorMessageId = document.getElementById('error-message-id');
const errorMessagePw = document.getElementById('error-message-pw');
const login = document.querySelector('.cta');
const toggleButtonPw = document.querySelector('.eye-button');
const eyeOn = document.getElementById('eye-on');
const eyeOff = document.getElementById('eye-off');
const addClassError = (errorClass, currentClass, errorMessage) => {
  errorClass.style.display = 'block';
  currentClass.classList.add('error');
  errorClass.textContent = errorMessage;
};
const removeClassError = (errorMessage, currentClass) => {
  errorMessage.style.display = 'none';
  currentClass.classList.remove('error');
};

document.addEventListener('DOMContentLoaded', alreadyLogin);



function toggleEyeImage() {
  if (myInputPassword.type === 'text') {
    myInputPassword.type = 'password';
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
  } else {
    myInputPassword.type = 'text';
    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';
  }
}

function passwordInputCheckSignIn() {
  if (myInputPassword.value === '') {
    addClassError(errorMessagePw, myInputPassword, ErrorMessage.NoInputPassword);
  } else {
    removeClassError(errorMessagePw, myInputPassword);
  }
}

function emailInputCheck() {
  if (myInputEmail.value === '') {
    addClassError(errorMessageId, myInputEmail, ErrorMessage.NoInputId);
  } else if (!isValidEmail(myInputEmail.value)) {
    addClassError(errorMessageId, myInputEmail, ErrorMessage.InvalidId);
  } else {
    removeClassError(errorMessageId, myInputEmail);
  }
}


myInputEmail.addEventListener('focusout', emailInputCheck);
myInputPassword.addEventListener('focusout', passwordInputCheckSignIn);

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
/*
document.querySelector('.sign-form').addEventListener('submit', function(event) {
  event.preventDefault();
  signIn()
});
*/

toggleButtonPw.addEventListener('click', toggleEyeImage);

export { 
  myInputEmail, 
  myInputPassword, 
  errorMessageId, 
  errorMessagePw,
  login, 
  toggleButtonPw,
  eyeOff, 
  eyeOn,
  addClassError,
  removeClassError,
  emailInputCheck,
  toggleEyeImage,
};