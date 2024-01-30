import {email, password, eye, blur, signup, enterEvent} from '../common/loginCommon.js';

//email focus out 이벤트
email.selector.addEventListener('blur', (e) => blur.signupEmail(e));

//비밀번호 focus out 이벤트
password.selector.addEventListener('blur', (e) => blur.signupPassword(e));

//비밀번호 확인 focus out 이벤트
password.selectorOfChk.addEventListener('blur', (e) => blur.signupPasswordChk(e));

//비밀번호 눈모양 클릭 이벤트
eye.eyeIcon.addEventListener('click', (e) => eye.toggleEyeIcon(e));
eye.eyeIcon2.addEventListener('click', (e) => eye.toggleEyeIcon(e));

// 회원가입 클릭 이벤트
signup.btn.addEventListener('click', () => signup.validation());

// 엔터 이벤트
window.addEventListener('keyup', (e) => enterEvent(e));
