const userid = document.querySelector("#email");
const userpw = document.querySelector("#password");
const userpwCheck = document.querySelector("#password-check");
const emailError = document.querySelector(".emailError");
const pwError = document.querySelector(".pwError");
const signInButton = document.querySelector(".sign-in-button");
const eye = document.querySelectorAll(".eye");
const lineThrough = document.querySelectorAll(".line-through");

function validEmail(obj) {
  if (obj.value === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.color = "red";
    userid.style.border = "1px solid red";
  } else if (validEmailCheck(obj) == false) {
    console.log(obj.value);
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailError.style.color = "red";
    userid.style.border = "1px solid red";
  } else {
    emailError.textContent = "";
    userid.style.border = "";
  }
}

function validPassword(obj) {
  if (obj.value === "") {
    pwError.textContent = "비밀번호를 입력해주세요.";
    pwError.style.color = "red";
    userpw.style.border = "1px solid red";
  } else {
    pwError.textContent = "";
    userpw.style.border = "";
  }
}

function goUrl() {
  if (userid.value === "test@codeit.com" && userpw.value === "codeit101") {
    let link = "folder/";
    location.href = link;
  } else {
    emailError.textContent = "이메일을 확인해주세요.";
    emailError.style.color = "red";
    userid.style.border = "1px solid red";
    pwError.textContent = "비밀번호를 확인해주세요.";
    pwError.style.color = "red";
    userpw.style.border = "1px solid red";
  }
}

function enterLogin(e) {
  if (e.keyCode === 13) {
    goUrl();
  }
}

function validEmailCheck(obj) {
  var pattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return obj.value.match(pattern) != null;
}

function showPW(e) {
  if (userpw.type === "password") {
    userpw.type = "text";
    lineThrough[0].style.display = "block";
  } else {
    userpw.type = "password";
    lineThrough[0].style.display = "none";
  }
}

//For sign-up.html
function showPWCheck(e) {
  if (userpwCheck.type === "password") {
    userpwCheck.type = "text";
    lineThrough[1].style.display = "block";
  } else {
    userpwCheck.type = "password";
    lineThrough[1].style.display = "none";
  }
}

userid.addEventListener("focusout", (e) => {
  validEmail(e.target);
});
userpw.addEventListener("focusout", (e) => {
  validPassword(e.target);
});
signInButton.addEventListener("click", goUrl);
document.addEventListener("keypress", enterLogin);
eye[0].addEventListener("click", showPW);
eye[1].addEventListener("click", showPWCheck);
