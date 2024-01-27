// 유효한 email, password 값
const validEmail = "test@codeit.com";
const validPassword = "codeit101";

const checkValidLogin = function (email, password) {
  if (email === validEmail && password === validPassword) {
    return 1;
  } else if (email === validEmail && password !== validPassword) {
    return -1;
  } else {
    return 0;
  }
};

export { checkValidLogin };
