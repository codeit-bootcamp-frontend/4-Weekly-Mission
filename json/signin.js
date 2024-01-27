const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmBtn = document.querySelector('#confirm-button');
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

/*email 형식인지 체크해주는 함수*/
function emailCheck(email_address){     
	if (!email_regex.test(email_address)) { 
		return false; 
	} else {
		return true;
	}
}

/*입력받은 email 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function checkInputEmail(e) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  emailInput.classList.add('error-border');
  e.target.value === '' ? errorMessage.textContent = '이메일을 입력해 주세요.'
  : !emailCheck(event.target.value) ? errorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
  : emailInput.classList.remove('error-border');

  emailInput.after(errorMessage);
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function checkInputPassword(e) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  passwordInput.classList.add('error-border');
  e.target.value === '' ? errorMessage.textContent = '비밀번호를 입력해 주세요.'
  : passwordInput.classList.remove('error-border');

  passwordInput.after(errorMessage);
}

/*에러메시지 초기화하는 함수*/
function removeError(e) {
	if (e.target.nextElementSibling.classList.contains('error-message')) {
    e.target.nextElementSibling.remove();
	}
}

/*로그인을 시도할 때 일어나는 경우에 대한 함수*/
function tryLogin(event) {
  event.preventDefault();
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = "folder.html";
  } else if (emailInput.value !== 'test@codeit.com' && passwordInput.value === 'codeit101') {
    emailInput.classList.add('error-border');
    emailInput.nextElementSibling.textContent = '이메일을 확인해 주세요.';
  } else if (emailInput.value === 'test@codeit.com' && passwordInput.value !== 'codeit101') {
    passwordInput.classList.add('error-border');
    passwordInput.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
  } else {
    emailInput.classList.add('error-border');
    passwordInput.classList.add('error-border');
    emailInput.nextElementSibling.textContent = '이메일을 확인해 주세요.';
    passwordInput.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
  }
}


/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusin', removeError);
emailInput.addEventListener('focusout', checkInputEmail);
passwordInput.addEventListener('focusin', removeError);
passwordInput.addEventListener('focusout', checkInputPassword);
confirmBtn.addEventListener('click', tryLogin);