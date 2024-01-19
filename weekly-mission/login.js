const emailInput = document.querySelector('#email');
const errorMessageEmail = document.querySelector('#about-email');
const errorMessagePassword = document.querySelector('#about-password');
const form = document.querySelector('#form');
const passwordInput = document.querySelector('#password');
const eyeIconImg = document.querySelector('.show-password > img');


email.addEventListener('focusout', () => {
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
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
        window.location = '/folder'
    }else{
        errorMessageEmail.textContent = '이메일을 확인해주세요.';
        errorMessagePassword.textContent = '비밀번호를 확인해주세요.'
        emailInput.classList.add('error');
        passwordInput.classList.add('error');

    } 
});

eyeIconImg.addEventListener('click' , () => {
    eyeIconImg.classList.toggle('hidden');
   if(eyeIconImg.classList.contains('hidden')){
        eyeIconImg.src = './img/eye-off.svg';
        passwordInput.type = 'password';
   }else{
        eyeIconImg.src = './img/eye-on.svg';
        passwordInput.type = 'text';
   }
})