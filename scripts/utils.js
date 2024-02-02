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

function toggleInputVisibility(inputElement, showButton) {
  if (showButton.classList.contains('eye-open')) {
    showButton.classList.toggle('eye-open');
    showButton.classList.toggle('eye-closed'); 
    inputElement.setAttribute('type', 'password');
    return;
  }

  if (showButton.classList.contains('eye-closed')) {
    showButton.classList.toggle('eye-open');
    showButton.classList.toggle('eye-closed'); 
    inputElement.setAttribute('type', 'text');
    return;
  };
};

/*********************
        Export
*********************/

export {
  isEmpty,
  isEmailValid,
  isPasswordValid,
  showErrorMessage,
  hideErorrMessage,
  changePlaceholderFocusIn,
  changePlaceholderFocusOut,
  toggleInputVisibility,
};