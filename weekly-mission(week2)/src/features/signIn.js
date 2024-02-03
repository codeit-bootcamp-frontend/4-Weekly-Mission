import { addErrorMsgToIncorrectInput } from "../view/addErrorMessageToInput.js";
import { emailInput, passwordInput } from "../constants/dom.js";

export const signInHandler = async (e) => {
  e.preventDefault();

  const inputAccount = {
    email: emailInput.value,
    password: passwordInput.value
  };

  // 마스터 계정이 아닌 경우 일단 다 차단
  if (await signInMaster(inputAccount)) return;

  addErrorMsgToIncorrectInput(emailInput);
  addErrorMsgToIncorrectInput(passwordInput);
}

const signInMaster = async (inputAccount) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputAccount)
  });

  if (response.status === 200) {
    const result = await response.json();
    localStorage.setItem("accessToken", result.data.accessToken);
    window.location.href = './folder.html';
    return true;
  }

  return false;
}
