const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.submit');

//이메일 형식 검증 function
function validationEmail(email) {
  if(!/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,})$/.test(email)) {
    return false;
  }
  return true;
}

emailInput.addEventListener("focusout", validateEmail);

// 이메일 에러 메시지 출력
function validateEmail() {
  const emailError = emailInput.parentElement.querySelector(".error-message");

  if (emailError) {
    emailError.remove();
  }

  if (emailInput.value === "") {
    createErrorMessage("이메일을 입력해 주세요.", emailInput);
  } else if (!validationEmail(emailInput.value)) {
    createErrorMessage("올바른 이메일 주소가 아닙니다.", emailInput);
  }
}

passwordInput.addEventListener("focusout", validatePassword);

function validatePassword() {
  const passwordError = passwordInput.parentElement.querySelector(".error-message");

  if (passwordError) {
    passwordError.remove();
  }

  if (passwordInput.value === "") {
    createErrorMessage("비밀번호를 입력해 주세요.", passwordInput);
  }
}

// 로그인 버튼 클릭 시 로그인 실행
loginButton.addEventListener("click", login);

// 로그인 함수
function login() {
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;
  
  function newPage() {
    let link = '/folder.html'
    location.href = link;
  }

  // 기존 에러 메시지 삭제
  const emailError = emailInput.parentElement.querySelector(".error-message");
  if (emailError) {
    emailError.remove();
  }

  const passwordError = passwordInput.parentElement.querySelector(".error-message");
  if (passwordError) {
    passwordError.remove();
  }

  if (enteredEmail === 'test@codeit.com' && enteredPassword === 'codeit101') {
    newPage();
  } else {
    createErrorMessage("이메일을 확인해 주세요.", emailInput);
    createErrorMessage("비밀번호를 확인해 주세요.", passwordInput);
  }
}

//엔터키로 로그인 실행
document.addEventListener('keydown', function(e) {
  let pressedKey = e.key
  if (pressedKey === 'Enter') {
    e.preventDefault();
    login();
  }
});

// 공통된 에러 메시지 생성 함수
function createErrorMessage(message, inputElement) {
  const newError = document.createElement("p");
  newError.textContent = message;
  newError.classList.add("error-message");
  inputElement.parentElement.appendChild(newError);
}