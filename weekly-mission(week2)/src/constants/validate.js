import REGEX  from "./regex.js";

export const isValid = {
  email: (email) => REGEX.EMAIL.test(email),
  password: (password) => REGEX.PASSWORD.test(password)
};
