import {email, password, eye, blur, login, enterEvent} from '../common/loginCommon.js';

//email focus out 이벤트
email.selector.addEventListener('blur', (e) => blur.loginEmail(e));

//비밀번호 focus out 이벤트
password.selector.addEventListener('blur', (e) => blur.signinPassword(e));

//비밀번호 눈모양 클릭 이벤트
eye.eyeIcon.addEventListener('click', (e) => eye.toggleEyeIcon(e));

// 로그인 성공 이벤트
login.btn.addEventListener('click', () => login.validation());

// 엔터 이벤트
window.addEventListener('keyup', (e) => enterEvent(e));