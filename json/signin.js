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
function checkInputEmail(event) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  emailInput.classList.add('error-border');
  if (event.target.value === '') {
    errorMessage.innerHTML = '<p>이메일을 입력해 주세요.</p>';
    emailInput.after(errorMessage);
  } else if (!emailCheck(event.target.value)) {
    errorMessage.remove();
    errorMessage.innerHTML = '<p>올바른 이메일 주소가 아닙니다.</p>';
    emailInput.after(errorMessage);
  } else {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error-border');
  }
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function checkInputPassword(event) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  passwordInput.classList.add('error-border');
  if (event.target.value === '') {
    errorMessage.innerHTML = '<p>비밀번호를 입력해 주세요.</p>';
    passwordInput.after(errorMessage);
  } else {
    errorMessage.style.display = 'none';
    passwordInput.classList.remove('error-border')
  }
}

/*로그인을 시도할 때 일어나는 경우에 대한 함수*/
function tryLogin(event) {
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = "folder.html";
  } else if (emailInput.value !== 'test@codeit.com' && passwordInput.value === 'codeit101') {
    emailInput.nextElementSibling.textContent = '이메일을 확인해 주세요.';
    event.preventDefault();
  } else if (emailInput.value === 'test@codeit.com' && passwordInput.value !== 'codeit101') {
    passwordInput.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
    event.preventDefault();
  } else {
    emailInput.nextElementSibling.textContent = '이메일을 확인해 주세요.';
    passwordInput.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
  }
}



/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusout', checkInputEmail);
emailInput.addEventListener('keyup', keyCode => {13});
passwordInput.addEventListener('focusout', checkInputPassword);
passwordInput.addEventListener('keyup', keyCode => {13});
confirmBtn.addEventListener('click', tryLogin);