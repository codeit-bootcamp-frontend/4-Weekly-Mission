import login from './loginCheck.js';

//로그인 버튼에 이벤트 리스너 등록
const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', login);

function loginButtonByEnter(e) {
  if (e.code === 'Enter') {
    formname.submit();
    e.preventDefault();
  }
}
loginButton.addEventListener('keypress', loginButtonByEnter);

export default loginButtonByEnter;
