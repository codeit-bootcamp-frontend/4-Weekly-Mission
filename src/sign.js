const form = document.querySelector(".sign-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const pEmail = document.createElement("p");
const pPwd = document.createElement("p");

const testEmail = "test@codeit.com";
const testPwd = "codeit101";

function reset_Ptag() {
  email.after(pEmail);
  pEmail.classList.add("errorMsg");
  password.after(pPwd);
  pPwd.classList.add("errorMsg");
}

function focusOutEmail() {
  if (!email.value) {
    pEmail.textContent = "이메일을 입력해 주세요.";
    email.classList.add("errorInput");
  } else if (!email.value.includes("@")) {
    pEmail.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("errorInput");
  } else {
    pEmail.remove();
    email.classList.remove("errorInput");
  }
}

function focusOutPwd() {
  if (!password.value) {
    pPwd.textContent = "비밀번호를 입력해 주세요.";
    password.classList.add("errorInput");
  } else {
    pPwd.remove();
    password.classList.remove("errorInput");
  }
}

function submitForm(e) {
  e.preventDefault();
  reset_Ptag();
  if (email.value === testEmail && password.value === testPwd) {
    window.location.href = "/folder";
    email.value = "";
  } else {
    pEmail.textContent = "이메일을 확인해 주세요.";
    pPwd.textContent = "비밀번호를 확인해 주세요.";
    email.classList.add("errorInput");
    password.classList.add("errorInput");
  }
}

reset_Ptag();
email.addEventListener("focusout", focusOutEmail);
password.addEventListener("focusout", focusOutPwd);
form.addEventListener("submit", submitForm);
