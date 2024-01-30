import { form, btn } from "./elements.js";
import { showPassword } from "./utils/showPassword.js";
import { showErrorMsgSignin as showErrorMsg } from "./utils/showErrorMsg.js";
import { moveFolderSignin as moveFolderPage } from "./utils/moveFolderPage.js";

form.addEventListener("focusout", showErrorMsg);
form.addEventListener("click", showPassword);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
