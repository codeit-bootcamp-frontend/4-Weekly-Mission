// 비밀번호 정규식
const passwordRegex = ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$;

/** 입력받은 비밀번호가 정규식을 통과하는지 출력 */
function isVaildPassword(password) {
  return passwordRegex.test(password);
}

export { passwordRegex, isVaildPassword };
