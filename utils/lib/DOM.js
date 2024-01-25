const selectElement = (selector) => document.querySelector(selector);

function createTagAndclassWithText (element, className, text){
  if (!element) return;
  const addTag = document.createElement('p')
  console.log(element)
  addTag.textContent = text
  addTag.className = className
  element.appendChild(addTag)
}

function changeText(textElement, text){
  console.log(textElement)
  if(textElement){
    textElement.textContent = text
  }
}

export {selectElement, createTagAndclassWithText, changeText}