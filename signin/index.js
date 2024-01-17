/********************
 * VARIABLE DEFINTION
 ********************/

//이메일, 비밀번호 input
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");

//이메일, 비밀번호 error-message
const emailErrorMessage = document.querySelector("#error-email");
const passwordErrorMessage = document.querySelector("#error-password");

//로그인 버튼
const loginBtn = document.querySelector(".btn-login");

//비밀번호 btn-eye
const eyeBtn = document.querySelector(".btn-eye");

/********************
 * FUNCTION
 ********************/

//error-message 토글 함수: message가 있으면 on / 없으면 off
function toggleErrorMessage(element, message = "") {
  const prevInput = element === emailErrorMessage ? email : password;
  element.textContent = message;

  console.log("에러 메시지 토글");

  if (message) {
    element.classList.remove("display-none");
    prevInput.classList.add("input-error");
  } else {
    element.classList.add("display-none");
    prevInput.classList.remove("input-error");
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

//icon-eye 클릭하면 비밀번호 토글
function togglePassword() {
  const icon = eyeBtn.firstElementChild;

  console.log("비밀번호 토글");
  console.log(password.type);

  if (password.type === "password") {
    password.type = "text";
    icon.src = "../public/icon/eye-on.svg";
  } else {
    password.type = "password";
    icon.src = "../public/icon/eye-off.svg";
  }
}

/********************
 * EVENT HANDLER
 ********************/

//focusout 이벤트 핸들러
email.addEventListener("focusout", function () {
  checkForm(email);
});

password.addEventListener("focusout", function () {
  checkForm(password);
});

//click 이벤트 핸들러
loginBtn.addEventListener("click", checkLogin);
eyeBtn.addEventListener("click", togglePassword);
