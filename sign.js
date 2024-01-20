const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

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
  } else if (!validateEmail(emailInput.value)) {
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

// 공통된 에러 메시지 생성 함수
function createErrorMessage(message, inputElement) {
  const newError = document.createElement("p");
  newError.textContent = message;
  newError.classList.add("error-message");
  inputElement.parentElement.appendChild(newError);
}