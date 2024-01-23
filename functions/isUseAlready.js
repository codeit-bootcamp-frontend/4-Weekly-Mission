import { EMAIL } from "../auth.js";

export const isUseAlready = (email) => {
  return email === EMAIL;
};
