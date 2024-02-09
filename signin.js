import {
  ERROR_MESSAGE,
  isValidEmail,
  showErrorMessage,
  hideErrorMessage,
} from './common.js';

const toggleIcon = document.getElementById('eyeIcon');
const emailInput = document.getElementById('userEmail');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginButton = document.getElementById('signinButton');
const baseUrl = 'https://bootcamp-api.codeit.kr';

//눈 아이콘 토글 함수
function passwordToggle() {
  const inputType = (passwordInput.type === 'password' ? 'text' : 'password');
  passwordInput.type = inputType;
  toggleIcon.src = (inputType === 'password' ? 'img/eye-off.png' : 'img/eye-on.png');
}

//이메일 유효성 검사 함수
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showErrorMessage(emailError, ERROR_MESSAGE.EMPTY_EMAIL_INPUT);
  } else if (!isValidEmail(emailValue)) {
    showErrorMessage(emailError, ERROR_MESSAGE.INVALID_EMAIL);
  } else {
    hideErrorMessage(emailError);
  }
}

//비밀번호 유효성 검사 함수
function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showErrorMessage(passwordError, ERROR_MESSAGE.EMPTY_PASSWORD_INPUT);
  } else {
    hideErrorMessage(passwordError);
  }
}

//엔터키 허용 함수
function handleKeyPress(e) {
  if(e.key === 'Enter') {
      attemptLogin();
      //e.preventDefault(); //엔터키 누를 시 form을 form의 action 속성으로 전송하는 기본 동작 방지
  }
}

//로그인 함수
async function attemptLogin(e) {
  e.preventDefault();
  validateEmail();
  validatePassword();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const testUser = {
    email : 'test@codeit.com',
    password : 'sprint101',
  };

  try {
    const response = await fetch(`${baseUrl}/api/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testUser), //js 객체를 외부로 내보내기 위해 json으로 변환(serialize)
  });
  
  if (!response.ok) {
    throw new Error(`An error occurred! HTTP Status: ${response.status}`);
  }
  const responseData = await response.json(); //json 형태의 응답이 deserialize되어 js 객체로 data에 저장됨
  console.log('로그인 성공!', responseData);
  window.localStorage.setItem('accessToken', responseData.data.accessToken);
  window.location.href = 'folder.html';
  } catch (error) {
    console.error('로그인 실패 :', error);
  }
}
 /* if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    // 로그인 성공 시 페이지 이동
    console.log('로그인 성공');
    //e.preventDefault(); //submit 버튼 클릭 시 페이지가 새로고침되는 기본 동작 방지
    window.location.href = 'folder.html';
  } else {
    if (emailValue !== 'test@codeit.com') {
      showErrorMessage(emailError, ERROR_MESSAGE.CHECK_EMAIL);
    }
    if (passwordValue !== 'codeit101') {
      showErrorMessage(passwordError, ERROR_MESSAGE.CHECK_PASSWORD);
    }
  }*/

//토큰 확인 함수
window.onload = function() {
  const accessToken = localStorage.getItem('accessToken');

  if(accessToken) {
    window.location.href = 'folder.html';
  }
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
toggleIcon.addEventListener('click', passwordToggle);
loginButton.addEventListener('click', attemptLogin);
window.addEventListener('keypress', handleKeyPress);
