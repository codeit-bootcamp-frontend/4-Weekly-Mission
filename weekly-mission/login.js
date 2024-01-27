const emailInput = document.querySelector('#email');
const errorMessageEmail = document.querySelector('.error-message[data-about=email]');
const passwordInput = document.querySelector('#password');
const eyeIconImg = document.querySelector('.show-password > img');
const signinForm = document.querySelector('#form-signin');

//이메일 형식 체크
function checkEmailInput(){
    if(emailInput.value === ''){
        errorMessageEmail.textContent = '이메일을 입력해주세요.'
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

//폼 제출 이벤트
function submitFormEvent(e){
    e.preventDefault();
    console.log(2)
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
        window.location = '/folder'
    }else{
        alert('이메일, 비밀번호를 확인해주세요.');
    } 
}

emailInput.addEventListener('focusout', checkEmailInput);

signinForm.addEventListener('submit',submitFormEvent );

eyeIconImg.addEventListener('click',eyeIconClickEvent );


