import { form, btn } from "./elements.js";
import { isLogin } from "./utils/status.js";
import { showPassword } from "./utils/showPassword.js";
import { redirectToFolderPage } from "./utils/redirectToFolderPage.js";
import { showErrorMsgSignup as showErrorMsg } from "./utils/showErrorMsg.js";
import { moveFolderSignup as moveFolderPage } from "./utils/moveFolderPage.js";

window.addEventListener("DOMContentLoaded", () => {
  if (isLogin()) redirectToFolderPage("folder.html");
});
form.addEventListener("focusout", showErrorMsg);
form.addEventListener("click", showPassword);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
