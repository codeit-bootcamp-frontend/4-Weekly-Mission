/* 비밀번호 유효성 검사 변수 : 숫자랑 문자가 포함되어야 함 */
const reg = /^.*(?=.*\d)(?=.*[a-zA-Z])/;

/* DOM */
const signInput = document.querySelectorAll(".input");
const signMessage = [...document.querySelectorAll(".message")];
const eyeOnOff = document.querySelectorAll(".eye");
const form = document.querySelector("form");

/*   객체 */
const signInfo = {
  signMap: {
    email: ["emailInput", "emailCorrect", "emailAlready"],
    emailText: "",
    password: ["passwordInput", "passwordCorrect"],
    passwordText: "",
    confirm: ["passwordConfirm"],
    confirmText: "",
  },

  signValid: {
    emailInput: {
      valid: value => Boolean(value),
      message: "이메일을 입력해 주세요.",
    },
    emailCorrect: {
      valid: value => value.includes("@"),
      message: "올바른 이메일 주소가 아닙니다.",
    },
    emailAlready: { //이거 signin 페이지에도 적용되니 난감하다 ..
      valid: value => value !== "test@codeit.com",
      message: "이미 사용 중인 이메일입니다.",
    },
    passwordInput: {
      valid: value => Boolean(value),
      message: "비밀번호를 입력해 주세요.",
    },
    passwordCorrect: {
      valid: value => value.length >= 8 && reg.test(value),
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
    passwordConfirm: {
      valid: value => value === signInfo.signMap.passwordText,
      message: "비밀번호가 일치하지 않아요.",
    },
  },
};

const eyeInfo = {
  "eye on": {
    image: "./images/eye-on.svg",
    texttype: "text",
  },
  eye: {
    image: "./images/eye-off.svg",
    texttype: "password",
  },
};

/* 이벤트 핸들러 */
const signInputHandler = (e) => {
  const {name, value} = e.target;
  const signList = signInfo.signMap[name];
  
  //이메일, 비밀번호 입력값 저장
  signInfo.signMap[name+"Text"] = value;

  //valid false나온 signValid에 프로퍼티 찾음
  const invalidKey = signList.find(key => !signInfo.signValid[key].valid(value));

  //error 메시지 함수 적용
  errorMessage(e.target, invalidKey);
};

const eyeOnOffHandler = (e) => {
  //토글쓰기
  e.target.classList.toggle("on")
  eyeStatus = e.target.getAttribute('class');
  e.target.src = eyeInfo[eyeStatus].image;
  e.target.previousElementSibling.type = eyeInfo[eyeStatus].texttype;
};

/* 이벤트 리스너 */
signInput.forEach(input => input.addEventListener("focusout", signInputHandler));
eyeOnOff.forEach(onoff => onoff.addEventListener("click", eyeOnOffHandler));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  signSubmit();
});

/* 함수 */
const errorMessage = (event, invalidKey) => {
  const {name} = event;
  const errorMessageNode = signMessage.find(node => node.classList.contains(name));
  
  if(invalidKey) {
    event.classList.add("error");
    errorMessageNode.innerHTML = signInfo.signValid[invalidKey].message;
  } else {
    event.classList.remove("error");
    errorMessageNode.innerHTML = "";
  }
};

function signSubmit() {
  //버튼 찾기
  const buttonSignin = form.lastElementChild.classList.contains("signin");
  const buttonSignup = form.lastElementChild.classList.contains("signup");
  //에러메시지
  const errorMessageEmail = signMessage.find(node => node.classList.contains("email"));
  const errorMessagePassword = signMessage.find(node => node.classList.contains("password"));
  //에러 있는지 확인 변수들 >> 에러 있으면 undefined
  const signTest = signInfo.signMap.email.find(key => !signInfo.signValid[key].valid(signInfo.signMap.emailText));
  const passwordTest = signInfo.signMap.password.find(key => !signInfo.signValid[key].valid(signInfo.signMap.passwordText));
  const confirmTest = signInfo.signMap.confirm.find(key => !signInfo.signValid[key].valid(signInfo.signMap.confirmText));

  //로그인 페이지 전송
  if(buttonSignin) {
    if(signInfo.signMap.emailText === "test@codeit.com" && signInfo.signMap.passwordText === "codeit101") {
      window.location.replace("./folder/test.html")
    } else {
      errorMessageEmail.innerHTML = "이메일을 확인해 주세요.";
      errorMessagePassword.innerHTML = "비밀번호를 확인해 주세요.";
    }
  }

  //회원가입 페이지 전송
  if(buttonSignup) {
    if(!signTest && !passwordTest && !confirmTest) {
      window.location.replace("./folder/test.html")
    } else {
      if(signTest) {
        errorMessageEmail.innerHTML = "이메일을 확인해 주세요.";
      }
      if(passwordTest) {
        errorMessagePassword.innerHTML = "비밀번호를 확인해 주세요.";
      }
    }
  }
}