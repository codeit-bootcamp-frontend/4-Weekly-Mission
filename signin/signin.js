//focusout 이벤트 리스너
document
  .getElementById("email-input")
  .addEventListener("focusout", function () {
    let email = this.value;
    let errorMessage = document.getElementById("errorMessage-email");
    if (email === "") {
      console.log("보이기");
      errorMessage.style.display = "block";
    } else {
      console.log("안보이기");
      errorMessage.style.display = "none";
    }
  });

//focusout 이벤트 리스너
document
  .getElementById("passWord-input")
  .addEventListener("focusout", function () {
    let password = this.value;
    let errorMessage = document.getElementById("errorMessage-password");
    if (password === "") {
      console.log("보이기");
      errorMessage.style.display = "block";
    } else {
      console.log("안보이기");
      errorMessage.style.display = "none";
    }
  });

//focusin 이벤트 리스너
document.getElementById("email-input").addEventListener("focusin", function () {
  let errorMessage = document.getElementById("errorMessage-email");
  errorMessage.style.display = "none";
});

//focusin 이벤트 리스너
document
  .getElementById("passWord-input")
  .addEventListener("focusin", function () {
    let errorMessage = document.getElementById("errorMessage-password");
    errorMessage.style.display = "none";
  });

//유효성 검사
document.addEventListener("DOMContentLoaded", function () {
  console.log("동작");
  const loginForm = document.getElementsByClassName("sign-form")[0];
  const patternMap = {
    emailValidation: (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    rightEmail: (value) => value === "test@codeit.com",
    rightPassword: (value) => value === "codeit101",
  };

  loginForm.addEventListener("submit", function (e) {
    console.log("제출");
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("passWord-input").value;
    console.log(emailInput);
    console.log(passwordInput);
    let isValid = true;

    if (!patternMap.emailValidation(emailInput)) {
      console.log("첫번째");
      document.getElementById("errorMessage-email").textContent =
        "유효하지 않은 이메일 주소입니다.";
      document.getElementById("errorMessage-email").style.display = "block";
      isValid = false;
    } else if (!patternMap.rightEmail(emailInput)) {
      document.getElementById("errorMessage-email").textContent =
        "이메일을 확인해주세요.";
      document.getElementById("errorMessage-email").style.display = "block";
      isValid = false;
    }

    if (!patternMap.rightPassword(passwordInput)) {
      document.getElementById("errorMessage-password").textContent =
        "비밀번호를 확인해주세요.";
      document.getElementById("errorMessage-password").style.display = "block";
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
