import {
  emailCheck,
  errorColorChange,
  errorColorRomove
} from "./utils.js";


//이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
// 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다
//이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.” 에러 메세지를 보입니다.
//이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
const email = document.querySelector('#email');  //input태그
const emailError =  document.querySelector('#email-error-message'); //이메일p 태그

console.log(email)

function emailErrorMessageHandler(e){
  if(!email.value){
    emailError.textContent =  '이메일을 입력해 주세요.';
    errorColorChange(email);
  }else if(!emailCheck(email.value)){
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    errorColorChange(email);
  }else if(email.value === "test@codeit.com"){
    emailError.textContent = '이미 사용 중인 이메일입니다.';
    errorColorChange(email);
  }else{
    emailError.textContent = '';
    errorColorRomove(email);
  }
}

email.addEventListener("focusout",emailErrorMessageHandler);

// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
const formElem = document.querySelector(".signin-form");

function handleSubmit(e) {
  e.preventDefault();// 아이디/비밀번호가 다른 경우 submit의 기본기능을 무효화하는 코드가 들어가야 합니다.
  if(email.value === "test@codeit.com" && password.value ==="codeit101"){
    location.href = "/folder";
  }else{
    //이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해 주세요.”
    //, 비밀번호 input 아래에 “비밀번호를 확인해 주세요.” 에러 메세지를 보입니다.
    emailError.textContent = '“이메일을 확인해 주세요.';
    PasswordError.textContent =  '비밀번호를 확인해 주세요.';
    errorColorChange(email);
    errorColorChange(password);
  }
}

formElem.addEventListener("submit", handleSubmit);

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
const password = document.querySelector('#password');  //input태그
const PasswordError =  document.querySelector('#password-error-message'); //이메일p 태그

function passwordErrorMessageHandler(e){
  if(!password.value){
    PasswordError.textContent =  '비밀번호를 입력해 주세요.';
    errorColorChange(password);
  }else {
    PasswordError.textContent = '';
    errorColorRomove(password);
  }
}
password.addEventListener("focusout",passwordErrorMessageHandler);

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.

function passwordErrorMessageHandler(e){
  if(!password.value){
    PasswordError.textContent =  '비밀번호를 입력해 주세요.';
    errorColorChange(password);
  }else {
    PasswordError.textContent = '';
    errorColorRomove(password);
  }
}
password.addEventListener("focusout",passwordErrorMessageHandler);






