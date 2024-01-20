const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
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

//눈 모양 아이콘 이벤트
const toggleEye = () => {
  const eyeOff = "/images/eye-off.svg";
  const eyeOn = "/images/eye-on.svg";
  const passwordInput = document.getElementById("passwordInput");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    document.querySelector(".eye-button").src = eyeOn;
  } else {
    passwordInput.type = "password";
    document.querySelector(".eye-button").src = eyeOff;
  }
};

emailInput.addEventListener("blur", function () {
  handleBlur(emailInput, createMessage("이메일을 입력해 주세요."));
});

passwordInput.addEventListener("blur", function () {
  handleBlur(passwordInput, createMessage("비밀번호를 입력해 주세요."));
});

document.querySelector(".eye-button").addEventListener("click", toggleEye);

function signIn(event) {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 이메일, 비밀번호 에러 메시지 초기화
  const emailContainer = emailInput.parentElement;
  const passwordContainer = passwordInput.parentElement;

  const existingEmailMessage = emailContainer.querySelector(".empty-message");
  const existingPasswordMessage =
    passwordContainer.querySelector(".empty-message");

  if (existingEmailMessage) {
    existingEmailMessage.remove();
  }

  if (existingPasswordMessage) {
    existingPasswordMessage.remove();
  }

  if (email === "test@codeit.com" && password === "codeit101") {
    // 로그인 성공
    window.location.href = "/folder.html";
  } else {
    // 로그인 실패 - 에러 메시지 표시
    if (email !== "test@codeit.com") {
      const emailMessage = createMessage("이메일을 확인해 주세요.");
      const parentElement = document.querySelector(".sign-input-box");
      parentElement.appendChild(emailMessage);
    }

    if (password !== "codeit101") {
      const passwordMessage = createMessage("비밀번호를 확인해 주세요.");
      const parentElement = document.querySelector(".sign-password");
      parentElement.appendChild(passwordMessage);
    }
  }
}

// 로그인 버튼 클릭 시 signIn 함수 호출
loginButton.addEventListener("click", (event) => {
  signIn(event);
});

// Enter 키 눌렀을 때 signIn 함수 호출
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    signIn(event);
  }
});
