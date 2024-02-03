import { $ } from "../constants/dom.js";

const togglePasswordVisibility = (e) => {
  const passwordInput = $('.input-profile', e.target.parentNode);
  e.target.classList.toggle('visibility');

  if (e.target.classList.contains('visibility')) {
    e.target.setAttribute('src', 'images/eye-on.svg');
    passwordInput.setAttribute('type', 'text');
    return;
  }

  e.target.setAttribute('src', 'images/eye-off.svg');
  passwordInput.setAttribute('type', 'password');
}

export default togglePasswordVisibility;
