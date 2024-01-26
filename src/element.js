// 부모 엘리먼트 명만 인자로 가진다.
function createErrorSpanElement(parentElementName) {
  let parentElement = document.querySelector(parentElementName); // dot 필요
  
  let span = document.createElement("span");
  parentElement.appendChild(span);
  span.style.color = 'red';
  span.style.position = 'relative';
  span.style.top = '-6px';
}

function removeErrorElement(parentElementName) {
  let parentElement = document.querySelector(parentElementName); // dot 필요
  let errorElement = parentElement.lastChild; // 부모 요소의 마지막 요소가 에러 요소다.

  if (errorElement) {
    errorElement.remove();
  }
}

function errorMessageInElement(parentElementName, errorSentence) {
  let parentElement = document.querySelector(parentElementName); // dot 필요
  let errorElement = parentElement.lastChild; // 부모 요소의 마지막 요소가 에러 요소다.
  errorElement.textContent = errorSentence;
}