const selectElement = (selector) => document.querySelector(selector);
const addTag = document.createElement('p')

function createTagAndclassWithText (element, className, text){
  addTag.textContent = text
  addTag.className = className
  element.appendChild(addTag)
}

function chageText(text){
  addTag.textContent = text
}

export {selectElement, createTagAndclassWithText, chageText}