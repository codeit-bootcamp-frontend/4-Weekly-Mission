const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function createMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.classList.add("empty-message");
  return messageElement;
}

function emailValidChk(email) {
  return emailRegex.test(email);
}

function handleBlur(input, message) {
  const messageContainer = input.parentElement;
  const existingMessage = messageContainer.querySelector("p");

  if (input.value.trim() === "") {
    if (!existingMessage) {
      messageContainer.appendChild(message);
    }
    input.classList.add("empty-input");
  } else {
    if (existingMessage) {
      existingMessage.remove();
    }
    input.classList.remove("empty-input");

    // 이메일 유효성 검사
    if (input === emailInput && !emailValidChk(input.value)) {
      const emailMessage = createMessage("올바른 이메일 주소가 아닙니다.");
      messageContainer.appendChild(emailMessage);
      input.classList.add("empty-input");
    }
  }
}

emailInput.addEventListener("blur", function () {
  handleBlur(emailInput, createMessage("이메일을 입력해 주세요."));
});

passwordInput.addEventListener("blur", function () {
  handleBlur(passwordInput, createMessage("비밀번호를 입력해 주세요."));
});
