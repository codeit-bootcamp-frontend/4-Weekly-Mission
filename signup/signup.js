import{
    emailPattern,
    emailBox, passwordBox, 
    emailErrorMessage, passwordErrorMessage,
    emailValueCheck, passwordImageToggle
} from '../signin/signin.js';

// 비밀번호 형식
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// //이메일 형식
// const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// //이메일 input
// const emailBox = document.querySelector('#email-box');

// //비밀번호 input
// const passwordBox = document.querySelector('#password-box');

const passwordCheckBox = document.querySelector('#password-check-box');

// //이메일 에러메세지
// const emailErrorMessage = document.querySelector('.email-message');

// //비밀번호 에러메세지
// const passwordErrorMessage = document.querySelector('.password-message');

//비밀번호 확인 에러메세지
const passwordCheckErrorMessage = document.querySelector('.password-check-message');

//회원가입 폼
const signupForm = document.querySelector('.signup-form');

//회원가입 버튼


//이메일 에러 메세지
// function emailValueCheck(){
//     // const emailValue = event.target.value; 
//     const emailValue = emailBox.value;

//     //이메일이 입력되지 않은 경우
//     if(emailValue === ''){
//         emailBox.classList.add('error');
//         emailErrorMessage.textContent = '이메일을 입력해 주세요.';
//         emailErrorMessage.classList.add('error-message');
//     //이메일 형식에 맞지 않는 경우
//     }else if(!emailPattern.test(emailValue)){
//         emailBox.classList.add('error');
//         emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
//         emailErrorMessage.classList.add('error-message');
//     }else{
//         emailBox.classList.remove('error');
//         emailErrorMessage.textContent = '';
//     }
// }
// emailBox.addEventListener('focusout', emailValueCheck);

function emailTakenCheck(){
    const emailValue = emailBox.value;
    console.log('in');
    if(emailValue === 'test@codeit.com'){
        console.log('error');
        emailBox.classList.add('error');
        emailErrorMessage.textContent = '이미 존재하는 이메일입니다.';
        emailErrorMessage.classList.add('error-message');
    }
}

//존재하는 이메일인지 확인하기
emailBox.addEventListener('focusout', emailTakenCheck);

//비밀번호 영문, 숫자 조합 8자 이상인지 확인하기
function passwordPatternCheck(){
    if(!passwordPattern.test(passwordBox.value)){
        passwordBox.classList.add('error');
        passwordErrorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        passwordErrorMessage.classList.add('error-message');
    }else{
        passwordBox.classList.remove('error');
        passwordErrorMessage.textContent = '';
        passwordErrorMessage.classList.remove('error-message');
    }
}

passwordBox.addEventListener('focusout', passwordPatternCheck);

//비밀번호와 비밀번호 확인 값 확인하기
function passwordDifferentCheck(){

    if(passwordBox.value !== passwordCheckBox.value){
        passwordCheckBox.classList.add('error');
        passwordCheckErrorMessage.textContent = '비밀번호가 일치하지 않아요.';
        passwordCheckErrorMessage.classList.add('error-message');
    }else{
        passwordCheckBox.classList.remove('error');
        passwordCheckErrorMessage.textContent = '';
        passwordCheckErrorMessage.classList.remove('error-message');
    }
}

passwordCheckBox.addEventListener('focusout', passwordDifferentCheck);

//비밀번호 눈 모양 이미지 토글 
// function passwordImageToggle(event){
//     const offsetWidth = event.currentTarget.offsetWidth;
//     const offsetHeight = event.currentTarget.offsetHeight;
//     const offsetX = event.offsetX;
//     const offsetY = event.currentTarget.offsetY;

//     const clickWidth = (offsetX > offsetWidth-32) && (offsetX < offsetWidth-16);

//     if(clickWidth){
//         passwordBox.classList.contains('eye-off') ? passwordBox.classList.replace('eye-off', 'eye-on') : passwordBox.classList.replace('eye-on', 'eye-off'); 
//         passwordBox.classList.contains('eye-off') ? passwordBox.setAttribute('type', 'password') : passwordBox.setAttribute('type', 'text'); 

//     }
// }

// passwordBox.addEventListener('click', passwordImageToggle);


passwordCheckBox.addEventListener('click', passwordImageToggle);

//회원가입 시도
function signupFormSubmit(event){
    event.preventDefault();

    if(emailBox.value === 'test@codeit.com' || emailBox.value === ''){
        console.log(111);
        emailBox.classList.add('error');
        emailErrorMessage.textContent = '이메일을 확인해 주세요';
        emailErrorMessage.classList.add('error-message');
        return false;

    }else if (passwordBox.value === '' || passwordBox.value !== passwordCheckBox.value){
        console.log(222);
        passwordBox.classList.add('error');
        passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.';
        passwordErrorMessage.classList.add('error-message');
        return false;

    }

    return true;
}

signupForm.addEventListener('submit', signupFormSubmit);