import { emailRegex } from './constants.js'

/**
 * 해당 값의 빈 값 여부 확인
 * @param {*} input 확인할 input
 * @returns 불린값
 */
const isInputEmpty = (input) => input === ''

/**
 * 이메일 형식 확인
 * @param {*} input 확인할 이메일
 * @returns 불린값
 */
const isEmailValid = (input) => emailRegex.test(input)

/**에러 표시 함수
 * @param {*} inputElement 오류가 발생한 input
 * @param {*} errorText 오류 메세지를 표시할 div
 * @param {string} message 오류 내용
 */
const showError = (inputElement, errorText, message) => {
    inputElement.classList.add('errorBdr')
    errorText.classList.add('errorShown')
    errorText.textContent = message
}

/**에러 스타일 빼기
 * input에 새 내용 입력 시 에러 메세지 제거
 * @param {*} inputElement - 에러 보더를 해제할 input
 * @param {*} errorText - 에러 메세지를 숨길 div
 * @returns
 */
const clearError = (inputElement, errorText) => {
    inputElement.classList.remove('errorBdr')
    errorText.classList.remove('errorShown')
}

export { isEmailValid, isInputEmpty, showError, clearError }
