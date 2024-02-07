import * as common from "./common_login.js";
import { ERROR_MESSAGE } from "/constant.js";
import { passwordCheck, isMatch} from "../validation.js"; 
import { inputDeleteNode } from "../node.js";
import { emailDiv, pwdDiv, pwdDiv2, emailInput, pwdInput, signupBtn, pwdEyeIcon, pwdEyeIcon2, pwdInput2 } from "../declaration.js";
import { localStorage } from "../localStorage.js";

let emailVal = "", pwdVal = "", pwdVal2 = "";

// 로컬 스토리지에 accssToken이 있는 경우 folder페이지로 이동
(() => {
  localStorage.remove('accessToken');
  localStorage.get('accessToken')? location.assign("folder.html") : null
})();


// 비밀번호 input 핸들러 함수
function passwordHandlerFuc(password) {
  if(password) {
    return passwordCheck(password) ? inputDeleteNode('password') : common.errorMsg("wrongPwd");
  } 
  common.errorMsg("NoPwd");
}

//이메일 유효 검사 리퀘스트 요청
async function checkEmail(emailAdress) {

  const emailJson = {
    "email" : emailAdress,
  }

  try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailJson),
      })
    const result = await response.json();
    await printEmailError(result);
  } catch(e) {
    console.log(e);
  } 
}

// 이메일 에러 메세지에 따른 에러 출력
function printEmailError(error) {
  let errorMsg = error.error;
  if(!errorMsg) {
    return inputDeleteNode('email');
  }

  const message = errorMsg.message;
  if(message === ERROR_MESSAGE.email.inUse) {
    return common.errorMsg("inUseEmail");
  } 
  if(message === ERROR_MESSAGE.email.invalid) {
    return common.errorMsg('wrongEmail');
  }
}

// 이메일 input 핸들러
function emailHandlerFunc(email) {
  email ? checkEmail(email) : common.errorMsg('NoEmail');
  emailVal = email; 
}

// 회원가입 시도 함수
function trySignup() {
  emailInput.dispatchEvent(new Event('focusout'));
  pwdInput.dispatchEvent(new Event('focusout'));
  pwdInput2.dispatchEvent(new Event('focusout'));

  if((!emailDiv[2] && !pwdDiv[2] && !pwdDiv2[2]) && (emailVal&&pwdVal&&pwdVal2)) {
    return accountRequest(emailVal, pwdVal);
  } 
  common.errorMsg("Other"); 
}

// 회원가입 시도 시 서버 리퀘스트 요청
async function accountRequest(email, password) {
  const user = {
    "email": email,
    "password": password, 
  }
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(user),
      })
    const result = await response.json();
    await localStorage.save('accessToken',result.data.accessToken)
    await location.assign("folder.html");
  } catch(e) {
    console.log(e);
  }
}

// 비밀번호 확인 input 눈모양 클릭 실행 함수
export function EyePwd2(EyeStatus) {
  if(EyeStatus.classList.contains('off')) {
    pwdEyeIcon2.setAttribute('src',"assets/icons/eye-off.png");
    pwdInput2.setAttribute('type', 'password');

  } else {
    pwdEyeIcon2.setAttribute('src',"assets/icons/eye-on.png");
    pwdInput2.setAttribute('type', 'text');
  }
}

// email input 이벤트 함수 등록
emailInput.addEventListener('focusout', function(e) {
  emailHandlerFunc(e.target.value);
  emailVal = e.target.value;
});
emailInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignup);
});

// password input 이벤트 함수 등록
pwdInput.addEventListener('focusout', function(e) {
  passwordHandlerFuc(e.target.value);
  pwdVal = e.target.value;
});
pwdInput.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignup);
});

pwdInput2.addEventListener('focusout', function(e) {
  pwdVal2 = e.target.value;
  isMatch(pwdVal, pwdVal2) ? inputDeleteNode("password2") : common.errorMsg("noMatchPwd")
})
pwdInput2.addEventListener('keypress', function(e) {
  common.EnterLogin(e.key,trySignup);
});

// 회원가입 버튼 이벤트 함수 등록
signupBtn.addEventListener('click', function(e) {
  trySignup();
 });

 // 눈모양 아이콘 이벤트 함수 등록
pwdEyeIcon.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  common.EyePwd(e.target);
})
pwdEyeIcon2.addEventListener('click', function(e) {
  e.target.classList.toggle('off');
  EyePwd2(e.target);
})