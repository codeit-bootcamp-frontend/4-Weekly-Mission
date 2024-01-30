/*5주차 기본 요구사항


비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.*/
const inputEmail = document.querySelector(".input-frame input#email");
const inputPassword = document.querySelector(".input-frame input#password");
const emailPtag = document.querySelector("p.email");
const passwordPtag = document.querySelector("p.password");
const inputbutton = document.querySelector("input.button");
const loginform = document.querySelector("#login-form");

function CheckEmpty(e) {
  const value = e.target.value;
  if (!value) {
    if (e.target.classList.contains("email")) {
      //
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
//이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
/*function isExistEmail(e) {
  if (inputEmail.value === "test@codeit.com") {
    emailPtag.textContent = "이미 사용 중인 이메일입니다.";
  }
}*/
inputEmail.addEventListener("focusout", CheckEmpty);
inputPassword.addEventListener("focusout", CheckEmpty);

loginform.addEventListener("keypress", entertosubmit);
loginform.addEventListener("submit", LoginCheck);

// 태그선택을 어떻게 할지 고민해보기
// 함수를 좀더 범용성 있게 작성하게 고민해보기

//[심화]눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 하나요?

//[심화]비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의
//문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이나요?*/
