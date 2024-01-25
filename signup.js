const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const form = document.querySelector(".sign-form");
const emailMessage = document.createElement("div");
const passwordMessage = document.createElement("div");
const isValidEmail = (e) => {
  const email_regex =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (email_regex.test(emailInput.value)) {
    return true;
  } else {
    return false;
  }
};
const handleFocusoutEmail = (e) => {
  if (e.target.value.length === 0) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이메일을 입력해주세요.";
  }

  if (!isValidEmail()) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }

  if (e.target.value === "test@codeit.com") {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이미 사용 중인 이메일입니다.";
  } else {
    emailMessage.classList.add("error-style");
  }
};

const strongPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(str);
};

const handleFocusoutPassword = (e) => {
  console.log(e.target.value);
  if (!strongPassword(e.target.value)) {
    passwordInput.after(passwordMessage);
    passwordMessage.textContent =
      "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.";
  } else {
    passwordMessage.classList.add("error-style");
  }
};
emailInput.addEventListener("focusout", handleFocusoutEmail);
passwordInput.addEventListener("focusout", handleFocusoutPassword);
