export const ERROR_MESSAGE = {
  NO_INPUT_EMAIL: "이메일을 입력해 주세요.",
  NO_INPUT_PASSWORD: "비밀번호를 입력해 주세요.",
  INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
  INVALID_PASSWORD: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  DO_NOT_MATCH_PASSWORD: "비밀번호가 일치하지 않습니다.",

  REGISTERED_EMAIL: "이미 사용 중인 이메일입니다.",
  CONFIRM_EMAIL: "이메일을 확인해 주세요.",
  CONFIRM_PASSWORD: "비밀번호를 확인해 주세요.",
};

export const emailCheck = (confirmEmail) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return !email_regex.test(confirmEmail) ? false : true;
};

export const passwordCheck = (confirmPassword) => {
  const password_regax = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return !password_regax.test(confirmPassword) ? false : true;
};

export const TEST_USER = {
  ID: "test@codeit.com",
  PASSWORD: "codeit101",
};
