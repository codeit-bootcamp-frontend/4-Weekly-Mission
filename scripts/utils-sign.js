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

//회원가입 이메일 중복 검사
function isEmailMatching(emailInputValue) {
  return emailInputValue === VALID_USER.email;
}

//회원가입 비밀번호 양식 유효성 검사
function isValidPasswordFormat(passwordInputValue) {
  //8자 미만인 경우
  if (passwordInputValue.length < 8) {
    return false;
  }

  //숫자가 없는 경우
  if (!/\d/.test(passwordInputValue)) {
    return false;
  }

  //영문이 없는 경우
  if (!/[a-zA-Z]/.test(passwordInputValue)) {
    return false;
  }
  return true;
}

//회원가입 비밀번호 확인 유효성 검사
function isPasswordMatching(passwordInputValue, passwordCheckInputValue) {
  return passwordInputValue === passwordCheckInputValue;
}
//일치하는 유저 데이터 찾아서 반환
function getValidUserInfo({ emailInputValue, passwordInputValue }) {
  if (VALID_USER.email !== emailInputValue) {
    return null;
  }

  if (VALID_USER.password !== passwordInputValue) {
    return null;
  }

  return VALID_USER;
}

//로그인 유효성 검사
function isValidUser(emailInputValue, passwordInputValue) {
  return getValidUserInfo({ emailInputValue, passwordInputValue });
}

//회원가입 유효성 검사
function isValidSignUp(emailInputValue, passwordInputValue, passwordCheckInputValue) {
  if (!isValidEmailFormat(emailInputValue)) {
    console.log(`case 1`);
    return false;
  }

  if (isEmailMatching(emailInputValue)) {
    console.log(`case 2`);
    return false;
  }

  if (!isValidPasswordFormat(passwordInputValue)) {
    console.log(`case 3`);
    return false;
  }

  if (!isPasswordMatching(passwordInputValue, passwordCheckInputValue)) {
    console.log(`case 4`);
    return false;
  }

  return true;
}

export {};
