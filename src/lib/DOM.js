const selectElement = (selector) => document.querySelector(selector);

/**
 * 
 * @param {*} element - section element
 * @param {*} className - text className 정하기
 * @param {*} text - 어떤 text 추가
 * @returns 
 */
function createTagAndclassWithText (element, className, text){
  if (!element) return;
  const addTag = document.createElement('p')
  addTag.textContent = text
  addTag.className = className
  element.appendChild(addTag)
}

/**
 * 
 * @param {*} textElement - text element
 * @param {*} text - 변경할 text
 */
function changeText(textElement, text){
  if(textElement){
    textElement.textContent = text
  }
}

export {selectElement, createTagAndclassWithText, changeText}