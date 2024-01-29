/*********************
        Account
*********************/

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const user = new User('test@codeit.com', 'codeit101')

/*********************
  Validation Function
*********************/

function isEmpty(text) { return text.length === 0 };

function isEmailValid(text) {
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegex.test(text); 
};

function isPasswordValid(text) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test(text); 
};

/*********************
    Utility Function
*********************/

function showErrorMessage(targetElement, errorMessage) {
  targetElement.classList.remove('hidden');
  targetElement.textContent = errorMessage;
};

function hideErorrMessage(targetElement) {
  targetElement.classList.add('hidden');
};

function changePlaceholderFocusIn(e) {
  e.target.setAttribute('placeholder', '내용 작성 중..');
};

function changePlaceholderFocusOut(e) {
  e.target.setAttribute('placeholder', '내용 입력');
};

// 이벤트 위임을 사용하면 불가피하게 'firstElementChild'와 같은 상대적 노드 주소를 쓰게되는데, 아래의 사용과 같은 경우에도 너무 위험한 코드인 걸까요? 아예 상대주소는 피하는 방향으로 가는게 맞을지 궁금합니다.
function togglePasswordVisibility( { target: eyeImg } ) {
  if (eyeImg.classList.contains('eye-open')) {
    eyeImg.classList.toggle('eye-open');
    eyeImg.classList.toggle('eye-closed'); 
    eyeImg.parentElement.firstElementChild.setAttribute('type', 'password');
    return;
  }

  if (eyeImg.classList.contains('eye-closed')) {
    eyeImg.classList.toggle('eye-open');
    eyeImg.classList.toggle('eye-closed'); 
    eyeImg.parentElement.firstElementChild.setAttribute('type', 'text');
    return;
  };
};

/*********************
        Export
*********************/

export {
  User,
  user,
  isEmpty,
  isEmailValid,
  isPasswordValid,
  showErrorMessage,
  hideErorrMessage,
  changePlaceholderFocusIn,
  changePlaceholderFocusOut,
  togglePasswordVisibility,
};