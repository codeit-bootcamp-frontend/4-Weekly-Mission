// 이메일과 비밀번호 input 요소 가져오기
const emailInput = document.querySelector('.sign-input');
const passwordInput = document.querySelector('.sign-password input');
const emailErrorRequire = document.querySelector('.sign-input-error-require');
const emailErrorCheck = document.querySelector('.sign-input-error-check');
const emailErrorIncorrect = document.querySelector('.sign-input-error-incorrect');
const passwordErrorRequire = document.querySelector('.sign-password .sign-input-error-require');
const passwordErrorCheck = document.querySelector('.sign-password .sign-input-error-check');

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  return email.includes('@');
}

// 이메일 focus out 이벤트 핸들러
emailInput.addEventListener('focusout', function () {
  


  if (emailInput.value.trim() === '') {
    emailErrorRequire.style.display = 'inline';
    emailErrorIncorrect.style.display = 'none'; //기존에러메세지지우기
    emailErrorCheck.style.display ='none'; //기존에러메세지지우기
    emailInput.style.borderColor = 'var(--red)';
  } else if (!isValidEmail(emailInput.value)) {
    emailErrorRequire.style.display = 'none';
    emailErrorIncorrect.style.display = 'inline';
    emailErrorCheck.style.display ='none';
    emailInput.style.borderColor = 'var(--red)';
  } else {
    emailErrorRequire.style.display = 'none';
    emailInput.style.borderColor = 'var(--gray20)';
  }
});



// 비밀번호 focus out 이벤트 핸들러
passwordInput.addEventListener('focusout', function () {
  

  if (passwordInput.value.trim() === '') {
    passwordErrorRequire.style.display = 'inline';
    passwordErrorCheck.style.display = 'none';
    passwordInput.style.borderColor = 'var(--red)';
  } else {
    passwordErrorRequire.style.display = 'none';
    passwordInput.style.borderColor = 'var(--gray20)'
  }
});


// 로그인 버튼 클릭 이벤트 핸들러
const loginButton = document.querySelector('.cta');
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // 폼 제출 방지
  attemped();})

// 엔터 입력시 로그인 핸들러
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
      attemptLogin();
    }
  });
  
  
  
  
// 로그인 시도 함수
function attemped () {
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = '/folder'; // 로그인 성공 시 이동할 페이지
  } else {


    if (emailInput.value !== 'test@codeit.com') {
      emailErrorCheck.style.display = 'inline';
      emailErrorRequire.style.display = 'none';
      emailErrorIncorrect.style.display = 'none';
    } else {
      emailErrorCheck.style.display = 'none';
      
      
    }
    
    if (passwordInput.value !== 'codeit101') {
      passwordErrorCheck.style.display = 'inline';
      passwordErrorRequire.style.display = 'none'
    } else {
      passwordErrorCheck.style.display = 'none';
     
    }
  }
  }

function togglePasswordVisibility() {
  

  // 비밀번호 input의 type을 토글
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeButton.innerHTML = '<img src="./images/eye-on.svg" />';
  } 
  else {
    passwordInput.type = 'password';
    eyeButton.innerHTML = '<img src="./images/eye-off.svg" />';
  }
}


 






