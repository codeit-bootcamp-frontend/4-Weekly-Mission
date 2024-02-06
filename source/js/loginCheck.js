import postFetcher from '../utils/postRequest.js';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

//특정 이메일과 비밀번호 입력 시 페이지 이동
async function login() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  //POST request 보내기
  try {
    const result = await postFetcher('api/sign-in', 'email: emailValue, password: passwordValue');
    if (!result.ok) {
      console.error('Error: ' + result.status);
      emailInput.classList.add('invalid');
      emailError.innerHTML = '이메일을 확인해 주세요.';
      passwordInput.classList.add('invalid');
      passwordError.innerHTML = '비밀번호를 확인해 주세요.';
    } else {
      window.location.href = '../pages/folder.html';
    }
  } catch (error) {
    console.error(error);
  }
}
const signinForm = document.getElementById('signinForm');
signinForm.addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});

//로그인 버튼에 이벤트 리스너 등록
const loginButton = document.getElementById('loginButton');

export default login;
