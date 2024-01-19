const loginContainer = document.querySelector(".login-container");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");

function addEmailError() {
  const errorEmptyEmail = document.createElement("p");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사 정규식

  if (inputEmail.value === "") {
    errorEmptyEmail.textContent = "이메일을 입력해 주세요";
    errorEmptyEmail.classList.add("text-error");
    inputEmail.after(errorEmptyEmail);
    inputEmail.classList.add("email-error");
    // console.log(errorEmptyEmail);
    // console.log(loginContainer);
  }
  if (inputEmail.value !== "" && !emailRegex.test(inputEmail.value)) {
    errorEmptyEmail.textContent = "올바른 이메일 주소가 아닙니다.";
    errorEmptyEmail.classList.add("text-error");
    inputEmail.after(errorEmptyEmail);
    inputEmail.classList.add("email-error");
  }

  //   inputEmail.removeEventListener("focusout", addEmailError);
}

function removeEmailError() {
  const errorEmptyEmail = document.querySelector(".text-error");

  if (errorEmptyEmail) {
    errorEmptyEmail.remove();
    inputEmail.classList.remove("email-error");
  }
}

inputEmail.addEventListener("focusout", addEmailError);
inputEmail.addEventListener("focusin", removeEmailError);
