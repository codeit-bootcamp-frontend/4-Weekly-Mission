const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#passwordCheck');
const emailError = document.querySelector('#emailError');
const pwError = document.querySelector('#pwError');
const pwCheckError = document.querySelector('#pwCheckError');
const signBtn = document.querySelector('#signBtn');

const testEmail = "test@codeit.com";

const emailReg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_\.-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

  document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      sign();
    }
  });

  signBtn.addEventListener('click', sign);
  // email.addEventListener('focusin', inputFocus(email));
  // password.addEventListener('focusin', inputFocus(password));
  // passwordCheck.addEventListener('focusin', inputFocus(passwordCheck));
  email.addEventListener('focusout', emailF);
  password.addEventListener('focusout', passwordF);
  passwordCheck.addEventListener('focusout', pwCheck);

function sign() {
  if (emailReg.test(email.value) && passwordReg.test(password.value) && password.value === passwordCheck.value) {
    window.location.href = './folder.html'
  }
}

// function inputFocus(e) {
//   e.classList.add('inputFocus');
// }

function emailF() {
  if (!email.value) {
    email.classList.add('inputError');
    emailError.textContent = "이메일을 입력해 주세요";
  } else if (!emailReg.test(email.value)) {
    email.classList.add('inputError');
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (email.value === testEmail) {
    email.classList.add('inputError');
    emailError.textContent = "이미 사용 중인 이메일입니다.";
  } else {
    email.classList.remove('inputError');
    emailError.textContent = '';
  }
}

function passwordF() {
  if (!password.value) {
    password.classList.add('inputError');
    pwError.textContent = "비밀번호를 입력해 주세요";
  } else if (!passwordReg.test(password.value)) {
    password.classList.add('inputError');
    pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else {
    password.classList.remove('inputError');
    pwError.textContent = '';
  }
}

function pwCheck() {
  if (password.value !== passwordCheck.value) {
    passwordCheck.classList.add('inputError');
    pwCheckError.textContent = "비밀번호가 일치하지 않아요.";
  } else {
    passwordCheck.classList.remove('inputError');
    pwCheckError.textContent = '';
  }
}