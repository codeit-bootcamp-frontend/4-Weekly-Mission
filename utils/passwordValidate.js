const passwordInput = document.querySelector('#password');

function passwordValidate() {
  const passwordError = document.querySelector('#passwordError');
  if (!passwordInput.value.trim()) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 입력해 주세요.';
  } else {
    passwordInput.classList.remove('invalid');
    passwordError.innerHTML = '';
  }
}

//password 에러 메시지 호출
passwordInput.addEventListener('focusout', passwordValidate);

export default passwordValidate;
