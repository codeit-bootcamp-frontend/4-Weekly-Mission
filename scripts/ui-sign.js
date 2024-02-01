/* DOM Element Selector & Controller */

/********************
 * VARIABLE DEFINTION
 ********************/

//이메일, 비밀번호 input
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");
const passwordCheckInput = document.querySelector("#input-password-check");

//이메일, 비밀번호 error-message
const emailErrorMessageElement = document.querySelector("#error-email");
const passwordErrorMessageElement = document.querySelector("#error-password");
const passwordCheckErrorMessageElement = document.querySelector("#error-password-check");

//비밀번호 보이기 버튼
const eyeBtn = document.querySelector("#password-eye");
const eyeBtnCheck = document.querySelector("#password-check-eye");

//유효한 로그인 정보
const VALID_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
