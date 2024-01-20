const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('sign-form');
const emailE =document.getElementById('error-email');
const passwordE = document.getElementById('error-password');
const eyebutton = document.getElementById('eye-button');
const eye = document.getElementById('eye');

//포커싱시 파란색 테두리 출력
function focusing(){
    emailE.innerHTML="";
    email.style.border= "0.1rem solid var(--primary)";
}
function focusing2(){
    passwordE.innerHTML="";
    password.style.border= "0.1rem solid var(--primary)";
}

//이메일
function checkingE(){

    //이메일 체크를 위한 정규식
    let checkE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    //이메일 체크
    if(email.value.trim()==""){
        emailE.innerHTML="이메일을 입력해주세요.";
        email.style.border= "0.1rem solid var(--red)";
    }else if(checkE.test(email.value.trim())){
        emailE.innerHTML="";
        email.style.border= "0.1rem solid var(--gray20)";
    }else{
        emailE.innerHTML="올바른 이메일 주소가 아닙니다.";
        email.style.border= "0.1rem solid var(--red)";
    }
}

//비밀번호
function checkingP(){
    //비밀번호 체크
    if(password.value.trim()==""){
        passwordE.innerHTML="비밀번호를 입력해주세요.";
        password.style.border= "0.1rem solid var(--red)";
    }else{
        passwordE.innerHTML="";
        password.style.border= "0.1rem solid var(--gray20)";
    }
}


//addEventListener를 이용한 체크 시스템
form.addEventListener("submit",(e)=>{

    //반복 방지
    e.preventDefault();

    //특정 아이디 확인
    if(email.value.trim()=="test@codeit.com" && password.value.trim()=="codeit101"){
        //폴더 페이지 미완성으로 인한 임시
        location.href='/folder.html'
    }else if(email.value.trim()!="test@codeit.com" && password.value.trim()=="codeit101"){
        emailE.innerHTML="이메일을 확인해주세요.";
        email.style.border= "0.1rem solid var(--red)";
    }else if(email.value.trim()=="test@codeit.com" && password.value.trim()!="codeit101"){
        passwordE.innerHTML="비밀번호를 확인해주세요.";
        password.style.border= "0.1rem solid var(--red)";
    }else{
        emailE.innerHTML="이메일을 확인해주세요.";
        email.style.border= "0.1rem solid var(--red)";
        passwordE.innerHTML="비밀번호를 확인해주세요.";
        password.style.border= "0.1rem solid var(--red)";
    }
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