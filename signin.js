const emailForm = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordForm = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

//email 에러 메시지 호출
emailForm.addEventListener('focusout', function () {
  if (!emailForm.value.includes('@')) {
    emailForm.classList.add('invalid');
    emailError.innerHTML = emailForm.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
  } else {
    emailForm.classList.remove('invalid');
    emailError.innerHTML = '';
  }
});

//password 에러 메시지 호출
passwordForm.addEventListener('focusout', function () {
  if (!passwordForm.value.trim()) {
    passwordForm.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 입력해 주세요.';
  } else {
    passwordForm.classList.remove('invalid');
    passwordError.innerHTML = '';
  }
});
