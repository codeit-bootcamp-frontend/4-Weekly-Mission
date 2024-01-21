const signInput = document.querySelector('.sign-input');
const inputError = document.querySelector('.input-error');
const inputPassword = document.querySelector('#password-input');
const inputErrorPassword = document.querySelector('.input-error-pwd');
const signForm = document.querySelector('.sign-form');

const isEmpty = (e, inputValue, inputError) => {
  // input이 비어있는경우
  if (!inputValue) {
    const { title } = e.target.dataset;
    inputError.textContent = `${title}을 입력해주세요.`;
    e.target.classList.add('error');
  }
};

const validateEmail = (e, inputValue, inputError) => {
  // 이메일 형식이 맞지 않는 경우
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(inputValue)) {
    inputError.textContent = '올바른 이메일 주소가 아닙니다.';
    e.target.classList.add('error');
  }
};

// 아이디 유효성
const inputErrorMessage = e => {
  const inputValue = e.target.value;
  validateEmail(e, inputValue, inputError);
  isEmpty(e, inputValue, inputError);
};

// 비밀번호 유효성
const inputErrorMessagePass = e => {
  const inputValue = e.target.value;
  isEmpty(e, inputValue, inputErrorPassword);
};

const inputText = e => {
  const inputValue = e.target.value;
  if (e.keyCode !== 13) {
    if (inputValue) {
      inputError.textContent = '';
      e.target.classList.remove('error');
    }
  }
};

const userCheck = () => {
  if (signInput.value !== 'test@codeit.com') {
    inputError.textContent = '이메일을 확인해 주세요.';
    signInput.classList.add('error');
  } else {
    inputError.textContent = '';
    signInput.classList.remove('error');
  }

  if (inputPassword.value !== 'codeit101') {
    inputErrorPassword.textContent = '비밀번호를 확인해 주세요.';
    inputPassword.classList.add('error');
  } else {
    inputErrorPassword.textContent = '';
    inputPassword.classList.remove('error');
  }
  if (signInput.value === 'test@codeit.com' && inputPassword.value === 'codeit101') {
    window.location.href = '/folder';
  }
};

const submitForm = e => {
  e.preventDefault();
  userCheck();
};

signForm.addEventListener('submit', submitForm);
signInput.addEventListener('keyup', inputText);

signInput.addEventListener('keydown', inputText);
signInput.addEventListener('blur', inputErrorMessage);
inputPassword.addEventListener('blur', inputErrorMessagePass);
