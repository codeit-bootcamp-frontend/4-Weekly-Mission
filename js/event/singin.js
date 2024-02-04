import errorMsg from "../function/errorMsg.js";
import id from "../email/idEvent.js"
import pw from "../password/pwEvent.js";
import loginAttempt from "../attmpt/loginAttmpt.js";
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
  // 이메일 요소에 포커스가 아웃될때 에러 색상과 문구 생성
  pw.passwordInput.addEventListener('focusout', function () {
    errorMsg.clearErrors();
    pw.validatePassword();
  });

    // 마우스 클릭으로 로그인 실행
  loginBtn.addEventListener('click', function(){
    loginAttempt(id.emailInput.value, pw.passwordInput.value)
    errorMsg.clearErrors()
  });

  // Enter 키로 로그인 실행
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      loginAttempt(id.emailInput.value, pw.passwordInput.value);
      errorMsg.clearErrors()
    }
  });
  
  eye.eyeIcon.addEventListener('click', function(){
    eye.changeOnOff(pw.passwordInput, eye.eyeIcon);
  });


