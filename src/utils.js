/**
 * CSS 클래스 이름: 입력 에러 스타일 적용
 * @constant {string}
 */
const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";

/**
 * CSS 클래스 이름: 에러 메시지 표시
 * @constant {string}
 */
const ERROR_MESSAGE_CLASSNAME = "error-message-on";

/**
 * 이메일 유효성 검사를 위한 정규식
 * @constant {RegExp}
 */
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

/**
 * 숫자로만 이루어져 있는지 확인하는 정규식 패턴
 * @constant {RegExp}
 */
const NUMERIC_ONLY_PATTERN = /^\d+$/;

/**
 * 알파벳으로만 이루어져 있는지 확인하는 정규식 패턴
 * @constant {RegExp}
 */
const ALPHABETIC_ONLY_PATTERN = /^[a-zA-Z]+$/;

/**
 * 입력 요소에 에러 스타일을 적용하고 에러 메시지를 표시
 * @param {Object} elements - 입력 요소 및 에러 메시지 요소 객체
 * @param {string} message - 표시할 에러 메시지
 * @param {HTMLElement} elements.input - 입력 요소
 * @param {HTMLElement} elements.errorMessage - 에러 메시지 요소
 */
export function setInputError(elements, message) {
  elements.input.classList.add(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.add(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = message;
};

/**
 * 입력 요소의 에러 스타일을 제거하고 에러 메시지를 제거
 * @param {Object} elements - 입력 요소 및 에러 메시지 요소 객체
 * @param {HTMLElement} elements.input - 입력 요소
 * @param {HTMLElement} elements.errorMessage - 에러 메시지 요소
 */
export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
};

/**
 * 주어진 이메일이 유효한지 확인
 * @param {string} email - 확인할 이메일 주소
 * @returns {boolean} - 유효한 경우 true, 그렇지 않으면 false
 */
export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
};

/**
 * 비밀번호 입력 필드의 가시성을 전환
 * @param {HTMLInputElement} input - 비밀번호 입력 필드
 * @param {HTMLButtonElement} toggleButton - 토글 버튼
 */
export function togglePassword(input, toggleButton) {
  /**
   * 토글되는 이미지 요소.
   * @type {HTMLImageElement}
   */
  let eyeImage = toggleButton.getElementsByClassName("eye-image")[0];

  /**
   * 현재 이미지의 가시성 상태.
   * @type {boolean}
   */
  let isImageVisible = (input.getAttribute("type") === "password");

  if (isImageVisible) {
    eyeImage.src = "./images/eye-on.svg";
    input.setAttribute("type", "text");
  } else {
    eyeImage.src = "./images/eye-off.svg";
    input.setAttribute("type", "password");
  }
  isImageVisible = !isImageVisible;
};

/**
 * 테스트 사용자 정보
 * @constant {Object}
 */
export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

/**
 * 두 비밀번호가 일치하는지 확인
 * @param {string} password1 - 비밀번호 1
 * @param {string} password2 - 비밀번호 2
 * @returns {boolean} - 일치하는 경우 true, 그렇지 않으면 false
 */
export function checkingPassword(password1, password2) {
  return password1 === password2;
};

/**
 * 비밀번호가 숫자 또는 알파벳으로만 이루어져 있는지 확인
 * @param {string} password - 확인할 비밀번호
 * @returns {boolean} - 조건에 맞으면 true, 그렇지 않으면 false
 */
export function checkPasswordType(password) {
  return NUMERIC_ONLY_PATTERN.test(password) || ALPHABETIC_ONLY_PATTERN.test(password);
};

/**
 * 로컬 스토리지에 accessToken 저장
 * @param {string} accessToken - 저장할 accessToken
 */
export function saveAccessTokenToLocalStorage(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}

/**
 * 로그인 페이지로 이동
 */
export function redirectToLoginPage() {
  location.href = "/login";
}

/**
 * 회원가입 페이지로 이동
 */
export function redirectToSignupPage() {
  location.href = "/signup";
}

/**
 * 로그인 또는 회원가입 성공 시 처리
 * @param {string} accessToken - 받은 accessToken
 */
export function handleSuccessLoginOrSignup(accessToken) {
  saveAccessTokenToLocalStorage(accessToken);
  redirectToFolderPage();
}

/**
 * 폴더 페이지로 이동
 */
export function redirectToFolderPage() {
  location.href = "/folder";
}