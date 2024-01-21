document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const passwordSignin = document.getElementById("password-signin");
    const emailSignin = document.getElementById("email-signin");

    loginButton.addEventListener("click", function(){
        validateLogin(emailSignin, passwordSignin);
    });
    
    const submitButton = document.getElementById("submit-button");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const emailSignup = document.getElementById("email-signup");
    
    submitButton.addEventListener("click", function(){
        validateSignup(emailSignup, password1, password2);
    });
});

function validateLogin(email, password) {
    if (password.value.trim() === "" || email.value.trim() === "") {
        alert("이메일 또는 비밀번호를 입력하지 않았습니다.");
    } else if (email.value.indexOf("@") === -1) {
        alert("이메일을 제대로 입력해주세요.");
    }
}

function validateSignup(email, password1, password2) {
    if (password1.value.trim() === "" || password2.value.trim() === "" || email.value.trim() === "") {
        alert("이메일 또는 비밀번호를 입력하지 않았습니다.");
    } else if (email.value.indexOf("@") === -1) {
        alert("이메일을 제대로 입력해주세요.");
    } else if (password1.value !== password2.value) {
        alert("비밀번호가 서로 다릅니다!!");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.eye-button');

    const clickedButton = eyeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const clickedButton = event.currentTarget;
            const parentInputBox = clickedButton.closest('.sign-input-box');
            const passwordInput = parentInputBox.querySelector('.sign-input[type="password"]');
            const passwordValue = passwordInput.value;
            
            eyeChange(clickedButton, passwordInput);
        });
    });
});

let EyeOn = false;
function eyeChange(icon, password){
document.eye.addEventListener("click", function () {
  const eyeIcon = icon;
  const passwordInput = password;

  EyeOn = !EyeOn;
  console.log(EyeOn);

  if (EyeOn) {
    passwordInput.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "./images/eye-on.png");
  } else {
    passwordInput.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "./images/eye-off.svg");
  }
});
};