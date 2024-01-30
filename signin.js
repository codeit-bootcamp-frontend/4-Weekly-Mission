import { form, btn } from "./elements.js";
import { isLogin } from "./utils/status.js";
import { showPassword } from "./utils/showPassword.js";
import { showErrorMsgSignin as showErrorMsg } from "./utils/showErrorMsg.js";
import { moveFolderSignin as moveFolderPage } from "./utils/moveFolderPage.js";
import { redirectToFolderPage } from "./utils/redirectToFolderPage.js";

if (isLogin()) redirectToFolderPage("folder.html");

form.addEventListener("focusout", showErrorMsg);
form.addEventListener("click", showPassword);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
