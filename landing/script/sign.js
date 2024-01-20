//변수 email과 password에 input값 선언
const userInput = {
  email: document.querySelector("input[name=email]"),
  password: document.querySelector("input[name=password]"),
};
const { email, password } = userInput;

// const email = document.querySelector("input[name=email]");
// const password = document.querySelector("input[name=password]");
// 이메일과 비밀번호를 검사하는 정규 표현식 선언
const regexEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const regexPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//folder 페이지 이동용 키값 선언
const keyEmail = "test@codeit.com";
const keyPassword = "codeit101";
//변수 button에 로그인 버튼 선언
const loginForm = document.querySelector(".sign-form");
//변수 errorMsgEmail과 errorMsgPwd, eyeButton, eyeImg 선언
const errorMsgEmail = document.querySelector("#error-msg-email");
const errorMsgPwd = document.querySelector("#error-msg-pwd");
const eyeButton = document.querySelector(".eye-button");
const eyeImg = document.querySelector(".eye-button img");

//이메일 포커스 아웃 이벤트 발생 시 유효성 검사
email.addEventListener("focusout", (event) => {
  if (!event.target.value) {
    email.style.borderColor = "black";
    errorMsgEmail.style.color = "red";
    errorMsgEmail.innerHTML = "이메일을 입력해주세요.";
  } else if (!regexEmail.test(event.target.value)) {
    email.style.borderColor = "red";
    errorMsgEmail.style.color = "red";
    errorMsgEmail.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    errorMsgEmail.innerHTML = "";
  }
});
//비밀번호 포커스 아웃 인벤트 발생 시 유효성 검사
password.addEventListener("focusout", (event) => {
  if (!event.target.value) {
    password.style.borderColor = "black";
    errorMsgPwd.style.color = "red";
    errorMsgPwd.innerHTML = "비밀번호를 입력해주세요.";
  } else if (!regexPwd.test(event.target.value)) {
    password.style.borderColor = "red";
    errorMsgPwd.style.color = "red";
    errorMsgPwd.innerHTML = "올바른 비밀번호가 아닙니다.";
  } else {
    errorMsgPwd.innerHTML = "";
  }
});
/*form태그는 버튼을 누르면 링크를 이동하는 기본동작이 있다
form에서 submit할 때 이메일과 비밀번호가 일치하면 기존 페이지 대신 ./folder로 이동*/
loginForm.addEventListener("submit", (event) => {
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    event.preventDefault();
    window.location.replace("./folder/");
  }
});
//eye-button 눌렀을 때 비밀번호 보이게 바뀜
eyeButton.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeImg.src = "./images/eye-on.svg";
  } else if (password.type === "text") {
    password.type = "password";
    eyeImg.src = "./images/eye-off.svg";
  }
});
