/**
 * 비밀번호와 확인 비밀번호가 같은지 확인합니다.
 * @param {string} passwordToCheck - 비밀번호
 * @param {string} currentPassword - 확인 비밀번호
 * @returns {boolean}
 */
export const isPasswordCorrect = (passwordToCheck, currentPassword) => {
  return passwordToCheck === currentPassword;
};
