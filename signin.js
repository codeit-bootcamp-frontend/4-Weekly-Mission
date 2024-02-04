import * as signJs from "./sign.js";


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


document.addEventListener('DOMContentLoaded', function() {
  alreadyLogin();
});



function emailInputCheck() {
  if (myInputEmail.value === '') {
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.NoInputId);
  } else if (!signJs.isValidEmail(myInputEmail.value)) {
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.InvalidId);
  } else {
    removeClassError(errorMessageId, myInputEmail);
  }
}

function passwordInputCheck() {
  if (myInputPassword.value === '') {
    addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.NoInputPassword);
  } else {
    removeClassError(errorMessagePw, myInputPassword);
  }
}


function emailInputValueCheck() {
  signIn(myInputEmail.value, myInputPassword.value)
  const answerEmail = 'test@codeit.com';
  const answerPassword = 'codeit101';
  if (myInputEmail.value === answerEmail && myInputPassword.value === answerPassword) {
    window.location.href = '/folder';
  } else {
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.WrongId);
    addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.WrongPassword);
  }
}


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

myInputEmail.addEventListener('focusout', emailInputCheck);
myInputPassword.addEventListener('focusout', passwordInputCheck);
/* login.addEventListener('click', emailInputValueCheck);*/

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
document.querySelector('.sign-form').addEventListener('submit', function(event) {
  event.preventDefault();
  signIn()
});

toggleButtonPw.addEventListener('click', toggleEyeImage);



function signIn() {
  const answerEmail = 'test@codeit.com';
  const answerPassword = 'sprint101';

  const data = {
    email: answerEmail,
    password: answerPassword
  };

  const inputData = {
    email: myInputEmail.value,
    password: myInputPassword.value
  };

  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((responseData) => {
    console.log('서버 응답 데이터:', responseData);

    // 서버 응답 데이터와 입력된 데이터 비교
    if (data.email === inputData.email && data.password === inputData.password) {
      localStorage.setItem("access-token", responseData.data.accessToken);
      window.location.href = '/folder';
    } else {
      addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.WrongId);
      addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.WrongPassword);
    }
  })
  .catch(error => {
    console.error('요청 실패:', error);
  });
}

function alreadyLogin() {
  const accessToken = localStorage.getItem('access-token');
  if (accessToken) {
    window.location.href = '/folder';
  }
}




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
  passwordInputCheck,
  toggleEyeImage,
};