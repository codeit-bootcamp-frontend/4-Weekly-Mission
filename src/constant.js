export const ERROR_MESSAGE = {
  NO_INPUT_EMAIL: "이메일을 입력해 주세요.",
  NO_INPUT_PASSWORD: "비밀번호를 입력해 주세요.",
  INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",

  CONFIRM_EMAIL: "이메일을 확인해 주세요.",
  CONFIRM_PASSWORD: "비밀번호를 확인해 주세요.",
};

export const emailCheck = (isValidEmail) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return !email_regex.test(isValidEmail) ? false : true;
};

export const TEST_USER = {
  ID: "test@codeit.com",
  PASSWORD: "codeit101",
};
