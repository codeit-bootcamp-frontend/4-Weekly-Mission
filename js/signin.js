// 이메일, 비밀번호 input
const inputId = document.querySelector("#input-id");
const inputPw = document.querySelector("#input-pw");

// 로그인 버튼
const loginBtn = document.querySelector(".login-button");

// 에러 메세지
const emailErrorMsg = document.querySelector(".error-message-email");
const PwErrorMsg = document.querySelector(".error-message-password");

//비밀번호 보기/숨기기
const eyeBtn = document.querySelector("#password-onoff");

// 로그인 성공 조건
const userKey = {
  email: "test@codeit.com",
  password: "codeit101",
};
