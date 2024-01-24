const form = document.querySelector('.sign-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailErrorMessage =document.getElementById('error-email');
const passwordErrorMessage = document.getElementById('error-password');
const passwordRepeat = document.getElementById("passwordR");
const passwordRepeatErrorMessage = document.getElementById('error-passwordR');

const errorMessages = {
    emailRequired: "이메일을 입력해주세요.",
    invalidEmail: "올바른 이메일 주소가 아닙니다.",
    duplicateEmail: "이미 사용중인 이메일입니다.",
    passwordRequired: "비밀번호를 입력해주세요.",
    passwordRepeatRequired: "비밀번호 재확인칸을 입력해주세요.",
    invalidPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    passwordMismatch: "비밀번호가 일치하지 않아요."
};

let isCheckingEmail= false;
let isCheckingPassword= false;
let isCheckingPasswordRepeatEmail= false;

//포커싱시 파란색 테두리 출력
function focusing(errorName,styleName){
    errorName.innerHTML="";
    styleName.style.border= "0.1rem solid var(--primary)";
}

//눈 비밀번호 표시 / 미표시
function eyeBlink(input,icon){
    if(input.type=="password"){
        input.type="text";
        icon.src="../images/eye-on.svg"

    }else{
        input.type="password";
        icon.src="../images/eye-off.svg"
    }
}
 
//이메일
function checkingEmail(type){

    //이메일 체크를 위한 정규식
    const checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    //이메일 체크
    if(email.value.trim()==""){
        emailErrorMessage.innerHTML=emailRequired;
        email.style.border= "0.1rem solid var(--red)";
    }else if(checkEmail.test(email.value.trim())){
        emailErrorMessage.innerHTML="";
        email.style.border= "0.1rem solid var(--gray20)";
    }else{
        emailErrorMessage.innerHTML=invalidEmail;
        email.style.border= "0.1rem solid var(--red)";
    }

    if(type=='signup'){
        if(email.value.trim()===`test@codeit.com`){
            emailErrorMessage.innerHTML=duplicateEmail;
            email.style.border= "0.1rem solid var(--red)";
        }
    }
}

//비밀번호
function checkingPassword(){

    //비밀번호 체크를 위한 정규식
    const checkPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/

    //비밀번호 체크
    if(password.value.trim()==""){
        passwordErrorMessage.innerHTML=passwordRequired;
        password.style.border= "0.1rem solid var(--red)";
        isCheckingPassword= false;
    }else if(checkPassword.test(password.value.trim())){
        passwordErrorMessage.innerHTML="";
        password.style.border= "0.1rem solid var(--gray20)";
        isCheckingPassword= true;
    }else{
        passwordErrorMessage.innerHTML=invalidPassword;
        password.style.border= "0.1rem solid var(--red)";
        isCheckingPassword= false;
    }
}

function checkingPasswordRepeat(){
    if(passwordRepeat.value.trim()==""){
        passwordRepeatErrorMessage.innerHTML=passwordRepeatRequired;
        passwordRepeat.style.border= "0.1rem solid var(--red)";
        isCheckingPasswordRepeatEmail= false;
    }else if(password.value.trim()==passwordRepeat.value.trim()){
        passwordRepeatErrorMessage.innerHTML="";
        passwordRepeat.style.border= "0.1rem solid var(--gray20)";
        isCheckingPasswordRepeatEmail= true;
    }else{
        passwordRepeatErrorMessage.innerHTML=passwordMismatch;
        passwordRepeat.style.border= "0.1rem solid var(--red)";
        isCheckingPasswordRepeatEmail= false;
    }
}



//addEventListener를 이용한 체크 시스템
form.addEventListener("submit",(e)=>{


    //새로고침 방지
    e.preventDefault();

    console.log(e.target.id);

    if(e.target.id ==='signin'){
        if(email.value.trim()=="test@codeit.com" && password.value.trim()=="codeit101"){
            //폴더 페이지 미완성으로 인한 임시
            location.href='/folder.html';
        }else if(email.value.trim()!="test@codeit.com" && password.value.trim()=="codeit101"){
            emailErrorMessage.innerHTML="이메일을 확인해주세요.";
            email.style.border= "0.1rem solid var(--red)";
        }else if(email.value.trim()=="test@codeit.com" && password.value.trim()!="codeit101"){
            passwordErrorMessage.innerHTML="비밀번호를 확인해주세요.";
            password.style.border= "0.1rem solid var(--red)";
        }else{
            emailErrorMessage.innerHTML="이메일을 확인해주세요.";
            email.style.border= "0.1rem solid var(--red)";
            passwordErrorMessage.innerHTML="비밀번호를 확인해주세요.";
            password.style.border= "0.1rem solid var(--red)";
        }
    }else if(e.target.id ==='signup'){
        if(isCheckingEmail == true && isCheckingPasswordRepeatEmail==true && isCheckingPassword == true){
            location.href='/folder.html';
        }else{
            checkingEmail();
            checkingPassword();
            checkingPasswordRepeat();
        }
    }
});