/**비밀번호 가림 함수
 * 실행에 따라 비번 표시 유무가 바뀐다
 */
const showPassword = (passwordInput, isPasswordCovered) =>
  (passwordInput.type = isPasswordCovered ? 'password' : 'text');

/**눈 아이콘 변경 함수
 */
const toggleEye = (eyecon, isPasswordCovered) => {
  const coverEye = '../image/icon/eye_closed.svg';
  const openEye = '../image/icon/eye_open.svg';
  eyecon.src = isPasswordCovered ? coverEye : openEye;
};

const togglePasswordByEyecon = (passwordInput, isPasswordCovered, eyecon) => {
  showPassword(passwordInput, isPasswordCovered);
  toggleEye(eyecon, isPasswordCovered);
};

export { togglePasswordByEyecon };
