const form = document.querySelector('form');

const email = document.querySelector('#email');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const eyeIcon = document.querySelectorAll('.icon');
const eyeIconOn = document.querySelectorAll('.eye-icon-on');
const eyeIconOff = document.querySelectorAll('.eye-icon-off');

const isEmail = (asValue) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return regExp.test(asValue);
};

const removeEmpty = (input) => {
  return input.replace(/(\s*)/g, '');
};

const togglePasswordVisibility = (password, eyeOff, eyeOn) => {
  if (password.type === 'password') {
    password.type = 'text';
    eyeOff.style.display = 'none';
    eyeOn.style.display = 'inline-block';
  } else {
    password.type = 'password';
    eyeOff.style.display = 'inline-block';
    eyeOn.style.display = 'none';
  }
};

export {
  form,
  email,
  emailError,
  passwordError,
  eyeIcon,
  eyeIconOn,
  eyeIconOff,
  isEmail,
  removeEmpty,
  togglePasswordVisibility,
};
