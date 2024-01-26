// 부모 엘리먼트 명만 인자로 가진다.
export function createErrorSpanElement2(parentElementSlectorName) {
  let parentElement = document.querySelector(parentElementSlectorName); // dot 필요
  let span = document.createElement("span");
  console.log(span);
  parentElement.appendChild(span);
  
  let parentElementclassName = removeDot(parentElementSlectorName); // dot 제거
  let errorClassName = errorName(parentElementclassName);
  span.classList.add(errorClassName);

  span.style.color = 'red';
  span.style.position = 'relative';
  span.style.top = '-6px';
}

export function removeErrorElement(parentElementSlectorName) {
  let errorSlectorName = errorName(parentElementSlectorName);
  let errorElement = document.querySelector(errorSlectorName);
  if (errorElement) {
    errorElement.remove();
  }
}

export function errorMessageInElement(parentElementSlectorName, errorSentence) {
  let errorSlectorName = errorName(parentElementSlectorName);
  let errorElement = document.querySelector(errorSlectorName); // dot 필요
  errorElement.textContent = errorSentence;
}

function plusDot(name) {
  let plusDot = '.' + name;
  return plusDot;
}

function removeDot(name) {
  let cleanedName = name.replace(/\./g, ""); 
  return cleanedName;
}

function errorName(name) {
  let error = name + "-errorMessage";
  return error;
}