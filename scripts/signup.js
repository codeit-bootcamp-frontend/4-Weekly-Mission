import { EXIST_EMAIL, EXIST_PASSWORD } from '../utils/constant.js';

let email = document.querySelector('#email');
let PW = document.querySelector('#pw');
let form = document.querySelector('.form-area');

// 유효한 이메일 형식인지 확인
function isValidEmail(email) {
  // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // return regex.test(email.value);
  return email.value.includes('@') && email.value.includes('.');
}

// 에러메세지가 이미 존재하는지 확인
function alertExist(email) {
  return email.classList.contains('red-box');
}

email.addEventListener('focusout', (e) => {
  if (email.value === '' || !isValidEmail(email)) {
    if (!alertExist(email)) {
      email.classList.add('red-box');
      let alert = document.createElement('p');
      alert.textContent =
        email.value === ''
          ? '이메일을 입력해 주세요'
          : '올바른 이메일 주소가 아닙니다.';
      alert.classList.add('red');
      document.querySelector('.email').append(alert);
    } else if (email.value === EXIST_EMAIL) {
      email.classList.add('red-box');
      let alert = document.createElement('p');
      alert.textContent = '이미 사용 중인 이메일입니다.';
      alert.classList.add('red');
      document.querySelector('.email').append(alert);
    }
  }
});

email.addEventListener('focusin', (e) => {
  // email.value = '';
  if (alertExist(email)) {
    email.nextElementSibling.remove();
    email.classList.remove('red-box');
  }
});

// 비밀번호가 조건을 충족하지 않는 경우 에러 메시지 출력
PW.addEventListener('focusout', (e) => {
  const password = PW.value;
  const isLengthValid = password.length >= 8;
  const containsLetter = /[a-zA-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);

  if (!isLengthValid || !(containsLetter && containsNumber)) {
    PW.classList.add('red-box');
    let alert = document.createElement('p');
    alert.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    alert.classList.add('red');
    document.querySelector('.password').append(alert);
  }
});

PW.addEventListener('focusin', (e) => {
  PW.value = '';
  if (alertExist(PW)) {
    PW.parentElement.nextElementSibling.remove();
    PW.classList.remove('red-box');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === EXIST_EMAIL && PW.value === EXIST_PASSWORD) {
    window.location.href = './';
  }
});
