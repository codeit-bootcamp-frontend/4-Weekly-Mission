///////////원래 파일

const emailInput = document.querySelector("#email-input");
const pwInput = document.querySelector("#pw-input");
const loginButton = document.querySelector(".login-button");
const eyeoffButton = document.querySelector(".eyeoff-button");

function emailRequest(event) {
  //이메일을 입력해 주세요.
  if (emailInput.value == "") {
    let emrq = document.querySelector(".email-request");
    emrq.classList.add("email-request-show");
    emrq.textContent = "이메일을 입력해 주세요.";
  }
  let emchrs = document.querySelector(".email-checker-show");
  if (emchrs) {
    emchrs.classList.remove("email-checker-show");
  }
  let ckems = document.querySelector(".check-email-show");
  if (ckems) {
    ckems.classList.remove("check-email-show");
  }
}
function removeEmailRequest(event) {
  let emrqs = document.querySelector(".email-request-show");
  if (emrqs) {
    emrqs.classList.remove("email-request-show");
  }
}

emailInput.addEventListener("focusout", emailRequest);
emailInput.addEventListener("focusin", removeEmailRequest);

function emailChecker(event) {
  //올바른 이메일 주소가 아닙니다.
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let emchrs = document.querySelector(".email-checker-show");
  if (!regex.test(emailInput.value) && emailInput.value != "") {
    let emchr = document.querySelector(".email-checker");
    emchr.classList.add("email-checker-show");
    emchr.textContent = "올바른 이메일 주소가 아닙니다.";
  } else if (emchrs) {
    emchrs.classList.remove("email-checker-show");
  }
  const ckems = document.querySelector(".check-email-show");
  if (ckems) {
    ckems.classList.remove("check-email-show");
  }
  if (emailInput.value != "") {
    removeEmailRequest();
  }
}
emailInput.addEventListener("focusout", emailChecker);

function pwRequest(event) {
  //비밀번호를 입력해 주세요
  if (pwInput.value == "") {
    let pwrq = document.querySelector(".pw-request");
    pwrq.classList.add("pw-request-show");
    pwrq.textContent = "비밀번호를 입력해 주세요.";
  }
  let ckpws = document.querySelector(".check-pw-show");
  if (ckpws) {
    ckpws.classList.remove("check-pw-show");
  }
}

function removePwRequest(event) {
  let pwrqs = document.querySelector(".pw-request-show");
  if (pwrqs) {
    pwrqs.classList.remove("pw-request-show");
  }
}

pwInput.addEventListener("focusout", pwRequest);
pwInput.addEventListener("focusin", removePwRequest);

function loginFunction(event) {
  //이메일(비밀번호)을 확인해주세요.
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailInput.value == "test@codeit.com" && pwInput.value == "codeit101") {
    window.location.href = "../folder/index.html";
  } else if (emailInput.value != "" && pwInput.value != "") {
    if (regex.test(emailInput.value)) {
      const checkEmail = document.querySelector(".check-email");
      const checkPw = document.querySelector(".check-pw");
      checkEmail.classList.add("check-email-show");
      checkEmail.textContent = "이메일을 확인해 주세요.";
      checkPw.classList.add("check-pw-show");
      checkPw.textContent = "비밀번호를 확인해 주세요.";
      let emchrs = document.querySelector(".email-checker-show");
      if (emchrs) {
        emchrs.classList.remove("email-checker-show");
      }
      removePwRequest();
    } else {
      emailChecker();
    }
  } else if (emailInput.value == "") {
    emailRequest();
  } else if (pwInput.value == "") {
    pwRequest();
    emailChecker();
  }
}
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  loginFunction();
});
emailInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    loginFunction();
  }
});
pwInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    loginFunction();
  }
});
//눈모양 아이콘
function pwVisibility(event) {
  if (pwInput.type == "password") {
    pwInput.type = "text";
    eyeoffButton.removeChild(eyeoffButton.getElementsByTagName("img")[0]);
    const eyeonImg = document.createElement("img");
    eyeonImg.setAttribute("src", "../public/images/signin-image/eye-on.png");
    eyeoffButton.prepend(eyeonImg);
  } else {
    pwInput.type = "password";
    eyeoffButton.removeChild(eyeoffButton.getElementsByTagName("img")[0]);
    const eyeoffImg = document.createElement("img");
    eyeoffImg.setAttribute("src", "../public/images/signin-image/eye-off.png");
    eyeoffButton.prepend(eyeoffImg);
  }
}
eyeoffButton.addEventListener("click", function (event) {
  event.preventDefault();
  pwVisibility();
});
