let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");

function noInputFocusOut() {
  let container = document.querySelector(".input-form-email");

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
    errorMessage.textContent = '이메일을 입력해 주세요';
  }
}

function noInputFocusOutPassword() {
  let container = document.querySelector(".input-form-password");

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
    errorMessage.textContent = '비밀번호를 입력해 주세요';
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
  
  if (emailRegex.test(email.value)) {
    console.log("Email")
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
password.addEventListener("focusout", noInputFocusOutPassword);
email.addEventListener("change", notValidEmailInput);
email.addEventListener("focusin", focusIn);
password.addEventListener("focusin", focusIn);

// 로그인 시도
function folderPage() {
  let folderEmail = "test@codeit.com";
  let folderPassword = "codeit101";

  if (email.value === folderEmail && password.value === folderPassword) {
    // 로그인 성공 시 "/folder" 페이지로 이동
    window.location.href = "/folder";
  } else {
    // 로그인 실패 시 적절한 처리
    console.log("로그인 실패. 올바른 이메일과 비밀번호를 입력하세요.");
  }
}