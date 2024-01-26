import { vaildEmail, vaildPassword } from "../utils/isVaildID";

const checkVaildLogin = function (email, password) {
  if (email === vaildEmail && password === vaildPassword) {
    return 1;
  } else if (email === vaildEmail && password !== vaildPassword) {
    return -1;
  } else {
    return 0;
  }
};
