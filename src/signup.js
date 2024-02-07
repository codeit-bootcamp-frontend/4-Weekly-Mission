const signupEmail = document.getElementById("email");
const errEmail = document.getElementById("emailErrorMessage");
const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

signupEmail.addEventListener("focusout", function () {
  if (!signupEmail.value) {
    // 빈칸일 때
    errEmail.style.display = "block";
    errEmail.innerText = "이메일을 입력해주세요.";
    signupEmail.style.borderColor = "var(--red)";
  } else if (!emailRegex.test(signupEmail.value)) {
    // 이메일 형식 오류일 때
    errEmail.style.display = "block";
    errEmail.innerText = "올바른 이메일 주소가 아닙니다.";
    signupEmail.style.borderColor = "var(--red)";
  } else if (signupEmail.value === "test@codeit.com") {
    errEmail.style.display = "block";
    errEmail.innerText = "이미 사용중인 이메일입니다.";
    signupEmail.style.borderColor = "var(--red)";
  } else {
    errEmail.style.display = "none";
    signupEmail.style.borderColor = "var(--gray-20)";
  }
});

const signupPassword = document.getElementById("password");
const errPassword = document.getElementById("passwordErrorMessage");
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

signupPassword.addEventListener("focusout", function () {
  if (!signupPassword.value) {
    // 빈칸일 때
    errPassword.style.display = "block";
    errPassword.innerText = "비밀번호를 입력해주세요.";
    signupPassword.style.borderColor = "var(--red)";
  } else if (!pwdRegex.test(signupPassword.value)) {
    //8글자 미만 or 문자열만 있거나 숫자만 있는 경우
    errPassword.style.display = "block";
    errPassword.innerText =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    signupPassword.style.borderColor = "var(--red)";
  } else {
    errPassword.style.display = "none";
    signupPassword.style.borderColor = "var(--gray-20)";
  }
});

const signupRepassword = document.getElementById("passwordValidation");
const errRepassword = document.getElementById("passwordValidationErrorMessage");

signupRepassword.addEventListener("focusout", function () {
  if (!signupRepassword.value) {
    // 빈칸일 때
    errRepassword.style.display = "block";
    errRepassword.innerText = "비밀번호를 입력해주세요.";
    signupRepassword.style.borderColor = "var(--red)";
  } else if (!pwdRegex.test(signupRepassword.value)) {
    //8글자 미만 or 문자열만 있거나 숫자만 있는 경우
    errRepassword.style.display = "block";
    errRepassword.innerText =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    signupRepassword.style.borderColor = "var(--red)";
  } else if (signupPassword.value !== signupRepassword.value) {
    //비밀번호가 일치하지 않을 때
    errRepassword.style.display = "block";
    errRepassword.innerText = "비밀번호가 일치하지 않아요.";
    signupRepassword.style.borderColor = "var(--red)";
  } else {
    errRepassword.style.display = "none";
    signupRepassword.style.borderColor = "var(--gray-20)";
  }
});

function submit() {
  // e.preventDefault();
  if (
    errEmail.style.display == "none" &&
    errPassword.style.display == "none" &&
    errRepassword.style.display == "none"
  ) {
    alert("회원가입 성공");
    const link = "folder.html";
    window.location.href = link;
  }
}

const button = document.getElementById("signupBtn");
button.addEventListener("click", submit);

// 키보드 엔터로 제출--안 먹어요..
document
  .getElementById("form")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submit();
    }
  });