const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const login = document.querySelector(".login");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const eyeoff = document.querySelector(".eyeoff");

function emailRequest(event) {
  //이메일을 입력해 주세요.
  if (email.value == "") {
    let emrq = document.querySelector(".email-request");
    emrq.classList.add("email-request-show");
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

email.addEventListener("focusout", emailRequest);
email.addEventListener("focusin", removeEmailRequest);

function emailChecker(event) {
  //올바른 이메일 주소가 아닙니다.
  let emchrs = document.querySelector(".email-checker-show");
  if (!regex.test(email.value) && email.value != "") {
    let emchr = document.querySelector(".email-checker");
    emchr.classList.add("email-checker-show");
  } else if (emchrs) {
    emchrs.classList.remove("email-checker-show");
  }
  const ckems = document.querySelector(".check-email-show");
  if (ckems) {
    ckems.classList.remove("check-email-show");
  }
  if (email.value != "") {
    removeEmailRequest();
  }
}
email.addEventListener("focusout", emailChecker);

function pwRequest(event) {
  //비밀번호를 입력해 주세요
  if (pw.value == "") {
    let pwrq = document.querySelector(".pw-request");
    pwrq.classList.add("pw-request-show");
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

pw.addEventListener("focusout", pwRequest);
pw.addEventListener("focusin", removePwRequest);

function loginFunction(event) {
  //이메일(비밀번호)을 확인해주세요.
  if (email.value == "test@codeit.com" && pw.value == "codeit101") {
    window.location.href = "../folder/index.html";
  } else if (email.value != "" && pw.value != "") {
    if (regex.test(email.value)) {
      const checkEmail = document.querySelector(".check-email");
      const checkPw = document.querySelector(".check-pw");
      checkEmail.classList.add("check-email-show");
      checkPw.classList.add("check-pw-show");
      let emchrs = document.querySelector(".email-checker-show");
      if (emchrs) {
        emchrs.classList.remove("email-checker-show");
      }
      removePwRequest();
    } else {
      emailChecker();
    }
  } else if (email.value == "") {
    emailRequest();
  } else if (pw.value == "") {
    pwRequest();
    emailChecker();
  }
}
login.addEventListener("click", function (event) {
  event.preventDefault();
  loginFunction();
});
email.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    loginFunction();
  }
});
pw.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    loginFunction();
  }
});
//눈모양 아이콘
function pwVisibility(event) {
  if (pw.type == "password") {
    pw.type = "text";
    eyeoff.removeChild(eyeoff.getElementsByTagName("img")[0]);
    const eyeonImg = document.createElement("img");
    eyeonImg.setAttribute("src", "../public/images/signin-image/eye-on.png");
    eyeoff.prepend(eyeonImg);
  } else {
    pw.type = "password";
    eyeoff.removeChild(eyeoff.getElementsByTagName("img")[0]);
    const eyeoffImg = document.createElement("img");
    eyeoffImg.setAttribute("src", "../public/images/signin-image/eye-off.png");
    eyeoff.prepend(eyeoffImg);
  }
}
eyeoff.addEventListener("click", function (event) {
  event.preventDefault();
  pwVisibility();
});
