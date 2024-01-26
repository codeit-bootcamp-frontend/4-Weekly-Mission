const inputEmail = document.querySelector(".input-frame input#email");
const inputPassword = document.querySelector(".input-frame input#password");
const emailPtag = document.querySelector("p.email");
const passwordPtag = document.querySelector("p.password");
const inputbutton = document.querySelector("input.button");
const loginform = document.querySelector("#login-form");

function Checkinput(e) {
  const value = e.target.value;
  if (!value) {
    if (e.target.classList.contains("email")) {
      inputEmail.classList.add("border-red");
      emailPtag.textContent = "이메일을 입력해 주세요.";
    } else if (e.target.classList.contains("password")) {
      inputPassword.classList.add("border-red");
      passwordPtag.textContent = "비밀번호를 입력해 주세요.";
    }
    return;
  }
  // 값이 존재할 때
  if (e.target.classList.contains("email")) {
    let reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(e.target.value)) {
      inputEmail.classList.add("border-red");
      emailPtag.textContent = "올바른 이메일 주소가 아닙니다.";
      return;
    } // 이메일형식을 다시 맞춘 경우
    inputEmail.classList.remove("border-red");
    emailPtag.textContent = "";
  } else if (e.target.classList.contains("password")) {
    inputPassword.classList.remove("border-red");
    passwordPtag.textContent = "";
  }
}

function entertosubmit(e) {
  if (e.key === "Enter") {
    LoginCheck(e);
  }
}

function LoginCheck(e) {
  e.preventDefault();
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    emailPtag.textContent = "이메일을 확인해주세요.";
    passwordPtag.textContent = "비밀번호를 확인해주세요.";
  }
}

inputPassword.addEventListener("focusout", Checkinput);
inputEmail.addEventListener("focusout", Checkinput);
loginform.addEventListener("keypress", entertosubmit);
loginform.addEventListener("submit", LoginCheck);

// 태그선택을 어떻게 할지 고민해보기
// 함수를 좀더 범용성 있게 작성하게 고민해보기

//[심화]눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 하나요?

//[심화]비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의
//문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이나요?*/
