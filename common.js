const EMAIL_INPUT = document.querySelector('#email');
const PASSWORD_INPUT = document.querySelector('#password');

const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'codeit101';

// 인풋 입력 에러 시
function inputError(e, message) {
    e.target.classList.add('input-error');
    
    const SPAN = document.createElement('span');
    SPAN.classList.add('input-error-text');
    SPAN.textContent = message;
    e.target.after(SPAN);
}

export { EMAIL_INPUT, PASSWORD_INPUT, TEST_EMAIL, TEST_PW, inputError };