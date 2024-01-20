const emailSignIn = document.querySelector('.signin__email');
const emailInput = document.querySelector('#email');
const passSignIn = document.querySelector('.signin__pass');
const passInput = document.querySelector('#pass');

// 유효성 검사
function checkEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 에러 메세지 출력
function showErrorMassage() {
  const error = document.createElement('div');
  error.classList.add('errorMessage');

  if (emailInput.value.trim() === '') {
    error.textContent = '이메일을 입력해 주세요.';
  }
  else if (!checkEmail(emailInput.value)) {
    error.textContent = '올바른 이메일 주소가 아닙니다.';
  }
  else {
    error.textContent = '';
  }
  emailSignIn.appendChild(error);
}

// 로그인시 folder 페이지로 이동

emailInput.addEventListener('focusout', showErrorMassage);

