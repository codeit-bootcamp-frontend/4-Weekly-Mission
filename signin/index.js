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
    email.style.borderColor = '#FF5B56';
    errorElement.style.color = '#FF5B56';
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
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');

  // 이메일 형식이 올바르지 않은 경우 에러 메시지 표시
  if (email.value.trim() !== '' && !emailRegExp.test(email.value.trim())) {
    errorElement.textContent = emailVaildErrMessage;
    form.insertBefore(errorElement, email.nextSibling);
    email.style.borderColor = '#FF5B56';
    errorElement.style.color = '#FF5B56';
  }
  // Q: 올바른 이메일 형식일때 input border를 원래대로 되돌리는 방법을 모르겠어요!
  // Q: 그리고 focusout을 여러번 하면 오류메세지가 여러번 뜨는데 중복되게 한 번만 뜨게 하는 방법 알고싶어요.
}

email.addEventListener('focusout', emailValidation);

let password = document.querySelector('#password'); // 비밀번호 input 요소
let pwContainer = document.querySelector('.password-container');

// 비밀번호 input 포커스 아웃을 했을 때 값이 없을 때
function passwordNoneValue() {
  const passwordErrMessage = '비밀번호를 입력해 주세요.';
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');

  if (password.value.trim() === '') {
    errorElement.textContent = passwordErrMessage;
    pwContainer.appendChild(errorElement);
    password.style.borderColor = '#FF5B56';
    errorElement.style.color = '#FF5B56';
    errorElement.style.marginTop= '6px';
  } else {
    // 비밀번호가 비어 있지 않으면 오류 메시지를 제거합니다.
    let existingError = pwContainer.querySelector('.error-message');
    if (existingError) {
      pwContainer.removeChild(existingError);
    }
  }
}

password.addEventListener('focusout', passwordNoneValue);