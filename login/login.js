import * as input from '../commonChange_input.js';

//로컬 스토리지에 accessToken이 있는 경우 folder로 이동 
window.onload = function(){
  if(localStorage.getItem('LoginAccessToken')) {
    window.location.href = "/folder";
  }
};

//이메일 part
const loginEmailInput = document.querySelector('#login__email-form');
const loginEmailError = document.querySelector('.login__email-form--error');

loginEmailInput.addEventListener('focusout', loginEmailFocusOut);
loginEmailInput.addEventListener('keyup', handleLoginButtonEnter);

//이메일 입력 확인
function loginEmailFocusOut(event) {
  input.emailHandleInputFocusOut(loginEmailInput, loginEmailError);
}


//비밀번호 part
const loginPwInput = document.querySelector('#login__password-form');
const loginPwError = document.querySelector('.login__password-form--error');
const loginPasswordIcon = document.querySelector('.password__toggle-icon'); //비밀번호 토글 아이콘

loginPwInput.addEventListener('focusout', loginpwFocusOut);
loginPwInput.addEventListener('keyup', handleLoginButtonEnter);
loginPasswordIcon.addEventListener('click', passwordToggleIcon);

//비밀번호 확인
function loginpwFocusOut(event) {
  input.passwordHandleFocusOut(loginPwInput, loginPwError);
}

//비밀번호 아이콘 및 타입 변경
function passwordToggleIcon(event) {
  input.togglePasswordType(loginPwInput, loginPasswordIcon);
}

//버튼 part
const loginButton = document.querySelector('.login__form--loginBt');

loginButton.addEventListener('click', handleLoginButtonClick);

//로그인 버튼 클릭 시
async function handleLoginButtonClick(event) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmailInput.value,
        password: loginPwInput.value
      }),
    });
    const response_json = await response.text();
    if (response.status == 200) {
      // localStorage.setItem('LoginAccessToken',accessToken);
      // localStorage.setItem('LoginRefreshToken',refreshToken);
      window.location.href = "/folder";
    }
    else {
      differentEmailPw();
    }
  } catch (e) {
    console.log(e);
  }
}

//이메일 비밀번호가 틀렸을 때
const differentEmailPw = () => {
  loginPwError.textContent = '비밀번호를 확인해 주세요.';
  loginPwError.style.display = 'block';
  loginPwInput.style.borderColor = '#FF5B56';
  loginEmailError.textContent = '이메일을 확인해 주세요.';
  loginEmailError.style.display = 'block';
  loginEmailInput.style.borderColor = '#FF5B56';
}

//input태그에서 엔터키 눌렀을 때
function handleLoginButtonEnter(event) {
  if (event.code === 'Enter') {
    handleLoginButtonClick();
  }
}