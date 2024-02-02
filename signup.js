import {
    isValidEmail,
    showErrorMessage,
    hideErrorMessage,
    passwordToggle,

    toggleIcon,
    emailInput,
    passwordInput,
    emailError,
    passwordError,
} from './common.js';


const toggleIconRepeat = document.getElementById('eyeIconRepeat');
const passwordRepeatInput = document.getElementById('passwordRepeat');
const passwordRepeatError = document.getElementById('passwordRepeatError');
const signupButton = document.getElementById('signupButton');

function passwordRepeatToggle() {
    const type_ = (passwordRepeatInput.type === 'password' ? 'text' : 'password');
    passwordRepeatInput.type = type_;
    toggleIconRepeat.src = (type_ === 'password' ? 'img/eye-off.png' : 'img/eye-on.png');
}

function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        showErrorMessage(emailError, '이메일을 입력해 주세요.');
    } else if (emailValue === 'test@codeit.com') {
        showErrorMessage(emailError, '이미 사용 중인 이메일입니다.');
    } else if (!isValidEmail(emailValue)) {
        showErrorMessage(emailError, '올바른 이메일 주소가 아닙니다.');
    } else {
        hideErrorMessage(emailError);
    }
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === '' || !isValidPassword(passwordValue)) {
        showErrorMessage(passwordError, '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    } else {
        hideErrorMessage(passwordError);
    }
}

function checkRepeatPassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordRepeatValue = passwordRepeatInput.value.trim();

    if (passwordValue !== passwordRepeatValue) {
        showErrorMessage(passwordRepeatError, '비밀번호가 일치하지 않아요.');
    } else {
        hideErrorMessage(passwordRepeatError);
    }

}

function handleKeyPress(e) {
    if(e.key === 'Enter') {
        attemptJoin();
        e.preventDefault(); //엔터키 누를 시 form을 form의 action 속성으로 전송하는 기본 동작 방지
    }
}

function attemptJoin(e) {
    validateEmail();
    validatePassword();
    checkRepeatPassword();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const passwordRepeatValue = passwordRepeatInput.value.trim();

    if ((!emailError.textContent) && (!passwordError.textContent) && (!passwordRepeatError.textContent)) {
      // 에러 메시지가 없다면 유효한 회원가입! 성공 시 페이지 이동
      if (emailValue === 'test@codeit.com') {
        showErrorMessage(emailError, '이미 사용 중인 이메일입니다.');
      } else {
        console.log('회원가입 성공');
        e.preventDefault(); //submit 버튼 클릭 시 페이지가 새로고침되는 기본 동작 방지
        window.location.href = 'folder.html';
      }
    }
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
passwordRepeatInput.addEventListener('focusout', checkRepeatPassword);
toggleIcon.addEventListener('click', passwordToggle);
toggleIconRepeat.addEventListener('click', passwordRepeatToggle);
signupButton.addEventListener('click', attemptJoin);
window.addEventListener('keypress', handleKeyPress);