import init from '../init/init.js';
import email from './email/emailValidation.js';
import password from './password/passwordValidtaion.js';

const blur = (selector) => {
  init(selector);
  if(selector === email.selector){
    email.emailValidationChkMsg(selector);
  }else{
    password.passwordValidationChkMsg(selector);
  }
}

export default blur;