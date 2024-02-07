
import {dicideAddErrorClass, eyeIconClickEvent, checkAccessHistory,isEmptyInput } from './recycle.js';

const errorMessageEmail = document.querySelector('.error-message[data-about=email]');
const userInputPassword = document.querySelector('#password');
const errorMessgePassword = document.querySelector('.error-message[data-about=password]');
const errorMessageCheck = document.querySelector('.error-message[data-about=password-check]');

const inputs = document.querySelectorAll('input');




//이메일 체크
function checkEmailInput(event) {

    const userInput = event.target.value;
    let message = '';
    if(isEmptyInput(userInput)) message = '이메일을 입력해주세요.'
    else if(/@/g.test(userInput) === false) message = '올바른 이메일 주소가 아닙니다.'
    else if(userInput === 'test@codeit.com') message = '이미 사용 중인 이메일 입니다'
    errorMessageEmail.textContent = message;
    dicideAddErrorClass(event.target, message);

}

//비밀번호 조합 체크
function checkPasswordPattern(event) {

    const userInput = event.target.value;
    let message = '';
    if(isEmptyInput(userInput)) message = '비밀번호를 입력해주세요.'
    else if(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(userInput) === false ) message = '비밀번호는 영문, 숫자 조합8자 이상 입력해 주세요.';
    errorMessgePassword.textContent = message;
    dicideAddErrorClass(event.target, message);


}

//비밀번호 같은지 체크
function samePasswordCheck(event) {
    const password = userInputPassword.value;

    const passwordCheckInput = event.target.value;
    let message = '';
    if(isEmptyInput(passwordCheckInput)) message = '비밀번호를 확인해주세요.'
    else if(password !== passwordCheckInput) message = '비밀번호가 일치하지 않습니다.'
    errorMessageCheck.textContent = message;
    dicideAddErrorClass(event.target, message);

}

//폼제출 이벤트 함수
function submitSignupFormEvent(e) {
    e.preventDefault();

    checkContainErrorClass();

}


function checkContainErrorClass(){
    const emailValue = inputs[0].value;
    if(inputs[1].classList.contains('error')) return;
    else if(inputs[2].classList.contains('error')) return;
    else  requestValidateEmail(emailValue); 
}


async function requestValidateEmail(email) {

    const userEmail = {
        email: email
    }
    try {
        const request = await fetch(
            'https://bootcamp-api.codeit.kr/api/check-email',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userEmail)
            }
        )
        if (request.status === 409) {
            alert('서버 요청 결과 중복된 이메일 입니다')
        } else if (request.status === 200) {
            alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다');
            window.location = './signin.html';
        } else {
            console.log('서버 응답이 옳바르지 않습니다')
        }
    } catch (err) {
        console.log('서버 요청 중 문제가 발생했습니다')
    }
}



checkAccessHistory();




document.querySelector('#email').addEventListener('focusout', checkEmailInput);
userInputPassword.addEventListener('focusout', checkPasswordPattern);
document.querySelector('#password-check').addEventListener('focusout', samePasswordCheck);
document.querySelector('#form-signup').addEventListener('submit', submitSignupFormEvent);


document.querySelectorAll('.show-password').forEach(v => v.addEventListener('click', eyeIconClickEvent));

