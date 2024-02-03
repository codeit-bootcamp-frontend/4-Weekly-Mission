const $ = (selector, element = document) => element.querySelector(selector);
const emailInput = $('.email');
const passwordInput = $('.password');
const passwordConfirmInput = $('.password-confirm');
const loginForm = $('.login-form');
const eyeIcons = document.querySelectorAll('.eye-icon');

export {$, emailInput, passwordInput, passwordConfirmInput, loginForm, eyeIcons };
