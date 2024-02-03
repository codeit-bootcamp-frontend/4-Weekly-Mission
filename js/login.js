import {EMPTY_INPUT, INVAILED_INPUT, CORRECT_INPUT} from '/js/variable.js';

export const checkLoginStatus = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/pages/folder';
  }
};

export const viewWarningText = (target, message) => {
  const inputBox = target.parentNode.querySelector('input');
  target.textContent = message;
  target.style.visibility = 'visible';
  inputBox.classList.add('warning-input');
};

export const hiddenWarningText = target => {
  const inputBox = target.parentNode.querySelector('input');
  target.style.visibility = 'hidden';
  inputBox.classList.remove('warning-input');
};

export const checkEmail = value => {
  const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}');
  if (value === null || value === '') return EMPTY_INPUT;
  if (!regex.test(value)) return INVAILED_INPUT;
  return CORRECT_INPUT;
};

export const checkPassword = value => {
  if (value === null || value === '') return EMPTY_INPUT;
  return CORRECT_INPUT;
};

export const visiblePassword = target => {
  const el = target.parentNode.querySelector('input');
  const viewPassword = JSON.parse(el.getAttribute('visible'));
  if (viewPassword) {
    el.setAttribute('visible', 'false');
    target.src = '/images/eye-off.png';
    el.type = 'password';
  } else {
    el.setAttribute('visible', 'true');
    target.src = '/images/eye-on.png';
    el.type = 'text';
  }
};

export const InputFocusEvent = (target, focusIn, focusOut) => {
  target.addEventListener('focusin', focusIn);
  target.addEventListener('focusout', focusOut);
};
