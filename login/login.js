const loginBtn = document.getElementsByClassName("login_btn");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const HIDDEN_CLASSNAME = "hidden";
const USEREMAIL = "username";

const savedUsername = localStorage.getItem(USEREMAIL);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

inputEmail.addEventListener("pointermove");

// function check_email() {
//   let input = document.getElementById("email").value;

//   let email_format =
//     /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
//   if (email_format.test(input)) alert("이메일 입력 성공!");
//   else {
//     alert("잘못된 이메일 형식입니다");
//     document.getElementById("email").value = "";
//   }
// }
