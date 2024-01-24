import { emailRegex } from './constants.js';

const isInputEmpty = (input) => input === '';

const isEmailRegex = (input) => emailRegex.test(input);

/**에러 메세지 띄우기
 * @param {*} input - 에러 메세지 대상
 * @param {string} message - 에러 메세지 내용
 * @returns
 */
const showErrorText = (input, message) => {
  input.style.display = 'block';
  input.textContent = message;
};

/** 에러 보더 class 추가
 * @param {*} inputBorder element to change border to red
 * @returns
 */
const showErrorBorder = (inputBorders) => inputBorders.classList.add('errorBdr');

/**에러 표시 함수
 * @param {*} inputBorder 오류가 발생한 input
 * @param {*} input 오류 메세지를 표시할 div
 * @param {string} message 오류 내용
 */
const showError = (inputBorder, input, message) => {
  showErrorBorder(inputBorder);
  showErrorText(input, message);
};

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

/** 요소 보더 class 제거
 * @param {*} inputElement element to remove red border
 * @returns
 */
const hideErrorBorder = (inputElement) => inputElement.classList.remove('errorBdr');
/**에러 스타일 빼기
 * input에 새 내용 입력 시 에러 메세지 제거
 * @param {*} errorText - 에러 메세지를 숨길 div
 * @param {*} inputElement - 에러 보더를 해제할 input
 * @returns
 */
const clearError = (inputElement, errorText) => {
  errorText.style.display = 'none';
  hideErrorBorder(inputElement);
};

export { isEmailRegex, isInputEmpty, togglePasswordByEyecon, showError, clearError };
