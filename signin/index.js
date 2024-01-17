const inputArray = document.querySelectorAll(".form-sign__input");
const errorMessageArray = document.querySelectorAll(".error-message");
const loginBtn = document.querySelector(".btn-login");

//이메일, 비밀번호 input
const email = inputArray[0];
const password = inputArray[1];

//이메일, 비밀번호 error-message
const emailErrorMessage = errorMessageArray[0];
const passwordErrorMessage = errorMessageArray[1];

//error-message 토글 함수: message가 있으면 on / 없으면 off
function toggleErrorMessage(element, message) {
  if (message) {
    element.textContent = message;
    element.classList.remove("display-none");
  } else {
    element.textContent = "";
    element.classList.add("display-none");
  }
}

//email, password 유효성 검사
function checkForm(element) {
  const errorMessage = element === email ? emailErrorMessage : passwordErrorMessage;
  console.log("email, password 검사");

  if (element.value == "") {
    const message = element === email ? "이메일을 입력해 주세요." : "비밀번호를 입력해 주세요.";
    toggleErrorMessage(errorMessage, message);
  } else if (element === email && !element.validity.valid) {
    toggleErrorMessage(errorMessage, "올바른 이메일 주소가 아닙니다.");
  } else {
    toggleErrorMessage(errorMessage);
  }
}

//로그인 유효성 검사
function checkLogin() {
  const validEmail = "test@codeit.com";
  const validPassword = "codeit101";

  if (email.value === validEmail && password.value === validPassword) {
    console.log("로그인 성공");
    toggleErrorMessage(emailErrorMessage);
    toggleErrorMessage(passwordErrorMessage);
    //페이지 이동
    location.href = "../folder/index.html";
  } else {
    console.log("로그인 실패");
    toggleErrorMessage(emailErrorMessage, "이메일을 확인해 주세요.");
    toggleErrorMessage(passwordErrorMessage, "비밀번호를 확인해 주세요.");
  }
}

//focusout 이벤트 핸들러
email.addEventListener("focusout", function () {
  checkForm(email);
});

password.addEventListener("focusout", function () {
  checkForm(password);
});

//click 이벤트 핸들러
loginBtn.addEventListener("click", checkLogin);
