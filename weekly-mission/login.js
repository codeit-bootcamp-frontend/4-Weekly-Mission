const emailInput = document.querySelector('#email');
const errorMessageEmail = document.querySelector('#about-email');
const errorMessagePassword = document.querySelector('#about-password');
const form = document.querySelector('#form');
const passwordInput = document.querySelector('#password');
const eyeIconImg = document.querySelector('.show-password > img');

//이메일 형식 체크
function checkEmailInput(){
    if(emailInput.value === ''){
        errorMessageEmail.textContent = '이메일을 입력해주세요!'
        emailInput.classList.add('error');
    }else if(/@/g.test(emailInput.value) === false){
        errorMessageEmail.textContent = '올바른 이메일형식이 아닙니다'
        emailInput.classList.add('error');
    }else{
        errorMessageEmail.textContent = '';
        emailInput.classList.remove('error');
    }
}

//비밀번호 표시 아이콘 이벤트
function eyeIconClickEvent(){
    eyeIconImg.classList.toggle('hidden');
    if(eyeIconImg.classList.contains('hidden')){
         eyeIconImg.src = './img/eye-off.svg';
         passwordInput.type = 'password';
    }else{
         eyeIconImg.src = './img/eye-on.svg';
         passwordInput.type = 'text';
    }
}

//폼 제출 이벤트
function submitFormEvent(e){
    e.preventDefault();
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
        window.location = '/folder'
    }else{
        errorMessageEmail.textContent = '이메일을 확인해주세요.';
        errorMessagePassword.textContent = '비밀번호를 확인해주세요.'
        emailInput.classList.add('error');
        passwordInput.classList.add('error');

    } 
}

email.addEventListener('focusout', checkEmailInput);

form.addEventListener('submit',submitFormEvent );

eyeIconImg.addEventListener('click',eyeIconClickEvent);

