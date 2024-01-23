import { form, btn } from "./elements.js";
import { showErrorMsgSignup as showErrorMsg } from "./functions/showErrorMsg.js";
import { moveFolderSignup as moveFolderPage } from "./functions/moveFolderPage.js";
import { showPassword } from "./functions/showPassword.js";

form.addEventListener("focusout", showErrorMsg);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", ({ key }) => key === "Enter" && moveFolderPage());
form.addEventListener("click", showPassword);
