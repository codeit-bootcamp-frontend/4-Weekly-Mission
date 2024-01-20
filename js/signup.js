const form = document.querySelector(".sign-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordR = document.getElementById("passwordR");
const emailE =document.getElementById('error-email');
const passwordE = document.getElementById('error-password');
const passwordER = document.getElementById('error-passwordR');
const eyebutton = document.getElementById('eye-button');
const eyebutton2 = document.getElementById('eye-button2');
const eye = document.getElementById('eye');
const eye2 = document.getElementById('eye2');

// 포커싱을 이용한 이메일 체크
function checkingE(){

    //이메일 체크를 위한 정규식
    let checkE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(email.value.trim()==""){
        emailE.innerHTML="이메일을 입력해주세요.";
        email.style.border= "0.1rem solid var(--red)";
    }else if(checkE.test(email.value.trim())){
        if(email.value.trim()===`test@codeit.com`){
            emailE.innerHTML="이미 사용중인 이메일입니다.";
            email.style.border= "0.1rem solid var(--red)";
        }else{
            emailE.innerHTML="";
            email.style.border= "0.1rem solid var(--gray20)";
        }
    }else{
        emailE.innerHTML="올바른 이메일 주소가 아닙니다.";
        email.style.border= "0.1rem solid var(--red)";
    }
}

// 비밀번호 체크
function checkingP(){

    //비밀번호 체크를 위한 정규식
    let checkP = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/

    if(password.value.trim()==""){
        passwordE.innerHTML="비밀번호를 입력해주세요.";
        password.style.border= "0.1rem solid var(--red)";
    }else if(checkP.test(password.value.trim())){
        passwordE.innerHTML="";
        password.style.border= "0.1rem solid var(--gray20)";
    }else{
        passwordE.innerHTML="비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        password.style.border= "0.1rem solid var(--red)";
    }
}

// 비밀번호 동일 체크
function checkingPR(){

    if(password.value.trim()==passwordR.value.trim()){
        passwordER.innerHTML="";
        passwordR.style.border= "0.1rem solid var(--gray20)";
    }else{
        passwordER.innerHTML="비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        passwordR.style.border= "0.1rem solid var(--red)";
    }
}

//addEventListener를 이용한 체크 시스템

form.addEventListener("submit",(e)=>{
    e.preventDefault();

});

// onclick을 이용한 눈 비밀번호 표시 / 미표시

eyebutton.onclick= (()=>{
    if(password.type=="password"){
        password.type="text";
        eye.src="../images/eye-on.svg"

    }else{
        password.type="password";
        eye.src="../images/eye-off.svg"
    }
})
eyebutton2.onclick= (()=>{
    if(passwordR.type=="password"){
        passwordR.type="text";
        eye2.src="../images/eye-on.svg"

    }else{
        passwordR.type="password";
        eye2.src="../images/eye-off.svg"
    }
})