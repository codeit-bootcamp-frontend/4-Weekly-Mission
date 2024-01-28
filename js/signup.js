import {isValidEmail,isValidPassword,removeErrorMsg,clickEyeIcon} from "./signcommon.js"

const emailInput=document.querySelector('#emailInput');
const emailContainer=document.querySelector('.email-container')
const errorMsgEmail=document.createElement('p');
errorMsgEmail.classList.add('error-msg-email');

const passwordInput=document.querySelector('#passwordInput');
const passwrodConatiner=document.querySelector('.password-container');
const errorMsgPassword=document.createElement('p');
errorMsgPassword.classList.add('error-msg-pwd');

const passwordVertifyInput=document.querySelector('#passwordVertifyInput');
const passwrodVertifyConatiner=document.querySelector('.password-vertify-container');
const errorMsgVertifyPassword=document.createElement('p');
errorMsgVertifyPassword.classList.add('error-msg-pwd');


let inputEmail=''
function emailErrorMessage(e){
    removeErrorMsg(errorMsgEmail);
    // 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
    if(e.target.value==''){
        errorMsgEmail.textContent='이메일을 입력해주세요.';
        emailContainer.append(errorMsgEmail);
        emailInput.classList.add('error');
        console.log("이메일입력요망");
    }
    // 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
    else if(!isValidEmail(e.target.value)){
        errorMsgEmail.textContent='올바른 이메일 주소가 아닙니다.';
        emailContainer.append(errorMsgEmail);
        emailInput.classList.add('error');
        console.log("올바른 이메일주소x");
    }
    else if(e.target.value=='test@codeit.com'){
        errorMsgEmail.textContent='이미 사용 중인 이메일입니다.';
        emailContainer.append(errorMsgEmail);
        emailInput.classList.add('error');
    }
    else{
        inputEmail=e.target.value;
    }
}
let inputPassword='';
let vertifyPassword='';
function passwordErrorMessage(e){
    removeErrorMsg(errorMsgPassword);
    // 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
    if(e.target.value==''){
        errorMsgPassword.textContent='비밀번호를 입력해 주세요.';
        passwrodConatiner.append(errorMsgPassword);
        passwordInput.classList.add('error');
    }
    else if(!isValidPassword(e.target.value)){
        errorMsgPassword.textContent='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        passwrodConatiner.append(errorMsgPassword);
        passwordInput.classList.add('error');
    }
    else{ //input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
        //passwordVertifyError(e.target.value,passwordVertifyInput.value)
        inputPassword=e.target.value;
        console.log("input",inputPassword)
    }
}

console.log(inputPassword,vertifyPassword);
function passwordVertifyError(e){
    removeErrorMsg(errorMsgVertifyPassword);
    console.log('함수실행')
    if(inputPassword!==e.target.value){
        errorMsgVertifyPassword.textContent='비밀번호가 일치하지 않아요.'
        passwrodVertifyConatiner.append(errorMsgVertifyPassword);
        passwordVertifyInput.classList.add('error');
        //console.log(inputPassword,vertifyPassword)
    }
    else{
        removeErrorMsg(errorMsgVertifyPassword);
        vertifyPassword=e.target.value;
    }
}
const signUp=document.querySelector('.signup-btn');
function clickSignup(){
    if(isValidEmail(inputEmail)&&isValidPassword(inputPassword)){
        console.log("input",inputPassword,"vertify",vertifyPassword);
        
        if(inputPassword==vertifyPassword){
            window.location.href = '../folder.html';
        }
        
    }
    else{
        if(!isValidEmail(inputEmail)){
            errorMsgEmail.textContent='올바른 이메일 주소가 아닙니다.'
            emailContainer.append(errorMsgEmail);
            emailInput.classList.add('error');
        }
        else if(!isValidPassword(inputPassword)){
            errorMsgPassword.textContent='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
            passwrodConatiner.append(errorMsgPassword);
            passwordInput.classList.add('error');
        }
        else if(inputPassword!==vertifyPassword){
            errorMsgVertifyPassword.textContent="비밀번호가 일치하지 않아요."
            passwrodVertifyConatiner.append(errorMsgVertifyPassword);
            passwordVertifyInput.classList.add('error');
        }
        else if(inputEmail=='test@codeit.com'){
            errorMsgEmail.textContent='이미 사용 중인 이메일입니다.'
            emailContainer.append(errorMsgEmail);
            emailInput.classList.add('error');
        }
        // emailErrorMessage(inputEmail);
        // passwordErrorMessage(inputPassword);
        // passwordVertifyError(vertifyPassword);
        console.log("input",inputPassword,"vertify",vertifyPassword);
    }
}
const eyeIcon=document.querySelector('.show-icon');
const eyeIcon2=document.querySelector('.show-icon2');
eyeIcon.addEventListener('click',()=>{
    clickEyeIcon(passwordInput,eyeIcon)
});
eyeIcon2.addEventListener('click',()=>{
    clickEyeIcon(passwordVertifyInput,eyeIcon2)
});

emailInput.addEventListener('focusout',emailErrorMessage);
passwordInput.addEventListener('focusout',passwordErrorMessage);
passwordVertifyInput.addEventListener('focusout',passwordVertifyError);
signUp.addEventListener('click',clickSignup);
document
    .getElementById("signup-form")
    .addEventListener("keydown",(e)=>{
        if(e.key==="Enter"){
            clickSignup();
        }
    })