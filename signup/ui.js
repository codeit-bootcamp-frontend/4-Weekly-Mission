/********************
 * VARIABLE DEFINTION
 ********************/

//이메일, 비밀번호 input
const passwordCheckInput = document.querySelector("#input-password-check");

//이메일, 비밀번호 error-message
const passwordCheckErrorMessageElement = document.querySelector("#error-password-check");

//비밀번호 보이기 버튼
const eyeBtnCheck = document.querySelector("#password-check-eye");
const eyeImgElement = document.querySelector("#password-check-eye .icon-eye");

/********************
 * UTILITY FUNCTION
 ********************/

//eyeBtnCheck 비밀번호 확인 보이게
function showPasswordCheck() {
  passwordCheckInput.type = "text";
  eyeImgElement.src = "../public/icon/eye-on.svg";
}

//eyeBtnCheck 비밀번호 확인 안보이게
function hidePasswordCheck() {
  passwordCheckInput.type = "password";
  eyeImgElement.src = "../public/icon/eye-off.svg";
}

export { passwordCheckInput, passwordCheckErrorMessageElement, eyeBtnCheck, showPasswordCheck, hidePasswordCheck };
