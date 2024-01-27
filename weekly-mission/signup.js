const userInputEmail = document.querySelector('#email');
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');
const userInputPassword = document.querySelector('#password');
const errorMessgePassword = document.querySelector('.error-message[data-about=password]');
const userInputCheck = document.querySelector('#password-check');
const errorMessageCheck = document.querySelector('.error-message[data-about=password-check]');
const signupForm = document.querySelector('#form-signup');
const checkInput = document.querySelector('#password-check');
const errorMessageBoxes = document.querySelectorAll('.error-message');
const eyeIconImges = document.querySelectorAll('.show-password > img')

//이메일 체그
function checkEmailInput(){
    const userInput = userInputEmail.value;
    let message = userInput === '' ? '이메일을 입력해주세요.' : /@/g.test(userInput) === false ? '올바른 이메일 주소가 아닙니다.' : userInput === 'test@codeit.com' ? '이미 사용 중인 이메일 입니다.' : '';
    errorMessageEmail.textContent = message;
    message !== '' ?  userInputEmail.classList.add('error') : userInputEmail.classList.remove('error');
    
}

//비밀번호 조합 체크
function checkPasswordLength(){
    const userInput = userInputPassword.value;
    let message = userInput.length < 8 || /[\d][a-z]/ig.test(userInput) === false? '비밀번호는 영문, 숫자 조합8자 이상 입력해 주세요.' : '';
    errorMessgePassword.textContent = message;
    if(message){
        userInputPassword.classList.add('error');
    }else{
        userInputPassword.classList.remove('error');
    }
   
}

//비밀번호 같은지 체크
function samePasswordCheck(){
    const password =  userInputPassword.value;
    const passwordCheckInput = checkInput.value;
    let message = password === passwordCheckInput ? '' : '비밀번호가 일치하지 않아요.'
    errorMessageCheck.textContent = message;
    message ? checkInput.classList.add('error') : checkInput.classList.remove('error');

}

//비밀번호 표시 함수
function eyeIconClickEvent(e){
    if(e.target.tagName === 'IMG'){
        e.target.classList.toggle('hidden')
        const input = e.target.parentNode.previousElementSibling;
        const imgSrc = e.target.classList.contains('hidden') ? './img/eye-off.svg' : './img/eye-on.svg';
        e.target.src = imgSrc;
        e.target.classList.contains('hidden') ? input.type = 'password' : input.type = 'text';
        return;
    }
}

//폼제출 이벤트 함수
function submitSignupFormEvent(e){
    e.preventDefault();
    checkEmptyInput();

}

//폼제출시 input태그가 비어있으면 알림 함수
function checkEmptyInput(){
    const inputes = document.querySelectorAll('input');
    if(inputes[0].value === '') alert(`${inputes[0].dataset['value']}을 입력해주세요.`)
    else if (inputes[1].value === '')alert(`${inputes[1].dataset['value']}를 입력해주세요.`)
    else{
        let check = '';
        errorMessageBoxes.forEach(v=>check += v.textContent);
        check === '' ? window.location = '/folder' : repeatAnimation();
    }
}

//에러메세지 강조 함수
function repeatAnimation(){
    errorMessageBoxes.forEach(v=>{
        if(v.textContent !== ''){
            v.classList.add('active');
            setTimeout(()=>{
                v.classList.remove('active')
            },550)
        }
    })
}



userInputEmail.addEventListener('focusout', checkEmailInput);
userInputPassword.addEventListener('focusout', checkPasswordLength);
checkInput.addEventListener('focusout', samePasswordCheck);
signupForm.addEventListener('submit', submitSignupFormEvent);
eyeIconImges.forEach(v=> v.addEventListener('click',eyeIconClickEvent ));