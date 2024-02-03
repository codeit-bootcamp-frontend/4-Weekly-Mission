const inputEmail = document.querySelector("input#email");
const inputPassword = document.querySelector("input#password");
const emailPtag = document.querySelector("p#email-error-message");
const passwordPtag = document.querySelector("p#password-error-message");
const loginButton = document.querySelector("button.btn");
const toggleButton = document.querySelector("button.toggle-button");
const eyeImagePassword = document.querySelector("button.toggle-button img");

// 유저 생성
const VALID_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

//비었는지 확인하는 함수
function isTextEmpty(inputValue) {
  return inputValue === "";
}

//이메일 형식 판별 함수
function isEmailValid(emailValue) {
  const REG_EMAIL =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return REG_EMAIL.test(emailValue);
}

// 유저 확인
function isValidUser() {
  return (
    inputEmail.value === VALID_USER.email &&
    inputPassword.value === VALID_USER.password
  );
}

//에러 함수 보여주기
function showError(input, pTag, errorMessage) {
  input.classList.add("border-red");
  pTag.textContent = errorMessage;
}

//에러 함수 가리기
function hideError(input, pTag) {
  input.classList.remove("border-red");
  pTag.textContent = "";
}

//이메일 에러 핸들링 함수
function handleEmailPtag() {
  if (isTextEmpty(inputEmail.value)) {
    showError(inputEmail, emailPtag, "이메일을 입력해 주세요.");
    return;
  }
  if (!isTextEmpty(inputEmail.value) && !isEmailValid(inputEmail.value)) {
    //console.log(inputEmail);
    //console.log(inputEmail.value);
    showError(inputEmail, emailPtag, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  hideError(inputEmail, emailPtag);
}

//비밀번호 에러 핸들링 함수
function handlePasswordPtag() {
  if (isTextEmpty(inputPassword.value)) {
    showError(inputPassword, passwordPtag, "비밀번호를 입력해 주세요.");
    return;
  }
  hideError(inputPassword, passwordPtag);
}

//비밀번호 토글 함수
function handleToggleButton() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eyeImagePassword.src = "images/eye-on.svg";
    return;
  }
  if (inputPassword.type === "text") {
    inputPassword.type = "password";
    eyeImagePassword.src = "images/eye-off.svg";
    return;
  }
}

//로그인 함수
function loginCheck(e) {
  e.preventDefault();
  if (isValidUser()) {
    window.location.href = "/folder/index.html";
    return;
  }
  showError(inputEmail, emailPtag, "이메일을 확인해주세요.");
  showError(inputPassword, passwordPtag, "비밀번호를 확인해주세요.");
  return;
}
// 엔터키로 loginCheck함수 호출
function enterToSubmit(e) {
  if (e.key === "Enter") {
    loginCheck(e);
  }
}

inputEmail.addEventListener("focusout", handleEmailPtag);
inputPassword.addEventListener("focusout", handlePasswordPtag);
toggleButton.addEventListener("click", handleToggleButton);
document.addEventListener("keypress", enterToSubmit);
loginButton.addEventListener("click", loginCheck);
