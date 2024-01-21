document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.sign-box');
  const emailInput = document.querySelector('#signin-email');
  const passwordInput = document.querySelector('#signin-password');
  const errorTextEmail = document.createElement('div');
  const errorTextPassword = document.createElement('div');
  const passwordCover = document.querySelector('.eyecon');
  let isPasswordCovered = false;

  //////////////// 함수 정의 ////////////////////

  // 이메일 확인 함수
  function emailCheck() {
    const email = emailInput.value.trim();
    clearErrorStyle(emailInput);

    // 기존 에러 메세지 삭제
    if (errorTextEmail.parentNode === emailInput.parentNode) {
      emailInput.parentNode.removeChild(errorTextEmail);
    }
    // 이메일 미입력 에러
    if (email == '') {
      showError(errorTextEmail, '이메일을 입력해 주세요.', emailInput);
      return false;
    }
    // 이메일 형식 확인
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayErrorMessage(errorTextEmail, '올바른 이메일 주소가 아닙니다.', emailInput);
      return false;
    }
    return true;
  }

  // 비번 확인 함수
  function passwordCheck() {
    const password = passwordInput.value.trim();
    clearErrorStyle(passwordInput);
    // 기존 에러 메세지 삭제
    if (errorTextPassword.parentNode === passwordInput.parentNode) {
      passwordInput.parentNode.removeChild(errorTextPassword);
    }
    // 비밀번호 미입력 에러
    if (password == '') {
      showError(errorTextPassword, '비밀번호를 입력해 주세요.', passwordInput);
      return false;
    }
    return true;
  }

  // 에러 스타일 빼기
  function clearErrorStyle(inputElement) {
    const parentContainer = inputElement.parentNode;
    const errorElement = parentContainer.querySelector('.error-message');

    parentContainer.classList.remove('error');
    if (errorElement == true) {
      parentContainer.removeChild(errorTextEmail);
    }
  }

  // 에러 메세지 띄우기
  function showError(errorText, message, inputElement) {
    errorText.textContent = message;
    errorText.classList.add('error-message');
    inputElement.parentNode.appendChild(errorText);
    inputElement.parentNode.classList.add('error');
  }

  // 눈 아이콘 변경하기
  function togglePassword() {
    const coverEye = '../image/icon/eye_closed.svg';
    const openEye = '../image/icon/eye_open.svg';
    if (isPasswordCovered) {
      passwordCover.src = coverEye;
    } else {
      passwordCover.src = openEye;
    }
    isPasswordCovered = !isPasswordCovered;
  }

  function showPassword() {
    if (isPasswordCovered) {
      passwordInput.type = 'password';
    } else {
      passwordInput.type = 'text';
    }
  }

  //////////////// 함수 사용////////////////////

  // 이메일 이벤트 리스너 부여
  emailInput.addEventListener('focusout', function () {
    emailCheck();
  });

  // 비번 이벤트 리스너 부여
  passwordInput.addEventListener('focusout', function () {
    passwordCheck();
  });

  // 로그인 버튼 입력 시 이메일 비번 확인 후 이동
  form.addEventListener('submit', function (event) {
    const codeit = { email: 'test@codeit.com', password: 'codeit101' };
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === codeit.email && password === codeit.password) {
      window.location.href = '/folder.html';
    } else {
      showError(errorTextEmail, '이메일을 확인해 주세요.', emailInput);
      showError(errorTextPassword, '비밀번호를 확인해 주세요.', passwordInput);
      event.preventDefault();
    }
  });

  passwordCover.addEventListener('click', function () {
    showPassword();
    togglePassword();
  });
});
