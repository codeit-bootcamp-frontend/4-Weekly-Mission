const form = document.querySelector('.frame-input');
const inputEmail = document.querySelector('.input-email input');
const inputPassword = document.querySelector('#input-pw input');
const inputPasswordCheck = document.querySelector('#input-pw-check input');
const errorMsgEmail = document.querySelector('.error-email');
const errorMsgPassword = document.querySelector('.error-pw');
const errorMsgPasswordCheck = document.querySelector('.error-check-pw');
const showPasswordBtn = document.querySelector('.show-pw-btn');
const showPasswordCheckBtn = document.querySelector('.show-pw-check-btn');

async function checkEmailRequest() {
  const url = 'https://bootcamp-api.codeit.kr/api/check-email';
  const checkEmail = {
    email: inputEmail.value,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(checkEmail),
    });
    const responseStatus = response.status;
    if (responseStatus == 200) {
      alert(`사용 가능한 이메일입니다`);
    }
  } catch (err) {
    alert(`이미 사용 중인 이메일입니다`);
    console.log(err.message);
  }
}

async function checkIsValidSignupFormRequest() {
  const url = 'https://bootcamp-api.codeit.kr/api/sign-up';
  const signupForm = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  try {
    console.log(`유효성 검사중`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(signupForm),
    });
    const responseStatus = response.status;
    if (responseStatus === 200) {
      window.location.href = 'folder.html';
    }
  } catch (err) {
    alert(`유효한 회원가입 형식이 아닙니다`);
    console.log(err.message);
  }
}

function checkIsValidSignupForm() {
  e.preventDefault();

  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (exptext.test(inputEmail.value)) {
    if (
      pwReg.test(inputPassword.value) &&
      inputPassword.value === inputPasswordCheck.value
    ) {
      checkIsValidSignupFormRequest();
    }
  }
}

function showInputErrorMessage(e) {
  if (!e.target.value) {
    if (e.target.type === 'email') {
      errorMsgEmail.innerText = `이메일을 입력해 주세요.`;
      inputEmail.classList.add('border-red');
      return;
    } else if (e.target.type === 'password') {
      errorMsgPassword.innerText = `비밀번호를 입력해 주세요.`;
      inputPassword.classList.add('border-red');
      return;
    }
  } else {
    if (e.target.type === 'email') {
      const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (exptext.test(e.target.value) == false) {
        errorMsgEmail.innerText = `올바른 이메일 주소가 아닙니다.`;
        inputEmail.classList.add('border-red');
        return;
      } else if (e.target.value === 'test@codeit.com') {
        errorMsgEmail.innerText = `이미 사용 중인 이메일입니다.`;
        inputEmail.classList.add('border-red');
        checkEmailRequest();
      } else {
        errorMsgEmail.innerText = ``;
        inputEmail.classList.remove('border-red');
      }
    } else if (e.target.type === 'password') {
      const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      if (!pwReg.test(e.target.value)) {
        errorMsgPassword.innerText = `비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.`;
        inputPassword.classList.add('border-red');
      } else {
        errorMsgPassword.innerText = ``;
        inputPassword.classList.remove('border-red');
      }
    }
  }
}

function togglePasswordVisible(e) {
  const eventTargetFormId = e.target.parentElement.id;
  const eventTargetInput = document.querySelector(
    `#${eventTargetFormId} input`
  );

  if (e.target.classList.contains('invisible')) {
    e.target.src = '../images/eye-on.svg';
    eventTargetInput.type = 'text';
    e.target.classList.remove('invisible');
  } else {
    e.target.src = '../images/eye-off.svg';
    eventTargetInput.type = 'password';
    e.target.classList.add('invisible');
  }
}

function checkPassword(e) {
  if (e.target.value !== inputPassword.value) {
    errorMsgPasswordCheck.innerText = `비밀번호가 일치하지 않아요.`;
    inputPasswordCheck.classList.add('border-red');
  } else {
    errorMsgPasswordCheck.innerText = ``;
    inputPasswordCheck.classList.remove('border-red');
  }
}

inputEmail.addEventListener('focusout', showInputErrorMessage);
inputPassword.addEventListener('focusout', showInputErrorMessage);
form.addEventListener('submit', checkIsValidSignupForm);
showPasswordBtn.addEventListener('click', togglePasswordVisible);
showPasswordCheckBtn.addEventListener('click', togglePasswordVisible);
inputPasswordCheck.addEventListener('focusout', checkPassword);
