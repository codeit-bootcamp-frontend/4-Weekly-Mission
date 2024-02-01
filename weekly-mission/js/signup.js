import { returnInputValue, addErrorClass, eyeIconClickEvent } from './recycle.js';
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');
const userInputPassword = document.querySelector('#password');
const errorMessgePassword = document.querySelector('.error-message[data-about=password]');
const errorMessageCheck = document.querySelector('.error-message[data-about=password-check]');
const errorMessageBoxes = document.querySelectorAll('.error-message');



//이메일 체크
function checkEmailInput(event) {
    const userInput = returnInputValue(event);
    let message = userInput === '' 
                    ? '이메일을 입력해주세요.' 
                    : /@/g.test(userInput) === false 
                        ? '올바른 이메일 주소가 아닙니다.' 
                        : userInput === 'test@codeit.com' 
                            ? '이미 사용 중인 이메일 입니다.' 
                            : '';
    errorMessageEmail.textContent = message;
    addErrorClass(event.target, message);
    return;
}

//비밀번호 조합 체크
function checkPasswordPattern(event) {
    const userInput = returnInputValue(event);
    let message =   /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(userInput) === false ? '비밀번호는 영문, 숫자 조합8자 이상 입력해 주세요.' : '';
    errorMessgePassword.textContent = message;
    addErrorClass(event.target, message);
    return;
}

//비밀번호 같은지 체크
function samePasswordCheck(event) {
    const password = userInputPassword.value;
    const passwordCheckInput = returnInputValue(event);
    let message = password === passwordCheckInput ? '' : '비밀번호가 일치하지 않아요.';
    errorMessageCheck.textContent = message;
    addErrorClass(event.target, message);
    return;
}

//폼제출 이벤트 함수
function submitSignupFormEvent(e) {
    e.preventDefault();
    checkEmptyInput();

}

//폼제출시 input태그가 비어있으면 알림 함수
function checkEmptyInput() {
    const inputes = document.querySelectorAll('input');
    if (inputes[0].value.trim() === '') return alert(`${inputes[0].dataset['value']}을 입력해주세요.`);
    else if (inputes[1].value.trim() === '') return alert(`${inputes[1].dataset['value']}를 입력해주세요.`);
    else if (inputes[2].value.trim() === '') return alert(`${inputes[2].dataset['value']}을 해주세요.`);
    else {
        let check = '';
        errorMessageBoxes.forEach(v => check += v.textContent);
        check === '' ? window.location = '/folder' : repeatAnimation();
    }
}

//에러메세지 강조 함수
function repeatAnimation() {
    errorMessageBoxes
        .forEach(v => {
            if (v.textContent !== '') {
                v.classList.add('active');
                setTimeout(() => {
                    v.classList.remove('active')
                }, 550)
            }
        })
}

(async function isDuplicateEmailCheck(){
    const email = {
        email : 'test@codeit.com'
    }
   
    const request = await fetch(
            'https://bootcamp-api.codeit.kr/api/check-email',
            {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(email)
            }
        ) 
    
   
})()









document.querySelector('#email').addEventListener('focusout', checkEmailInput);
userInputPassword.addEventListener('focusout', checkPasswordPattern);
document.querySelector('#password-check').addEventListener('focusout', samePasswordCheck);
document.querySelector('#form-signup').addEventListener('submit', submitSignupFormEvent);
document.querySelectorAll('.show-password > img').forEach(v => v.addEventListener('click', eyeIconClickEvent));
