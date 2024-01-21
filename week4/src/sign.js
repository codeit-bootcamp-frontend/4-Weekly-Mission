// 이메일 input 에러 메시지

const signInput = document.querySelector(".sign-input");
const errorMessage = document.createElement("p");

errorMessage.textContent = "이메일을 입력해 주세요";
errorMessage.classList.add("error-message");

function inputError(e) {
  e.target.classList.add("input-border-red");
  signInput.after(errorMessage);
}

signInput.addEventListener("focusout", inputError);
