export const errorElement = {
  createErrorSpanElement(parentElementSlectorName) {
    let parentElement = document.querySelector(parentElementSlectorName); // dot 필요
    let span = document.createElement("span");
    parentElement.appendChild(span);
    
    let parentElementclassName = removeDot(parentElementSlectorName); // dot 제거
    let errorClassName = errorName(parentElementclassName);
    span.classList.add(errorClassName);
  },

  removeErrorElement(parentElementSlectorName) {
    let errorSlectorName = errorName(parentElementSlectorName);
    let errorElement = document.querySelector(errorSlectorName);
    if (errorElement) {
      errorElement.remove();
    }
  },

  errorMessageInElement(parentElementSlectorName, errorSentence) {
    let errorSlectorName = errorName(parentElementSlectorName);
    let errorElement = document.querySelector(errorSlectorName); // dot 필요
    errorElement.textContent = errorSentence;
  },
  
  errorBorder(inputSlectorName) {
    let inputElement = document.querySelector(inputSlectorName);
    inputElement.classList.add("error-border");
  },

  removeErrorBorder(inputSlectorName) {
    let inputElement = document.querySelector(inputSlectorName);
    inputElement.classList.remove("error-border");
  }
}

function removeDot(name) {
  let cleanedName = name.replace(/\./g, ""); 
  return cleanedName;
}

function errorName(name) {
  let error = name + "-errorMessage";
  return error;
}