// email input 포커스 아웃을 했는데 값이 없을때
let email = document.querySelector('#email');
let form = document.querySelector('.contents-form');

function emailNoneValue() {
  const emailErrMessage = '이메일을 입력해 주세요.';
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');

  if (email.value.trim() === '') {
    errorElement.textContent = emailErrMessage;
    form.insertBefore(errorElement, email.nextSibling);
  } else {
    // 이메일이 비어 있지 않으면 오류 메시지를 제거합니다.
    let existingError = form.querySelector('.error-message');
    if (existingError) {
      form.removeChild(existingError);
    }
  }
}

email.addEventListener('focusout', emailNoneValue);

// email input 포커스 아웃을 했는데 이메일 형식에 맞지 않을때

function emailValidation() {
  const emailVaildErrMessage = '올바른 이메일 주소가 아닙니다.';
  const emailRegExp = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z.]+$/;
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');

  // 이메일 형식이 올바르지 않은 경우 에러 메시지 표시
  if (email.value.trim() !== '' && !emailRegExp.test(email)) {
    errorElement.textContent = emailVaildErrMessage;
    form.insertBefore(errorElement, email.nextSibling);
  }
}

email.addEventListener('focusout', emailValidation);