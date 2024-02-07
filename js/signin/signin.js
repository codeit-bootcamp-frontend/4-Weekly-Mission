import {email, password, eye, blur, login, enterEvent, token} from '../common/loginCommon.js';

//email focus out 이벤트
email.selector.addEventListener('blur', (e) => blur.signinEmail(e));

//비밀번호 focus out 이벤트
password.selector.addEventListener('blur', (e) => blur.signinPassword(e));

//비밀번호 눈모양 클릭 이벤트
eye.eyeIcon.addEventListener('click', (e) => eye.toggleEyeIcon(e));

// 로그인 성공 이벤트
login.btn.addEventListener('click', (e) => login.validation(e));

// 엔터 이벤트
window.addEventListener('keyup', (e) => enterEvent(e));

// 로컬 스토리지에 토큰 존재 시 folder로 이동
if(token.isLocalStorageExist()){
  window.location.href = 'folder.html'
}
