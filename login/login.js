const EMAIL = document.getElementById("email");
const emailError = document.querySelector(".email_error");

const PASSWORD = document.getElementById("password");
const passwordError = document.querySelector(".password_error");

const LOGIN_BTN = document.querySelector(".login_btn");

function addEmailErrorMsg(message) {
  emailError.innerText = message;
} // => email message 추가

function addPasswordErrorMsg(message) {
  passwordError.innerText = message;
} // => email message 추가

function emailFormat(email) {
  const iemailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return iemailFormat.test(email);
} // => 이메일 형식

function emailText(em) {
  if (em.target.value == "") {
    addEmailErrorMsg("* 이메일을 입력해주세요.");
  } else if (!emailFormat(em.target.value)) {
    addEmailErrorMsg("* 올바른 이메일을 입력해주세요.");
  } else {
    addEmailErrorMsg("");
  }
}
function passwordText(pm) {
  if (pm.target.value == "") {
    addPasswordErrorMsg("* 비밀번호를 입력해주세요.");
  } else {
    addPasswordErrorMsg("");
  }
}

function login() {
  const correctEmail = "test@codeit.kr";
  const correctPassword = "codeit101";
  if (correctEmail == EMAIL.value && correctPassword == PASSWORD.value) {
    let link = "page.html";
    console.log("success");
    location.href = link;
  } else {
    addEmailErrorMsg("* 이메일을 확인해주세요.");
    addPasswordErrorMsg("* 비밀번호를 확인해주세요.");
  }
}

EMAIL.addEventListener("blur", emailText);
PASSWORD.addEventListener("blur", passwordText);
LOGIN_BTN.addEventListener("click", login);
