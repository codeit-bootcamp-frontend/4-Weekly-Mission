import { emailRegex } from './constants.js'

const isInputEmpty = (input) => input === ''

const isEmailValid = (input) => emailRegex.test(input)

/**에러 표시 함수
 * @param {*} inputBorder 오류가 발생한 input
 * @param {*} input 오류 메세지를 표시할 div
 * @param {string} message 오류 내용
 */
const showError = (inputBorder, input, message) => {
    inputBorder.classList.add('errorBdr')
    input.style.display = 'block'
    input.textContent = message
}

/**에러 스타일 빼기
 * input에 새 내용 입력 시 에러 메세지 제거
 * @param {*} errorText - 에러 메세지를 숨길 div
 * @param {*} inputElement - 에러 보더를 해제할 input
 * @returns
 */
const clearError = (inputElement, errorText) => {
    errorText.style.display = 'none'
    inputElement.classList.remove('errorBdr')
}

export { isEmailValid, isInputEmpty, showError, clearError }
