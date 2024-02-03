import { addErrorMsgToIncorrectInput } from "../view/addErrorMessageToInput.js";
import { emailInput, passwordInput } from "../constants/dom.js";
import signIn from "../apis/signInUser.js";

export const signInHandler = async (e) => {
  e.preventDefault();

  const inputAccount = {
    email: emailInput.value,
    password: passwordInput.value
  };

  // 로그인
  if (await signIn(inputAccount)) return;

  // 실패시 에러메시지 출력
  addErrorMsgToIncorrectInput(emailInput);
  addErrorMsgToIncorrectInput(passwordInput);
}
