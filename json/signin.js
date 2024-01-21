const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
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
    errorMessage.innerHTML = '<p>이메일을 확인해 주세요.</p>';
    emailInput.after(errorMessage);
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
  } else if (event.value !== 'codeit') {
    errorMessage.innerHTML = '<p>비밀번호를 확인해 주세요.</p>';
    passwordInput.after(errorMessage);
  }
}

