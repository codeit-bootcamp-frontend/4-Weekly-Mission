/**
 * input 값이 비어있는지 확인 
 * @param {*} element - input element
 * @returns 
 */
function isFormatValue(element){
  return element.value.trim() === ''
}

/**
 * regex 유효성 확인
 * @param {*} element - input element
 * @param {*} regex - 상수 파일에 작성한 regex 
 * @returns 
 */
function isRegexMatch(element, regex){
  return regex.test(element.value)
}

/**
 * 
 * @param {*} element - input element
 * @param {*} value - 확인할 value
 * @returns 
 */
function isValueMatch(element, value){
  return element.value === value
}

/**
 * 비밀번호 확인 
 * @param {*} elementValue - 비밀번호 input
 * @param {*} checkElementValue  - 비밀번호 확인 input
 * @returns 
 */
function isPasswordValueMatch(elementValue, checkElementValue){
  return elementValue?.value.trim() == checkElementValue?.value.trim()
}

export {isFormatValue, isRegexMatch, isValueMatch, isPasswordValueMatch}