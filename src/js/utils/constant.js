export { EMAIL_REGEX, USER_EMAIL, USER_PASSWORD, PASSWORD_REGEX };

const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
