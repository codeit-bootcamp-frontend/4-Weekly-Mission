const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const rePasswordInput = document.querySelector(".check-password");
const signInput = document.querySelector(".sign-input");
const form = document.querySelector(".sign-form");
const emailMessage = document.createElement("div");
const passwordMessage = document.createElement("div");
const rePasswordMessage = document.createElement("div");
const signupBtn = document.querySelector(".cta");
const eyeBtn = document.querySelectorAll(".eye-button");

const isValidEmail = () => {
  const email_regex =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (email_regex.test(emailInput.value)) {
    return true;
  } else {
    return false;
  }
};
const handleFocusoutEmail = () => {
  emailMessage.classList.remove("error-style");
  if (emailInput.value.length === 0) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이메일을 입력해주세요.";
  } else if (!isValidEmail()) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (emailInput.value === "test@codeit.com") {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이미 사용 중인 이메일입니다.";
  } else {
    emailMessage.classList.add("error-style");
    return true;
  }
};

const strongPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str);
};

const handleFocusoutPassword = () => {
  passwordMessage.classList.remove("error-style");
  if (!strongPassword(passwordInput.value)) {
    passwordInput.after(passwordMessage);
    passwordMessage.textContent =
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
  } else {
    passwordMessage.classList.add("error-style");
    return true;
  }
};

const handleFocusoutRePassword = () => {
  rePasswordMessage.classList.remove("error-style");
  if (rePasswordInput.value !== passwordInput.value) {
    rePasswordInput.after(rePasswordMessage);
    rePasswordMessage.textContent = "비밀번호가 일치하지 않아요.";
  } else {
    rePasswordMessage.classList.add("error-style");
    return true;
  }
};

const handleClickBtn = (e) => {
  e.preventDefault();
  if (
    handleFocusoutEmail() &&
    handleFocusoutPassword() &&
    handleFocusoutRePassword()
  ) {
    location.href = "./folder.html";
  }
};
const showPw = () => {
  passwordInput.setAttribute("type", "text");
  rePasswordInput.setAttribute("type", "text");
  eyeBtn.forEach((v) => {
    return (v.style.display = "none");
  });
};

emailInput.addEventListener("focusout", handleFocusoutEmail);
passwordInput.addEventListener("focusout", handleFocusoutPassword);
rePasswordInput.addEventListener("focusout", handleFocusoutRePassword);
signupBtn.addEventListener("click", handleClickBtn);
eyeBtn[0].addEventListener("click", showPw);
eyeBtn[1].addEventListener("click", showPw);
