// 쿼리 셀렉터로 필요한 요소 선택
const emailInput = document.querySelector('.sign-input-box input');
const passwordInput = document.querySelector('.sign-input-box.sign-password input');
const form = document.querySelector('.sign-form');

// 이메일 검증 함수
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 이메일 입력 필드에 대한 이벤트 리스너
function checkEmail() {
    if (!emailInput.value) {
        emailInput.setCustomValidity('이메일을 입력해 주세요.');
    } else if (!validateEmail(emailInput.value)) {
        emailInput.setCustomValidity('올바른 이메일 주소가 아닙니다.');
    } else {
        emailInput.setCustomValidity('');
    }
    emailInput.reportValidity();
}

// 비밀번호 입력 필드에 대한 이벤트 리스너
function checkPassword() {
    if (!passwordInput.value) {
        passwordInput.setCustomValidity('비밀번호를 입력해 주세요.');
    } else {
        passwordInput.setCustomValidity('');
    }
    passwordInput.reportValidity();
}

// 로그인 폼에 대한 이벤트 리스너
function submitForm(event) {
    event.preventDefault();
    if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
        window.location.href = '/folder';
    } else {
        emailInput.setCustomValidity('이메일을 확인해 주세요.');
        passwordInput.setCustomValidity('비밀번호를 확인해 주세요.');
        emailInput.reportValidity();
        passwordInput.reportValidity();
    }
}

emailInput.addEventListener('focusout', checkEmail);

passwordInput.addEventListener('focusout', checkPassword);

form.addEventListener('submit', submitForm);
