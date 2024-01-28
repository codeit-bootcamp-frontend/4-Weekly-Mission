/**
 * 이메일 유효성 검사
 * @param {string} email - 검사할 이메일 주소
 * @returns {boolean} - 이메일 형식이 유효한 경우 true, 그렇지 않으면 false 
 */
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * input 아래 필드에 오류 메시지 표시
 * @param {HTMLElement} input - 오류 메시지를 표시할 입력 필드
 * @param {string} message - 표시할 오류 메시지
 */
export function showError(input, message) {
    clearError(input);

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerText = message;
    input.classList.add('error');

    const container = input.closest('.input-container');
    const insertBeforeElement = container ? container.nextSibling : input.nextSibling;
    container ? container.parentNode.insertBefore(errorDiv, insertBeforeElement) : input.parentNode.insertBefore(errorDiv, insertBeforeElement);
}

/**
 * input 아래 필드에서 오류 메시지 제거
 * @param {HTMLElement} input - 오류 메시지를 제거할 필드
 */
export function clearError(input) {
    const container = input.closest('.input-container');
    const errorElement = (container ? container.nextElementSibling : input.nextElementSibling);

    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.parentNode.removeChild(errorElement);
    }

    input.classList.remove('error');
}

/**
 * 비밀번호 입력 필드의 아이콘 토글
 * @param {HTMLInputElement} passwordInput - 비밀번호 필드
 * @param {HTMLImageElement} iconElement - 아이콘 상태
 */
export function togglePasswordVisibility(passwordInput, iconElement) {
    const isPasswordVisible = passwordInput.type === 'password';
    passwordInput.type = isPasswordVisible ? 'text' : 'password';
    iconElement.src = isPasswordVisible ? '/assets/icons/eye-on.svg' : '/assets/icons/eye-off.svg';
}
