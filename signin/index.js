const email = document.querySelector('#email');
const password = document.querySelector('#password');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');
const passwordEye = document.querySelector('.passwordEye');
const form = document.querySelector('form');

// email input 포커스 아웃을 했는데 값이 없을때
function emailNoneValue() {
  const emailErrMessage = '이메일을 입력해 주세요.';

  if (!email.value.trim()) {
    idErrorMessage.textContent = emailErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailError');
    email.style.borderColor = '#FF5B56';
  } else {
    // 이메일이 비어 있지 않으면 오류 메시지를 제거합니다.
    idErrorMessage.textContent='';
    email.classList.remove('emailError');
    email.style.borderColor = '';
  }
}

email.addEventListener('focusout', emailNoneValue);

// email input 포커스 아웃을 했는데 이메일 형식에 맞지 않을
function emailValidation() {
  const emailVaildErrMessage = '올바른 이메일 주소가 아닙니다.';
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;

  // 이메일 형식이 올바르지 않은 경우 에러 메시지 표시
  const emailInput = email.value.trim();
  if (emailInput && !emailRegExp.test(emailInput)) {
    idErrorMessage.textContent = emailVaildErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailValidError');
    email.style.borderColor = '#FF5B56';
  } 
}

email.addEventListener('focusout', emailValidation);

// 비밀번호 input 포커스 아웃을 했을 때 값이 없을 때
function passwordNoneValue() {
  const passwordErrMessage = '비밀번호를 입력해 주세요.';

  if (!password.value.trim()) {
    pwErrorMessage.textContent = passwordErrMessage;
    pwErrorMessage.style.color = '#FF5B56';
    password.classList.add('pwError');
    password.style.borderColor = '#FF5B56';
  } else {
    // 비밀번호가 비어 있지 않으면 오류 메시지를 제거합니다.
    pwErrorMessage.textContent='';
    password.classList.remove('pwError');
    password.style.borderColor = '';
  }
}

password.addEventListener('focusout', passwordNoneValue);

// 로그인 아이디/비밀번호가 틀릴 때
const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'sprint101';

async function signInAPI(email, pw) {

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: TEST_EMAIL,
        password: TEST_PW,
      }),
    });

    if (
      email === TEST_EMAIL &&
      pw === TEST_PW &&
      response.status === 200) {
      window.location.href = "../folder.html";
    } else {
      password.classList.add('pwError');
      pwErrorMessage.textContent = '이메일 또는 비밀번호가 잘못되었습니다.';
      pwErrorMessage.style.color = '#FF5B56';
      password.style.borderColor = '#FF5B56';
    }
  } catch (error) {
    console.error('로그인 요청 중 오류 발생:', error);
  }
}

function login(event) {
  event.preventDefault();
  signInAPI(email.value, password.value);
}

form.addEventListener('submit', login);

// 눈 모양 클릭하면 비밀번호 보이게 하는 기능
function togglePassword() {
  if (password.type === 'password') {
    password.type = 'text';
    passwordEye.src = '/assets/image/eye-on.png';
  } else {
    password.type = 'password';
    passwordEye.src = '/assets/image/eye-off.png';
  }
}

passwordEye.addEventListener('click', togglePassword);