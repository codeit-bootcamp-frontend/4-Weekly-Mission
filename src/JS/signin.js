import { signForm, errorMessageEmail, errorMessagePassword, emailInput, passwordInput, submitBtn as loginBtn, passwordEyeBtn, passwordEyeOff, passwordEyeOn, checkValidationEmail, errorMsgAdd, errorMsgRemove, toggleEyeBtn } from './sign.js';

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

async function loginFetch() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json", // 타입 지정 안해줘서 삽질 오래함;;;
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
      }),
    });
    if (response.status === 200) { // 가입된 계정이면 로그인 됨
      window.location.href = '/folder.html';
    } else { // 아닌 경우 에러 발생
      throw new Error('authApiError')
    }
  } catch (error) { // 에러메세지 출력
    errorMsgAdd(emailInput, errorMessageEmail, '이메일을 확인해 주세요');
    errorMsgAdd(passwordInput, errorMessagePassword, "비밀번호를 확인해 주세요");
  }
}; // 로그인 가능 계정인지 서버에 확인 및 아닐경우 에러메세지 출력

function tryLogin(event){
  event.preventDefault(); // 브라우저 기본 동작 멈춤
  if (checkEmail() && checkPassword()) { // 로그인 전에 이메일, 비밀번호 공란 검사 및 이메일 정규식 검사
    loginFetch(); // 허가된 계정인지 확인하는 리퀘스트 보냄
  };
}; // 로그인 시도 할때 전체적인 모든 기능들의 로직을 담당함

// 이벤트 관리
emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPassword);
loginBtn.addEventListener('click', tryLogin);
signForm.addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    tryLogin(event);
  };
});
passwordEyeBtn.addEventListener('click', function(){
  toggleEyeBtn(passwordInput, passwordEyeOff, passwordEyeOn);
}); // 비밀번호 보이기/가리기