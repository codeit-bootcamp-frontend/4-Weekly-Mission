const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmBtn = document.querySelector('#confirm-button');
const eyeBtn = document.querySelector('.eye-btn');
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

/*email 형식인지 체크해주는 함수*/
function emailValidCheck(email_address){     
	return email_regex.test(email_address);
}

/*입력받은 email 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validEmailInput(e) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  emailInput.classList.add('error-border');
  e.target.value === '' ? errorMessage.textContent = '이메일을 입력해 주세요.'
  : !emailValidCheck(e.target.value) ? errorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
  : emailInput.classList.remove('error-border');

  emailInput.after(errorMessage);
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordInput(e) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  passwordInput.classList.add('error-border');
  e.target.value === '' ? errorMessage.textContent = '비밀번호를 입력해 주세요.'
  : passwordInput.classList.remove('error-border');

  passwordInput.after(errorMessage);
}

/*에러메시지 초기화하는 함수*/
function removeErrorMessage(e) {
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

/*비밀번호 on/off 버튼*/
function passwordToggle(e) {
  e.preventDefault();
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    eyeBtn.innerHTML = '<img alt="eye-on" src="images/eye-on.svg">';
  } else {
    passwordInput.setAttribute("type", "password");
    eyeBtn.innerHTML = '<img alt="eye-off" src="images/eye-off.svg">';
  }
}


/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusin', removeErrorMessage);
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusin', removeErrorMessage);
passwordInput.addEventListener('focusout', validPasswordInput);
confirmBtn.addEventListener('click', tryLogin);
eyeBtn.addEventListener('click', passwordToggle);