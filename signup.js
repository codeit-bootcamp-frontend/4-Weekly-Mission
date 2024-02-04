import * as signJs from "./sign.js";
import {
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
  toggleEyeImage,
} from './signin.js';

const getMyInputPassword = document.querySelector('.input-password-get');
const checkMyInputPassword = document.querySelector('.input-password-check');
const errorMessagePwCheck = document.getElementById('error-message-pw-check');
const checkError = (input) =>  !errorMessageId.classList.contains('error');
const toggleButtonPwCheck = document.querySelector('.eye-button-1');
const eyeOn1 = document.getElementById('eye-on-1');
const eyeOff1 = document.getElementById('eye-off-1');


document.addEventListener('DOMContentLoaded', function() {
  alreadyLogin();
});


 function alreadyLogin() {
  const accessToken = localStorage.getItem('access-token');
  if (accessToken) {
    window.location.href = '/folder';
  }
}


function passwordInputCheck() {
  if (myInputPassword.value === '') {
    addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.NoInputPassword);
  } else if (!signJs.isValidPassword(getMyInputPassword.value) || getMyInputPassword.value.length <= 8) {
    addClassError(errorMessagePw, getMyInputPassword, signJs.ErrorMessage.InvalidPassword);
  } else {
    removeClassError(errorMessagePw, myInputPassword);
  }
}

function checkPasswordInputCheck() {
  if (checkMyInputPassword.value === '') {
    addClassError(errorMessagePwCheck, checkMyInputPassword, signJs.ErrorMessage.NoInputPassword);
  } else {
    removeClassError(errorMessagePwCheck, checkMyInputPassword);
  }
}


/*
function emailInputCheck() {
  const answerEmail = 'test@codeit.com';
  if (myInputEmail.value === '') 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.NoInputId);
  else if (!signJs.isValidEmail(myInputEmail.value)) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.InvalidId);
  else if (myInputEmail.value === answerEmail) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.CantUseId);
  else 
    removeClassError(errorMessageId, myInputEmail);
}
*/

function emailInputValueCheck() {
  if (getMyInputPassword.value !== checkMyInputPassword.value) 
    addClassError(errorMessagePwCheck, checkMyInputPassword, signJs.ErrorMessage.UnmatchedPassword);
  /*
    else if (checkError(errorMessageId) && checkError(errorMessagePw) && checkError(errorMessagePwCheck) && myInputPassword.value !== '' && getMyInputPassword.value === checkMyInputPassword.value)
    registerAccount();
  */
  }

function toggleEyeImage1() {
   if (checkMyInputPassword.type === 'text') {
     checkMyInputPassword.type = 'password';
     eyeOn1.style.display = 'none';
     eyeOff1.style.display = 'block';
   } else {
     checkMyInputPassword.type = 'text';
     eyeOn1.style.display = 'block';
     eyeOff1.style.display = 'none';
   }
 }
/*
myInputEmail.addEventListener('focusout', emailInputCheck);
*/
myInputPassword.addEventListener('focusout', passwordInputCheck);
checkMyInputPassword.addEventListener('focusout', checkPasswordInputCheck);

login.addEventListener('click', emailInputValueCheck);


function apiCheckEmail() {
  const answerEmail = 'test@codeit.com';
  const data = {
    email: myInputEmail.value,
  };

  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status === 409) {
       addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.CantUseId);
    }
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });
}

function registerAccount() {
  const userInfo = {
    email: myInputEmail.value,
    password: myInputPassword.value
  }

  fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((responseData) => {
    console.log('서버 응답 데이터:', responseData);
    
    if (userInfo.email) {
      const accessToken = userInfo.accessToken;
      localStorage.setItem("access-token", accessToken);
      window.location.href = '/folder';
    }
    
  })
}

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
document.querySelector('.signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  apiCheckEmail();
  if (checkError(errorMessageId) && checkError(errorMessagePw) && checkError(errorMessagePwCheck) && myInputPassword.value !== '' && getMyInputPassword.value === checkMyInputPassword.value)
    registerAccount();
});

toggleButtonPw.addEventListener('click', toggleEyeImage);
toggleButtonPwCheck.addEventListener('click', toggleEyeImage1);




