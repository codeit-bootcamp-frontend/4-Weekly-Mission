import { VALIDATION_MESSAGES } from "./constants.js";

/**
 * 폼 유효성 검사 및 상호작용을 위한 초기화
 */
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');
    const passwordIcon = document.querySelector('.input-icon');

    // 이벤트 리스너
    emailInput.addEventListener('focusout', validateEmail);
    passwordInput.addEventListener('focusout', validatePassword);
    form.addEventListener('submit', handleFormSubmit);
    passwordIcon.addEventListener('click', togglePasswordVisibility);

    /**
     * 이메일 입력 검증
     */
    function validateEmail() {
        clearError(emailInput);
        if(!emailInput.value) {
            showError(emailInput, VALIDATION_MESSAGES.email.empty);
        } else if(!isValidEmail(emailInput.value)) {
            showError(emailInput, VALIDATION_MESSAGES.email.invalid);
        }
    }
    
    /**
     * 비밀번호 입력 검증
     */
    function validatePassword() {
        clearError(passwordInput);
        if(!passwordInput.value) {
            showError(passwordInput, VALIDATION_MESSAGES.password.empty);
        }
        return passwordInput.value === 'codeit101';
    }

    /**
     * 로그인 폼 제출
     * @param {Event} event - 이벤트 객체 
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        validateEmail();
    
        const isPasswordValid = validatePassword();
        if(!isPasswordValid) {
            showError(passwordInput, VALIDATION_MESSAGES.password.incorrect);
            return;
        }
    
        if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
            window.location.href = '/folder.html';
        } else {
            showError(emailInput, VALIDATION_MESSAGES.email.invalid);
        }
    }

    /**
     * 이메일 유효성 확인
     * @param {string} email - 검증할 이메일 value
     * @returns {boolean} - 이메일이 유효하면 true, 그렇지 않으면 false 반환
     */
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * input 아래 오류 메시지 표시
     * @param {HTMLElement} input - 입력 요소 
     * @param {string} message - 표시할 오류 메시지
     */
    function showError(input, message) {
        const container = input.closest('.input-container');
        clearError(input);
    
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        input.classList.add('error');
        
        if(container) {
            container.parentNode.insertBefore(errorDiv, container.nextSibling);
        } else {
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
    }

    /**
     * input 아래 오류 메시지 표시 제거
     * @param {HTMLElement} input - 입력 요소 
     */
    function clearError(input) {
        const container = input.closest('.input-container');
        let errorElement;
        
        if(container) {
            errorElement = container.nextElementSibling;
        } else {
            errorElement = input.nextElementSibling;
        }
    
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.parentNode.removeChild(errorElement);
        }

        input.classList.remove('error');
    }

    /**
     * 비밀번호 가시성 토글
     */
    function togglePasswordVisibility() {
        if(passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = '/assets/icons/eye-on.svg';
        } else {
            passwordInput.type = 'password';
            passwordIcon.src = '/assets/icons/eye-off.svg';
        }
    }
});
