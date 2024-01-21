const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const errorMessage = document.querySelector("#error-message");

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

emailInput.addEventListener("focusout", checkEmailInput);
emailInput.addEventListener("focus", resetInputStyle);

// 이메일 입력
function checkEmailInput() {
  if (emailInput.value.trim() === "") {
    showErrorMessage("이메일을 입력해 주세요.");
  } else if (!validateEmail(emailInput.value.trim())) {
    showErrorMessage("올바른 이메일 주소가 아닙니다.");
  } else {
    hideErrorMessage();
  }
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  emailInput.classList.add("sign-input-error");
}

function hideErrorMessage() {
  errorMessage.style.display = "none";
  emailInput.classList.remove("sign-input-error");
}

function resetInputStyle() {
  hideErrorMessage();
}
