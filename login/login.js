const EMAIL = document.getElementById("email");
const focusout = document.getElementsByClassName("focusout");

const PASSWORD = document.getElementById("password");
const ERROREPASSWORD = document.createElement("div");

ERROREPASSWORD.textContent = "비밀번호를 입력해주세요.";

function nullEMAIL() {
  const nullEMAIL = document.createElement("div");
  nullEMAIL.textContent = "이메일을 입력해주세요.";
  EMAIL.after(nullEMAIL);
}
function notSameEMAIL() {
  const notSameEMAIL = document.createElement("div");
  notSameEMAIL.textContent = "올바른 이메일 주소가 아닙니다.";
  EMAIL.after(notSameEMAIL);
}

EMAIL.addEventListener("click", nullEMAIL);
EMAIL.addEventListener("blur", notSameEMAIL);

// const EMAIL = document.getElementById("email");
// const emailError = document.getElementsByClassName("email_error");

// const PASSWORD = document.getElementById("password");
// const ERROREPASSWORD = document.createElement("div");

// ERROREPASSWORD.textContent = "비밀번호를 입력해주세요.";

// function nullEmail() {
//   emailError.innerText = "이메일을 입력해주세요.";
// }
// function notSameEmail() {
//   alert("올바른 이메일을 입력해주세요.");
// }

// EMAIL.addEventListener("focus", nullEmail);
// EMAIL.addEventListener("blur", notSameEmail);
