const emailInput = document.querySelector('#email');

function emailValidate() {
  const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const emailError = document.querySelector('#emailError');
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = emailInput.value.trim() ? '올바른 이메일 주소가 아닙니다.' : '이메일을 입력해 주세요.';
  } else {
    emailInput.classList.remove('invalid');
    emailError.innerHTML = '';
  }
}

//email 에러 메시지 호출
emailInput.addEventListener('focusout', emailValidate);

export default emailValidate;
