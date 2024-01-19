function changePlaceholderFocusIn(e) {
  e.target.setAttribute('placeholder', '내용 작성 중..');
};

function changePlaceholderFocusOut(e) {
  e.target.setAttribute('placeholder', '내용 입력');
};

function redBorder(node) {
  node.classList.toggle('red-border');
}

function createErrorMessage(node, message) {
  if (node.classList.contains('red-border')) {
    node.parentElement.lastElementChild.remove();
    redBorder(node);
  }
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  node.parentElement.append(messageDiv);
  redBorder(node);
}

function deleteWarning(e) {
  if (e.target.classList.contains('red-border')) {
    e.target.parentElement.lastElementChild.remove();
    redBorder(e.target);
  }
}

function pleaseEmailInput() {
  if (signInInputs[0].value == "") {
    createErrorMessage(signInInputs[0], '이메일을 입력해 주세요.');
  }
}

function pleaseEmailFormally() {
  if (!(signInInputs[0].value.includes("@")) && !(signInInputs[0].value == "")) {
    createErrorMessage(signInInputs[0], '올바른 이메일 주소가 아닙니다.');
  }
}

function pleasePasswordInput() {
  if (signInInputs[1].value == "") {
    createErrorMessage(signInInputs[1], '비밀번호를 입력해 주세요.');
  }
}

function submitCheck() {
  if (signInInputs[0].value in User && signInInputs[1].value == User[signInInputs[0].value]) {
    return true;
  } else {
    createErrorMessage(signInInputs[0], '이메일을 확인해 주세요.');
    createErrorMessage(signInInputs[1], '비밀번호를 확인해 주세요.');
    return false;
  }
}

function passwordToggle(e) {
  if (e.target.getAttribute('src') == "../asset/img/signin/Vector.png") {
    e.target.setAttribute('src', "../asset/img/signin/eye-on.png");
    e.target.previousElementSibling.setAttribute('type', 'text');
  } else if (e.target.getAttribute('src') == "../asset/img/signin/eye-on.png") {
    e.target.setAttribute('src', "../asset/img/signin/Vector.png");
    e.target.previousElementSibling.setAttribute('type', 'password');
  }
}

const User = {
  'test@codeit.com': 'codeit101'
};
  
const signInForm = document.querySelector('.signin-form');
const signInInputs = document.querySelectorAll('.signin-form input');
const eyeImg = document.querySelectorAll('.eye-img');

signInForm.action = '../folder/index.html';

signInForm.addEventListener('focusin', changePlaceholderFocusIn);
signInForm.addEventListener('focusout', changePlaceholderFocusOut);
signInForm.addEventListener('focusin', deleteWarning);
signInForm.addEventListener('click', passwordToggle);
signInInputs[0].addEventListener('focusout', pleaseEmailInput);
signInInputs[0].addEventListener('focusout', pleaseEmailFormally);
signInInputs[1].addEventListener('focusout', pleasePasswordInput);