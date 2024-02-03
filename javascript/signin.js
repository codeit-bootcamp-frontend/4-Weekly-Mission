const form = document.querySelector('#sign-box')
const emailInput = document.querySelector('#signin-email')
const passwordInput = document.querySelector('#signin-password')
const errorEmail = document.querySelector('#errorEmail')
const errorPassword = document.querySelector('#errorPassword')
const passwordCover = document.querySelector('#eyecon-password')
const cover = { isPasswordCovered: false }
const accessToken = localStorage.accessToken

import { isEmailValid, isInputEmpty, showError, clearError } from './sign-error.js'
import { togglePasswordByEyecon as togglePassword } from './toggle-password.js'
import { errorMsg } from './constants.js'
import { confirmLogin } from './post.js'

//////////////// 함수 정의 ////////////////////

// if (accessToken) window.location.href = '../html/folder.html'

/**이메일 확인 함수
 * 이메일 형식과 빈 input 확인 후 error 메세지 출력
 */
const checkEmail = () => {
    const email = emailInput.value.trim()
    // 이메일 미입력 에러
    if (isInputEmpty(email)) {
        showError(emailInput, errorEmail, errorMsg.emptyEmail)
        return
    }
    // 이메일 형식 확인
    if (!isEmailValid(email)) {
        showError(emailInput, errorEmail, errorMsg.invalidEmail)
        return
    }
}

/**
 * 비번 확인 함수
 * 빈 input 시 error 메세지 출력
 */
const checkPassword = () => {
    const password = passwordInput.value.trim()
    if (isInputEmpty(password)) {
        showError(passwordInput, errorPassword, errorMsg.emptyPassword)
    }
}

/**
 *지정된 이메일 확인 후 /folder로 이동 or 에러 메세지
 * @param {*} event 해당 함수를 발생하는 이벤트
 * @returns 불린값
 */
const handleFormSubmit = async (event) => {
    const emailData = emailInput.value.trim()
    const passwordData = passwordInput.value.trim()
    const userData = {
        email: emailData,
        password: passwordData,
    }

    event.preventDefault()
    try {
        const result = await confirmLogin(userData)

        if (result.ok) {
            window.location.href = '../html/folder.html'
            return
        }
    } catch (error) {
        console.error('Error during email validation:', error)
        showError(emailInput, errorEmail, errorMsg.checkEmail)
        showError(passwordInput, errorPassword, errorMsg.checkPassword)
    }
}

/////////핸들러 함수///////

const handleEmailFocusout = () => {
    clearError(emailInput, errorEmail)
    checkEmail()
}

const handlePasswordFocusout = () => {
    clearError(passwordInput, errorPassword)
    checkPassword()
}

const handlePasswordClick = () => {
    togglePassword(passwordInput, cover.isPasswordCovered, passwordCover)
    cover.isPasswordCovered = !cover.isPasswordCovered
}

//////////////// 함수 사용////////////////////

// 이메일 이벤트 리스너 부여
emailInput.addEventListener('focusout', handleEmailFocusout)

// 비번 이벤트 리스너 부여
passwordInput.addEventListener('focusout', handlePasswordFocusout)

// 로그인 버튼 입력 시 이메일 비번 확인 후 이동
form.addEventListener('submit', handleFormSubmit)
// 비번 가리기 버튼 리스너 부여
passwordCover.addEventListener('click', handlePasswordClick)
