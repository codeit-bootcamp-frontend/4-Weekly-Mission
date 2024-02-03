import { signUp } from "../apis/signupUser.js";
import { emailInput, passwordInput } from "../constants/dom.js";

export const signUpHandler = (e) => {
  e.preventDefault();
  
  const inputAccount = {
    email: emailInput.value,
    password: passwordInput.value
  };

  const inputs = document.querySelectorAll('.input-profile', e.target);
  inputs.forEach((input) => {
    input.dispatchEvent(new Event('blur'));
  });

  const hasError = [...inputs].some((input) => {
    return input.classList.contains('js-input-profile-error');
  });
  const hasBlankInput = [...inputs].some((input) => input.value === '')

  if (hasError) return;
  if (hasBlankInput) return;

  signUp(inputAccount);
}
