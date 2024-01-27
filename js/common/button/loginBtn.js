import init from '../init/init.js';
import email from '../input/email/emailValidation.js';
import password from '../input/password/passwordValidtaion.js';
import errMsg from '../errMsg/errMsg.js';

const btn = document.querySelector('#loginBtn');

function validation() {
    //초기화
    init(email.selector);
    init(password.selector);
  
    if(password.selector.value === 'codeit101' && email.selector.value === 'test@codeit.com'){
      location.href = 'folder.html';
    }else {
      email.selector.classList.add('invalid');
      password.selector.classList.add('invalid');
      errMsg(email.selector, '이메일을 확인해 주세요.');
      errMsg(password.selector, '비밀번호를 확인해 주세요.');
    }
}

export default {btn, validation};