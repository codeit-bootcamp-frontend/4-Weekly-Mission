import { querySelector } from "../utils/querySelector.js";

// 이벤트 등록을 위한 변수 설정
const emailInputBox = querySelector("#signup-email-input");
const signupPasswordInput = querySelector("#signup-password-input");
const signupPasswordRepeatInput = querySelector(
  "#signup-password-repeat-input"
);
const signupBtn = querySelector("#signup-button");
const signupForm = querySelector("#signup-form");

/** 이벤트 등록 */
emailInputBox.addEventListener("focusout", checkEmail); // 이메일 입력이 유효한지
signupPasswordInput.addEventListener("focusout", checkPassword); //비밀번호를 입력했는지
signupPasswordRepeatInput.addEventListener("focusout"); // 비밀번호 확인
signupBtn.addEventListener("click", tryLogin); // 로그인 시도
signupForm.addEventListener("keydown", loginByEnter); // 엔터키로 로그인하기
passwordEyeIcon.addEventListener("click", passwordShowHidden); // 비밀번호 보기 & 숨기기
