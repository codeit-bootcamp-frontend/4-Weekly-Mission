const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');
const pwRepeatErrorMessage = document.querySelector('.pwRepeatErrorMessage');
const passwordEye = document.querySelector('.passwordEye');
const passwordRepEye = document.querySelector('.passwordRepEye');
const form = document.querySelector('form');
const TEST_EMAIL = 'test@codeit.com';

function emailFocusOut() {
  const emailErrMessage = '이메일을 입력해 주세요.';
  const emailVaildErrMessage = '올바른 이메일 주소가 아닙니다.';
  const idAlreadyErrMessage = '이미 사용 중인 이메일입니다.';
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
  const emailInput = email.value.trim();

  // 이메일이 비어 있는 경우
  if (!emailInput) {
    idErrorMessage.textContent = emailErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailError');
    email.style.borderColor = '#FF5B56';
  } else if (!emailRegExp.test(emailInput)) { // 이메일 형식이 올바르지 않은 경우
    idErrorMessage.textContent = emailVaildErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailValidError');
    email.style.borderColor = '#FF5B56';
  } else if (emailInput === TEST_EMAIL) { // 이미 사용 중인 이메일인 경우
    idErrorMessage.textContent = idAlreadyErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailAlreadyError');
    email.style.borderColor = '#FF5B56';
  } else {
    // 유효성 검사 통과 시
    idErrorMessage.textContent = '';
    email.classList.remove('emailError', 'emailValidError', 'emailAlreadyError');
    email.style.borderColor = '';
  }
}

email.addEventListener('focusout', emailFocusOut);

// 비밀번호 자릿수 & 형식에 맞지 않을 때
function pwValidation() {
  const pwVaildErrMessage = '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.';
  const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

  const pwInput = password.value.trim();
  if (pwInput && !pwRegExp.test(pwInput)) {
    pwErrorMessage.textContent = pwVaildErrMessage;
    pwErrorMessage.style.color = '#FF5B56';
    password.classList.add('pwVaildError');
    password.style.borderColor = '#FF5B56';
  } else {
    pwErrorMessage.textContent='';
    password.classList.remove('pwError');
    password.style.borderColor = '';
  }
}

password.addEventListener('focusout', pwValidation);

// 비밀번호 & 비밀번호 확인 일치하지 않을 때
function pwRepCorrect() {
  const pwRepErrMessage = '비밀번호가 일치하지 않아요.';

  if (!(password.value === passwordRepeat.value)) {
    pwRepeatErrorMessage.textContent = pwRepErrMessage;
    pwRepeatErrorMessage.style.color = '#FF5B56';
    passwordRepeat.classList.add('pwRepError');
    passwordRepeat.style.borderColor = '#FF5B56';
  } else {
    pwRepeatErrorMessage.textContent='';
    passwordRepeat.classList.remove('pwRepError');
    passwordRepeat.style.borderColor = '';
  }
}

passwordRepeat.addEventListener('focusout', pwRepCorrect);

// 이메일 중복 확인
async function checkAccount(email) {
  const TEST_EMAIL = 'test@codeit.com';
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(TEST_EMAIL),
    }
  );

  if (response.status === 409) {
    alert("이미 존재하는 이메일입니다.");
    return false;
  }
  
  return true;
}

async function signUpAPI(email, pw) {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: pw,
    }),
  });

  if (response.status === 200) {
    window.location.href = "../folder.html";
    return true;
  }

  console.error("Sign-up failed:", response.status);
  return false;
}

function signUp(event) {
  event.preventDefault();
  if (checkAccount(email.value)) {
    signUpAPI(email.value, password.value);
  }
}

form.addEventListener('submit', signUp);

// 눈 모양 클릭시 비밀번호 보이게 하는 기능
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

// 눈 모양 클릭시 비밀번호 확인 보이게 하는 기능
function togglePasswordRep() {
  if (passwordRepeat.type === 'password') {
    passwordRepeat.type = 'text';
    passwordRepEye.src = '/assets/image/eye-on.png';
  } else {
    passwordRepeat.type = 'password';
    passwordRepEye.src = '/assets/image/eye-off.png';
  }
}

passwordRepEye.addEventListener('click', togglePasswordRep);