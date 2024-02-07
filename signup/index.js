//input 선택
const inputEmail = document.querySelector("input#email");
const inputPassword = document.querySelector("input#password");
const inputConfirmPassword = document.querySelector("input#confirm-password");

//toggle 버튼 선택
const toggleButtonPassword = document.querySelector("button#password-toggle");
const toggleButtonConfirmPassword = document.querySelector(
  "button#confirm-password-toggle"
);

//toggle 버튼 이미지 선택
const eyeImagePassword = document.querySelector("button#password-toggle img");
const eyeImageConfirmPassword = document.querySelector(
  "button#confirm-password-toggle img"
);

// 에러메세지 선택
const emailPtag = document.querySelector("p#email-error-message");
const passwordPtag = document.querySelector("p#password-error-message");
const confirmPasswordPtag = document.querySelector(
  "p#confirm-password-error-message"
);

const loginForm = document.querySelector("form.login-form");
//로그인 버튼 선택
const signUpButton = document.querySelector("button.btn");

//비밀번호 토글 함수
function handlePasswordToggleButton() {
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

//비밀번호 확인 토글 함수
function handleConfirmPasswordToggleButton() {
  if (inputConfirmPassword.type === "password") {
    inputConfirmPassword.type = "text";
    eyeImageConfirmPassword.src = "images/eye-on.svg";
    return;
  }
  if (inputConfirmPassword.type === "text") {
    inputConfirmPassword.type = "password";
    eyeImageConfirmPassword.src = "images/eye-off.svg";
    return;
  }
}

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

// 사용 중인 이메일 확인 함수
function isEmailInUse() {
  return inputEmail.value === VALID_USER.email;
}

// 유저 확인
// 수정 필요
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
function validateEmail() {
  if (isTextEmpty(inputEmail.value)) {
    showError(inputEmail, emailPtag, "이메일을 입력해 주세요.");
    return false;
  }
  if (!isTextEmpty(inputEmail.value) && !isEmailValid(inputEmail.value)) {
    showError(inputEmail, emailPtag, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  if (isEmailInUse()) {
    showError(inputEmail, emailPtag, "이미 사용 중인 이메일입니다.");
    return false;
  }
  hideError(inputEmail, emailPtag);
  return true;
}

// input이 8글자 이상인지 확인하는 함수
function isStringMoreThan8Char(string) {
  return string.length >= 8;
}

// 비밀번호, 비밀번호 확인 형식 판별 함수
function isPasswordValid() {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]/;
  return passwordRegex.test(inputPassword.value);
}

//비밀번호 에러 핸들링 함수
function validatePassword() {
  if (isTextEmpty(inputPassword.value)) {
    showError(inputPassword, passwordPtag, "비밀번호를 입력해 주세요.");
    return false;
  }
  if (!isStringMoreThan8Char(inputPassword.value)) {
    //console.log(e.target.nextElementSibling);
    showError(
      inputPassword,
      passwordPtag,
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  if (!isPasswordValid()) {
    //console.log("good");
    showError(
      inputPassword,
      passwordPtag,
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  hideError(inputPassword, passwordPtag);
  return true;
}

// 비밀번호 확인 함수
function isPasswordMatching() {
  return inputPassword.value === inputConfirmPassword.value;
}

// 비밀번호 확인 에러 함수
function validateConfirmPassword() {
  if (!isPasswordMatching()) {
    showError(
      inputConfirmPassword,
      confirmPasswordPtag,
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  //console.log("a");
  hideError(inputConfirmPassword, confirmPasswordPtag);
  return true;
}

// 회원가입 함수
function validateSignup(e) {
  e.preventDefault();
  if (validateEmail() && validatePassword() && isPasswordMatching()) {
    //console.log("success");
    window.location.href = "/folder/index.html";
    return;
  }
  //console.log("showerror");
  return;
}

// 엔터키로 loginCheck함수 호출
function enterToSubmit(e) {
  if (e.key === "Enter") {
    validateSignup(e);
  }
}

inputEmail.addEventListener("focusout", validateEmail);
inputPassword.addEventListener("focusout", validatePassword);
inputConfirmPassword.addEventListener("focusout", validateConfirmPassword);

toggleButtonPassword.addEventListener("click", handlePasswordToggleButton);
toggleButtonConfirmPassword.addEventListener(
  "click",
  handleConfirmPasswordToggleButton
);
loginForm.addEventListener("submit", validateEmail);
loginForm.addEventListener("keypress", validateEmail);

loginForm.addEventListener("submit", validatePassword);
loginForm.addEventListener("keypress", validatePassword);

loginForm.addEventListener("submit", validateConfirmPassword);
loginForm.addEventListener("keypress", validateConfirmPassword);

loginForm.addEventListener("submit", validateSignup);
loginForm.addEventListener("keypress", enterToSubmit);

//submit 되었을때 이메일 에러 비밀번호 에러 핸들링 함수들을 한번 불러와야하는건가?
//비밀번호가 비어있거나 형식이 맞지 않으면 에러
//비밀번호와 비밀번호 확인이 일치하지 않으면 비밀번호 확인쪽에 에러
