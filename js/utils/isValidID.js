import { validEmail, validPassword } from "./ValidID";

const isValidID = function (email, password) {
  if (email === validEmail && password === validPassword) {
    return 1;
  } else if (email === validEmail && password !== validPassword) {
    return -1;
  } else if (emaill !== validEmail && password !== validPassword) {
    return 0;
  }
};

export { isValidID };
