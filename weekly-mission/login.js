import { returnInputValue, addErrorClass, eyeIconClickEvent } from './recycle.js'
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');


//이메일 형식 체크
function checkEmailInput(event) {
    const userInput = returnInputValue(event);
    let message = userInput === '' ? '이메일을 입력해주세요.' : /@/g.test(emailInput.value) === false ? '올바른 이메일 형식이 아닙니다.' : '';
    errorMessageEmail.textContent = message;
    addErrorClass(event.target, message);
}



//폼 제출 이벤트
function submitFormEvent(e) {
    e.preventDefault();
    const passwordInput = document.querySelector('#password');
    const emailInput = document.querySelector('#email');
    if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
        window.location = '/folder'
    } else {
        alert('이메일, 비밀번호를 확인해주세요.');
    }
}

document.querySelector('#email').addEventListener('focusout', checkEmailInput);

document.querySelector('#form-signin').addEventListener('submit', submitFormEvent);

document.querySelector('.show-password > img').addEventListener('click', eyeIconClickEvent);


