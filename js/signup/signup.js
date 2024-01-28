import {email, password, eye, blur, signup, enterEvent} from '../common/loginCommon.js';

//email focus out 이벤트
email.selector.addEventListener('blur', () => blur(email.selector));

//비밀번호 focus out 이벤트
password.selector.addEventListener('blur', () => blur(password.selector));

//비밀번호 확인 focus out 이벤트
password.selectorOfChk.addEventListener('blur', () => blur(password.selectorOfChk));

//비밀번호 눈모양 클릭 이벤트
eye.selector.addEventListener('click', eye.eyeClick);
eye.selector2.addEventListener('click', eye.eyeClick);

// 회원가입 클릭 이벤트
signup.btn.addEventListener('click', () => signup.validation());

// 엔터 이벤트
window.addEventListener('keyup', (e) => enterEvent(e));
