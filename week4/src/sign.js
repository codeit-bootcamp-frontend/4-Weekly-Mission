const signInput = document.querySelector(".sign-input");
const passwordInput = document.querySelector(".sign-input[type='password']");
const loginButton = document.querySelector(".cta");
const errorMessage = document.createElement("p");

// 이메일 관리

errorMessage.classList.add("error-message");

function isEmailValid(email) {
  return email.includes("@") && email.includes(".");
}

function focusoutError() {
  const emailValue = signInput.value.trim();

  if (emailValue === "") {
    errorMessage.textContent = "이메일을 입력해 주세요";
    signInput.classList.add("input-border-red");
    signInput.after(errorMessage);
  } else if (!isEmailValid(emailValue)) {
    errorMessage.textContent = "올바른 이메일 주소가 아닙니다";
    signInput.classList.add("input-border-red");
    signInput.after(errorMessage);
  }
}

function focusinErrorRemove() {
  signInput.classList.remove("input-border-red");
  errorMessage.remove();
}

signInput.addEventListener("focusout", focusoutError);
signInput.addEventListener("focusin", focusinErrorRemove);

// 비밀번호 관리 & 로그인 관리

function isLoginValid(email, password) {
  return email === "test@codeit.com" && password === "codeit101";
}

function loginButtonClick() {
  const emailValue = signInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (isLoginValid(emailValue, passwordValue)) {
    window.location.href = "/folder";
  } else {
    alert();
  }
}

loginButton.addEventListener("click", loginButtonClick);
