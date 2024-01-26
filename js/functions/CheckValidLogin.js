import { validEmail, validPassword } from "../utils/ValidID";

const checkValidLogin = function (email, password) {
  if (email === validEmail && password === validPassword) {
    return 1;
  } else if (email === validEmail && password !== validPassword) {
    return -1;
  } else {
    return 0;
  }
};
