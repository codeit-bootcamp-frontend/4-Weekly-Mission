let email = document.querySelector('#email');
let PW = document.querySelector('#pw');
let login = document.querySelector('.login-btn');

function isValidEmail(email) {
  // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // return regex.test(email.value);
  return email.value.includes('@') && email.value.includes('.');
}

function alertExist(email) {
  return email.classList.contains('red-box');
}

email.addEventListener('focusout', (e) => {
  if (email.value === '') {
    if (!alertExist(email)) {
      email.classList.add('red-box');
      let alert = document.createElement('p');
      alert.textContent = '이메일을 입력해 주세요.';
      alert.classList.add('red');
      document.querySelector('.email').append(alert);
    }
  } else if (!isValidEmail(email)) {
    if (!alertExist(email)) {
      email.classList.add('red-box');
      let alert = document.createElement('p');
      alert.textContent = '올바른 이메일 주소가 아닙니다.';
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
  }
});
