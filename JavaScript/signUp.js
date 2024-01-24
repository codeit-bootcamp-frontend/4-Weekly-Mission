import {inputFocus, emailBlur, passwordBlur} from './input.js'
import {registeredAccounts} from './accountData.js'
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화
passToggleReset();

const signupEmailInput = document.querySelector('#signupEmailInput')
const signupPasswordInput = document.querySelector('#signupPasswordInput')
const signupPasswordCheckInput = document.querySelector('#signupPasswordCheckInput')
const confirmBtn = document.querySelector('#confirmBtn');

// 기본 이벤트 등록

signupEmailInput.addEventListener('focus' , inputFocus)
signupEmailInput.addEventListener('blur' , emailBlur)

signupPasswordInput.addEventListener('focus' , inputFocus)
signupPasswordInput.addEventListener('blur' , passwordBlur)

signupPasswordCheckInput.addEventListener('focus' , inputFocus)
signupPasswordCheckInput.addEventListener('blur' , passwordBlur)

// 기본 이벤트 등록 끝


// 회원가입 함수
const submitSignupData = function () {
   
}

confirmBtn.addEventListener('click' , submitSignUpData)