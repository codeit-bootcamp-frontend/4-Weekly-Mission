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
    let message = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(userInput) === false ? '비밀번호는 영문, 숫자 조합8자 이상 입력해 주세요.' : '';
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
    const inputs = document.querySelectorAll('input');
    const emailValue = inputs[0].value;
    if (inputs[0].value.trim() === '') return alert(`${inputs[0].dataset['value']}을 입력해주세요.`);
    else if (inputs[1].value.trim() === '') return alert(`${inputs[1].dataset['value']}를 입력해주세요.`);
    else if (inputs[2].value.trim() === '') return alert(`${inputs[2].dataset['value']}을 해주세요.`);
    else {
        let check = '';
        errorMessageBoxes.forEach(v => check += v.textContent);
        check === '' ? isRequestCheckEmail(emailValue) : repeatAnimation();
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


async function isRequestCheckEmail(email) {

    const email = {
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
                body: JSON.stringify(email)
            }
        )
        if (request.status === 409) {
            console.log('중복된 이메일 입니다')
        } else if (request.status === 200) {
            const result = await request.json();
            const accessToken = result.data.accessToken;
            localStorage.setItem('signupAccessToken', JSON.stringify(accessToken));
            window.location = '/folder.html';
        } else {
            console.log('서버 응답이 옳바르지 않습니다')
        }
    }catch(err){
        console.log('서버 요청 중 문제가 발생했습니다')
    }
}

(function checkAccessHistory() {
    const token = localStorage.getItem('signupAccessToken');
    if (token !== null) {
        window.location = '/folder.html';
    }
})()




document.querySelector('#email').addEventListener('focusout', checkEmailInput);
userInputPassword.addEventListener('focusout', checkPasswordPattern);
document.querySelector('#password-check').addEventListener('focusout', samePasswordCheck);
document.querySelector('#form-signup').addEventListener('submit', submitSignupFormEvent);
document.querySelectorAll('.show-password > img').forEach(v => v.addEventListener('click', eyeIconClickEvent));
