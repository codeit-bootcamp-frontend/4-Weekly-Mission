const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const form = document.querySelector("#form");

function onSubmit(event) {
  event.preventDefault();

  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "/folder";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordError.textContent = "비밀번호를 확인해 주세요.";
  }
}

email.addEventListener("focusout", (e) => {
  console.log("focus out email");
  if (!e.target.value || !e.target.value.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
  } else {
    emailError.textContent = "";
  }

  if (!emailRegex.test(e.target.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  }
});

password.addEventListener("focusout", (e) => {
  console.log("focus out password");
  if (!e.target.value) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
  } else {
    passwordError.textContent = "";
  }
});

form.addEventListener("submit", onSubmit);
