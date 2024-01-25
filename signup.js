const emailInput = document.querySelector(".email-input");
const form = document.querySelector(".sign-form");
const emailMessage = document.createElement("div");

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
    emailMessage.classList = "email-message";
  }

  if (!isValidEmail()) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }

  if (e.target.value === "test@codeit.com") {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이미 사용 중인 이메일입니다.";
    emailMessage.classList = "email-message";
  }
};
emailInput.addEventListener("focusout", handleFocusoutEmail);
