const emailInput = document.querySelector(".email-input");
const emailError = document.createElement("div");

const passwordInput = document.querySelector(".password-input");
const passwordError = document.createElement("div");

emailError.classList.add("error-message");
passwordError.classList.add("error-message");
const eyeBtn = document.querySelector(".eye-button");
const loginBtn = document.querySelector(".cta");

const updateEmail = () => {
  return emailInput.value;
};
const updatePassword = () => {
  return passwordInput.value;
};
const isValidEmail = () => {
  const email_regex =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  const emailValue = updateEmail();
  if (email_regex.test(emailValue)) {
    return true;
  } else {
    return false;
  }
};
const isValidAccount = (event) => {
  event.preventDefault();
  if (updateEmail() === "test@codeit.com" && updatePassword() === "codeit101") {
    location.href = "./folder.html";
  } else if (
    updateEmail() !== "test@codeit.com" &&
    updatePassword() === "codeit101"
  ) {
    emailInput.after(emailError);
    emailError.textContent = "이메일을 확인해 주세요.";
    emailInput.style.border = "1px solid #ff5b45";
  } else if (
    updateEmail() === "test@codeit.com" &&
    updatePassword() !== "codeit101"
  ) {
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 확인해 주세요.";
    passwordInput.style.border = "1px solid #ff5b45";
  } else if (
    updateEmail() !== "test@codeit.com" &&
    updatePassword() !== "codeit101"
  ) {
    emailInput.after(emailError);
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 확인해 주세요.";
    emailInput.style.border = "1px solid #ff5b45";
    passwordInput.style.border = "1px solid #ff5b45";
  }
};

const showPw = () => {
  passwordInput.setAttribute("type", "text");
  eyeBtn.style.display = "none";
};
emailInput.addEventListener("input", updateEmail);

emailInput.addEventListener("focusout", (event) => {
  if (event.target.value.length === 0) {
    emailInput.after(emailError);
    emailError.textContent = "이메일을 입력해 주세요.";
  } else if (event.target.value.length !== 0 && isValidEmail()) {
    emailError.remove();
  } else if (!isValidEmail()) {
    emailInput.after(emailError);
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  }
});

passwordInput.addEventListener("input", updatePassword);
passwordInput.addEventListener("focusout", (event) => {
  if (event.target.value.length === 0) {
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 입력해 주세요.";
  } else {
    passwordError.remove();
  }
});

eyeBtn.addEventListener("click", showPw);
loginBtn.addEventListener("click", isValidAccount);
