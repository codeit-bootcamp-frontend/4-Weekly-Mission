const EMAIL = document.getElementById("email");
const emailError = document.querySelector(".email_error");

const PASSWORD = document.getElementById("password");
const passwordError = document.querySelector(".password_error");

const LOGIN_BTN = document.querySelector(".login_btn");

function addEmailErrorMsg(message) {
  emailError.innerText = message;
  EMAIL.classList.add("error_box");
} // => email error message 추가

function addPasswordErrorMsg(message) {
  passwordError.innerText = message;
  PASSWORD.classList.add("error_box");
} // => password error message 추가

function emailFormat(email) {
  const iemailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return iemailFormat.test(email);
} // => 이메일 형식

function emailText() {
  if (EMAIL.value == "") {
    addEmailErrorMsg("* 이메일을 입력해주세요.");
  } else if (!emailFormat(EMAIL.value)) {
    addEmailErrorMsg("* 올바른 이메일을 입력해주세요.");
  } else {
    addEmailErrorMsg("");
    EMAIL.classList.remove("error_box");
  }
}

function passwordText() {
  if (PASSWORD.value == "") {
    addPasswordErrorMsg("* 비밀번호를 입력해주세요.");
  } else {
    addPasswordErrorMsg("");
    PASSWORD.classList.remove("error_box");
  }
}

function login() {
  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: EMAIL.value, password: PASSWORD.value }),
  }).then((response) => {
    if (response.status === 200) {
      let link = "../html/page.html";
      location.href = link;
    } else {
      addEmailErrorMsg("* 이메일을 확인해주세요.");
      addPasswordErrorMsg("* 비밀번호를 확인해주세요.");
    }
  });
}

EMAIL.addEventListener("blur", emailText);
PASSWORD.addEventListener("blur", passwordText);
LOGIN_BTN.addEventListener("click", login);
