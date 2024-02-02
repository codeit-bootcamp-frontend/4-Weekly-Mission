/** 회원가입이 성공하는 경우 */
const checkSignupEmail = function (emailCheck) {
  emailCheck.classList.contains("error-box");
};

const checkSignupPassword = function (passwordCheck) {
  passwordCheck.classList.contains("error-box");
};

const checkSignupPasswordRepeat = function (passwordRepeatCheck) {
  passwordRepeatCheck.classList.contains("error-box");
};

export { checkSignupEmail, checkSignupPassword };
