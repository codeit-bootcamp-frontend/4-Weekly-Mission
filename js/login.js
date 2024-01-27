import {togglePasswordVisibility} from "./PasswordType.js"

const email = document.querySelector("#user_email");
const password = document.querySelector("#user_password");
const errorMassageId = document.querySelector(".error_massage_id");
const errorMassagePw = document.querySelector(".error_massage_pw");
const submitButton = document.querySelector(".submit_btn");

const pwBlockIcon = document.querySelector(".pw_block");
const pwHideIcon = document.querySelector(".pw_hide");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function borderStyleHandler(element, isFocused) {
  element.classList.toggle('focused', isFocused);
}

function setErrorMessage(messageType, errorMessage){
  return messageType.innerText = errorMessage
}

function inputValueCheck(e){
 if( e.target.name === "user_email"){

  e.preventDefault(); 
  const emailValue = email.value;
  const isValidEmail = emailRegex.test(emailValue);

  setErrorMessage(
    errorMassageId,
    emailValue === "" ? "이메일을 입력해 주세요." :
    !isValidEmail ? "올바른 이메일 주소가 아닙니다." : ""
  );

  borderStyleHandler(email, !isValidEmail);
 }
 else if(e.target.name === "user_password"){
  e.preventDefault();
  const passwordValue = password.value;
  const control = passwordValue === "";

  setErrorMessage(
    errorMassagePw,
    passwordValue === "" ? "비밀번호를 입력해 주세요" : ""
  );

  borderStyleHandler(password, control);
 }
}

email.addEventListener('blur', inputValueCheck);
password.addEventListener('blur', inputValueCheck );

function signIn(emailValue, passwordValue) {
  let control = false;
  if (emailValue == 'test@codeit.com' && passwordValue == 'codeit101') {
    window.location.replace('./folder.html');
  } else {
    control = true;
    setErrorMessage(errorMassageId,"이메일을 확인해 주세요.");
    setErrorMessage(errorMassagePw,"비밀번호를 확인해 주세요.");
    borderStyleHandler(email, control)
    borderStyleHandler(password, control)
  }
}

//버튼에 클릭,엔터 이벤트시에 로그인 함수 기능 추가
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  signIn(email.value, password.value);
});
submitButton.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    signIn(email.value, password.value);
  }
});


pwHideIcon.addEventListener("click", () => {
  togglePasswordVisibility(true, pwHideIcon, pwBlockIcon, password);
});

pwBlockIcon.addEventListener("click", () => {
  togglePasswordVisibility(false, pwHideIcon, pwBlockIcon, password);
});




