import * as input from './commonChange_input.js';

//이메일 part
const signupEmailInput = document.querySelector('#signup__email-form');
const signupEmailError = document.querySelector('.signup__email-form--error');

signupEmailInput.addEventListener('focusout', signupEmailFocusOut);
signupEmailInput.addEventListener('keyup', handlesignupButtonEnter);

//이메일 입력 확인 (공통)
function signupEmailFocusOut(event) {
  input.emailHandleInputFocusOut(signupEmailInput, signupEmailError);
}

//비밀번호  part
const signupPwInput = document.querySelector('#signup__password-form');
const signupPwCheckInput = document.querySelector('#signup__pwscheck-form');
const signupPwError = document.querySelector('.signup__password-form--error');
const signupPwCheckError = document.querySelector('.signup__pwcheck-form--error');

const signupPasswordIcon = document.querySelector('.password__toggle-icon');
const signupPwcheckIcon = document.querySelector('.pwcheck__toggle-icon');

signupPwInput.addEventListener('focusout', signuppwFocusOut);
signupPwCheckInput.addEventListener('focusout', signupPwCheckFocusOut);
signupPwInput.addEventListener('keyup', handlesignupButtonEnter);
signupPwCheckInput.addEventListener('keyup', handlesignupButtonEnter);

signupPasswordIcon.addEventListener('click', passwordToggleIcon);
signupPwcheckIcon.addEventListener('click', pwcheckToggleIcon)

//비밀번호 확인 (공통)
function signuppwFocusOut(event) {
  input.passwordHandleFocusOut(signupPwInput, signupPwError);
}

//입력한 비밀번호 재확인 
function signupPwCheckFocusOut(event) {
  pwCheckHandleFocusOut(signupPwCheckInput, signupPwInput, signupPwCheckError);
}

function pwCheckHandleFocusOut(inputElement, inputcompareElement, errorElement) {
  if (inputcompareElement.value != inputElement.value) {
    errorElement.textContent = '비밀번호가 일치하지 않습니다.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56';
  } else {
    input.noError(inputElement, errorElement);
  }
}

//비밀번호 아이콘 및 타입 변경 (공통)
function passwordToggleIcon(event) {
  input.togglePasswordType(signupPwInput, signupPasswordIcon);
}

function pwcheckToggleIcon(event) {
  input.togglePasswordType(signupPwCheckInput, signupPwcheckIcon);
}

//버튼 part
const signupButton = document.querySelector('.signup__form--signupBt');
signupButton.addEventListener('click', handlesignupButtonClick);

//로그인 버튼 클릭 시
const handlesignupButtonClick = (event) => {
  if (
    signupEmailInput.value === "" ||
    signupEmailInput.value === "" ||
    signupEmailInput.value === ""
  ) {
    blinkInput();
    return;
  }
  if (signupEmailInput.value !== "test@codeit.com") {
    emailExistence();
    return;
  }
  if (signupPwInput.value === signupPwCheckInput.value) {
    window.location.href = "/folder";
  } else {
    //비밀번호 일치하지않음
    pwCheckHandleFocusOut(signupPwCheckInput, signupPwInput, signupPwCheckError);
  }
}

//이메일이 이미 저장되어있는 정보와 같을 때 (arraw function)
const emailExistence = () => {
  signupEmailError.textContent = '이미 사용중인 이메일 입니다.';
  signupEmailError.style.display = 'block';
  signupEmailInput.style.borderColor = '#FF5B56';
}

//input 부분이 공백일 때
const blinkInput = () => {
  signupPwError.textContent = '비밀번호를 확인해 주세요.';
  signupPwError.style.display = 'block';
  signupPwInput.style.borderColor = '#FF5B56';
  signupEmailError.textContent = '이메일을 확인해 주세요.';
  signupEmailError.style.display = 'block';
  signupEmailInput.style.borderColor = '#FF5B56';
}

//input태그에서 엔터키 눌렀을 때
function handlesignupButtonEnter(event) {
  if (event.code === 'Enter') {
    handlesignupButtonClick();
  }
}