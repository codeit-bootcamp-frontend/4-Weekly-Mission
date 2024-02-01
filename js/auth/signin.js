import { isValidEmail, showError, clearError, togglePasswordVisibility } from './formUtils.js';
import { VALIDATION_MESSAGES } from "./constants.js";

/**
 * 폼 유효성 검사 및 상호작용을 위한 초기화
 */
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');
    const passwordIcon = document.querySelector('.input-icon');

    /**
     * 이메일 입력 유효성 검사
     * @param {HTMLElement} input - 유효성 검사 필드
     * @param {Function} validationFunction - 유효성 검사 함수
     * @param {string} errorMessage - 표시될 에러 메시지
     * @returns {boolean} - 유효성 검사 결과 반환 true,false
     */
    function validateField(input, validationFunction, errorMessage) {
        clearError(input);
        if (!validationFunction(input.value)) {
            showError(input, errorMessage);
            return false;
        }
        return true;
    }

    /**
     * 이메일 입력필드 유효성 검사
     * @returns {boolean} - 유효성 검사 결과 반환 true,false
     */
    function validateEmail() {
        return validateField(emailInput, value => value && isValidEmail(value), VALIDATION_MESSAGES.email.empty);
    }

    /**
     * 비밀번호 입력 필드 유효성 검사
     * @returns {boolean} - 유효성 검사 결과 반환 true,false
     */
    function validatePassword() {
        return validateField(passwordInput, value => value, VALIDATION_MESSAGES.password.empty);
    }

    /**
     * 로그인 폼 제출
     * @param {Event} event - 폼 제출 이벤트 객체
     * @returns - folder페이지로 이동 or 이동 X
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
    
        if (!isEmailValid || !isPasswordValid) return;
    
        const emailError = emailInput.value !== 'test@codeit.com' ? VALIDATION_MESSAGES.email.invalid : null;
        const passwordError = passwordInput.value !== 'codeit101' ? VALIDATION_MESSAGES.password.incorrect : null;
    
        emailError && showError(emailInput, emailError);
        passwordError && showError(passwordInput, passwordError);
    
        if (!emailError && !passwordError) {
            window.location.href = '/folder.html';
        }
    }
    

    /**
     * 비밀번호 가시성 토글
     */
    function handlePasswordIconClick() {
        togglePasswordVisibility(passwordInput, passwordIcon);
    }

    emailInput.addEventListener('focusout', validateEmail);
    passwordInput.addEventListener('focusout', validatePassword);
    form.addEventListener('submit', handleFormSubmit);
    passwordIcon.addEventListener('click', handlePasswordIconClick);
});
