const emailInput = document.querySelector('.sign-input');
const emptyEmailErrorMessage = document.querySelector('.empty-email-error');
const invalidEmailFormatMessage = document.querySelector('.correct-email-error');

emailInput.addEventListener('focusout', function () {
    let emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emptyEmailErrorMessage.classList.add('show-error');
        invalidEmailFormatMessage.classList.remove('show-error');
    } else {
        emptyEmailErrorMessage.classList.remove('show-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
          invalidEmailFormatMessage.classList.add('show-error');
        } else {
          invalidEmailFormatMessage.classList.remove('show-error');
        }
    }
});