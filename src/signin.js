const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass')
const signinForm = document.querySelector('.signin');

//이메일 유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//에러 메세지 함수
function errorMessage (input, message) {
    //에러메세지 중복 삭제
    if (input.parentElement.lastChild.className === 'errorMessage') {
      emailInput.parentElement.remove(lastChild);
    }
  const Error = document.createElement('div');
  Error.classList.add('errorMessage');
  Error.style.color = '#FF5B56';
  Error.textContent = message;
  input.parentElement.appendChild(Error);
}

//이메일 에러 메세지 출력
function emailErrorMessage (e) {
  //에러메세지 - 값이 없을 경우
  if (emailInput.value.trim() === '') {
    return errorMessage(emailInput, '이메일을 입력해주세요.');
  }
  //에러 메세지 - 형식에 맞지 않을 경우
  else if (!validateEmail(email)) {
    return errorMessage(emailInput, '올바른 이메일 주소가 아닙니다.')
  }
}

//비밀번호 에러 메세지 출력
function passErrorMessage (e) {
  //에러메세지
  if(passInput.value.trim() === '') {
    return errorMessage(passInput, '비밀번호를 입력해주세요.');
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
  }
}

emailInput.addEventListener('focusout', emailErrorMessage);
passInput.addEventListener('focusout', passErrorMessage);
signinForm.addEventListener('submit', submitForm);

// 잘 안된거
// 메세지 유형이 하나만 출력됨
// 비밀번호 에러메세지 갭 차이