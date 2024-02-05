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




//비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, 
//“비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.” 에러 메세지를 보입니다.
const password = document.querySelector('#password');  //input태그
const PasswordError =  document.querySelector('#password-error-message'); //이메일p 태그
let passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
console.log(passwordReg.test('asddf111'))

function passwordErrorMessageHandler(e){
  console.log(password.value)
  if(!passwordReg.test(password.value)){
    PasswordError.textContent ='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    errorColorChange(password);
  }else{
    PasswordError.textContent = '';
    errorColorRomove(password);
  }
}
password.addEventListener("focusout",passwordErrorMessageHandler);

//비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 
//비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
const passwordConfirm = document.querySelector('#confirm-password');  //input태그
const PasswordConfirmError =  document.querySelector('#confirm-password-error-message');
function passwordErrorMessageCheckHandler(e){
  if(!passwordConfirm.value){
    PasswordConfirmError.textContent = '비밀번호를 입력해 주세요.';
    errorColorChange(passwordConfirm);
  }else if(password.value !== passwordConfirm.value){
    PasswordConfirmError.textContent = '비밀번호가 일치하지 않아요.';
    errorColorChange(passwordConfirm);
  }else{
    PasswordConfirmError.textContent = '';
    errorColorRomove(passwordConfirm);
  }
}
passwordConfirm.addEventListener("focusout",passwordErrorMessageCheckHandler);




//회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
/*

const formElem = document.querySelector(".signup-form");

function handleSubmit(e) {

  if(){
  }else{

  }
}

formElem.addEventListener("submit", handleSubmit);
*/








