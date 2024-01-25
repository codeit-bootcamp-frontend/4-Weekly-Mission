const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordCheck = document.getElementById("passwordCheck");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

function createMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.classList.add("empty-message");
  return messageElement;
}

function emailValidChk(email) {
  return emailRegex.test(email);
}

function passwordValidChk(password) {
  return passwordRegex.test(password);
}

function handleBlur(input, message) {
  const messageContainer = input.parentElement;
  const existingMessage = messageContainer.querySelector("p");

  if (input.value.trim() === "") {
    // 입력 값이 비어있는 경우
    if (!existingMessage) {
      // 에러 메시지가 이미 존재하지 않는 경우에만 메시지를 추가
      messageContainer.appendChild(message);
    }
    input.classList.add("empty-input");
  } else {
    if (existingMessage) {
      // 입력 값이 비어있지 않은 경우 에러 메시지가 이미 존재하면 제거
      existingMessage.remove();
    }
    input.classList.remove("empty-input");

    // 유효성 검사 조건을 수행하고 그에 따라 에러 메시지 추가
    if (
      (input === emailInput && !emailValidChk(input.value)) ||
      (input === passwordInput &&
        (!passwordValidChk(input.value) ||
          input.value.length < 8 ||
          !/\d/.test(input.value) ||
          !/[a-zA-Z]/.test(input.value)))
    ) {
      messageContainer.appendChild(message);
      input.classList.add("empty-input");
    }
  }
}

emailInput.addEventListener("blur", function () {
  // 이메일 입력란에 포커스를 잃었을 때의 처리
  handleBlur(emailInput, createMessage("이메일을 입력해 주세요."));
});

passwordInput.addEventListener("blur", function () {
  // 비밀번호 입력란에 포커스를 잃었을 때의 처리
  const passwordMessage = createMessage(
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
  );
  handleBlur(passwordInput, passwordMessage);
});

//눈 모양 아이콘 이벤트
const toggleEye = (input) => {
  const eyeOff = "/images/eye-off.svg";
  const eyeOn = "/images/eye-on.svg";

  if (input.type === "password") {
    input.type = "text";
    input.nextElementSibling.src = eyeOn;
  } else {
    input.type = "password";
    input.nextElementSibling.src = eyeOff;
  }
};

document.querySelector(".eye-button").addEventListener("click", function () {
  toggleEye(document.getElementById("passwordInput"));
});

document
  .querySelector(".eye-button-check")
  .addEventListener("click", function () {
    toggleEye(document.getElementById("passwordCheck"));
  });
