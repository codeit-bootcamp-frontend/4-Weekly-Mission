const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

//이메일 형식 검증 function
function validationEmail(email) {
  if(!/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,})$/.test(email)) {
    return false;
  }
  return true;
}


emailInput.addEventListener("focusout", validation);
//이메일 에러메세지 출력
function validation() {
  if(emailInput.value === "") {
    const emailError = document.createElement("p");
    emailError.textContent = "이메일을 입력해 주세요.";
    emailError.classList.add("error-message");
    emailInput.parentElement.appendChild(emailError);
  } else if(!validationEmail(emailInput.value)) {
    const emailError = document.createElement("p");
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailError.classList.add("error-message");
    emailInput.parentElement.appendChild(emailError);
  }
}

//이메일 입력이 변경되었을 때
emailInput.addEventListener("input", checkEmail);

function checkEmail() {
  const emailError = emailInput.parentElement.querySelector(".error-message");
  if(emailError) {
    emailError.remove();
  }
}

