import base from "../function/regex.js";
import errorMsg from "../function/errorMsg.js";

const emailInput = document.getElementById('email');
const userId = 'test@codeit.com';

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const url = window.location.href;

  if (emailValue === '') {
    errorMsg.ErrorMessage(emailInput, '이메일을 입력해 주세요.');
    errorMsg.boderLine('boder-error', true);
    return false;
  }

  if (url.indexOf('signin') !== -1) {
    if (!base.baseEmail(emailValue)) {
      errorMsg.ErrorMessage(emailInput, '올바른 이메일 주소가 아닙니다.');
      errorMsg.boderLine('boder-error', true);
      return false;
    } 
    if (emailValue !== userId) {
      errorMsg.ErrorMessage(emailInput, '이메일을 확인해 주세요.');
      errorMsg.boderLine('boder-error', true);
      return false;
    }
  } else {
    if (!base.baseEmail(emailValue)) {
      errorMsg.ErrorMessage(emailInput, '올바른 이메일 주소가 아닙니다.');
      errorMsg.boderLine('boder-error', true);
      return false;
    } 
    if (emailValue === userId) {
      errorMsg.ErrorMessage(emailInput, '이미 사용 중인 이메일입니다.');
      errorMsg.boderLine('boder-error', true);
      return false;
    }
  }
  return true;
}

export default{emailInput, userId, validateEmail}