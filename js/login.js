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

// 아이디 검사
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
  else{
    setErrorMessage(errorMassageId, "")
  }

  borderStyleHandler(email, !isValidEmail);
}

// 패스워드 검사
function passwordValidator(e){
  e.preventDefault();
  const passwordValue = password.value;
  const control = passwordValue === "";


  if(passwordValue === ""){
    setErrorMessage(errorMassagePw,  "비밀번호를 입력해 주세요")
  }
  else{
    setErrorMessage(errorMassagePw, "")
  }
  borderStyleHandler(password, control);
}

// 포커스 아웃 됐을 때 이벤트 발생
email.addEventListener('blur', emailValidator);
password.addEventListener('blur', passwordValidator );

// 로그인 실행 로직
async function loginRequest(id, password){
  const url = "https://bootcamp-api.codeit.kr/api/sign-in";
  const loginData = {
    email : id,
    password: password
  }
  try{
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    const {data} = await response.json()
    localStorage.setItem("accessToken", data.accessToken);
    window.location.href = "/folder";
  }catch(e){
    console.log(e)
    alert("아이디 또는 비밀번호가 틀립니다.")
  }
}

// 로그인 페이지 접근시 로컬 스토리지에 있는 토큰 확인
document.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    window.location.href = "/folder";
  }
});

function signIn(emailValue, passwordValue) {
  let control = false;
  const isValidEmail = emailRegex.test(emailValue);
  const isValidpassowrd = passwordValue !== "";

  if (isValidEmail && isValidpassowrd) {
    loginRequest(emailValue, passwordValue);
 
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