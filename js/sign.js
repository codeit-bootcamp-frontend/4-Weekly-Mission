document.getElementById("email").addEventListener("focusout", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  if (emailInput.value.trim() === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    emailInput.classList.remove("sign-input");
    emailInput.classList.add("sign-input-error");
  } else if (emailInput.value.indexOf("@") === -1) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.remove("sign-input");
    emailInput.classList.add("sign-input-error");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("sign-input-error");
    emailInput.classList.add("sign-input");
  }
});

document.getElementById("password").addEventListener("focusout", function () {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.remove("sign-input");
    passwordInput.classList.add("sign-input-error");
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("sign-input-error");
    passwordInput.classList.add("sign-input");
  }
});

document
  .getElementById("sign-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    if (
      emailInput.value === "test@codeit.com" &&
      passwordInput.value === "codeit101"
    ) {
      window.location.href = "/folder";
    } else {
      event.preventDefault();

      emailError.textContent = "이메일을 확인해주세요.";
      emailInput.classList.remove("sign-input");
      emailInput.classList.add("sign-input-error");

      passwordError.textContent = "비밀번호를 확인해주세요.";
      passwordInput.classList.remove("sign-input");
      passwordInput.classList.add("sign-input-error");
    }
  });

let isEyeOn = false;

document.getElementById("eye").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye");

  isEyeOn = !isEyeOn;
  console.log(isEyeOn);

  if (isEyeOn) {
    passwordInput.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "./assets/sign/eye-on.svg");
  } else {
    passwordInput.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "./assets/sign/eye-off.svg");
  }
});
