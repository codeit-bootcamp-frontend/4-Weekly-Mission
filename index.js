let email = document.querySelector(".input-email");

function noInputFocusOut() {
  let container = document.querySelector(".input-form-email")

  // 엘리먼트 생성
  let span = document.createElement("span");
  container.appendChild(span);
  span.classList.add('errorMessage');
  span.style.color = 'red';
  span.style.position = 'relative';
  span.style.top = '-6px';

  // 동작
  let errorMessage = document.querySelector(".errorMessage");
  if (email.value.trim() === "") {
    errorMessage.textContent = '이메일을 입력해주세요';
  }
}

function focusIn() {
  let errorMessage = document.querySelector(".errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
}

email.addEventListener("focusout", noInputFocusOut);
email.addEventListener("focusin", focusIn);