const emailInput = document.querySelector('#email');
const emailPattern = /^A[0-9a-zA-Z] ([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

//email 에러 메시지 호출
emailInput.addEventListener('focusout', function () {
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = emailInput.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
  } else {
    emailInput.classList.remove('invalid');
    emailError.innerHTML = '';
  }
});

//password 에러 메시지 호출
passwordInput.addEventListener('focusout', function () {
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 입력해 주세요.';
  } else {
    passwordInput.classList.remove('invalid');
    passwordError.innerHTML = '';
  }
});

//특정 이메일과 비밀번호 입력 시 페이지 이동
const validEmail = 'test@codeit.com';
const validPassword = 'codeit101';

function login() {
  const emailValue = document.querySelector('#email').value;
  const passwordValue = document.querySelector('#password').value;

  if (emailValue === validEmail && passwordValue === validPassword) {
    window.location.href = './folder';
  } else if (emailValue !== validEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = '이메일을 확인해 주세요.';
  } else if (passwordValue !== validPassword) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 확인해 주세요.';
  }
}

//로그인 버튼에 이벤트 리스너 등록
document.querySelector('#loginBtn').addEventListener('click', login);
document.querySelector('#loginBtn').addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    login();
  }
});
