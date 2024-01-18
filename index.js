let email = document.querySelector(".input-email");

function noInputFocusOut() {
  let container = document.querySelector(".input-form-email")

  // 기존 오류 엘리먼트를 삭제
  let oldErrorMessage = document.querySelector(".errorMessage");
  if (oldErrorMessage) {
      container.removeChild(oldErrorMessage);
  }

  // 동작
  if (email.value.trim() === "") {
    // 엘리먼트 생성
    let span = document.createElement("span");
    container.appendChild(span);
    span.classList.add('errorMessage',"empty");
    span.style.color = 'red';
    span.style.position = 'relative';
    span.style.top = '-6px';
    // 텍스트 출력
    let errorMessage = document.querySelector(".errorMessage");
    errorMessage.textContent = '이메일을 입력해주세요';
  }
}

function notValidEmailInput() {
  let container = document.querySelector(".input-form-email")
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 기존 오류 엘리먼트를 삭제
  let oldErrorMessage = document.querySelector(".errorMessage");
  if (oldErrorMessage) {
      container.removeChild(oldErrorMessage);
  }

  if (emailRegex.test(email)) {
    return
  } else {
    // 엘리먼트 생성
    let span = document.createElement("span");
    container.appendChild(span);
    span.classList.add('errorMessage');
    span.style.color = 'red';
    span.style.position = 'relative';
    span.style.top = '-6px';
    // 텍스트 출력
    let errorMessage = document.querySelector(".errorMessage");
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다';
  }
}

function focusIn() {
  let errorMessage = document.querySelector(".errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
}

function focusOut() {
  let errorMessage = document.querySelector(".errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
}

email.addEventListener("focusout", noInputFocusOut);
email.addEventListener("change", notValidEmailInput);
email.addEventListener("focusin", focusIn);