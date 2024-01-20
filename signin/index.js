const emailInput = document.querySelector('#email');

function inputError(e, message) {
    e.target.classList.add('input-error');
    
    const span = document.createElement('span');
    span.classList.add('input-error-text');
    span.textContent = message;
    e.target.after(span);
}

function emailChecker(e) {
    if (!emailInput.value) {
        const enterEmail = "이메일을 입력해 주세요."
        inputError(e, enterEmail);
    } else if (emailInput.validity.typeMismatch) {
        const notAnEmail = "올바른 이메일 주소가 아닙니다."
        inputError(e, notAnEmail);
    }
}

function removeError(e) {
    if (e.target.nextElementSibling.classList.contains('input-error-text')) {
        e.target.nextElementSibling.remove();
        e.target.classList.remove('input-error');
    }
}

emailInput.addEventListener('focusout', emailChecker);
emailInput.addEventListener('focusin', removeError);