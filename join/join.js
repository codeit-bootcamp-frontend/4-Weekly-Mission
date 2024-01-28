const EMAIL = document.getElementById("email");
const emailError = document.querySelector(".email_error");

const PASSWORD = document.getElementById("password");
const passwordError = document.querySelector(".password_error");

const PASSWORD_CHECK = document.getElementById("password_check");
const passwordError_check = document.querySelector(".password_error_check");

const JOIN_BTN = document.querySelector(".join_btn");

function addEmailErrorMsg(message) {
  emailError.innerText = message;
  EMAIL.classList.add("error_box");
} // => email error message 추가

function addPasswordErrorMsg(message) {
  passwordError.innerText = message;
  PASSWORD.classList.add("error_box");
} // => password error message 추가

function addPasswordErrorCheckMsg(message) {
  passwordError_check.innerText = message;
  PASSWORD_CHECK.classList.add("error_box");
} // => password error check message 추가

function emailFormat(email) {
  const iemailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return iemailFormat.test(email);
} // => 이메일 형식
function passwordFormat(password) {
  const reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return reg.test(password);
} // => 비밀번호 형식

const correctEmail = "test@codeit.kr";

function emailText(em) {
  if (em.target.value == "") {
    addEmailErrorMsg("* 이메일을 입력해주세요.");
  } else if (!emailFormat(em.target.value)) {
    addEmailErrorMsg("* 올바른 이메일을 입력해주세요.");
  } else if (correctEmail == EMAIL.value) {
    addEmailErrorMsg("* 이미 사용 중인 이메일입니다.");
  } else {
    addEmailErrorMsg("");
    EMAIL.classList.remove("error_box");
  }
}
function passwordText(pm) {
  if (pm.target.value == "") {
    addPasswordErrorMsg("* 비밀번호를 입력해주세요.");
  } else if (!passwordFormat(pm.target.value)) {
    addPasswordErrorMsg("* 비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else {
    addPasswordErrorMsg("");
    PASSWORD.classList.remove("error_box");
  }
}

function passwordCheckText(pm) {
  if (pm.target.value == "") {
    addPasswordErrorCheckMsg("* 비밀번호를 입력해주세요.");
  } else if (PASSWORD.value == PASSWORD_CHECK.value) {
    addPasswordErrorCheckMsg("");
    PASSWORD_CHECK.classList.remove("error_box");
  } else {
    addPasswordErrorCheckMsg("* 비밀번호가 일치하지 않아요.");
  }
}

function join() {
  if (EMAIL.value == "" || PASSWORD.value == "" || PASSWORD_CHECK.value == "") {
    addEmailErrorMsg("* 이메일을 확인해주세요.");
    addPasswordErrorMsg("* 비밀번호를 확인해주세요.");
    addPasswordErrorCheckMsg("* 비밀번호를 확인해주세요.");
  } else if (PASSWORD.value !== PASSWORD_CHECK.value) {
    addPasswordErrorMsg("* 비밀번호를 확인해주세요.");
    addPasswordErrorCheckMsg("* 비밀번호를 확인해주세요.");
  } else if (!emailFormat(EMAIL.value)) {
    addEmailErrorMsg("* 이메일을 확인해주세요.");
  } else {
    let link = "page.html";
    location.href = link;
  }
}

JOIN_BTN.addEventListener("click", join);
EMAIL.addEventListener("blur", emailText);
PASSWORD.addEventListener("blur", passwordText);
PASSWORD_CHECK.addEventListener("blur", passwordCheckText);
