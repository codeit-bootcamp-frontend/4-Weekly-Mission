import { atom } from "recoil";

export const searchState = atom({
  key: "searchKeyword",
  default: "",
});
