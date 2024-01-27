//변수 선언
const loginContainer = document.querySelector(".login-container");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");
const loginBtn = document.querySelector(".login-btn");

//이메일이 공란일때 추가할 에러 p태그를 생성하는 함수 입니다.
function makeEmptyEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "이메일을 입력해 주세요";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}
//이메일의 형식이 틀릴때 추가할 에러 p태그를 생성하는 함수 입니다.
function makeWrongEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "올바른 이메일 주소가 아닙니다.";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}
//이메일을 확인할때의 에러 p태그를 생성하는 함수 입니다.
function makeCheckEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "이메일을 확인해 주세요";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}
//이메일에러를 추가하는 함수입니다.
function addEmailError() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사 정규식

  if (inputEmail.value === "") {
    removeIfEmailError();
    makeEmptyEmailError();
  }
  if (inputEmail.value !== "" && !emailRegex.test(inputEmail.value)) {
    removeIfEmailError();
    makeWrongEmailError();
  }
}
//이메일에서 오류태그인 p태그가 연속적으로 쌓이는 것을 방지하기 위한 에러태그가 있다면 제거하는 함수입니다.
function removeIfEmailError() {
  const errorEmptyEmail = document.querySelector(".email-error");

  if (errorEmptyEmail) {
    errorEmptyEmail.remove();
    inputEmail.classList.remove("input-error");
  }
}
//비밀번호가 공란일때 에러 p태그를 생성하는 함수입니다.
//오류함수를 합치고 싶었으나 에러 태그를 생성하면 눈 이미지의 위치변화도 있기 때문에
//이메일과 비밀번호 에러 생성함수를 따로 만들었습니다.
function makeEmptyPasswordError() {
  const errorEmptyPassword = document.createElement("p");
  errorEmptyPassword.textContent = "비밀번호를 입력해 주세요";
  errorEmptyPassword.classList.add("password-error");
  inputPassword.after(errorEmptyPassword);
  inputPassword.classList.add("input-error");
  eyeOff.classList.add("eye-error");
  loginContainer.classList.add("error");
}
//비밀번호가 유효하지 않을때 에러 p태그를 생성하는 함수입니다.
function makeCheckPasswordError() {
  const errorEmptyPassword = document.createElement("p");
  errorEmptyPassword.textContent = "비밀번호를 확인해 주세요";
  errorEmptyPassword.classList.add("password-error");
  inputPassword.after(errorEmptyPassword);
  inputPassword.classList.add("input-error");
  eyeOff.classList.add("eye-error");
  loginContainer.classList.add("error");
}
//비밀번호에러를 추가하는 함수입니다.
function addPasswordError() {
  if (inputPassword.value === "") {
    removeIfPasswordError();
    makeEmptyPasswordError();
  }
}
//비밀번호에서 오류태그인 p태그가 연속적으로 쌓이는 것을 방지하기 위한 에러태그가 있다면 제거하는 함수입니다.
function removeIfPasswordError() {
  const errorEmptyPassword = document.querySelector(".password-error");

  if (errorEmptyPassword) {
    errorEmptyPassword.remove();
    inputPassword.classList.remove("input-error");
    eyeOff.classList.remove("eye-error");
    loginContainer.classList.remove("error");
  }
}
//로그인 버튼의 이벤트를 구현한 함수입니다.
function Login() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    window.location.assign("./folder");
  } else {
    removeIfEmailError();
    removeIfPasswordError();
    makeCheckEmailError();
    makeCheckPasswordError();
  }
}
//keypress가 일어났을때 Enter키를 눌렀는지 확인하고 Login()을 실행하는 함수입니다.
function enterLogin(e) {
  if (e.key === "Enter") {
    Login();
    e.preventDefault();
  }
}
//눈이미지를 클릭했을때 눈의 이미지를 토글하는 함수입니다. 토글시 비밀번호의 노출여부도 바뀝니다.
function eyeClick(e) {
  console.log(e.target.parentElement);
  if (e.target.parentElement === eyeOff) {
    eyeOff.classList.add("invisible");
    eyeOn.classList.remove("invisible");
    inputPassword.type = "text";
  }
  if (e.target.parentElement === eyeOn) {
    eyeOn.classList.add("invisible");
    eyeOff.classList.remove("invisible");
    inputPassword.type = "password";
  }

  e.preventDefault();
}

//이벤트 핸들러 적용
inputEmail.addEventListener("focusout", addEmailError);
inputEmail.addEventListener("focusin", removeIfEmailError);
inputPassword.addEventListener("focusout", addPasswordError);
inputPassword.addEventListener("focusin", removeIfPasswordError);
loginBtn.addEventListener("click", Login);
document.body.addEventListener("keypress", enterLogin);
eyeOff.addEventListener("click", eyeClick);
eyeOn.addEventListener("click", eyeClick);
