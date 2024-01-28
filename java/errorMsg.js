//에러 이벤트 생성 코드
function ErrorMessage(element, message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  element.parentElement.appendChild(errorElement);
}
//에러 이벤트 발생시 보더 색상을 주기위한 클래스 생성
function boderLine(clas, bolean) {
  const item = document.querySelectorAll('.error-message');
  item.forEach(item => item.parentElement.children[1].classList.toggle(clas, bolean))
}

//이벤트 요소 삭제 코드
function clearErrors() {
  const clear = document.querySelectorAll('.error-message');
  clear.forEach(error => error.remove());
 }

 export default{ErrorMessage, boderLine, clearErrors};