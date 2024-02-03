import MASTER_ACCOUNT from "../constants/accounts.js";
import { $ } from "../constants/dom.js";
import { addErrorMsgToIncorrectInput } from "../view/addErrorMessageToInput.js";

const isMaster = (email, password) => email === MASTER_ACCOUNT.EMAIL && password === MASTER_ACCOUNT.PASSWORD;

export const signInHandler = (e) => {
  e.preventDefault();

  const emailInput = $('.email').value;
  const passwordInput = $('.password').value;

  // 마스터 계정이 아닌 경우 일단 다 차단
  if (isMaster(emailInput, passwordInput)) {
    window.location.href = './folder.html';
  }

  addErrorMsgToIncorrectInput($('.email'));
  addErrorMsgToIncorrectInput($('.password'));
}
