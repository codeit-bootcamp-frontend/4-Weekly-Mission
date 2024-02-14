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
const toggleIconRepeat = document.getElementById('eyeIconRepeat');
const passwordRepeatInput = document.getElementById('passwordRepeat');
const passwordRepeatError = document.getElementById('passwordRepeatError');
const signupButton = document.getElementById('signupButton');
const baseUrl = 'https://bootcamp-api.codeit.kr';

//눈 아이콘 토글 함수
function passwordToggle() {
    const inputType = (passwordInput.type === 'password' ? 'text' : 'password');
    passwordInput.type = inputType;
    toggleIcon.src = (inputType === 'password' ? 'img/eye-off.png' : 'img/eye-on.png');
}

function passwordRepeatToggle() {
    const inputType = (passwordRepeatInput.type === 'password' ? 'text' : 'password');
    passwordRepeatInput.type = inputType;
    toggleIconRepeat.src = (inputType === 'password' ? 'img/eye-off.png' : 'img/eye-on.png');
}

//이메일 중복 확인 함수
async function checkEmail(email) {
    try {
        const response = await fetch(`${baseUrl}/api/check-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}), //email을 js 객체로 만들고, 만든 js 객체를 외부로 내보내기 위해 json으로 변환(serialize)
    });
    
    if (!response.ok) {
        throw new Error(`An error occurred! HTTP Status: ${response.status}`);
    }
    const responseData = await response.json(); //json 형태의 응답이 deserialize되어 js 객체로 data에 저장됨
    return responseData.data.isUsableNickname;
  } catch (error) {
    console.error('이메일 중복 확인 실패 :', error);
    return false;
  }
}

//이메일 유효성 검사 함수 (+이메일 중복 확인 함수 호출)
async function validateEmail() {
    const emailValue = emailInput.value.trim();
    /*const testEmail = {
        email: 'test@codeit.com',
    };*/
    const isEmailUsable = await checkEmail(emailValue);

    if (emailValue === '') {
        showErrorMessage(emailError, ERROR_MESSAGE.EMPTY_EMAIL_INPUT);
    } else if(!isEmailUsable) {
        showErrorMessage(emailError, ERROR_MESSAGE.ALREADY_USED_EMAIL);
    /*} else if (emailValue === 'test@codeit.com') {
        showErrorMessage(emailError, ERROR_MESSAGE.ALREADY_USED_EMAIL);*/
    } else if (!isValidEmail(emailValue)) {
        showErrorMessage(emailError, ERROR_MESSAGE.INVALID_EMAIL);
    } else {
        hideErrorMessage(emailError);
    }
}

//비밀번호 유효성 검사 함수
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === '' || !isValidPassword(passwordValue)) {
        showErrorMessage(passwordError, ERROR_MESSAGE.INVALID_PASSWORD);
    } else {
        hideErrorMessage(passwordError);
    }
}

//비밀번호 확인 함수
function checkRepeatPassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordRepeatValue = passwordRepeatInput.value.trim();

    if (passwordValue !== passwordRepeatValue) {
        showErrorMessage(passwordRepeatError, ERROR_MESSAGE.UNMATCH_PASSWORD);
    } else {
        hideErrorMessage(passwordRepeatError);
    }

}

//엔터키 허용 함수
function handleKeyPress(e) {
    if(e.key === 'Enter') {
        attemptJoin();
        e.preventDefault(); //엔터키 누를 시 form을 form의 action 속성으로 전송하는 기본 동작 방지
    }
}

//회원가입 함수
async function attemptJoin(e) {
    const joinData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    e.preventDefault();
    validateEmail();
    validatePassword();
    checkRepeatPassword();

    try {
        const response = await fetch(`${baseUrl}/api/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(joinData), //email을 js 객체로 만들고, 만든 js 객체를 외부로 내보내기 위해 json으로 변환(serialize)
        });
        
        if (!response.ok) {
            throw new Error(`An error occurred! HTTP Status: ${response.status}`);
        }
        const responseData = await response.json(); //json 형태의 응답이 deserialize되어 js 객체로 data에 저장됨
        console.log('회원가입 성공', responseData);
        localStorage.setItem('accessToken', responseData.data.accessToken);
        window.location.href = 'folder.html';
    } catch(error) {
        console.error('회원가입 실패 :', error);
    }

    /*const noSignUpError = (!emailError.textContent) && (!passwordError.textContent) && (!passwordRepeatError.textContent);
    const emailValue = emailInput.value.trim();

    if (noSignUpError) {
      // 에러 메시지가 없다면 유효한 회원가입! 성공 시 페이지 이동
      if (emailValue === 'test@codeit.com') {
        showErrorMessage(emailError, ERROR_MESSAGE.ALREADY_USED_EMAIL);
      } else {
        console.log('회원가입 성공');
        //e.preventDefault(); //submit 버튼 클릭 시 페이지가 새로고침되는 기본 동작 방지
        window.location.href = 'folder.html';
      }
    }*/
}

//토큰 확인 함수
window.onload = function() {
    const accessToken = localStorage.getItem('accessToken');
  
    if(accessToken) {
      window.location.href = 'folder.html';
    }
  }

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
passwordRepeatInput.addEventListener('focusout', checkRepeatPassword);
toggleIcon.addEventListener('click', passwordToggle);
toggleIconRepeat.addEventListener('click', passwordRepeatToggle);
signupButton.addEventListener('click', attemptJoin);
window.addEventListener('keypress', handleKeyPress);