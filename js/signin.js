function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(email);
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signForm = document.querySelector('.sign-form');

email.addEventListener('focusout', function() {
  let emailInput = this.value.trim();
  let emailErrorMessage = document.querySelector('.email-error-message');
  let emailFormatErrorMessage = document.querySelector('.email-format-error-message');
  if (emailInput === '') {
    emailErrorMessage.style.display = 'block';
    emailFormatErrorMessage.style.display = 'none';
    document.querySelector('.sign-input').style.border = '0.1rem solid red';
  } else if(!isValidEmail(emailInput)) {
    emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'block';
    document.querySelector('.sign-input').style.border = '0.1rem solid red';
  } else {
    emailErrorMessage.style.display = 'none';
    emailFormatErrorMessage.style.display = 'none';
    document.querySelector('.sign-input').style.border = '0.1rem solid var(--gray20)';
  }
});

password.addEventListener('focusout', function() {
  let passwordErrorMessage = document.querySelector('.password-error-message');
  let passwordInput = this.value.trim();
  if (passwordInput === '') {
    passwordErrorMessage.style.display = 'block';
    document.querySelector('#password').style.border = '0.1rem solid red';
  } else {
    passwordErrorMessage.style.display = 'none';
    document.querySelector('#password').style.border = '0.1rem solid var(--gray20)';
  }
});

signForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if(email.value === 'test@codeit.com' && password.value === 'codeit101') {
    window.location.href = '../folder.html';
  }
})