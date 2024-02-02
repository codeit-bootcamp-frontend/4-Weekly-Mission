/** 입력받은 이메일이 정규식을 통과하는지 출력 */
function isVaildEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export { isVaildEmail };
