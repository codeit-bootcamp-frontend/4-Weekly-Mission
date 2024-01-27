const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass');
const passCheckInput = document.querySelector('#passCheck')
const signForm = document.querySelector('.signup');
const toggle = document.querySelector('.fa-solid');

//이메일 유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//비밀번호 유효성 검사
function validatePass (password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

//에러 메세지 함수
function errorMessage (input, message) {
  //에러메세지 중복 삭제
  const err = document.createElement('p');
  err.classList.add('errorMessage');
  err.style.color = '#FF5B56';
  err.textContent = message;
  input.style.borderColor = '#FF5B56';
  if (input === emailInput) {
    if (input.parentElement.querySelector('.errorMessage')) {
      input.parentElement.querySelector('.errorMessage').remove();
    }
    input.parentElement.appendChild(err);
  } else if (input === passInput || input === passCheckInput) {
    if (input.parentElement.parentElement.querySelector('.errorMessage')) {
      input.parentElement.parentElement.querySelector('.errorMessage').remove();
    }
    input.parentElement.parentElement.appendChild(err);
  }
}

//이메일 에러메세지 출력
function emailErrorMessage (e) {
  //에러메세지 - 값이 없을 경우
  if (emailInput.value.trim() === '') {
    errorMessage(emailInput, '이메일을 입력해주세요.');
  }
  //에러메세지 - 형식에 맞지 않을 경우
  else if (!validateEmail(emailInput.value)) {
    errorMessage(emailInput, '올바른 이메일 주소가 아닙니다.');
  }
  //에러메세지 - 중복값
  else if (emailInput.value === 'test@codeit.com') {
    errorMessage(emailInput, '이미 사용 중인 이메일입니다.');
  }
  //올바른 값으로 수정
  else if (validateEmail(emailInput.value)) {
    if (emailInput.parentElement.querySelector('.errorMessage')) {
      emailInput.parentElement.querySelector('.errorMessage').remove();
      emailInput.style.borderColor = '#CCD5E3';
    }
  }
}

//비밀번호 에러메세지 출력
function passErrorMessage (e) {
  //에러메세지 - 값이 없을 경우
  if (passInput.value.trim() === '') {
    errorMessage(passInput, '비밀번호를 입력해주세요.');
  }
  //에러메세지 - 형식에 맞지 않을 경우
  else if (!validatePass(passInput.value)) {
    errorMessage(passInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  }
  //올바른 값으로 수정
  else if (validatePass(passInput.value)) {
    if (passInput.parentElement.parentElement.querySelector('.errorMessage')) {
      passInput.parentElement.parentElement.querySelector('.errorMessage').remove();
      passInput.style.borderColor = '#CCD5E3';
    }
  }
}

//비밀번호 확인 에러메세지
function passCheckErrorMessage (e) {
  //에러메세지 - 값이 다를 경우
  if (passInput.value !== passCheckInput.value) {
    errorMessage(passCheckInput, '비밀번호가 일치하지 않습니다.');
  } else {
    if (passCheckInput.parentElement.parentElement.querySelector('.errorMessage')) {
      passCheckInput.parentElement.parentElement.querySelector('.errorMessage').remove();
      passCheckInput.style.borderColor = '#CCD5E3';
    }
  }
}

//로그인 시도
function submitForm (e) {
  //현재페이지에서 테스트
  e.preventDefault();

  if (emailInput.value === 'test@codeit.com' && passInput.value === 'codeit101') {
    window.location.href = "./folder";
  } else {
    errorMessage(emailInput, '이메일을 확인해주세요.');
    errorMessage(passInput, '비밀번호를 확인해주세요.');
    errorMessage(passCheckInput, '비밀번호를 확인해주세요.')
  }
}

//눈 모양 클릭
function toggleIcon (e) {
  if (toggle.previousElementSibling.type === 'password') {
    toggle.previousElementSibling.type = 'text';
    toggle.classList.remove('fa-eye-slash');
    toggle.classList.add('fa-eye');
  } else {
    toggle.previousElementSibling.type = 'password';
    toggle.classList.remove('fa-eye');
    toggle.classList.add('fa-eye-slash');
  }
}

emailInput.addEventListener('focusout', emailErrorMessage);
passInput.addEventListener('focusout', passErrorMessage);
signForm.addEventListener('submit', submitForm);
passCheckInput.addEventListener('focusout', passCheckErrorMessage);
toggle.addEventListener('click', toggleIcon);


// 잘 안된거
// signin up => css 통합
// toggle icon 관련 두 아이콘에 한번에 적용하고 싶어서 querySelectorAll로 선택하면 에러가 나옴
// 로그인, 회원가입 페이지에 공통적으로 사용하는 로직이 있다면, 반복하지 않고 공통된 로직을 모듈로 분리해 사용해 주세요.