const signForm = document.querySelector('#signForm');
const errorMessageEmail = document.querySelector('#error-message-email');
const errorMessagePassword = document.querySelector('#error-message-password');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const loginBtn = document.querySelector('#loginBtn');
const eyeBtn = document.querySelector('.eye-button');
const eyeOff = document.querySelector('#offEye');
const eyeOn = document.querySelector('#onEye');

function checkValidationEmail(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	} else {
		return true;
	};
}; // 이메일이 정규식인지 확인해서 불린값 리턴함

function errorMsgAdd(input, msgType, errText){
  input.classList.add('sign-input-error');
  msgType.innerHTML = errText;
  msgType.classList.remove('display-none');
}; // 에러 메세지 출력

function errorMsgRemove(input, msgType){
  input.classList.remove('sign-input-error');
  msgType.classList.add('display-none');
}; // 에러 메세지 지우기

function checkEmail(){
  if (emailInput.value === ""){
        errorMsgAdd(emailInput, errorMessageEmail, "이메일을 입력해 주세요");
        return false;
      } else if (!checkValidationEmail(emailInput.value)){
        errorMsgAdd(emailInput, errorMessageEmail, "올바른 이메일 주소가 아닙니다");
        return false;
      } else {
        errorMsgRemove(emailInput, errorMessageEmail);
        return true;
      };
}; // 이메일 유효성 체크

function checkPassword(){
  if (passwordInput.value === ""){
    errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 입력해 주세요");
    return false;
  } else {
    errorMsgRemove(passwordInput, errorMessagePassword);
    return true;
  }
}; // 비밀번호 유효성 체크

function loginCheck(){
  if(checkEmail() && checkPassword()){ // 먼저 이메일과 비밀번호의 유효성 확인
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === "codeit101"){
      return true;
    } else if (emailInput.value !== 'test@codeit.com' && passwordInput.value !== "codeit101"){
      errorMsgAdd(emailInput, errorMessageEmail, '이메일을 확인해 주세요');
      errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 확인해 주세요");
      return false;
    } else if (emailInput.value !== 'test@codeit.com'){
      errorMsgAdd(emailInput, errorMessageEmail, '이메일을 확인해 주세요');
      return false;
    } else if (passwordInput.value !== "codeit101"){
      errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 확인해 주세요");
      return false;
    };
  };
}; // 허락된 계정인지 확인

function tryLogin(e){
  e.preventDefault();
  if(loginCheck()){
    let link = '/folder.html';
    window.location.href = link;
  };
}; // 로그인 시도

function toggleEyeBtn(){
  if(passwordInput.getAttribute('type') === 'password'){
    passwordInput.setAttribute('type', 'text'); // 비밀번호 보이기
    eyeOff.classList.add('display-none'); // 눈 아이콘 변경
    eyeOn.classList.remove('display-none');
  } else {
    passwordInput.setAttribute('type', 'password'); // 비밀번호 가리기
    eyeOn.classList.add('display-none'); // 눈 아이콘 변경
    eyeOff.classList.remove('display-none');
  }
}; // 비밀번호 보이기/가리기

// 이벤트 관리
emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
loginBtn.addEventListener('click', tryLogin);
signForm.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    tryLogin(e);
  };
});
eyeBtn.addEventListener('click', toggleEyeBtn);