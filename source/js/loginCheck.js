const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

//특정 이메일과 비밀번호 입력 시 페이지 이동
function login() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const validEmail = 'test@codeit.com';
  const validPassword = 'codeit101';

  if (emailValue === validEmail && passwordValue === validPassword) {
    window.location.href = './folder';
  }

  if (emailValue !== validEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = '이메일을 확인해 주세요.';
  }

  if (passwordValue !== validPassword) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 확인해 주세요.';
  }
}
const signinForm = document.getElementById('signinForm');
signinForm.addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});

//로그인 버튼에 이벤트 리스너 등록
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);

export default login;
