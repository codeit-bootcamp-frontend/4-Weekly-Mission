const inputArray = document.querySelectorAll(".form-sign__input");
const errorMessageArray = document.querySelectorAll(".error-message");

const email = inputArray[0];
const password = inputArray[1];

const emailErrorMessage = errorMessageArray[0];
const passwordErrorMessage = errorMessageArray[1];

function isEmpty(element) {
  if (element.value.trim() == "") {
    return true;
  }
  return false;
}

//email, password 유효성 검사
function checkForm(element) {
  console.log(element);
  switch (element.name) {
    case "email":
      if (isEmpty(email)) {
        emailErrorMessage.textContent = "이메일을 입력해 주세요.";
        email.classList.remove("display-none");
      } else if (!email.validity.valid) {
        emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        email.classList.remove("display-none");
      } else {
        emailErrorMessage.textContent = "";
        email.classList.add("display-none");
      }
      break;
    case "password":
      if (isEmpty(password)) {
        passwordErrorMessage.textContent = "비밀번호를 입력해 주세요.";
      } else {
        passwordErrorMessage.textContent = "";
        password.classList.add("display-none");
      }
      break;
  }
}

//로그인 유효성 검사
function checkLogin(element) {}

//focus out 이벤트 핸들러
email.addEventListener("focusout", checkForm);
