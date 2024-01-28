/* common variables and functions used for signin and signup pages */

export const toggleIcon = document.getElementById('eyeIcon');
export const emailInput = document.getElementById('userEmail');
export const passwordInput = document.getElementById('password');
export const emailError = document.getElementById('emailError');
export const passwordError = document.getElementById('passwordError');

export function isValidEmail(email) {
    // 간단한 이메일 형식 검사
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    return emailRegex.test(email);
}

export function showErrorMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.previousElementSibling.style.borderColor = 'red'; // 테두리 색상 빨간색으로 변경
}

export function hideErrorMessage(element) {
    element.textContent = '';
    element.style.display = 'none';
    element.previousElementSibling.style.borderColor = ''; // 테두리 색상 초기화
}

export function passwordToggle() {
    const type_ = (passwordInput.type === 'password' ? 'text' : 'password');
    passwordInput.type = type_;
    toggleIcon.src = (type_ === 'password' ? 'img/eye-off.png' : 'img/eye-on.png');
}

/*비밀번호와 비밀번호 확인 인풋 칸에서 공통으로 쓸 수 있는 함수를 만들어보려하였으나 실패...*/
/*export function toggleIconVisiblity(input, toggleIcon) {
    const type_ = (input.type === 'password' ? 'text' : 'password');
    input.type = type_;
    toggleIcon.src = (type_ === 'password' ? 'eye-closed.png' : 'eye-open.png');
}*/