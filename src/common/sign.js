const form = document.querySelector('form');

const email = document.querySelector('#email');

const emailError = document.querySelector('.email-error');

const eyeIcon = document.querySelector('.icon');
const eyeIconOn = document.querySelector('.eye-icon-on');
const eyeIconOff = document.querySelector('.eye-icon-off');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PASSWORD = 'codeit101';

const isEmail = (asValue) => {
  let regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return regExp.test(asValue);
};

const removeEmpty = (input) => {
  return input.replace(/(\s*)/g, '');
};

export {
  form,
  email,
  emailError,
  eyeIcon,
  eyeIconOn,
  eyeIconOff,
  TEST_EMAIL,
  TEST_PASSWORD,
  isEmail,
  removeEmpty,
};
