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
/**
 * 
 * @param {*} element - input element
 * @param {*} value - 확인할 value
 * @returns 
 */
function isValueMatch(element, value){
  if (!(element?.tagName === 'INPUT')) return
  return element.value === value
}

function isPasswordValueMatch(elementValue, checkElementValue){
  if (!(elementValue?.tagName === 'INPUT')) return
  return elementValue?.value.trim() !== checkElementValue?.value.trim()
}

export {isFormatValue, isRegexMatch, isValueMatch, isPasswordValueMatch}