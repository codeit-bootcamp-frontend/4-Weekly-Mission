/* Common SignIn & SignUp Utility Logic */

/********************
 * VARIABLE DEFINTION
 ********************/

//유효한 로그인 정보
const VALID_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

/********************
 * UTILITY FUNCTION
 ********************/

//이메일 양식 유효성 검사
function isValidEmailFormat(emailInputValue) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailInputValue);
}

export { VALID_USER, isValidEmailFormat };
