
import {
  errorBoxOnOff,
  showError,
  hideError,
  checkisValidEmail,
  userData,
  checkString
} from "./src/sign.js";


function focusOutCheck(event){
  const { value, id } = event.target;
  if (id === 'email') {
    if (value === "") {
      showError(id, '이메일을 입력해주세요.');
    } else if (!checkisValidEmail(value)) {
      showError(id, '올바른 이메일 주소가 아닙니다.');
    } else {
      hideError(id);
    }
  } else {
    if (value === "") {
      showError(id, '비밀번호를 입력해주세요.');
    } else {
      hideError(id);
    }
  }
}

function passwordTypeToggle(event, id){
  const $imageNode = document.querySelector(`#${event.target.id}`)
  const $target = document.querySelector(`${id}`)
  const targetType = $target.getAttribute('type'); // passwrod
  $target.setAttribute('type', targetType === 'password' ? 'text' : 'password'); 
  $imageNode.setAttribute('src',targetType === 'password' ? './images/eye-on.svg' : './images/eye-off.svg' )
}


function loginProcess() {
 
  const emailValue = document.querySelector('#email').value
  const passwordValue = document.querySelector('#password').value

  //if (emailValue !== 'test@codeit.com')
  if (!emailValue || !checkisValidEmail(emailValue)) {
    return false;
  } else {
    hideError('email');
  }

  if (!passwordValue || !checkString(passwordValue)) {
    showError('password', '비밀번호를 확인해 주세요.');
  } else {
    hideError('password');
  }

  getAccessToken(emailValue,passwordValue);


}

async function getAccessToken(email, password){
  try{
    const url = 'https://bootcamp-api.codeit.kr/api/sign-in';
    const responseJson = await fetch(url,{
      method:'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body : JSON.stringify({
                email,
                password
              })
    })
    const response = await responseJson.json();
    const {data : {accessToken}} = response
    if(accessToken){
      location.href = '/folder.html';
    }
  }
  catch(e){
    showError('email', '');
    showError('password', '아이디 및 비밀번호를 확인해주세요');
    console.log(e)
  }
}

document.querySelector(`#email`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#password`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#signForm`).addEventListener('submit', function(event) {
  event.preventDefault();
  loginProcess()
});
document.querySelector('#passwordViewIcon').addEventListener('click',(event)=>passwordTypeToggle(event,'#password'));


