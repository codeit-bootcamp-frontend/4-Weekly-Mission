const form_object = document.querySelectorAll(".sign-form");
const form = [...form_object];
const emailInput = form.querySelector("#email-input");
const passwordInput = form.querySelector("#password-input");

const patternMap = {
  emailValidation: (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
};

const mockUp = {
  rightEmail: (value) => value === "test@codeit.com",
  rightPassword: (value) => value === "codeit101",
};

//focusout 이벤트 리스너
emailInput.addEventListener("focusout", function (e) {
  let email = e.target.value;

  if (email === "") {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "var(--Linkbrary-red)";
  } else {FpassW
    errorMessage.style.display = "none";
  }
});

//focusout 이벤트 리스너
passwordInput.addEventListener("focusout", function (e) {
  let password = e.target.value;
  const errorMessage = form.getElementById("errorMessage-password");

  if (password === "") {
    errorMessage.style.display = "block";
    passwordInput.style.borderColor = "var(--Linkbrary-red)";
  } else {
    errorMessage.style.display = "none";
  }
});

//focusin 이벤트 리스너
emailInput.addEventListener("focusin", function () {
  const errorMessage = form.getElementById("errorMessage-password");
  errorMessage.style.display = "none";
});

//focusin 이벤트 리스너
passwordInput.addEventListener("focusin", function () {
  const errorMessage = form.getElementById("errorMessage-password");
  errorMessage.style.display = "none";
});

//유효성 검사
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = form.getElementsByClassName("sign-form")[0];

  loginForm.addEventListener("submit", function (e) {
    const emailInput = e.target.value;
    const passwordInput = passwordInput.value;

    let isValid = true;

    if (!patternMap.emailValidation(emailInput)) {
      form.getElementById("errorMessage-email").textContent =
        "유효하지 않은 이메일 주소입니다.";
      form.getElementById("errorMessage-email").style.display = "block";
      emailInput.style.borderColor = "var(--Linkbrary-red)";
      isValid = false;
    } else if (!mockUp.rightEmail(emailInput)) {
      document.getElementById("errorMessage-email").textContent =
        "이메일을 확인해주세요.";
      document.getElementById("errorMessage-email").style.display = "block";
      emailInput.style.borderColor = "var(--Linkbrary-red)";
      isValid = false;
    }

    if (!mockUp.rightPassword(passwordInput)) {
      document.getElementById("errorMessage-password").textContent =
        "비밀번호를 확인해주세요.";
      document.getElementById("errorMessage-password").style.display = "block";
      passwordInput.style.borderColor = "var(--Linkbrary-red)";
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(e);
    } else {
      document.getElementById("errorMessage-email").style.display = "none";
      document.getElementById("errorMessage-password").style.display = "none";
    }
  });
});
