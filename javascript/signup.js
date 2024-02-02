const form = document.querySelector('#sign-box')
const emailInput = document.querySelector('#signup-email')
const errorEmail = document.querySelector('#errorEmail')
const passwordInput = document.querySelector('#signup-password')
const errorPassword = document.querySelector('#errorPassword')
const passwordCheckInput = document.querySelector('#signup-password-repeat')
const errorPasswordCheck = document.querySelector('#errorPasswordCheck')
const passwordCover = document.querySelector('#eyecon-password')
const passwordCheckCover = document.querySelector('#eyecon-password-repeat')
const cover = {
    isPasswordCovered: false,
    isPasswordCheckCovered: false,
}

import { isEmailValid, isInputEmpty, showError, clearError } from './sign-error.js'
import { togglePasswordByEyecon as togglePassword } from './toggle-password.js'
import { PASSWORD_REGEX, errorMsg, minPasswordLength } from './constants.js'
import { isEmailUsed, confirmSignup } from './post.js'

/////////////////////////////////////

/**이메일 확인 후 error 메세지 출력
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
    // 이메일 중복 확인
    if (isEmailUsed(email)) {
        showError(emailInput, errorEmail, errorMsg.usedEmail)
    }
}

/** 비밀번호 유효성 확인
 * 8자 이상이며 문자와 숫자의 혼용 여부 확인
 * @param {*} input 확인할 비밀번호
 * @returns 위 사항을 동시에 만족하는지에 대한 불린값
 */
const isPasswordValid = (input) => {
    return PASSWORD_REGEX.test(input) && input.length >= minPasswordLength
}

/**비밀번호 확인 함수
 */
const checkPassword = () => {
    const password = passwordInput.value.trim()
    if (!isPasswordValid(password)) {
        showError(passwordInput, errorPassword, errorMsg.invalidPassword)
    }
}
/**비밀번호 재확인 함수
 */
const checkPasswordConfirm = () => {
    const passwordCheck = passwordCheckInput.value.trim()
    const password = passwordInput.value.trim()
    if (passwordCheck !== password) {
        showError(passwordCheckInput, errorPasswordCheck, errorMsg.differentPassword)
    }
}

const IsPasswordUsable = () => {
    const passwordCheck = passwordCheckInput.value.trim()
    const password = passwordInput.value.trim()
    return isPasswordValid(password) && passwordCheck === password
}

const handleFormSubmit = async (event) => {
    const userData = {
        email: email,
        password: password,
    }

    event.preventDefault()
    try {
        const result = await confirmSignup(userData)
        if (result.ok) {
            window.location.href = '../html/folder.html'
            return
        }
        checkEmail()
        checkPassword()
        checkPasswordConfirm()
    } catch (error) {
        console.error('Error during signup:', error)
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
const handlePasswordCheckFocusout = () => {
    clearError(passwordCheckInput, errorPasswordCheck)
    checkPasswordConfirm()
}

const handlePasswordClick = () => {
    togglePassword(passwordInput, cover.isPasswordCovered, passwordCover)
    cover.isPasswordCovered = !cover.isPasswordCovered
}

const handlePasswordCheckClick = () => {
    togglePassword(passwordCheckInput, cover.isPasswordCheckCovered, passwordCheckCover)
    cover.isPasswordCheckCovered = !cover.isPasswordCheckCovered
}
//////////////// 함수 사용////////////////////

// 이메일 이벤트 리스너 부여
emailInput.addEventListener('focusout', handleEmailFocusout)
// 비번 이벤트 리스너 부여
passwordInput.addEventListener('focusout', handlePasswordFocusout)
// 비번 확인 이벤트 리스너 부여
passwordCheckInput.addEventListener('focusout', handlePasswordCheckFocusout)
// 로그인 버튼 입력 시 이메일 비번 확인 후 이동
form.addEventListener('submit', handleFormSubmit)
// 비번 가리기 버튼 리스너 부여
passwordCover.addEventListener('click', handlePasswordClick)
// 비번 재확인 가리기 버튼 리스너 부여
passwordCheckCover.addEventListener('click', handlePasswordCheckClick)
