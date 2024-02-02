/** 입력받은 비밀번호가 정규식을 통과하는지 출력 */
function isVaildPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return passwordRegex.test(password);
}

export { isVaildPassword };
