document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.sign-box');
  const emailInput = document.querySelector('#signin-email');
  const errorText = document.createElement('div');

  // 함수 정의
  // 이메일 확인 함수
  function emailCheck() {
    const email = emailInput.value.trim();
    clearErrorStyle(emailInput);

    // 에러 메세지 삭제
    if (errorText.parentNode === emailInput.parentNode) {
      emailInput.parentNode.removeChild(errorText);
    }
    // 이메일 미입력 에러
    if (email == '') {
      showError(errorText, '이메일을 입력해 주세요.', emailInput);
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

  // 에러 스타일 빼기
  function clearErrorStyle(inputElement) {
    const parentContainer = inputElement.parentNode;
    const errorElement = parentContainer.querySelector('.error-message');

    parentContainer.classList.remove('error');
    if (errorElement == true) {
      parentContainer.removeChild(errorText);
    }
  }

  // 에러 메세지 띄우기
  function showError(errorText, message, inputElement) {
    errorText.textContent = message;
    errorText.classList.add('error-message');
    inputElement.parentNode.appendChild(errorText);

    inputElement.parentNode.classList.add('error');
  }

  //이벤트 리스너 부여
  emailInput.addEventListener('focusout', function () {
    emailCheck();
  });
});
