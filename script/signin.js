// input
const emailInput = document.querySelector(".sign-email");
const passwordInput = document.querySelector(".sign-password input");

// error Message
const emailErrorMessage = document.querySelector(".sign-email-error");
const passwordErrorMessage = document.querySelector(".sign-password-error");

const eyeIcon = document.querySelector(".eye-icon");
const loginBtn = document.querySelector(".sign-btn");

// emailInput focusout events
emailInput.addEventListener("focusout", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailErrorMessage.textContent = "이메일을 입력해 주세요";
  } else if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailErrorMessage.textContent = "";
  }
});

// passwordInput focusout events
passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordErrorMessage.textContent = "비밀번호를 입력해 주세요";
  } else {
    passwordErrorMessage.textContent = "";
  }
});

//loginBtn click event
loginBtn.addEventListener("click", (event) => {
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    console.log("yes!");
    window.location.href = "/folder";
  } else {
    if (emailInput.value !== "test@codeit.com") {
      emailErrorMessage.textContent = "이메일을 확인해 주세요";
    }
    if (passwordInput.value !== "codeit101") {
      passwordErrorMessage.textContent = "비밀번호를 확인해 주세요";
    }
  }
  event.preventDefault();
});

//eye-icon click event
eyeIcon.addEventListener("click", () => {
  const passwordType =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", passwordType);

  passwordType === "password"
    ? eyeIcon.setAttribute("src", "../assets/svg/eye-off.svg")
    : eyeIcon.setAttribute("src", "../assets/svg/eye-on.svg");
});
