const inputEmail=document.querySelector("#email");
const inputPassword=document.querySelector("#password");
const emailErrorMessage=document.querySelector(".email-error-message");
const passwordErrorMessage=document.querySelector(".password-error-message");
const form=document.querySelector(".sign-form");

const masterId= {
    email: "test@codeit.com",
    password: "sprint101"
};
const codeitApiUrl="https://bootcamp-api.codeit.kr/api/sign-in";

//url-POST 요청
const response = await fetch(codeitApiUrl,{
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(masterId)
  })
  .then(response => {
    if(response.ok){
        return response.json();
    }
  })
  .then(data => {
    location.href="/folder.html";
  })
  .catch(error => {
    throw new Error('error');
  })
    

function correctEmail(e){
    let emailRegex=new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const passwordErrorMessage=document.querySelector(".passwrod-error-message");
const form=document.querySelector(".sign-form");

function corretEmail(e){
    let emailRegex=new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    
    if(e.target.value===""){
        emailErrorMessage.textContent = "이메일을 입력해 주세요.";
        emailErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else if(!emailRegex.test(e.target.value)){
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        emailErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else{
        emailErrorMessage.textContent = "";
        emailErrorMessage.classList.remove("error-text");
        e.target.classList.remove("error-box");
    }
}


function correctPassword(e){
    if(e.target.value===""){

        passwordErrorMessage.textContent = "비밀번호를 입력해 주세요.";
        passwordErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else{
        passwordErrorMessage.textContent = "";
        passwordErrorMessage.classList.remove("error-text");
        e.target.classList.remove("error-box");
    }
}

function submitButton(e){
    e.preventDefault();
    if(inputEmail.value === "test@codeit.com" && inputPassword.value === "codeit101"){
        location.href="/folder.html"
    }else{
        emailErrorMessage.textContent = "이메일을 확인해 주세요.";
        emailErrorMessage.classList.add("error-text");
        inputEmail.classList.add("error-box");
        passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
        passwordErrorMessage.classList.add("error-text");
        inputPassword.classList.add("error-box");
    }
}

inputEmail.addEventListener('focusout',correctEmail);
inputPassword.addEventListener('focusout',correctPassword);
form.addEventListener('submit',submitButton);
// response.addEventListener('submin',submitButton);

