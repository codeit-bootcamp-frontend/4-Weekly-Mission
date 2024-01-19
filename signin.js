const emailInput = document.getElementById('signin-email');
const pwInput = document.getElementById('signin-pw');
const pwOnOffImg = document.getElementById('pw-onoff');
let pwSwitch = false;
const signButton = document.getElementById('signin-button');
const emailError = document.getElementById('email__error-msg');
const pwError = document.getElementById('pw__error-msg');

//이메일 유효성 검사 메서드
function emailCheck(email) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email);
}

/*파랑(focus), 빨강(error), 그레이(default) 색으로 border변경,
  각 상태에 따라서 error msg block,none 결정 매서드 */
function inputBorderBlue(element) {
  element.style.outline = 'none';
  element.style.border = '1px solid #6d6afe';
}
function inputBorderRed(inputElement, errorElement) {
  inputElement.style.border = '1px solid var(--Linkbrary-red,#FF5B56)';
  errorElement.style.display = 'block';
}
function inputBorderGray(inputElement, errorElement) {
  inputElement.style.border = '1px solid var(--Linkbrary-gray20, #CCD5E3)';
  errorElement.style.display = 'none';
}

// focus in 시에 파란색테두리 변경
emailInput.addEventListener('focus', function () {
  inputBorderBlue(emailInput);
});
pwInput.addEventListener('focus', function () {
  inputBorderBlue(pwInput);
});

// 이메일 에러 검사 메서드
// 작성 되었는지, 유효한 이메일인지 검사
emailInput.addEventListener('focusout', function () {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailError.innerHTML = '이메일을 입력해 주세요.';
    inputBorderRed(emailInput, emailError);
  } else if (emailCheck(emailValue) === false) {
    emailError.innerHTML = '올바른 이메일 주소가 아닙니다.';
    inputBorderRed(emailInput, emailError);
  } else {
    inputBorderGray(emailInput, emailError);
  }
});

//비밀번호 작성 되었는지 검사
pwInput.addEventListener('focusout', function () {
  const pwValue = pwInput.value;

  if (!pwValue) {
    pwError.innerHTML = '비밀번호를 입력해 주세요.';
    pwOnOffImg.style.bottom = '2.9375rem';
    inputBorderRed(pwInput, pwError);
  } else {
    pwOnOffImg.style.bottom = '1.1875rem';
    inputBorderGray(pwInput, pwError);
  }
});

//비밀번호 확인 기능 매서드
pwOnOffImg.addEventListener('click', function () {
  if (!pwSwitch) {
    pwOnOffImg.src = './icons/eyeson.png';
    pwInput.type = 'none';
    pwSwitch = true;
  } else {
    pwOnOffImg.src = './icons/eyesoff.png';
    pwInput.type = 'password';
    pwSwitch = false;
  }
});

//로그인 기능 매서드
function signIn(email, password) {
  if (email == 'test@codeit.com' && password == 'codeit101') {
    window.location.replace('./folder.html');
  } else {
    emailError.innerHTML = '이메일을 확인해 주세요.';
    pwError.innerHTML = '비밀번호를 확인해 주세요.';
    inputBorderRed(emailInput, emailError);
    pwOnOffImg.style.bottom = '2.9375rem';
    inputBorderRed(pwInput, pwError);
  }
}
//버튼에 클릭,엔터 이벤트시에 로그인 함수 기능 추가
signButton.addEventListener('click', function (e) {
  e.preventDefault();
  signIn(emailInput.value, pwInput.value);
});
signButton.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    signIn(emailInput.value, pwInput.value);
  }
});
