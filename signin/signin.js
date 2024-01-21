const emailSignIn = document.querySelector('.signin__email');
const emailInput = document.querySelector('#email');
const passSignIn = document.querySelector('.signin__pass');
const passInput = document.querySelector('#pass');
const signInForm = document.querySelector('.signin');
const signInBtn = document.querySelector('.signin__Btn');

// 유효성 검사
function checkEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 해당하는 input에 해당 메세지를 받아서 출력
function showErrorMassage(input, message) {
  const error = document.createElement('div');
  error.classList.add('errorMessage');
  error.textContent = message;
  //출력메세지 색상 변경
  error.style.color = '#FF5B56';
  
  
  input.appendChild(error);
}

//포커스 아웃 액션
function emailFocus (e) {
  //이메일 에러메세지
  if (emailInput.value.trim() === '') {
    showErrorMassage(emailSignIn, '이메일을 입력해 주세요.');
  } else if (!checkEmail(emailInput.value)) {
    showErrorMassage(emailSignIn, '올바른 이메일 주소가 아닙니다.');
  } else {
    error.textContent = '';
  }
}
function passFocus (e) {
    //비밀번호 에러메세지
    if (passInput.value.trim() === '') {
      showErrorMassage(passSignIn, '비밀번호를 입력해 주세요');
    } else {
      error.textContent = '';
    }
}

//로그인 액션
function submit (e) {
  //테스트용 코드
  e.preventDefault();
  //로그인 시도
  if (email === 'test@codeit.com' && passward === 'codeit101') {
    window.location.href = '../folder'
  } else {
    showErrorMassage(emailSignIn, '이메일을 확인해 주세요');
    showErrorMassage(passSignIn, '비밀번호를 확인해 주세요');
  }

}


emailSignIn.addEventListener('focusout', emailFocus);
passSignIn.addEventListener('focusout', passFocus);
signInForm.addEventListener('submit', submit)
