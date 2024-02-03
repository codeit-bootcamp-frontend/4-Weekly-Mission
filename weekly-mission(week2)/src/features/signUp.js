import { addErrorMsgToMismatchConfirm } from "../view/addErrorMessageToInput.js";

export const signUpHandler = (e) => {
  e.preventDefault();
  addErrorMsgToMismatchConfirm();

  const inputs = document.querySelectorAll('.input-profile', e.target);
  inputs.forEach((input) => {
    input.dispatchEvent(new Event('blur'));
  });

  const hasError = [...inputs].some((input) => {
    return input.classList.contains('js-input-profile-error');
  });
  const hasBlankInput = [...inputs].some((input) => input.value === '')

  if(hasError) return;
  if(hasBlankInput) return;

  window.location.href = '/folder.html';
}
