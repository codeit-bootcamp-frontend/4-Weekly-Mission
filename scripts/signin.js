document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");

  emailInput.addEventListener("blur", validateEmail);

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

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});
