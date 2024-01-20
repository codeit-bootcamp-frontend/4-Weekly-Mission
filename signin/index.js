const emailInput = document.querySelector('#email');

function typeInYourEmail(e) {
    e.target.classList.add('input-error');
    
    const span = document.createElement('span');
    span.classList.add('input-error-text');
    span.textContent = "이메일을 입력해 주세요.";
    e.target.after(span);
}

function removeError(e) {
    if (e.target.nextElementSibling.classList.contains('input-error-text')) {
        e.target.nextElementSibling.remove();
        e.target.classList.remove('input-error');
    }
}

emailInput.addEventListener('focusout', typeInYourEmail);
emailInput.addEventListener('focusin', removeError);