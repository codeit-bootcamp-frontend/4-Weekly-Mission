const form = document.querySelector('.sign-form');
const inputs = document.querySelector('.sign-inputs');
const errorMessageEmail = document.querySelector('#error-message-email');
const errorMessagePassword = document.querySelector('#error-message-password');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function testEmail(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	} else {
		return true;
	};
};

function validateEmail(e){
  if(!testEmail(e.target.value) && e.target.value !== ''){
    e.target.classList.add('sign-input-error');
    errorMessageEmail.innerHTML = "올바른 이메일 주소가 아닙니다";
    errorMessageEmail.classList.remove('display-none');
  } else {
    e.target.classList.remove('sign-input-error');
    errorMessageEmail.classList.add('display-none');
  };
};

function typeEmail(e){
  if (e.target.value === ""){
    e.target.classList.add('sign-input-error');
    errorMessageEmail.innerHTML = "이메일을 입력해 주세요";
    errorMessageEmail.classList.remove('display-none');
  };
};

inputs.firstElementChild.addEventListener('focusout', validateEmail);
inputs.firstElementChild.addEventListener('focusout', typeEmail);

function typePassword(e){
  if (e.target.value === ""){
    e.target.classList.add('sign-input-error');
    errorMessagePassword.innerHTML = "비밀번호를 입력해 주세요";
    errorMessagePassword.classList.remove('display-none');
  } else {
    e.target.classList.remove('sign-input-error');
    errorMessagePassword.classList.add('display-none');
  }
};

inputs.lastElementChild.addEventListener('focusout', typePassword);

// function enterSubmit(e){
//   if (e.key === 'enter'){
//     form.submit();
//   };
// };

// form.addEventListener('keydpress', enterSubmit);

function loginEmailCheck(){
  if (email.value === "test@codeit.kr"){
    return true;
  } else {
    email.classList.add('sign-input-error');
    errorMessageEmail.innerHTML = "이메일을 확인해 주세요";
    errorMessageEmail.classList.remove('display-none');
    return false;
  }
};

function loginPasswordCheck(){
  if (password.value === "codeit101"){
    return true;
  } else {
    password.classList.add('sign-input-error');
    errorMessagePassword.innerHTML = "비밀번호를 확인해 주세요";
    errorMessagePassword.classList.remove('display-none');
    return false;
  }
}

function loginCheck(e){
  e.preventDefault();
  if (loginEmailCheck() && loginPasswordCheck()){
    let link = 'folder.html';
    window.location.href = link;
  };
};

form.lastElementChild.addEventListener('click', loginCheck);
document.addEventListener('keypress', function(e){
  if (e.key === 'enter'){
    loginCheck(e);
  }
});