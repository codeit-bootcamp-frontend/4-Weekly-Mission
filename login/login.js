const EMAIL = document.getElementById("email");
const ERROREMAIL = document.createElement("div");
const focusout = document.getElementsByClassName("focusout");

const PASSWORD = document.getElementById("password");
const ERROREPASSWORD = document.createElement("div");

ERROREMAIL.textContent = "이메일을 입력해주세요";
ERROREPASSWORD.textContent = "비밀번호를 입력해주세요";

EMAIL.onclick = function () {
  EMAIL.after(ERROREMAIL);
};

PASSWORD.onclick = function () {
  PASSWORD.after(ERROREPASSWORD);
};
