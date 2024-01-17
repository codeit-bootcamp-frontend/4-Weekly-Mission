//이메일의 형식을 검사하는 매서드
let emailInput = document.getElementById('signin-email');

function emailCheck(email) {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

emailInput.addEventListener('focusout', function (event) {
  let emailValue = emailInput.value;
  let emailError = document.getElementById('email__error-msg');
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
