export const isValidEmail = (emailInput) => {
  const email_regex =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  return email_regex.test(emailInput);
};

export const printEmailError = (emailMessage, emailInput) => {
  emailMessage.classList.remove("error-style");
  if (emailInput.value.length === 0) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "이메일을 입력해주세요.";
    emailInput.style.border = "1px solid #ff5b45";
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.after(emailMessage);
    emailMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.style.border = "1px solid #ff5b45";
  } else {
    emailMessage.classList.add("error-style");
    emailInput.style.border = "1px solid #ccd5e3";
    return true;
  }
};

export const checkAccessToken = (pageSrc) => {
  if (localStorage.getItem("accessToken")) {
    location.href = "./folder.html";
  } else {
    location.href = `${pageSrc}`;
  }
};
