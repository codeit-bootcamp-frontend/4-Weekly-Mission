const email_input = document.querySelector('#email_input');
const pw_input = document.querySelector('#pw_input');
const error_email = document.querySelector('#error_email');
const error_pw = document.querySelector('#error_pw');
const eye = document.querySelector('.eye');
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function inEmail(){
  return email_regex.test(email);
}

//email
function EmailInput(){
  if (email_input.value.trim() === ""){
    error_email.innerText = "이메일을 입력해 주세요.";
  } else if(!inEmail(email_input.value.trim())){
    error_email.innerText = "올바른 이메일 주소가 아닙니다.";
  } else {
    error_email.style.display = "none";
  }
}


//pw
function PasswordInput(){
  if (pw_input.value.trim() === ""){
    error_pw.innerText = "비밀번호를 입력해 주세요.";
  } else{
    error_pw.style.display = "none"
  }
}

// 로그인
function login(){
  if (email_input.value === "test@codeit.com") {
    location.href = "/folder"
  } else {
    if (error_email.style.display = "none"){
      error_email.innerText = "이메일을 확인해 주세요.";
    } 
    if (error_pw.style.display = "none"){
      error_pw.innerText = "비밀번호를 확인해 주세요.";
    }
  }
}

// Enter 키 눌렀을떄
document.onkeydown = function (e){
  let keyBoardEvent = e.keyBoardEvent;
  if (keyBoardEvent === "Enter") {
    login(e);
  }
}

// 눈 모양
function Eye(){
  if (pw_input.type === "password"){
    pw_input.type = "text";
    eye.style.backgroundImage = "./images/eye-on.svg";
  } else{
    pw_input.type = "password";
    eye.style.backgroundImage = "./images/eye-off.svg"
  }
}