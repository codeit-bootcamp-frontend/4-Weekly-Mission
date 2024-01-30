/**
 * 유효한 이메일 인지 확인하는 함수
 * @param {string} 이메일
 */
export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/i;
  return regex.test(email);
};

/**
 * 유효한 비밀번호 인지 확인하는 함수
 * @param {string} 비밀번호
 */
export const isValidPassword = (password) => {
  const regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return regex.test(password);
};
