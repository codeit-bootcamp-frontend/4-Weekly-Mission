//이메일 형식
const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

//이메일 input
const emailBox = document.querySelector('#email-box');

//비밀번호 input
const passwordBox = document.querySelector('#password-box');

//이메일 에러메세지
const emailErrorMessage = document.querySelector('.email-message');

//비밀번호 에러메세지
const passwordErrorMessage = document.querySelector('.password-message');

//로그인 폼
const signinForm = document.querySelector('.signin-form');

//이메일 에러 메세지
function emailValueCheck(){
    // const emailValue = event.target.value; 
    const emailValue = emailBox.value;

    //이메일이 입력되지 않은 경우
    if(emailValue === ''){
        emailBox.classList.add('error');
        emailErrorMessage.textContent = '이메일을 입력해 주세요.';
        emailErrorMessage.classList.add('error-message');
    //이메일 형식에 맞지 않는 경우
    }else if(!emailPattern.test(emailValue)){
        emailBox.classList.add('error');
        emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
        emailErrorMessage.classList.add('error-message');
    }else{
        emailBox.classList.remove('error');
        emailErrorMessage.textContent = '';
    }
}
emailBox.addEventListener('focusout', emailValueCheck);

//비밀번호 에러 메세지
function passwordCheck(){
    // const passwordValue = event.target.value;
    const passwordValue = passwordBox.value;

    //비밀번호가 입력되지 않은 경우
    if(passwordValue === ''){
        passwordBox.classList.add('error');
        passwordErrorMessage.textContent = '비밀번호를 입력해 주세요.';
        passwordErrorMessage.classList.add('error-message');
    }else{
        passwordBox.classList.remove('error');
        passwordErrorMessage.textContent = '';
    }
}
passwordBox.addEventListener('focusout', passwordCheck);

//로그인 시도
function signinFormSubmit(){
    if(emailBox.value === 'test@codeit.com' && passwordBox.value === 'codeit101'){
        return true;
    }else{
        emailBox.classList.add('error');
        emailErrorMessage.textContent = '이메일을 확인해 주세요';
        emailErrorMessage.classList.add('error-message');

        passwordBox.classList.add('error');
        passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.';
        passwordErrorMessage.classList.add('error-message');

        return false;
    }
}

//비밀번호 눈 모양 이미지 토글 
function passwordImageToggle(event){
    const offsetWidth = event.currentTarget.offsetWidth;
    const offsetHeight = event.currentTarget.offsetHeight;
    const offsetX = event.offsetX;
    const offsetY = event.currentTarget.offsetY;

    const clickWidth = (offsetX > offsetWidth-32) && (offsetX < offsetWidth-16);

    if(clickWidth){
        passwordBox.classList.contains('eye-off') ? passwordBox.classList.replace('eye-off', 'eye-on') : passwordBox.classList.replace('eye-on', 'eye-off'); 
        passwordBox.classList.contains('eye-off') ? passwordBox.setAttribute('type', 'password') : passwordBox.setAttribute('type', 'text'); 

    }
}

passwordBox.addEventListener('click', passwordImageToggle);

