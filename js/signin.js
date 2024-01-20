function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(email);
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signForm = document.querySelector('.sign-form');
const emailErrorMessage = document.querySelector('.email-error-message');
const passwordErrorMessage = document.querySelector('.password-error-message');
const eyeButton = document.querySelector('.eye-button');
const eyeImage = document.querySelector('.eye-image');

const emailValidation = function() {
  let emailInput = email.value.trim();
  let emailFormatErrorMessage = document.querySelector('.email-format-error-message');
  
  if (emailInput === '') {
    emailErrorMessage.style.display = 'block';
    emailFormatErrorMessage.style.display = 'none';
    document.querySelector('#email').style.border = '0.1rem solid var(--red)';
  } else if(!isValidEmail(emailInput)) {
    emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'block';
    document.querySelector('#email').style.border = '0.1rem solid var(--red)';
  } else {
    emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'none';
    document.querySelector('#email').style.border = '0.1rem solid var(--gray20)';
  }
}

const passwordValidation = function() {
  let passwordInput = this.value.trim();

  if (passwordInput === '') {
    passwordErrorMessage.style.display = 'block';
    document.querySelector('#password').style.border = '0.1rem solid var(--red)';
  } else {
    passwordErrorMessage.style.display = 'none';
    document.querySelector('#password').style.border = '0.1rem solid var(--gray20)';
  }
}

const signFormValidation = function(event) {
  event.preventDefault();

  if(email.value === 'test@codeit.com' && password.value === 'codeit101') {
    window.location.href = '../folder.html';
  } else {
    emailErrorMessage.style.display = 'block';
    passwordErrorMessage.style.display = 'block';
    document.querySelector('#email').style.border = '0.1rem solid var(--red)';
    document.querySelector('#password').style.border = '0.1rem solid var(--red)';
  }
}

const eyeImgChange = function() {
  if(password.type === 'password') {
    password.type = 'text';
    eyeImage.src = '../../images/eye-on.png';
  } else {
    password.type = 'password';
    eyeImage.src = '../../images/eye-off.svg';
  }
}

email.addEventListener('focusout', emailValidation);

password.addEventListener('focusout', passwordValidation);

signForm.addEventListener('submit', signFormValidation)

eyeButton.addEventListener('click', eyeImgChange)