const emailInput = document.querySelector('#signup-email')
const errorEmail = document.querySelector('#errorEmail')

import { isEmailValid, isInputEmpty, showError, clearError } from './sign-error.js'

/////////////////////////////////////

/**
 * 이메일 중복 확인 함수
 * @param {*} input 확인할 이메일
 * @returns 중복 여부 불린값
 */
const isEmailUsed = (input) => {
    const codeit = { email: 'test@codeit.com' }
    return input === codeit.email
}

/**이메일 확인 함수
 * 이메일 확인 후 error 메세지 출력
 */
const checkEmail = () => {
    const email = emailInput.value.trim()
    // 이메일 미입력 에러
    if (isInputEmpty(email)) {
        showError(emailInput, errorEmail, '이메일을 입력해 주세요.')
        return
    }
    // 이메일 형식 확인
    if (!isEmailValid(email)) {
        showError(emailInput, errorEmail, '올바른 이메일 주소가 아닙니다.')
        return
    }
    // 이메일 중복 확인
    if (isEmailUsed(email)) {
        showError(emailInput, errorEmail, '이미 사용 중인 이메일입니다.')
    }
}

/////////핸들러 함수///////

const handleEmailFocusout = () => {
    clearError(emailInput, errorEmail)
    checkEmail()
}

//////////////// 함수 사용////////////////////

// 이메일 이벤트 리스너 부여
emailInput.addEventListener('focusout', handleEmailFocusout)
