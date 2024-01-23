import { form, btn } from "./elements.js";
import { showPassword } from "./functions/showPassword.js";
import { showErrorMsgSignin as showErrorMsg } from "./functions/showErrorMsg.js";
import { moveFolderSignin as moveFolderPage } from "./functions/moveFolderPage.js";

form.addEventListener("focusout", showErrorMsg);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
form.addEventListener("click", showPassword);
