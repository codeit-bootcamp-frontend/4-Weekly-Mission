import { returnInputValue, addErrorClass, eyeIconClickEvent } from './recycle.js';
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');


//이메일 형식 체크
function checkEmailInput(event) {
    const userInput = returnInputValue(event);
    let message = userInput === ''
        ? '이메일을 입력해주세요.'
        : /@/g.test(userInput) === false
            ? '올바른 이메일 형식이 아닙니다.'
            : '';
    errorMessageEmail.textContent = message;
    addErrorClass(event.target, message);

}



//폼 제출 이벤트
function submitFormEvent(e) {
    e.preventDefault();
    const passwordInput = document.querySelector('#password');
    const emailInput = document.querySelector('#email');
    if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
        window.location = '/folder';
    } else {
        alert('이메일, 비밀번호를 확인해주세요.');
    }
    handleRequestLogin(emailInput.value, passwordInput.value);
}


// url요청 함수  
async function handleRequestLogin(email, password) {
    const userData = {
        email: email,
        password: password
    }
    try {
        const requestResult = await fetch(
            'https://bootcamp-api.codeit.kr/api/sign-in',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            }
        )
        const request = await requestResult.json();
        const accessToken = request.data.accessToken;
        if (requestResult.status === 200) {
            localStorage.setItem('signinAccessToken', JSON.stringify(accessToken));
            window.location = '/folder.html'
        } else {
            console.log(`서버의 응답이 옳바르지 않습니다. 오류코드 : ${requestResult.status}`)
        }
    } catch (err) {
        console.log(`서버 요청 중 문제가 발생했습니다.`)
    }
}

//로컬스토리지에 signinAccessToken값이 있는지확인
(function checkAccessHistory() {
    const token = localStorage.getItem('signinAccessToken');
    if (token !== null) {
        window.location = '/folder.html';
    }
})()



document.querySelector('#email').addEventListener('focusout', checkEmailInput);

document.querySelector('#form-signin').addEventListener('submit', submitFormEvent);

document.querySelector('.show-password > img').addEventListener('click', eyeIconClickEvent);


