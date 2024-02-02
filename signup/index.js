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
//로그인 버튼 선택
const loginButton = document.querySelector("button.cta");

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
  if (inputEmail.value === VALID_USER.email) {
    showError(inputEmail, emailPtag, "이미 사용 중인 이메일입니다.");
    return;
  }
  hideError(inputEmail, emailPtag);
}

// input이 8글자 이상인지 확인하는 함수
function checkInputLength(e) {
  return e.target.value.length >= 8;
}

// 비밀번호, 비밀번호 확인 형식 판별 함수
function isPasswordValid() {}
//비밀번호 에러 핸들링 함수
function handlePasswordPtag(e) {
  if (isTextEmpty(inputPassword.value)) {
    showError(inputPassword, passwordPtag, "비밀번호를 입력해 주세요.");
    return;
  }
  if (!checkInputLength(e)) {
    //console.log(e.target.nextElementSibling);
    showError(
      e.target,
      e.target.nextElementSibling,
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요."
    );
    return;
  }
  hideError(inputPassword, passwordPtag);
}

//로그인 함수
function loginCheck(e) {
  e.preventDefault();
  if (isValidUser()) {
    console.log("good");
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

toggleButtonPassword.addEventListener("click", handlePasswordToggleButton);
toggleButtonConfirmPassword.addEventListener(
  "click",
  handleConfirmPasswordToggleButton
);

loginButton.addEventListener("click", loginCheck);
document.addEventListener("keypress", enterToSubmit);

//submit 되었을때 이메일 에러 비밀번호 에러 핸들링 함수들을 한번 불러와야하는건가?
//비밀번호가 비어있거나 형식이 맞지 않으면 에러
//비밀번호와 비밀번호 확인이 일치하지 않으면 비밀번호 확인쪽에 에러
