import { isValidEmail,removeErrorMsg,clickEyeIcon } from "./signcommon.js";

const emailInput=document.querySelector('#emailInput');
const emailContainer=document.querySelector('.email-container')
const errorMsgEmail=document.createElement('p');
errorMsgEmail.classList.add('error-msg-email');

const passwordInput=document.querySelector('#passwordInput');
const passwrodConatiner=document.querySelector('.password-container');
const errorMsgPassword=document.createElement('p');
errorMsgPassword.classList.add('error-msg-pwd')



function emailErrorMessage(e){
    removeErrorMsg(errorMsgEmail);
    // 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
    if(e.target.value==''){
        errorMsgEmail.textContent='이메일을 입력해주세요.';
        emailContainer.append(errorMsgEmail);
        emailInput.classList.add('focusout');
        console.log("이메일입력요망")
    }
    // 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
    else if(!isValidEmail(e.target.value)){
        errorMsgEmail.textContent='올바른 이메일 주소가 아닙니다.';
        emailContainer.append(errorMsgEmail);
        emailInput.classList.add('focusout');
        console.log("올바른 이메일주소x")
    }
    else{
        console.log("올바른 이메일주소입니다.")
    }
}

function focusInEmail(){
    emailInput.classList.remove('focusout');
}
function focusInPwd(){
    passwordInput.classList.remove('focusout');
}

function passwordErrorMessage(e){
    removeErrorMsg(errorMsgPassword);
    // 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
    if(e.target.value==''){
        errorMsgPassword.textContent='비밀번호를 입력해 주세요.';
        passwrodConatiner.append(errorMsgPassword);
        passwordInput.classList.add('focusout');
    }
    
}

const signIn=document.querySelector('button');
async function clickLogin(){
    //이메일: test@codeit.com, 비밀번호: sprint101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
    const userData={
        email:emailInput.value.trim(),
        password:passwordInput.value.trim(),
    }
    try{   
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
            method:"POST",
            headers:{'content-Type':"application/json"},
            body:JSON.stringify(userData),
        });
        if(response.ok){          
            const responseData = await response.json();
            localStorage.setItem('accessToken', responseData.data.accessToken); // 로그인시 받은 accessToken을 로컬 스토리지에 저장
            location.href = "./folder.html";
        }
        else{
            throw new Error('로그인 실패');
        }
    }
    catch(error){
        errorMsgEmail.textContent='이메일을 확인해 주세요.';
        errorMsgPassword.textContent='비밀번호를 확인해 주세요.';
        emailContainer.append(errorMsgEmail);
        passwrodConatiner.append(errorMsgPassword);
        console.error(error);
    }
}

//로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
function enterLogin(e){
    if(e.key=='Enter'){
        clickLogin();
    }
}

const eyeIcon=document.querySelector('.show-icon');

emailInput.addEventListener('focusout',emailErrorMessage);
emailInput.addEventListener('focusin',focusInEmail);
passwordInput.addEventListener('focusout',passwordErrorMessage);
passwordInput.addEventListener('focusin',focusInPwd);
signIn.addEventListener('click',clickLogin);
emailInput.addEventListener('keypress',enterLogin);
passwordInput.addEventListener('keypress',enterLogin);
eyeIcon.addEventListener('click',()=>{
    clickEyeIcon(passwordInput,eyeIcon);
});

// 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동합니다.
document.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        window.location.href = '/folder.html';
    }
});