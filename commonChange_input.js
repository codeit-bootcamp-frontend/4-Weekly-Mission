//이메일 입력 확인
export function emailHandleInputFocusOut(inputElement, errorElement) {
  // focusout 이벤트가 발생했을 때 실행되는 코드
  if (!inputElement.value) {
    errorElement.textContent = '이메일을 입력해 주세요.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; // 테두리 색상 변경
  } else if(!validateEmail(inputElement.value)) {
    errorElement.textContent = '올바른 이메일 주소가 아닙니다.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; // 테두리 색상 변경  
  } else {
    setNormalStyle(inputElement, errorElement);
  }
}

//비밀번호 입력 확인
export function passwordHandleFocusOut(inputElement, errorElement) {
  if (!inputElement.value) {
    errorElement.textContent = '비밀번호를 입력해 주세요.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; 
  } else {
    setNormalStyle(inputElement, errorElement);
  }
}

export function validateEmail(email) {
  // 간단한 이메일 유효성 검사를 위한 정규 표현식 사용
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//아이콘 변경
export function togglePasswordType(passwordInput,passwordIcon) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
}

export const setNormalStyle = (inputElement,errorElement) => {
  errorElement.style.display = 'none';
  errorElement.textContent = '';
  inputElement.style.borderColor = '#CCD5E3';
}