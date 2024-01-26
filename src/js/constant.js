// 테스트 유저 계정 정보
export const TEST_USER_EMAIL = "test@codeit.com";
export const TEST_USER_PASSWORD = "codeit101";

// 에러 표시 관련 정보
export const ERROR_MESSAGE_SPAN = (target) => {
  return target.parentElement.querySelector(".error_message");
};
export const ERROR_MESSAGE_EMPTY_EMAIL = "이메일을 입력해 주세요.";
export const ERROR_MESSAGE_INVALID_EMAIL = "올바른 이메일 주소가 아닙니다.";
export const ERROR_MESSAGE_EMPTY_PASSWORD = "비밀번호를 입력해 주세요.";
export const ERROR_MESSAGE_INVALID_PASSWORD =
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
export const ERROR_MESSAGE_WRONG_EMAIL = "이메일을 확인해 주세요.";
export const ERROR_MESSAGE_WRONG_PASSWORD = "비밀번호를 확인해 주세요.";
export const ERROR_MESSAGE_EXISTING_EMAIL = "이미 사용 중인 이메일입니다.";
export const ERROR_MESSAGE_INCONSISTENT_PASSWORD =
  "비밀번호가 일치하지 않아요.";

// 형식 관련 정보
export const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const REGEX_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
export const CHECK_EMPTY_INPUT = (target) => {
  return target.value === "";
};
export const EMPTY_MESSAGE = "";
