document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.sign-box');
  const emailInput = document.querySelector('#signin-email');
  const errorText = document.createElement('div');

  // 함수 정의
  // 이메일 확인 함수
  function emailCheck() {
    const email = emailInput.value.trim();
    clearErrorStyle(emailInput);

    if (errorText.parentNode === )
  }

  function passwordCheck () {
    const password = passwordInput.value.trim();
    clearErrorStyle(passwordInput);
  }

  emailInput.addEventListener('focusout', emailCheck());
  form.addEventListener('submit', function (event) {
    const isEmailValid = emailCheck();
    const isPasswordValid = passwordCheck();

    if (isEmailValid && isPasswordValid) {

    }
  });

 
});
