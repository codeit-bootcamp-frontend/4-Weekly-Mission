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

//이메일이 일치하는 유저 데이터 반환
function getUserByEmail(emailInputValue) {
  if (VALID_USER.email !== emailInputValue) {
    return null;
  }

  return VALID_USER;
}

export { VALID_USER, isValidEmailFormat, getUserByEmail };
