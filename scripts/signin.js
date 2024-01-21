document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);

  function validateEmail() {
    const emailValue = emailInput.value;
    if (!emailValue) {
      document.querySelector("#emailError").textContent =
        "이메일을 입력해 주세요.";
      emailInput.classList.add("invalid");
      return false;
    } else if (!isValidEmail(emailValue)) {
      document.querySelector("#emailError").textContent =
        "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add("invalid");
      return false;
    }
    document.querySelector("emailError").textContent = "";
    emailInput.classList.remove("invalid");
    return true;
  }

  function validatePassword() {
    const passwordValue = passwordInput.value;
    if (!passwordValue) {
      document.querySelector("#passwordError").textContent =
        "비밀번호를 입력해 주세요.";
      return false;
    }
    document.querySelector("passwordError").textContent = "";
    return true;
  }

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});
