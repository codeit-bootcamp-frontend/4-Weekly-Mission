const ALREADY_EXIST_EMAIL = 'test@codeit.com';

const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passW');
const passwordConfirmInput = document.querySelector('#veriPassW');
const form = document.querySelector('.sign-form');

// 이메일 검증 함수
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 비밀번호 검증 함수
function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

// 이메일 입력 필드에 대한 이벤트 리스너
function checkEmail() {
    const errorSpan = emailInput.nextElementSibling;
    errorSpan.hidden = false;
    emailInput.classList.add('error');
    console.log(emailInput.value);

    if (!emailInput.value) {
        errorSpan.textContent = '이메일을 입력해주세요.';
        return;
    }

    if (!validateEmail(emailInput.value)) {
        errorSpan.textContent = '올바른 이메일 주소가 아닙니다.';
        return;
    }

    if (emailInput.value === ALREADY_EXIST_EMAIL) {
        errorSpan.textContent = '이미 사용 중인 이메일입니다.';
        return;
    }

    errorSpan.hidden = true;
    emailInput.classList.remove('error');
}
emailInput.addEventListener('focusout', checkEmail);

function checkPassword() {
    const errorPSpan = passwordInput.parentElement.nextElementSibling;
    if (!validatePassword(passwordInput.value)) {
        errorPSpan.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        errorPSpan.hidden = false;
        passwordInput.classList.add('error');
    } else {
        errorPSpan.hidden = true;
        passwordInput.classList.remove('error');
    }
}
passwordInput.addEventListener('focusout', checkPassword);

function checkPasswordConfirm() {
    const errorVPSpan = passwordConfirmInput.parentElement.nextElementSibling;
    errorVPSpan.hidden = false;
    passwordConfirmInput.classList.add('error');

    if (passwordInput.value !== passwordConfirmInput.value) {
        errorVPSpan.textContent = '비밀번호가 일치하지 않아요.';
        return;
    }

    errorVPSpan.hidden = true;
    passwordConfirmInput.classList.remove('error');
}
passwordConfirmInput.addEventListener('focusout', checkPasswordConfirm);

// 회원가입 폼에 대한 이벤트 리스너
function submitForm(event) {
    event.preventDefault();
    checkEmail();
    checkPassword();
    checkPasswordConfirm();
    if (
        !emailInput.classList.contains('error') &&
        !passwordInput.classList.contains('error') &&
        !passwordConfirmInput.classList.contains('error')
    ) {
        window.location.href = '/folder';
    }
}
form.addEventListener('submit', submitForm);
