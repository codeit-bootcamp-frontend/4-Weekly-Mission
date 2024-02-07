import {
  updateInputState,
  handleEmailValidation,
  getNewMessageElement,
  toggleEye,
} from "./utils.js";

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");

function handleBlur(input, message) {
  updateInputState(input, message);

  // 이메일 유효성 검사
  if (input === emailInput) {
    handleEmailValidation(input);
  }
}

function signIn(event) {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const data = {
    email: email,
    password: password,
  };

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

  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("로그인 실패");
      }
    })
    .then((response) => {
      localStorage.setItem("access-token", response.data.accessToken);
      window.location.replace("./folder.html");
    })
    .catch((error) => {
      // fetch 요청 자체가 실패한 경우에 대한 처리
      console.error(error);
    });
  // 로그인 실패 - 에러 메시지 표시
  if (email !== "test@codeit.com") {
    const emailMessage = getNewMessageElement("이메일을 확인해 주세요.");
    const parentElement = document.querySelector(".sign-input-box");
    parentElement.appendChild(emailMessage);
  }

  if (password !== "sprint101") {
    const passwordMessage = getNewMessageElement("비밀번호를 확인해 주세요.");
    const parentElement = document.querySelector(".sign-password");
    parentElement.appendChild(passwordMessage);
  }
}

emailInput.addEventListener("blur", function () {
  handleBlur(emailInput, getNewMessageElement("이메일을 입력해 주세요."));
});

passwordInput.addEventListener("blur", function () {
  handleBlur(passwordInput, getNewMessageElement("비밀번호를 입력해 주세요."));
});

//눈 모양 아이콘 이벤트
document.querySelector(".eye-button").addEventListener("click", function () {
  toggleEye(passwordInput);
});

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

document.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("access-token");
  if (accessToken) {
    window.location.href = "/folder.html";
  }
});
