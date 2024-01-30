import init from '../init/init.js';
import email from '../input/email/emailValidation.js';
import password from '../input/password/passwordValidtaion.js';

const btn = document.querySelector('#signupBtn');
const errMsgChk = document.querySelectorAll('.errMsg')
function validation() {
  //초기화
  init(email.selector);
  init(password.selector);
  init(password.selectorOfChk);

  email.emailValidationChkMsg(email.selector);
  password.passwordValidationChkMsg(password.selector);
  password.passwordValidationChkMsg(password.selectorOfChk);

  const errMsgTf = [...errMsgChk].every((element) => element.textContent === '')
  
  if(errMsgTf){
    location.href = 'folder.html';
  }
}

export default {btn, validation};