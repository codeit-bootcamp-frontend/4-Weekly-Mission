import { isValidEmail, showError, clearError, togglePasswordVisibility } from './formUtils.js';
import { VALIDATION_MESSAGES } from "./constants.js";

/**
 * 폼 유효성 검사 및 상호작용을 위한 초기화
 */
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const form = document.querySelector('form');
    const passwordIcons = document.querySelectorAll('.input-icon');

    /**
     * 이메일 필드 유효성 검사
     * @returns {boolean} - 이메일이 유효하면 true 그렇지 않으면 false
     */
    function validateEmail() {
        clearError(emailInput);
        if (!emailInput.value) {
            showError(emailInput, VALIDATION_MESSAGES.email.empty);
            return false;
        }
        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, VALIDATION_MESSAGES.email.invalid);
            return false;
        }
        if (emailInput.value === 'test@codeit.com') {
            showError(emailInput, VALIDATION_MESSAGES.email.alreadyInUse);
            return false;
        }
        return true;
    }
    
    /**
     * 비밀번호 필드의 유효성 검사
     * @returns {boolean} - 비밀번호가 유효하면 true 그렇지 않으면 false
     */
    function validatePassword() {
        clearError(passwordInput);
        if (passwordInput.value.length < 8 || !/[a-zA-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
            showError(passwordInput, VALIDATION_MESSAGES.password.weak);
            return false;
        }
        return true;
    }
    
    /**
    * 비밀번호 확인 필드의 유효성 검사
    * @returns {boolean} 비밀번호 확인이 유효하면 true 그렇지 않으면 false
    */
    function validateConfirmPassword() {
        clearError(confirmPasswordInput);
        if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, VALIDATION_MESSAGES.password.mismatch);
            return false;
        }
        return true;
    }    
     
    /** 
    * 회원가입 폼 제출 이벤트
    * @param {Event} event - 폼 제출 이벤트 객체
    */
    function handleSignup(event) {
        event.preventDefault();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
    
        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            window.location.href = '/folder.html';
        }
    }

    /**
    * 비밀번호 가시성 아이콘 토글설정(회원가입은 1개 이상의 아이콘)
    */
    passwordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const passwordInput = icon.previousElementSibling;
            togglePasswordVisibility(passwordInput, icon);
        });
    });
    emailInput.addEventListener('focusout', validateEmail);
    passwordInput.addEventListener('focusout', validatePassword);
    confirmPasswordInput.addEventListener('focusout', validateConfirmPassword);
    form.addEventListener('submit', handleSignup);
});
