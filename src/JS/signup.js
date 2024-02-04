import { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn as signUpBtn, passwordEyeBtn, passwordEyeOff, passwordEyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, toggleEyeBtn } from './sign.js';

// 회원가입에서 필요한 비밀번호 확인용 변수
const errorMessagePasswordCheck = document.querySelector('#error-message-password-check');
const passwordCheckInput = document.querySelector('#passwordCheckInput');
const passwordCheckEyeBtn = document.querySelector('#passwordCheckEyeBtn');
const passwordCheckEyeOff = document.querySelector('#passwordCheckEyeOff');
const passwordCheckEyeOn = document.querySelector('#passwordCheckEyeOn');

function checkEmail(){
  if (emailInput.value === ""){
    errorMsgAdd(emailInput, errorMessageEmail, "이메일을 입력해 주세요");
    return false;
  } else if (!checkValidationEmail(emailInput.value)){
    errorMsgAdd(emailInput, errorMessageEmail, "올바른 이메일 주소가 아닙니다");
    return false;
  } else if (emailInput.value === 'test@codeit.com'){
    errorMsgAdd(emailInput, errorMessageEmail, "이미 사용 중인 이메일입니다");
    return false;
  } else {
    errorMsgRemove(emailInput, errorMessageEmail);
    return true;
  };
}; // 이메일 유효성 및 중복 체크

function checkValidationpassword(password_value){     
	let password_reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
	if(!password_reg.test(password_value)){ 
		return false; 
	} else {
		return true;
	};
 }; // 비밀번호 정규식 검사 함수

function checkPassword(){
  if (passwordInput.value === ""){
    errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 입력해 주세요");
    return false;
  } else if (!checkValidationpassword(passwordInput.value)){
    errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
    return false;
  } else {
    errorMsgRemove(passwordInput, errorMessagePassword);
    return true;
  };
}; // 비밀번호 공란 검사 및 유효성 검사

function checkPasswordCheck(){
  if(passwordCheckInput.value !== passwordInput.value){
    errorMsgAdd(passwordCheckInput, errorMessagePasswordCheck, "비밀번호가 일치하지 않아요");
    return false;
  } else {
    errorMsgRemove(passwordCheckInput, errorMessagePasswordCheck);
    return true;
  };
}; // 비밀번호 확인의 일치 여부 확인

function trySignUp(e){
  e.preventDefault();
  if(checkEmail() && checkPassword() && checkPasswordCheck()){
    let link = '/folder.html';
    window.location.href = link;
  };
}; // 회원가입 시도

// 이벤트 관리
emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
passwordCheckInput.addEventListener('focusout', checkPasswordCheck);
signUpBtn.addEventListener('click', trySignUp);
signForm.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    trySignUp(event);
  };
});
passwordEyeBtn.addEventListener('click', function(){
  toggleEyeBtn(passwordInput, passwordEyeOff, passwordEyeOn);
}); // 비밀번호 보이기/가리기
passwordCheckEyeBtn.addEventListener('click', function(){
  toggleEyeBtn(passwordCheckInput, passwordCheckEyeOff, passwordCheckEyeOn);
}); // 비밀번호 확인 보이기/가리기