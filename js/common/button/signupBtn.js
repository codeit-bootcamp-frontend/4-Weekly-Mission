import init from '../init/init.js';
import email from '../input/email/emailValidation.js';
import password from '../input/password/passwordValidtaion.js';

const btn = document.querySelector('#signupBtn');
const allErrMsgDiv = document.querySelectorAll('.errMsg')

function validation() {
  //초기화
  init(email.selector);
  init(password.selector);
  init(password.selectorOfChk);

  email.validateSignupEmailInput(email.selector);
  password.validateSignupPasswordInput(password.selector);
  password.validateSignupPasswordChkInput(password.selectorOfChk);

  const isAllErrMsgDivValid = [...allErrMsgDiv].every((element) => element.textContent === '')
  
  if(isAllErrMsgDivValid){
    location.href = 'folder.html';
  }
}

export default {btn, validation};