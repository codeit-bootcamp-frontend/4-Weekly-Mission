const toggleIcon = document.getElementById('eyeIcon');
const emailInput = document.getElementById('userEmail');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginButton = document.getElementById('signinButton');

toggleIcon.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.src = "img/eye-on.png"; 
  } else {
    passwordInput.type = 'password';
    toggleIcon.src = "img/eye-off.png"; 
  }
});

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
loginButton.addEventListener('click', attemptLogin);
window.addEventListener('keypress', handleKeyPress);


function isValidEmail(email) {
    // 간단한 이메일 형식 검사
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/.test(email);
  }

function showErrorMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.previousElementSibling.style.borderColor = 'red'; // 테두리 색상 빨간색으로 변경
}
  
function hideErrorMessage(element) {
    element.textContent = '';
    element.style.display = 'none';
    element.previousElementSibling.style.borderColor = ''; // 테두리 색상 초기화
}

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showErrorMessage(emailError, '이메일을 입력해 주세요.');
  } else if (!isValidEmail(emailValue)) {
    showErrorMessage(emailError, '올바른 이메일 주소가 아닙니다.');
  } else {
    hideErrorMessage(emailError);
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showErrorMessage(passwordError, '비밀번호를 입력해 주세요.');
  } else {
    hideErrorMessage(passwordError);
  }
}

function handleKeyPress(e) {
    if(e.key === 'Enter') {
        attemptLogin();
        e.preventDefault();
    }
}

function attemptLogin() {
  validateEmail();
  validatePassword();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    // 로그인 성공 시 페이지 이동
    console.log('로그인 성공');
    window.location.href = 'folder.html';
  } else {
    if (emailValue !== 'test@codeit.com') {
      showErrorMessage(emailError, '이메일을 확인해 주세요.');
    }
    if (passwordValue !== 'codeit101') {
      showErrorMessage(passwordError, '비밀번호를 확인해 주세요.');
    }
  }
}