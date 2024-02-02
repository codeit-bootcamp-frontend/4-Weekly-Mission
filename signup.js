import { form, btn } from "./elements.js";
import { isLogin } from "./utils/status.js";
import { showPassword } from "./utils/showPassword.js";
import { showErrorMsgSignup as showErrorMsg } from "./utils/showErrorMsg.js";
import { moveFolderSignup as moveFolderPage } from "./utils/moveFolderPage.js";

//if (isLogin()) redirectToFolderPage("folder.html");

form.addEventListener("focusout", showErrorMsg);
form.addEventListener("click", showPassword);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
