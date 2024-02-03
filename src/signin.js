//유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePass (password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

//에러 메세지 함수
function setErrorMessageToElement (input, message) {
  const ErrorMessageElement = input.parentElement.querySelector('.errorMessage');
  //에러메세지 중복 삭제 
  if (ErrorMessageElement) {
    ErrorMessageElement.remove();
  }
  //에러 메세지 생성
  const err = document.createElement('p');
  err.classList.add('errorMessage');
  err.style.color = '#FF5B56';
  err.textContent = message;
  input.style.borderColor = '#FF5B56';
  input.parentElement.appendChild(err);
}

//이메일 에러 메세지 출력
const emailInput = document.querySelector('#email');
emailInput.addEventListener('focusout', (e) => {
  const emailEmpty = emailInput.value.trim() === '';
  const findClassNameErrorMessage = emailInput.parentElement.querySelector('.errorMessage');
  
  if (emailEmpty) {
    setErrorMessageToElement (emailInput, '이메일을 입력해주세요.');
  } else if (!validateEmail(emailInput.value)) {
    setErrorMessageToElement (emailInput, '올바른 이메일 주소가 아닙니다.');
  }
  //올바른 값으로 수정
  else if (validateEmail(emailInput.value)) {
    if (findClassNameErrorMessage) {
      findClassNameErrorMessage.remove();
      emailInput.style.borderColor = '#CCD5E3'
    }
  }
})

//비밀번호 에러 메세지 출력
const passInput = document.querySelector('#pass');
passInput.addEventListener('focusout', (e) => {
  const passwordEmpty = passInput.value.trim() === '';
  const findClassNameErrorMessage = passInput.parentElement.querySelector('.errorMessage');
  
  if(passwordEmpty) {
    setErrorMessageToElement (passInput, '비밀번호를 입력해주세요.');
  }
  //올바른 값으로 수정
  else if (validatePass(passInput.value)) {
    if (findClassNameErrorMessage) {
      findClassNameErrorMessage.remove();
      passInput.style.borderColor = '#CCD5E3'
    }
  }
});

//로그인 시도
const signForm = document.querySelector('.signin');
signForm.addEventListener('submit', (e =>{
  //현재페이지에서 테스트
  e.preventDefault();
  
  const tryCorrectId = emailInput.value === 'test@codeit.com' && passInput.value === 'codeit101'

  if (tryCorrectId) {
    window.location.href = "./folder";
  } else {
    setErrorMessageToElement (emailInput, '이메일을 확인해주세요.');
    setErrorMessageToElement (passInput, '비밀번호를 확인해주세요.');
  }
}));

//눈 모양 클릭
const toggle = document.querySelector('.fa-solid');
toggle.addEventListener('click', (e) => {
  const toggleIcon = toggle.previousElementSibling;
  
  if (toggleIcon.type === 'password') {
    toggleIcon.type = 'text';
    toggle.classList.remove('fa-eye-slash');
    toggle.classList.add('fa-eye');
  } else {
    toggleIcon.type = 'password';
    toggle.classList.remove('fa-eye');
    toggle.classList.add('fa-eye-slash');
  }
})
