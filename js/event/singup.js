import errorMsg from "../function/errorMsg.js";
import id from "../email/idEvent.js"
import pw from "../password/pwEvent.js";
import signupAttempt from "../attmpt/signupAttmpt.js"
import eye from "../password/eye-icon.js";

const loginBtn = document.querySelector('.boxmain');


   // 이메일 요소에 포커스가 될때 에러 색상과 문구 삭제
  id.emailInput.addEventListener('focusin', function () {
    errorMsg.boderLine("boder-error", false);
    errorMsg.clearErrors();
  });
  // 이메일 요소에 포커스가 아웃될때 에러 색상과 문구 생성
  id.emailInput.addEventListener('focusout', function () {
    errorMsg.clearErrors();
    id.validateEmail();
  });

   // 비밀번호 요소에 포커스가 될때 에러 색상과 문구 삭제
  pw.passwordInput.addEventListener('focusin', function () {
    errorMsg.boderLine("boder-error", false);
    errorMsg.clearErrors();
  });
  // 비밀번호 요소에 포커스가 아웃될때 에러 색상과 문구 생성
  pw.passwordInput.addEventListener('focusout', function () {
    errorMsg.clearErrors();
    pw.validatePassword();
  });
  
  // 비밀번호 확인 요소에 포커스가 될때 에러 색상과 문구 삭제
   pw.passwordRepeatInput.addEventListener('focusin', function () {
    errorMsg.boderLine("boder-error", false);
    errorMsg.clearErrors();
  });
  // 비밀번호 요소에 포커스가 아웃될때 에러 색상과 문구 생성
  pw.passwordRepeatInput.addEventListener('focusout', function () {
    errorMsg.clearErrors();
    pw.validatePasswordRepeat();
  });

    // 마우스 클릭으로 로그인 실행
  loginBtn.addEventListener('click', function(){
    signupAttempt(id.emailInput.value, pw.passwordInput.value)
    errorMsg.clearErrors()
  });

  // Enter 키로 로그인 실행
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      signupAttempt(id.emailInput.value, pw.passwordInput.value)
      errorMsg.clearErrors()
    }
  });
 
  eye.eyeIcon.addEventListener('click', function () {
    eye.changeOnOff(pw.passwordInput, eye.eyeIcon);
  });
  eye.eyeIcon2.addEventListener('click', function () {
    eye.changeOnOff(pw.passwordRepeatInput, eye.eyeIcon2);
  });
