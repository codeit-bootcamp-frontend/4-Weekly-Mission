const emailInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");

// 이메일 유효성 검사
function validateEmail() {
  const errorMessage = document.querySelector("#email-empty-message");
  const invalidEmailMessage = document.querySelector("#email-invalid-message");

  if (emailInput.value.trim() === "") {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "red";
    invalidEmailMessage.style.display = "none";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.style.display = "none";
      emailInput.style.borderColor = "red";
      invalidEmailMessage.style.display = "block";
    } else {
      // 이메일이 올바른 경우
      errorMessage.style.display = "none";
      invalidEmailMessage.style.display = "none";
      emailInput.style.borderColor = "#6D6AFE";
    }
  }
}

// 비밀번호 유효성 검사
function validatePw() {
  const errorMessage = document.querySelector("#password-empty-message");

  if (pwInput.value.trim() === "") {
    console.log("hi");
    errorMessage.style.display = "block";
    pwInput.style.borderColor = "red";
  } else {
    errorMessage.style.display = "none";
    pwInput.style.borderColor = "#6D6AFE";
  }
}

// 로그인 인증 검사
function attemptLogin() {
  const emailAuth = document.querySelector("#email-auth-message");
  const passwordAuth = document.querySelector("#password-auth-message");

  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    window.location.href = "./folder.html";
  } else {
    // 로그인 실패 시 처리
    emailAuth.style.display = "block";
    passwordAuth.style.display = "block";
    emailInput.style.borderColor = "red";
    pwInput.style.borderColor = "red";
  }
}
