
const email = document.querySelector("#user_email");
const password = document.querySelector("#user_password");
const error_massage_id = document.querySelector(".error_massage_id");
const error_massage_pw = document.querySelector(".error_massage_pw");
const submit_btn = document.querySelector(".submit_btn");
const user_login_form = document.querySelector(".user_login_form");

const pw_block_icon = document.querySelector(".pw_block");
const pw_hide_icon = document.querySelector(".pw_hide");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleFocus(element, isFocused) {
  element.classList.toggle('focused', isFocused);
}

email.addEventListener('blur', function(e) {
  e.preventDefault();
  const email_value = email.value;
  const isValidEmail = emailRegex.test(email_value);

  if (!isValidEmail) {
    console.log('성공');
    error_massage_id.innerText = "올바른 이메일 주소가 아닙니다."
  } else {
    console.log('실패');
    error_massage_id.innerText = ""
  }

  // Apply focus-related styles
  handleFocus(email, !isValidEmail);
});

password.addEventListener('blur', function(e) {
  e.preventDefault();
  const password_value = password.value;
  let control = true;

  if (password_value === "") {
    console.log('성공');
    error_massage_pw.innerText = "비밀번호를 입력해 주세요"
    control = true;
  } else {
    console.log('실패');
    error_massage_pw.innerText = ""
    control = false;
  }

  // Apply focus-related styles
  handleFocus(password, control);
});

function signIn(email, password) {
  if (email == 'test@codeit.com' && password == 'codeit101') {
    window.location.replace('./folder.html');
  } else {
    error_massage_id.innerText = '이메일을 확인해 주세요.';
    error_massage_pw.innerText = '비밀번호를 확인해 주세요.';
  }
}
//버튼에 클릭,엔터 이벤트시에 로그인 함수 기능 추가
submit_btn.addEventListener('click', function (e) {
  e.preventDefault();
  signIn(email.value, password.value);
});
submit_btn.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    signIn(email.value, password.value);
  }
});

pw_block_icon.addEventListener("click" , () => {
  pw_block_icon.style.display = "none"
  pw_hide_icon.style.display = "block"
  password.type = "text"
})

pw_hide_icon.addEventListener("click" , () => {
  pw_hide_icon.style.display = "none"
  pw_block_icon.style.display = "block"
  password.type = "password"
})



