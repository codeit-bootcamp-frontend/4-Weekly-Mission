document.addEventListener('DOMContentLoaded', function () {

  var emailInput = document.getElementById('emailBox');
  var passwordInput = document.getElementById('pwBox');
  var loginBtn = document.getElementById('loginBtn');
  var eyeButton = document.querySelector('.eye-button');

  // 눈 모양 버튼 클릭 
  eyeButton.addEventListener('click', function () {
    togglePasswordVisibility();
  });

  function togglePasswordVisibility() {
    var isPasswordVisible = passwordInput.type === 'text';

    // 비밀번호 보이기/가리기 토글
  if (isPasswordVisible) {
    passwordInput.type = 'password';
  } else {
    passwordInput.type = 'text';
  }

    // 눈 모양 아이콘 변경
    var imgElement = eyeButton.querySelector('img');
      if (isPasswordVisible) {
        imgElement.src = './images/eye-off.svg';
    } else {
        imgElement.src = './images/eye-on.svg';
    }
  }
  // 이메일 입력 상자에 focus out 
  emailInput.addEventListener('blur', function () {
    validateEmail();
  });

  // 비밀번호 입력 상자에서 focus out 
  passwordInput.addEventListener('blur', function () {
    validatePassword();
  });

  // 로그인 버튼 클릭 
  loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    loginUser();
  });

  // 엔터 키 입력 
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      loginUser();
    }
  });

  // 이메일 양식 확인
  function validateEmail() {
    var emailValue = emailInput.value.trim();
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');

    if (emailValue === '') {
      errorDiv.textContent = '이메일을 입력해 주세요.';
      showErrorMessage(errorDiv, emailInput);
    } else if (!emailInput.validity.valid) {
      errorDiv.textContent = '올바른 이메일 주소가 아닙니다.';
      showErrorMessage(errorDiv, emailInput);
    } else {
      hideErrorMessage(emailInput);
    }
  }

  function validatePassword() {
    var passwordValue = passwordInput.value;
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');

    if (passwordValue === '') {
      errorDiv.textContent = '비밀번호를 입력해 주세요.';
      showErrorMessage(errorDiv, passwordInput);
    } else {
      hideErrorMessage(passwordInput);
    }
  }

  function loginUser() {
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    //특정 계정으로 로그인 했을 때
    if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
      window.location.href = './folder.html';
      
    } else {
      showErrorMessage(createEmailError(), emailInput);
      showErrorMessage(createPasswordError(), passwordInput);
    }
  }

  function createEmailError() {
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = '이메일을 확인해 주세요.';
    return errorDiv;
  }

  function createPasswordError() {
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = '비밀번호를 확인해 주세요.';
    return errorDiv;
  }

  // 에러 메세지 보이기
  function showErrorMessage(errorMessage, targetInput) {
    hideErrorMessage(targetInput);
    targetInput.parentNode.appendChild(errorMessage);
  }

  // 에러 메세지 가리기
  function hideErrorMessage(targetInput) {
    var existingError = targetInput.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
});
