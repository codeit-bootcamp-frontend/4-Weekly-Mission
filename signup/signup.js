import * as input from '../commonChange_input.js';

//로컬 스토리지에 accessToken이 있는 경우 folder로 이동 
window.onload = function(){
  if(localStorage.getItem('SignupAccessToken')) {
    window.location.href = "/folder";
  }
};

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
  if (inputcompareElement.value !== inputElement.value) {
    errorElement.textContent = '비밀번호가 일치하지 않습니다.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56';
  } else {
    input.setNormalStyle(inputElement, errorElement);
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
async function handlesignupButtonClick(event) {
  //input이 비어있을 때
  if (
    signupEmailInput.value === "" ||
    signupPwInput.value === "" ||
    signupPwCheckInput.value === ""
  ) {
    differentEmailPw();
    return;
  }
  //비밀번호가 일치하지 않았을 때 
  pwCheckHandleFocusOut(signupPwCheckInput, signupPwInput, signupPwCheckError);
  if (signupPwInput.value !== signupPwCheckInput.value) {
    return;
  }

  try {
    //회원가입 하려는 이메일의 중복 확인 api
    const checkEmail = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupEmailInput.value
      }),
    });
    const check = await checkEmail.text();
    console.log(check);
    if (checkEmail.status !== 200) { //200(중복x), 이메일이 중복일때 경고와 함께 함수 종료
      emailExistence();
      return;
    }
   
    //이메일 중복이 아닐 때 
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupEmailInput.value,
        password: signupPwInput.value
      }),
    });
    const response_json = await response.text();
    console.log(response_json);
    if(response.status == 422){ //비밀번호 최소 개수 미달성
      addPwcount();
      return;
    }
    if (response.status == 200) { //회원가입시
      // localStorage.setItem('SignupAccessToken', accessToken);  //토큰 저장 but 제대로수행 x(help!)
      // localStorage.setItem('SignupRefreshToken', refreshToken);
        window.location.href = "/folder";
    }
    else {
      differentEmailPw();
    }
  } catch (e) {
    console.log(e);
  }
}

//이메일이 이미 저장되어있는 정보와 같을 때 (arraw function)
const emailExistence = () => {
  signupEmailError.textContent = '이미 사용중인 이메일 입니다.';
  signupEmailError.style.display = 'block';
  signupEmailInput.style.borderColor = '#FF5B56';
}

//input 부분이 공백일 때 & 이메일 비밀번호가 틀렸을 때 
const differentEmailPw = () => {
  signupPwError.textContent = '비밀번호를 확인해 주세요.';
  signupPwError.style.display = 'block';
  signupPwInput.style.borderColor = '#FF5B56';
  signupEmailError.textContent = '이메일을 확인해 주세요.';
  signupEmailError.style.display = 'block';
  signupEmailInput.style.borderColor = '#FF5B56';
}

//비밀번호가 6자리 미만일 때 422오류 발생
const addPwcount = () => {
  signupPwError.textContent = '비밀번호는 6자리 이상으로 작성해주세요.';
  signupPwError.style.display = 'block';
  signupPwInput.style.borderColor = '#FF5B56';
}

//input태그에서 엔터키 눌렀을 때
function handlesignupButtonEnter(event) {
  if (event.code === 'Enter') {
    handlesignupButtonClick();
  }
}