const inputEmail = document.querySelector('#email');

function handleEmailInput(event) {
  const target = event.target;
  const email = target.value;
  const messageBox = target.parentElement.nextElementSibling;
  target.classList.remove('error');
  messageBox.classList.remove('error');
  if (!email) {
    target.classList.add('error');
    return printMessage(messageBox, '이메일을 입력해 주세요.', 'error');
  }

  const valid = validateEmail(email);
  if (!valid) {
    target.classList.add('error');
    return printMessage(messageBox, '올바른 이메일 주소가 아닙니다.', 'error');
  }

  console.log(email);
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function printMessage(target, message, className) {
  target.innerHTML = message;
  target.classList.add(className);
}

inputEmail.addEventListener('focusout', handleEmailInput);
