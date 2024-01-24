/**
 * input 값이 비어있는지 확인 
 * @param {*} element - input element
 * @returns 
 */
function isFormatValue(element){
  if (!(element?.tagName === 'INPUT')) return
  return element.value.trim() === ''
}

/**
 * regex 유효성 확인
 * @param {*} element - input element
 * @param {*} regex - 상수 파일에 작성한 regex 
 * @returns 
 */
function isRegexMatch(element, regex){
  if (!(element?.tagName === 'INPUT')) return
  return regex.test(element.value)
}

export {isFormatValue, isRegexMatch}