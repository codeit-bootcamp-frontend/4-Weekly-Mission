
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

email.addEventListener('blur', function(e) {
  e.preventDefault();
  const email_value = email.value;
  const isValidEmail = emailRegex.test(email_value);
  if(email_value === ""){
    errorMassageId.innerText = "이메일을 입력해 주세요"
  }else{
    if (!isValidEmail) {
      console.log('성공');
      errorMassageId.innerText = "올바른 이메일 주소가 아닙니다."
    } else {
      console.log('실패');
      errorMassageId.innerText = ""
    }
  }

  borderStyleHandler(email, !isValidEmail);
});

password.addEventListener('blur', function(e) {
  e.preventDefault();
  const password_value = password.value;
  let control = true;

  if (password_value === "") {
    errorMassagePw.innerText = "비밀번호를 입력해 주세요"
    control = true;
  } else {
    errorMassagePw.innerText = ""
    control = false;
  }

  borderStyleHandler(password, control);
});

function signIn(emailValue, passwordValue) {
  let control = false;
  if (emailValue == 'test@codeit.com' && passwordValue == 'codeit101') {
    window.location.replace('./folder.html');
  } else {
    control = true;
    errorMassageId.innerText = '이메일을 확인해 주세요.';
    errorMassagePw.innerText = '비밀번호를 확인해 주세요.';
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

pwHideIcon.addEventListener("click" , () => {
  pwHideIcon.style.display = "none"
  pwBlockIcon.style.display = "block"
  password.type = "text"
})

pwBlockIcon.addEventListener("click" , () => {
  pwBlockIcon.style.display = "none"
  pwHideIcon.style.display = "block"
  password.type = "password"
})





