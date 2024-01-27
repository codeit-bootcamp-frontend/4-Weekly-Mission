import {email, password, eye, blur, login} from '../common/loginCommon.js';

//email focus out 이벤트
email.selector.addEventListener('blur', () => blur(email.selector));

//비밀번호 focus out 이벤트
password.selector.addEventListener('blur', () => blur(password.selector));

//비밀번호 눈모양 클릭 이벤트
eye.selector.addEventListener('click', eye.eyeClick);

// 로그인 성공 이벤트
login.btn.addEventListener('click', () => login.validation());

