document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.querySelector('.eye');
  const loginBtn = document.querySelector('.boxmain');

  //이벤트 요소 추가 코드 
  function Error(element, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    element.parentElement.appendChild(errorElement);
  }
  
  //이벤트 요소 삭제 코드
  function clearErrors() {
   const clear = document.querySelectorAll('.error-message');
   clear.forEach(error => error.remove());
  }

  //이메일 기준값 지정
  function baseEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  //에러 이벤트 발생시 보더 색상을 주기위한 클래스 생성
  function boderLine(clas, bolean) {
    const item = document.querySelectorAll('.error-message');
    item.forEach(item => item.parentElement.children[1].classList.toggle(clas, bolean))
    }
  
  function loginAttempt() {
    //문구 중복 생성 방지
    clearErrors();

    //아이디 및 비밀번호 입력값 변수 지정
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
   
    //아이디 및 비밀번호 조건만족 시 로그인 코드
    if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101'){
      window.location.href = '/html/Linkbrary(folder).html';
   
      // 아이디 관련 발생 이벤트
    } else if (emailValue === '') {
      Error(emailInput, '이메일을 입력해 주세요.');
      boderLine('boder-error', true);
    } else if (!baseEmail(emailValue)) {
      Error(emailInput, '올바른 이메일 주소가 아닙니다.');
      boderLine('boder-error', true);
    } else if (emailValue !== 'test@codeit.com'){
      Error(emailInput, '이메일을 확인해 주세요.');
      boderLine('boder-error', true);
    }
   
    // 비밀번호 관련 발생 이벤트
    if (passwordValue === '') {
      Error(passwordInput, '비밀번호를 입력해 주세요.');  
      boderLine('boder-error', true);
    } else if(passwordValue !== 'codeit101'){
      Error(passwordInput, '비밀번호를 확인해 주세요.');
      boderLine('boder-error', true);
    }
  }

   // 이메일 요소에 포커스가 될때 에러 색상과 문구 삭제
  emailInput.addEventListener('focusin', function () {
    //emailInput.classList.remove('boder-error');
    boderLine("boder-error", false);
    clearErrors();
  });

   // 비밀번호 요소에 포커스가 될때 에러 색상과 문구 삭제
  passwordInput.addEventListener('focusin', function () {
    //passwordInput.classList.remove('boder-error');
    boderLine("boder-error", false);
    clearErrors();
  });

    // 마우스 클릭으로 로그인 실행
  loginBtn.addEventListener('click', loginAttempt);

  // Enter 키로 로그인 실행
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      loginAttempt();
    }
  });
 
  // 눈 모양 아이콘 클릭 시 비밀번호 텍스트, 패스워드 형식 변경 및 아이콘 변경
  eyeIcon.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.add('visible');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('visible');
    }
  });
});