import { signIn } from './api.js';
import { isValidEmail, showError, clearError, togglePasswordVisibility } from './formUtils.js';
import { VALIDATION_MESSAGES } from "./constants.js";
import { saveAccessToken } from './storage.js';

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
    async function handleFormSubmit(event) {
        event.preventDefault();
        if (!validateEmail() || !validatePassword()) {
            return;
        }
        try {
            const response = await signIn(emailInput.value, passwordInput.value);
            if (!response.data) {
                showError(emailInput, VALIDATION_MESSAGES.email.incorrect);
                showError(passwordInput, VALIDATION_MESSAGES.password.incorrect);
                return;
            }
            saveAccessToken(response.data.accessToken);
            window.location.href = '/folder.html';
        } catch (error) {
            alert(VALIDATION_MESSAGES.network.signinError);
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
