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
    createErrorMessage("이메일을 입력해 주세요.");
  } else if (!validationEmail(emailInput.value)) {
    createErrorMessage("올바른 이메일 주소가 아닙니다.");
  }
}

// 공통된 에러 메시지 생성 함수
function createErrorMessage(message) {
  const newError = document.createElement("p");
  newError.textContent = message;
  newError.classList.add("error-message");
  emailInput.parentElement.appendChild(newError);
}