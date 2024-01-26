const idInput = document.querySelector('#inputId');
const passwordInput = document.querySelector('#inputPassword');
const confirmInput = document.querySelector('#inputConfirm');
const idalert = document.querySelector('.idAlert');
const passwordalert = document.querySelector('.passwordAlert');
const confirmalert = document.querySelector('.confirmAlert');
const passwordicon = document.querySelector('#passwordIcon');
const confirmicon = document.querySelector('#confirmIcon');
const corrid = 'test@codeit.com';
const corrpassword='codeit101';
const isemail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const ispassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let emailvalid = false;
let passwordvalid = false;
let confirmvalid = false;
function login(){
    if(emailvalid&&passwordvalid&&confirmvalid){
        window.location.href='./shared.html';
    }
    else{
        alert('조건에 맞춰서 이메일 비밀번호를 입력해주세요.');
    }
    
}
function idfocusin(){
    idInput.style.borderColor='#6D6AFE';
}
function idfocusout(){
    if(!idInput.value){
        idalert.textContent='이메일을 입력해 주세요.';
        idInput.style.borderColor='#FF5B56'
        return;
    }

    if(idInput.value == corrid){
        idalert.textContent ='이미 사용 중인 이메일입니다.';
        idInput.style.borderColor='#FF5B56'
        console.log(idInput.value);
        return;
    }
    
    if(!isemail.test(idInput.value)){
        idalert.textContent = '올바른 이메일 주소가 아닙니다.';
        idInput.style.borderColor='#FF5B56'
        return;
    }
    else{
        idalert.textContent='';
        idInput.style.borderColor='#6D6AFE';
        emailvalid=true;
    }
    
}
function passwordfocusin(){
    passwordInput.style.borderColor='#6D6AFE';
}
function passwordfocusout(){
    if(!passwordInput.value){
        passwordalert.textContent='비밀번호를 입력해 주세요.';
        passwordInput.style.borderColor='#FF5B56';
    }
    else if(!ispassword.test(passwordInput.value)){
        passwordalert.textContent='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        passwordInput.style.borderColor='#FF5B56';
    }
    else{
        passwordalert.textContent='';
        passwordInput.style.borderColor='#6D6AFE';
        passwordvalid=true;
    }
}
function confirmfocusin(){
    confirmInput.style.borderColor='#6D6AFE';
}
function confirmfocusout(){
    if(passwordInput.value !== confirmInput.value){
        confirmalert.textContent = '비밀번호가 일치하지 않아요.';
        confirmInput.style.borderColor = '#FF5B56';
    }
    else{
        confirmalert.textContent = '';
        confirmInput.style.borderColor = '#6D6AFE';
        confirmvalid=true;
    }
}
export{ idInput,
    passwordInput,
    confirmInput,
    idalert,
    passwordalert,
    confirmalert,
    passwordicon,
    confirmicon,
    corrid,
    corrpassword,
    isemail,
    ispassword,
    login,
    idfocusin,
    idfocusout,
    passwordfocusin,
    passwordfocusout,
    confirmfocusin,
    confirmfocusout,
}