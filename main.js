import { checkAccessToken } from "./common.js";
const loginBtn = document.querySelector(".cta-short");

const handleClickBtn = () => {
  checkAccessToken("signin.html");
};
loginBtn.addEventListener("click", handleClickBtn);
