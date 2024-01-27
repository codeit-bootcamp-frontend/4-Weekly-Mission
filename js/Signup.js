import {togglePasswordVisibility} from "./PasswordType.js"

const email = document.querySelector("#user_email");
const password = document.querySelector("#user_password");
const passwordConfirm = document.querySelector("#user_password_confirm");
const errorMassageId = document.querySelector(".error_massage_id");
const errorMassagePw = document.querySelector(".error_massage_pw");
const errorMassagePwConfirm = document.querySelector(".error_massage_pw_confirm");
const submitButton = document.querySelector(".submit_btn");
const pwBlockIcon = document.querySelectorAll(".pw_block");
const pwHideIcon = document.querySelectorAll(".pw_hide");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


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
     !isValidEmail ? "올바른 이메일 주소가 아닙니다." : 
     emailValue === "test@codeit.com" ?  "이미 사용 중인 이메일입니다." : ""
   );
 
   borderStyleHandler(email, !isValidEmail);
  }
  else if(e.target.name === "user_password"){
   e.preventDefault();
   const passwordValue = password.value;
   const isValidPassword = passwordRegex.test(passwordValue);
 
   setErrorMessage(
     errorMassagePw,
     passwordValue === "" ? "비밀번호를 입력해 주세요" : 
     !isValidPassword ? "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요" : ""
   );
 
   borderStyleHandler(password, !isValidPassword);
  }
  else if(e.target.name === "user_password_confirm"){
    e.preventDefault(); 
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;

    setErrorMessage(
      errorMassagePwConfirm,
      passwordConfirmValue === "" ? "비밀번호를 입력해 주세요" : 
      passwordValue !== passwordConfirmValue ? "비밀번호가 일치하지 않아요." : ""
    )

    const isFocused = passwordValue === passwordConfirmValue && passwordConfirmValue !== "";

    borderStyleHandler(passwordConfirm, !isFocused);
  }
 }
 
 email.addEventListener('blur', inputValueCheck);
 password.addEventListener('blur', inputValueCheck );
 passwordConfirm.addEventListener('blur', inputValueCheck );

 function signIn(emailValue, passwordValue, passwordConFirmValue) {
  let control = false;
  const isValidEmail = emailRegex.test(emailValue);
  const isValidPassword = passwordRegex.test(passwordValue);
 
  if(!isValidEmail || !isValidPassword) {
    setErrorMessage(errorMassageId, !isValidEmail ? "이메일을 형식이 올바르지 않습니다." : "");
    setErrorMessage(errorMassagePw, !isValidPassword ? "비밀번호 형식이 올바르지 않습니다." : "");
    borderStyleHandler(email, !isValidEmail);
    borderStyleHandler(password, !isValidPassword);
  }
  else if (passwordValue !== passwordConFirmValue) {
    control = true;
    setErrorMessage(errorMassagePwConfirm, "비밀번호가 일치하지 않습니다.");
    borderStyleHandler(passwordConfirm, control);
  } 
  else {
    window.location.replace('./folder.html');
  } 

}

//버튼에 클릭,엔터 이벤트시에 로그인 함수 기능 추가
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  signIn(email.value, password.value, passwordConfirm.value);
});
submitButton.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    signIn(email.value, password.value, passwordConfirm.value);
  }
});

function passwordTypeHandler(e, index){
  const pwHideIconElement = pwHideIcon[index];
  const pwBlockIconElement = pwBlockIcon[index];

  if(e.target.className === "pw_hide"){
    togglePasswordVisibility(true, pwHideIconElement, pwBlockIconElement, password);
  }
  else{
    togglePasswordVisibility(false, pwHideIconElement, pwBlockIconElement, password);
  }
}

pwHideIcon[0].addEventListener("click", (e) => passwordTypeHandler(e, 0));
pwBlockIcon[0].addEventListener("click", (e) => passwordTypeHandler(e, 0));
pwHideIcon[1].addEventListener("click", (e) => passwordTypeHandler(e, 1));
pwBlockIcon[1].addEventListener("click", (e) => passwordTypeHandler(e, 1));

