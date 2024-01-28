const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

export const testUser = {
  email: "test@codeit.com",
  password: "codeit101",
};

/*email 형식인지 체크해주는 함수*/
export function emailValidCheck(email_address){     
	return EMAIL_REGEX.test(email_address);
}

/*에러메시지를 추가하는 함수*/
export function addError(input, error, message) {
  input.classList.add('error-border');
  error.classList.add('error-message');
  error.textContent = message;
}

/*에러메시지를 삭제하는 함수*/
export function removeError(input, error) {
  input.classList.remove('error-border');
  error.classList.remove('error-message');
  error.textContent = '';
}

/*비밀번호 on/off 버튼*/
export function passwordToggle(input, btn) {
  // e.preventDefault();
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    btn.innerHTML = '<img alt="eye-on" src="images/eye-on.svg">';
  } else {
    input.setAttribute("type", "password");
    btn.innerHTML = '<img alt="eye-off" src="images/eye-off.svg">';
  }
}