// 이메일 input 에러 메시지

const signInput = document.querySelector(".sign-input");
const errorMessage = document.createElement("p");

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
