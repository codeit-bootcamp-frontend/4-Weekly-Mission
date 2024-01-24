const form = document.querySelector('#sign-box');
const emailInput = document.querySelector('#signin-email');
const passwordInput = document.querySelector('#signin-password');
const errorEmail = document.querySelector('#errorEmail');
const errorPassword = document.querySelector('#errorPassword');
const passwordCover = document.querySelector('.eyecon');
let isPasswordCovered = false;

//////////////// 함수 정의 ////////////////////

/**에러 메세지 띄우기
 * @param {*} inputElement - 에러 메세지 대상
 * @param {string} message - 에러 메세지 내용
 * @returns
 */
const showError = (inputElement, message) => {
  inputElement.style.display = 'block';
  inputElement.textContent = message;
};

/** 요소 보더 class 추가
 * @param {*} inputElement element to change border to red
 * @returns
 */
const showErrorBorder = (inputElement) => inputElement.classList.add('errorBdr');

/** 요소 보더 class 제거
 * @param {*} inputElement element to remove red border
 * @returns
 */
const hideErrorBorder = (inputElement) => inputElement.classList.remove('errorBdr');

/**에러 스타일 빼기
 * input에 새 내용 입력 시 에러메세지 제거
 * @param {*} errorText - display = none할 대상
 * @param {*} inputElement - 보더를 해제할 대상
 * @returns
 */
const clearError = (inputElement, errorText) => {
  errorText.style.display = 'none';
  hideErrorBorder(inputElement);
};

/**이메일 확인 함수
 * 이메일 형식과 빈 input 확인 후 error 메세지 출력
 */
const checkEmail = () => {
  const email = emailInput.value.trim();
  // 이메일 미입력 에러
  if (email == '') {
    showError(errorEmail, '이메일을 입력해 주세요.');
    showErrorBorder(emailInput);
    return false;
  }
  // 이메일 형식 확인
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError(errorEmail, '올바른 이메일 주소가 아닙니다.');
    showErrorBorder(emailInput);
    return false;
  }
  return true;
};

/**  비번 확인 함수
 * 빈 input 시 error 메세지 출력
 */
const checkPassword = () => {
  const password = passwordInput.value.trim();
  // 비밀번호 미입력 에러
  if (password == '') {
    showError(errorPassword, '비밀번호를 입력해 주세요.');
    showErrorBorder(passwordInput);
    return false;
  }
  return true;
};

/**눈 아이콘 변경 함수
 */
const toggleEye = () => {
  const coverEye = '../image/icon/eye_closed.svg';
  const openEye = '../image/icon/eye_open.svg';
  passwordCover.src = isPasswordCovered ? coverEye : openEye;
  isPasswordCovered = !isPasswordCovered;
};
/**비밀번호 가림 함수
 * 실행에 따라 비번 표시 유무가 바뀐다
 */
const showPassword = () => (passwordInput.type = isPasswordCovered ? 'password' : 'text');

///핸들러 배정 전 함수

const handleEmailFocusout = () => {
  clearError(emailInput, errorEmail);
  checkEmail();
};

const handlePasswordFocusout = () => {
  clearError(passwordInput, errorPassword);
  checkPassword();
};

const handlePasswordClick = () => {
  showPassword();
  toggleEye();
};

const validEmail = (event) => {
  const codeit = { email: 'test@codeit.com', password: 'codeit101' };
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === codeit.email && password === codeit.password) {
    event.preventDefault();
    window.location.href = '../html/folder.html';
    return;
  }
  showError(errorEmail, '이메일을 확인해 주세요.');
  showErrorBorder(emailInput);
  showError(errorPassword, '비밀번호를 확인해 주세요.');
  showErrorBorder(passwordInput);
  event.preventDefault();
};

//////////////// 함수 사용////////////////////

// 이메일 이벤트 리스너 부여
emailInput.addEventListener('focusout', handleEmailFocusout);

// 비번 이벤트 리스너 부여
passwordInput.addEventListener('focusout', handlePasswordFocusout);

// 로그인 버튼 입력 시 이메일 비번 확인 후 이동
form.addEventListener('submit', validEmail);
// 비번 가리기 버튼 리스너 부여
passwordCover.addEventListener('click', handlePasswordClick);

///todo///
// border style 적용
// 함수 파일 분리
// regex 상수화
// 함수 세분화
