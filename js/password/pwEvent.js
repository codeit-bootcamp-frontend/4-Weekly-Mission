import base from "../function/regex.js";
import errorMsg from "../function/errorMsg.js";

const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('password-repeat');
const userPassword = 'sprint101'

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  const url = window.location.href;
  if (!passwordValue) {
    errorMsg.ErrorMessage(passwordInput, '비밀번호를 입력해 주세요.');
    errorMsg.boderLine('boder-error', true);
    return false;
  }
  if (url.indexOf('signin') !== -1) {
    if(passwordValue !== userPassword) {
      errorMsg.ErrorMessage(passwordInput, '비밀번호를 확인해 주세요.');
      errorMsg.boderLine('boder-error', true);
      return false;
    }
  }
  if (url.indexOf('signup') !== -1) {
    if (!base.basePassword(passwordValue)) {
      errorMsg.ErrorMessage(passwordInput, '비밀번호는 영문 숫자 조합 8자 이상 입력해 주세요.');
      errorMsg.boderLine('boder-error', true);
      return false;
    }
  }
  return true;
}

  function validatePasswordRepeat() {
    const passwordRepeatValue = passwordRepeatInput.value.trim(); 
    const passwordValue = passwordInput.value.trim();
    if (!passwordRepeatValue) {
      errorMsg.ErrorMessage(passwordRepeatInput, '비밀번호를 입력해 주세요.');  
      errorMsg.boderLine('boder-error', true);
      return false
    }
    if (passwordValue !== passwordRepeatValue) {
      errorMsg.ErrorMessage(passwordRepeatInput, '비밀번호가 일치하지 않아요.');  
      errorMsg.boderLine('boder-error', true);
      return false
    }
    return true
  }

  export default{passwordInput, passwordRepeatInput, userPassword, validatePassword, validatePasswordRepeat};
