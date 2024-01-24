/* 이메일과 비밀번호 체크 */
const emailInput = document.querySelector("#sign-email");
const passwordInput = document.querySelector("#sign-password");
const passwordRepeatInput = document.querySelector("#sign-password-repeat");
const emailMessage = document.querySelector("#email-message");
const passwordMessage = document.querySelector("#password-message");
const passwordRepeatMessage = document.querySelector("#password-repeat-message");

// 이메일 체크
emailInput.addEventListener("focusout", function(e) {
  if(!e.target.value){
    emailMessage.innerHTML = "이메일을 입력해 주세요.";
  } else if(!e.target.value.includes("@")) {
    emailMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else{
    emailMessage.innerHTML = "";
  }
});

//비밀번호 체크
passwordInput.addEventListener("focusout", function(e) {
  if(!e.target.value){
    passwordMessage.innerHTML = "비밀번호를 입력해 주세요.";
  } else{
    passwordMessage.innerHTML = "";
  }
});

//비밀번호 일치 체크
if (passwordRepeatInput !== null){  //passwordRepeatInput가 null 인지 확인부터 ...
  passwordRepeatInput.addEventListener("focusout", function(e) {
    if(!e.target.value) {
      passwordRepeatMessage.innerHTML = "비밀번호를 입력해 주세요.";
      passwordRepeatMessage.style.color = "";
      passwordRepeatInput.style.borderColor = "";
    } else if(e.target.value !== passwordInput.value) {
      passwordRepeatMessage.innerHTML = "비밀번호가 다릅니다.";
      passwordRepeatMessage.style.color = "red";
      passwordRepeatInput.style.borderColor = "red";
    } else {
      passwordRepeatMessage.innerHTML = "비밀번호가 같습니다.";
      passwordRepeatMessage.style.color = "";
      passwordRepeatInput.style.borderColor = "";
    }
  });
}


/* folder 페이지 이동 sign */
const folderEmail = "test@codeit.com";
const folderPassword = "codeit101";
const form = document.querySelector("form");
const button = document.querySelector("button");

// !!! form 동작 막기
form.addEventListener("click", function(e) {
  e.preventDefault();
});

//button 동작 (마우스 클릭)
button.addEventListener("click", function(e) {
  if(emailInput.value === folderEmail && passwordInput.value === folderPassword) {
    window.location.replace("./folder/test.html")
  } else {
    emailMessage.innerHTML = "이메일을 확인 해 주세요.";
    passwordMessage.innerHTML = "비밀번호를 확인 해 주세요.";
  }
});

//button 동작 (Enter)
form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if(emailInput.value === folderEmail && passwordInput.value === folderPassword) {
      window.location.replace("./folder/test.html")
    } else {
      emailMessage.innerHTML = "이메일을 확인 해 주세요.";
      passwordMessage.innerHTML = "비밀번호를 확인 해 주세요.";
    }
  }
});


/* 비밀번호 눈 아이콘 동작 */
const eyeOnOff = document.querySelectorAll(".icon-eye");
console.log(eyeOnOff)
eyeOnOff[0].addEventListener("click", function(e) {
  if(passwordInput.type === "password") {
    passwordInput.type = "text";
    e.target.src = "./images/eye-on.svg";
    e.target.alt = "eye-on";
  } else{
    passwordInput.type = "password";
    e.target.src = "./images/eye-off.svg";
    e.target.alt = "eye-off";
  }
});
eyeOnOff[1].addEventListener("click", function(e) {
  if(passwordRepeatInput.type === "password") {
    passwordRepeatInput.type = "text";
    e.target.src = "./images/eye-on.svg";
    e.target.alt = "eye-on";
  } else{
    passwordRepeatInput.type = "password";
    e.target.src = "./images/eye-off.svg";
    e.target.alt = "eye-off";
  }
});