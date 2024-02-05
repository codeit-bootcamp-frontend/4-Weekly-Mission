/**
 * 이메일 형식에 맞는지 확인합니다.
 * @param {string} 이메일
 */
export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/i;
  return regex.test(email);
};

/**
 * 입력된 비밀번호가 8자 이상 문자와 숫자가 있는지 확인합니다.
 * @param {string} 비밀번호
 */
export const isValidPassword = (password) => {
  const regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return regex.test(password);
};
