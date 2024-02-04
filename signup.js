import {
  errorBoxOnOff,
  showError,
  hideError,
  checkisValidEmail
} from "./src/sign.js";

export function emailValidateCheck(value, target) {
  if (value === "") {
    showError(target, '이메일을 입력해주세요.');
  } else if (!checkisValidEmail(value)) {
    showError(target, '올바른 이메일 주소가 아닙니다.');
  } else {
    hideError(target);
    return true
  }
  return false
}

function focusOutCheck(event){
  const { value, id } = event.target;
  const pass = document.querySelector('#password').value;
  if (id === 'email') {
    emailValidateCheck(value, id)
  }
  else if(id === 'password'){
    if(!checkString(value)){
      showError(id, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
    }
    else{
      hideError(id);
    } 
  }
  else if(id ==='passwordCheck'){
    if(value !== pass){
      showError(id, '비밀번호가 일치하지 않아요');
    }else{
      hideError(id);
    }
  }
}


function checkString(str) {
  // 정규표현식을 사용하여 문자열에 숫자만 있는지 확인
  const isNumberOnly = /^\d+$/.test(str);
  // 정규표현식을 사용하여 문자열에 문자만 있는지 확인
  const isLetterOnly = /^[a-zA-Z]+$/.test(str);
  // 문자열의 길이가 8자 미만인지 확인
  const isShort = str.length < 8;
  if (isShort || isNumberOnly || isLetterOnly) {
    return false;
  }
  return true;
}

async function signUpProcess(){
  
  const passwordValue = document.querySelector('#password').value;
  const confirmPasswordValue = document.querySelector('#passwordCheck').value;
  const emailValue = document.querySelector('#email').value;

  const emailCheck = emailValidateCheck(emailValue, 'email');
  
  const passwordCheck = checkString(passwordValue) && (passwordValue === confirmPasswordValue)

  if(emailCheck && passwordCheck){
    const check  = await checkSignup(emailValue)
    console.log("checkSignup",check)
    check && await signUp(emailValue,passwordValue)
  }
  
}

//비밀번호 문자로 확인
function passwordTypeToggle(event, id){
  const $imageNode = document.querySelector(`#${event.target.id}`)
  const $target = document.querySelector(`${id}`)
  const targetType = $target.getAttribute('type'); // passwrod
  $target.setAttribute('type', targetType === 'password' ? 'text' : 'password'); 
  $imageNode.setAttribute('src',targetType === 'password' ? './images/eye-on.svg' : './images/eye-off.svg' )
}

//유효한 회원가입형식 emailValidateCheck()에 넣나??
async function signUp(email,password){
  const url = 'https://bootcamp-api.codeit.kr/api/sign-up';
  const response = await fetch(url,{
  method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
            email,
            password
          })
    })
  const {data} = await response.json();
  if(data.accessToken){
    location.href = '/folder.html';
  }
}
//이메일 중복확인
async function checkSignup(email){
  try{
    const url= 'https://bootcamp-api.codeit.kr/api/check-email';
    const response= await fetch(url,{
      method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
            email,
          })
    })
    const data = await response.json();
    if(data?.data?.isUsableNickname){
      return true
    }
    if(data?.error){
      showError('email', data.error.message);
      return false
    }
    return false;
  }catch(e){
    console.log("error", e)
    return false
  }
  
}


document.querySelector(`#email`).addEventListener('focusout',  focusOutCheck);
document.querySelector(`#password`).addEventListener('focusout',  focusOutCheck);
document.querySelector(`#passwordCheck`).addEventListener('focusout',  focusOutCheck);
document.querySelector(`#signForm`).addEventListener('submit', function(event) {
  event.preventDefault();
  signUpProcess();
});
document.querySelector('#passwordViewIcon').addEventListener('click',(event)=>passwordTypeToggle(event,'#password'));
document.querySelector('#passwordCheckViewIcon').addEventListener('click',(event)=>passwordTypeToggle(event, '#passwordCheck'));
