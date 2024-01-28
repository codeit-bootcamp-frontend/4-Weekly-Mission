const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const confirmBtn = document.querySelector('#confirm-button');
const eyeBtn = document.querySelector('.eye-btn');
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

/*email 형식인지 체크해주는 함수*/
function emailValidCheck(email_address){     
	return email_regex.test(email_address);
}

/*입력받은 email 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validEmailInput(e) {
  if (e.target.value === '') {
    emailError.classList.add('error-message');
    emailInput.classList.add('error-border');
    emailError.textContent = '이메일을 입력해 주세요.'
    return;
  } 
  if (!emailValidCheck(e.target.value)) {
    emailError.classList.add('error-message');
    emailInput.classList.add('error-border');
    emailError.textContent = '올바른 이메일 주소가 아닙니다.'
    return;
  }
  emailInput.classList.remove('error-border');
  emailError.classList.remove('error-message');
  emailError.textContent = '';
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordInput(e) {
  if (e.target.value === '') {
    passwordError.classList.add('error-message');
    passwordInput.classList.add('error-border');
    passwordError.textContent = '비밀번호를 입력해 주세요.'
    return;
  }
  passwordInput.classList.remove('error-border');
  passwordError.classList.remove('error-message');
  passwordError.textContent = '';
}

/*로그인을 시도할 때 일어나는 경우에 대한 함수*/
function tryLogin(event) {
  event.preventDefault();

  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = "folder.html";
    return;
  }
  emailError.classList.add('error-message');
  emailInput.classList.add('error-border');
  emailError.textContent = '이메일을 확인해 주세요.'
  passwordError.classList.add('error-message');
  passwordInput.classList.add('error-border');
  passwordError.textContent = '비밀번호를 확인해 주세요.'
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
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusout', validPasswordInput);
confirmBtn.addEventListener('click', tryLogin);
eyeBtn.addEventListener('click', passwordToggle);