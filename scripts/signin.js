let email = document.querySelector('#email');
let PW = document.querySelector('#pw');
let login = document.querySelector('.login-btn');

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
  // 논리 연산자 or 사용해서 중복 제거
  if (email.value === ' ' || !isValidEmail(email)) {
    if (!alertExist(email)) {
      email.classList.add('red-box');
      let alert = document.createElement('p');
      alert.textContent = '이메일을 입력해 주세요.';
      alert.classList.add('red');
      document.querySelector('.email').append(alert);
    }
  }
});

email.addEventListener('focusin', (e) => {
  email.value = '';
  if (alertExist(email)) {
    document.querySelector('.red').remove();
    email.classList.remove('red-box');
  }
});

login.addEventListener('click', (e) => {
  if (email.value === 'test@codeit.com' && PW.value === 'codeit101') {
    login.addEventListener('click', (window.location.href = './'));
  }
});
