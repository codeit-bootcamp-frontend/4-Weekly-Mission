import { $ } from './common.js';

const $iconEyeOpen = $('.icon-eye-open');
const $iconEyeClose = $('.icon-eye-close');

const hidePassword = ($jsPasswordInput) => {
  $jsPasswordInput.type = 'password';
  $iconEyeOpen.style.display = 'block';
  $iconEyeClose.style.display = 'none';
};

const showPassword = ($jsPasswordInput) => {
  $jsPasswordInput.type = 'text';
  $iconEyeOpen.style.display = 'none';
  $iconEyeClose.style.display = 'block';
};

export { hidePassword, showPassword };
