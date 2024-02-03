
import { dicideAddErrorClass, eyeIconClickEvent, checkAccessHistory, isEmptyInput } from './recycle.js';
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');
const errorMessagePassword = document.querySelector('.error-message[data-about=password]');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');

//이메일 형식 체크
function checkEmailInput(event) {
    const userInput = event.target.value;
    let message = '';
    if (isEmptyInput(userInput)) message = '이메일을 입력해주세요.'
    else if (/@/g.test(userInput) === false) message = '올바른 이메일 형식이 아닙니다'
    errorMessageEmail.textContent = message;
    dicideAddErrorClass(event.target, message);

}

function checkPasswordInput(event) {
    const userInput = event.target.value;
    let message = '';
    if (isEmptyInput(userInput)) message = '비밀번호를 입력해주세요.'
    errorMessagePassword.textContent = message;
    dicideAddErrorClass(event.target, message);





//폼 제출 이벤트
function submitFormEvent(e) {
    e.preventDefault();

    if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
        window.location = '/folder';
    } else {
        handleRequestLogin(emailInput.value, passwordInput.value);
    }

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

        if (requestResult.status === 200) {
            const accessData = await requestResult.json();
            const accessToken = accessData.data.accessToken;
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
            window.location = '/folder.html'
        } else {
            console.log(`서버의 응답이 옳바르지 않습니다. 오류코드 : ${requestResult.status}`)
        }
    } catch (err) {
        console.log(`서버 요청 중 문제가 발생했습니다.`)
    }
}

//로컬스토리지에 accessToken값이 있는지확인
checkAccessHistory();



emailInput.addEventListener('focusout', checkEmailInput);
passwordInput.addEventListener('focusout', checkPasswordInput)
document.querySelector('#form-signin').addEventListener('submit', submitFormEvent);

document.querySelector('.show-password').addEventListener('click', eyeIconClickEvent);



