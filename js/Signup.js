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

function emailValidator(e){
  e.preventDefault(); 
  const emailValue = email.value;
  const isValidEmail = emailRegex.test(emailValue);

  if(emailValue === ""){
    setErrorMessage(errorMassageId, "이메일을 입력해 주세요.")
  }
  else if(!isValidEmail){
    setErrorMessage(errorMassageId, "올바른 이메일 주소가 아닙니다.")
  }
  else if(emailValue === "test@codeit.com"){
    setErrorMessage(errorMassageId, "이미 사용 중인 이메일입니다.")
  }
  else{
    setErrorMessage(errorMassageId, "")
  }

  borderStyleHandler(email, !isValidEmail);
}

function passwordValidator(e){
  e.preventDefault();
   const passwordValue = password.value;
   const isValidPassword = passwordRegex.test(passwordValue);


  if(passwordValue === ""){
    setErrorMessage(errorMassagePw,  "비밀번호를 입력해 주세요")
  }
  else if(!isValidPassword){
    setErrorMessage(errorMassagePw, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요")
  }
  else{
    setErrorMessage(errorMassagePw, "")
  }
  borderStyleHandler(password, !isValidPassword);
}

function pwConfirmValidator(e){
  e.preventDefault(); 
  const passwordValue = password.value;
  const passwordConfirmValue = passwordConfirm.value;

  if(passwordConfirmValue === ""){
    setErrorMessage(errorMassagePwConfirm,  "비밀번호를 입력해 주세요")
  }
  else if( passwordValue !== passwordConfirmValue){
    setErrorMessage(errorMassagePwConfirm, "비밀번호가 일치하지 않아요.")
  }
  else{
    setErrorMessage(errorMassagePwConfirm, "")
  }

  const isFocused = passwordValue === passwordConfirmValue && passwordConfirmValue !== "";

  borderStyleHandler(passwordConfirm, !isFocused);
}

 email.addEventListener('blur', emailValidator);
 password.addEventListener('blur', passwordValidator );
 passwordConfirm.addEventListener('blur', pwConfirmValidator );

 // 중복된 이메일 체크 로직
 async function emailCheckRequest(id){
  const url = "https://bootcamp-api.codeit.kr/api/check-email";
  const loginData = {
    email : id,
  }
  try{
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    console.log(response.status)
    return response.status
  }catch(e){
    console.log(e)
  }
}

// 회원가입 로직
async function signupRequest(id, password){
  const url = "https://bootcamp-api.codeit.kr/api/sign-up";
  const signData = {
    email : id,
    password: password
  }
  try{
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signData),
    })
    const {data} = await response.json()
    localStorage.setItem("accessToken", data.accessToken);
    window.location.href = "/folder";
  }catch(e){
    console.log(e)
  }
}

 async function signIn(emailValue, passwordValue, passwordConFirmValue) {
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
    const CheckEmail = await emailCheckRequest(emailValue)

    if(CheckEmail === 409){
      alert("중복된 이메일입니다.")
    }
    else if(CheckEmail === 200){
      signupRequest(emailValue, passwordValue)
    }
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

function passwordTypeHandler(e, index, type){
  const pwHideIconElement = pwHideIcon[index];
  const pwBlockIconElement = pwBlockIcon[index];

  if(e.target.className === "pw_hide"){
    togglePasswordVisibility(true, pwHideIconElement, pwBlockIconElement, type);
  }
  else{
    togglePasswordVisibility(false, pwHideIconElement, pwBlockIconElement, type);
  }
}

pwHideIcon[0].addEventListener("click", (e) => passwordTypeHandler(e, 0, password));
pwBlockIcon[0].addEventListener("click", (e) => passwordTypeHandler(e, 0, password));

pwHideIcon[1].addEventListener("click", (e) => passwordTypeHandler(e, 1, passwordConfirm));
pwBlockIcon[1].addEventListener("click", (e) => passwordTypeHandler(e, 1, passwordConfirm));