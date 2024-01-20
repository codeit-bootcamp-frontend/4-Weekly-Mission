const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const eyeIcon = document.querySelector('#eyeIcon');


//email focus out 이벤트
emailInput.addEventListener('blur', () => {
  //초기화
  init(emailInput);

  //이메일 유효성 함수 호출
  emailValidationChk();
})

//비밀번호 focus out 이벤트
passwordInput.addEventListener('blur', () => {
  //초기화
  init(passwordInput);
  
  //비밀번호 유효성 함수 호출
  passwordValidationChk();
});

// 로그인 성공 이벤트
loginBtn.addEventListener('click', () => {
  //초기화
  init(emailInput);
  init(passwordInput);

  if(passwordInput.value === 'codeit101' && emailInput.value === 'test@codeit.com'){
    location.href = 'folder.html';
  }else {
    emailInput.classList.add('false');
    passwordInput.classList.add('false');
    errMsg(emailInput, '이메일을 확인해 주세요.');
    errMsg(passwordInput, '비밀번호를 확인해 주세요.');
  }
});


//이메일 유효성 검사
const emailValidChk = (email) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(email);
}

//에러 메시지 div 요소에 내용 추가
const errMsg = (inputVal, txt) => {
  const errMsgDiv = inputVal.nextElementSibling;
  errMsgDiv.textContent = txt;
  errMsgDiv.classList.add('red');
  errMsgDiv.classList.add('input-font-size');  
}

//요소 초기화
const init = (element) => {
  //다음 요소 확인
  const divExist = element.nextElementSibling;
  //텍스트 확인 될 시 텍스트 삭제, 빨간 테두리 제거
  if(divExist.textContent !== '') {
    divExist.textContent = '';
    element.classList.remove('false');
  }
}

//비밀번호 눈모양 클릭 이벤트
eyeIcon.addEventListener('click', () => {
  if(eyeIcon.classList.contains('eye-off')){ //off에서 on으로
    eyeIcon.classList.remove('eye-off');
    eyeIcon.classList.add('eye-on');
    passwordInput.type = 'text';

  }else{//on에서 off로
    eyeIcon.classList.remove('eye-on');
    eyeIcon.classList.add('eye-off');
    passwordInput.type = 'password';
  }
});

//이메일 유효성 검사
const emailValidationChk = () => {
  if(!emailInput.value) {
    emailInput.classList.add('false');//테두리 색 변경
    errMsg(emailInput,'이메일을 입력해 주세요.');
  }else if(!emailValidChk(emailInput.value)){
    emailInput.classList.add('false');
    errMsg(emailInput, '올바른 이메일 주소가 아닙니다.');
  }
}

//비밀번호 유효성 검사
const passwordValidationChk = () => {
  if(!passwordInput.value) {
    passwordInput.classList.add('false');
    errMsg(passwordInput, '비밀번호를 입력해 주세요.');
  }
}