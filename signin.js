const emailInput = document.getElementById('signin-email');
const pwInput = document.getElementById('signin-pw');
const pwOnOffImg = document.getElementById('pw-onoff');
//이메일 유효성 검사 메서드
function emailCheck(email) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

// 이메일 에러 검사 메서드
// 작성 되었는지, 유효한 이메일인지 검사
emailInput.addEventListener('focusout', function () {
  const emailValue = emailInput.value;
  const emailError = document.getElementById('email__error-msg');
  if (!emailValue) {
    emailError.innerHTML = '이메일을 입력해 주세요.';
    emailError.style.display = 'block';
  } else if (emailCheck(emailValue) === false) {
    emailError.innerHTML = '올바른 이메일 주소가 아닙니다.';
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
});

//비밀번호 작성 되었는지 검사
pwInput.addEventListener('focusout', function () {
  const pwValue = pwInput.value;
  const pwError = document.getElementById('pw__error-msg');
  if (!pwValue) {
    pwError.innerHTML = '비밀번호를 입력해 주세요.';
    pwOnOffImg.style.bottom = '2.9375rem';
    pwError.style.display = 'block';
  } else {
    pwOnOffImg.style.bottom = '1.1875rem';
    pwError.style.display = 'none';
  }
});
