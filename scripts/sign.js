/* DOM */
const signInput = document.querySelectorAll("input");
const signMessage = [...document.querySelectorAll(".message")];
const eyeOnOff = document.querySelectorAll(".eye");
const form = document.querySelector("form");

/* 로그인, 회원가입 구분 */
const pathSign = window.location.pathname.split('/');
const pathName = pathSign[pathSign.length - 1].split('.')?.[0];

/* 객체 */
const RULES = {
  signin: {
    email: ['emailInput', 'emailCorrect'],
    password: ['passwordInput'],
  },
  signup: {
    email: ["emailInput", "emailCorrect"],
    password: ["passwordInput", "passwordCorrect"],
    confirm: ["passwordConfirm"],
  }
}

const currentRule = RULES[pathName];

const validator = { 
  emailInput: {
    valid: value => Boolean(value),
    message: "이메일을 입력해 주세요.",
  },
  emailCorrect: {
    valid: value => value.includes("@"),
    message: "올바른 이메일 주소가 아닙니다.",
  },
  passwordInput: {
    valid: value => Boolean(value),
    message: "비밀번호를 입력해 주세요.",
  },
  passwordCorrect: {  //signup 에만
    valid: value => value.length >= 8 &&  /^.*(?=.*\d)(?=.*[a-zA-Z])/.test(value),
    message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  },
  passwordConfirm: {  //signup 에만
    valid: (value, password) => value === password,
    message: "비밀번호가 일치하지 않아요.",
  },
};

const eyeInfo = {
  "eye on": {
    image: "./images/eye-on.svg",
    textType: "text",
  },
  eye: {
    image: "./images/eye-off.svg",
    textType: "password",
  },
};

/* 이벤트 핸들러 */
const handleSignInput = (e) => {
  const {name, value} = e.target;
  const [{value: email}, {value: password}] = signInput;
  
  //valid false나온 validator에 프로퍼티 찾음
  const invalidKey = currentRule[name].find(key => !validator[key].valid(value, password));

  //error 메시지 함수 적용
  errorMessage(e.target, invalidKey);

  if(pathName === "signup") {
    checkEmail(email);  //이미 사용중인 이메일 체크!
  }
};

const eyeOnOffHandler = (e) => {
  //토글쓰기
  e.target.classList.toggle("on")
  eyeStatus = e.target.getAttribute('class');
  e.target.src = eyeInfo[eyeStatus].image;
  e.target.previousElementSibling.type = eyeInfo[eyeStatus].textType;
};

/* 이벤트 리스너 */
signInput.forEach(input => input.addEventListener("focusout", handleSignInput));
eyeOnOff.forEach(onoff => onoff.addEventListener("click", eyeOnOffHandler));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pathName === "signin"
    ? submitSignin()
    : submitSignup();
});

/* 함수 */
const errorMessage = (event, invalidKey) => {
  const {name} = event;
  const errorMessageNode = signMessage.find(node => node.classList.contains(name));
  
  if(invalidKey) {
    event.classList.add("error");
    errorMessageNode.innerHTML = validator[invalidKey].message;
  } else {
    event.classList.remove("error");
    errorMessageNode.innerHTML = "";
  }
};

function submitSignin() {
  //이메일, 비밀번호
  const [{value: email}, {value: password}] = signInput;
  //에러메시지
  const [{innerHTML: errorMessageEmail, innerHTML: errorMessagePassword}] = signMessage;

  if(email === "test@codeit.com" && password === "sprint101") {
    if(localStorage.getItem('accessToken')) {
      //window.location.replace("./folder.html");
    }
    postSign(email, password, pathName);
  } else {
    errorMessageEmail.innerHTML = "이메일을 확인해 주세요.";
    errorMessagePassword.innerHTML = "비밀번호를 확인해 주세요.";
  }
}

function submitSignup() {
  //이메일, 비밀번호, 비밀번호 확인
  const [{value: email}, {value: password}, {value: confirm}] = signInput;
  //에러메시지
  const [{innerHTML: errorMessageEmail, innerHTML: errorMessagePassword}] = signMessage;
  //에러 있는지 확인 변수들 >> 에러 있으면 undefined
  const signTest = RULES.signup.email.find(key => !validator[key].valid(email));
  const passwordTest = RULES.signup.password.find(key => !validator[key].valid(password));
  const confirmTest = RULES.signup.confirm.find(key => !validator[key].valid(confirm, password));

  if(!signTest && !passwordTest && !confirmTest) {
    if(localStorage.getItem('accessToken')) {
      window.location.replace("./folder.html");
    }
    postSign(email, password, pathName);
  } else {
    if(signTest) {
      errorMessageEmail.innerHTML = "이메일을 확인해 주세요.";
    }
    if(passwordTest) {
      errorMessagePassword.innerHTML = "비밀번호를 확인해 주세요.";
    }
  }
}

async function checkEmail(emailValue) {
  try{
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email: emailValue
      })  
    });
    const result = response.status;
    if (result === 409) {
      signMessage[0].innerHTML = "이미 사용중인 이메일 입니다."
    }
    return result;
  } catch(error) {
    console.log(error);
  }
}

async function postSign(emailValue, passwordValue, path) {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-' + path.slice(4), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue
      })
    });
    const result = await response.json();
    const access = localStorage.setItem('accessToken', result.accessToken); 
    return access;
  } catch(error) {
    console.log(error);
  }
}