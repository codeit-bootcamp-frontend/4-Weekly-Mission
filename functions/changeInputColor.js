import { emailMsg, passwordMsg, emailInput, passwordInput, passwordCheck, passwordCheckMsg } from "../elements.js";

export const changeInputColor = () => {
  emailMsg.innerHTML ? emailInput.classList.add("error") : emailInput.classList.remove("error");
  passwordMsg.innerHTML ? passwordInput.classList.add("error") : passwordInput.classList.remove("error");
  passwordCheckMsg?.classList.contains("hidden") ? passwordCheck?.classList.remove("error") : passwordCheck?.classList.add("error");
};
