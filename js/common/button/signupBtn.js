import init from '../init/init.js';
import email from '../input/email/emailValidation.js';
import password from '../input/password/passwordValidtaion.js';
import tokenSetting from '../token/tokenSetting.js';

const btn = document.querySelector('#signupBtn');

async function handleSuccessfulSignupAndRedirect(){
  try {
    const emailInput = email.selector.value;
    const passwordInput = password.selector.value;
    const postRequestOfCodeitAPI = await fetch('https://bootcamp-api.codeit.kr/api/sign-up',
    { method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    })
    
    if(postRequestOfCodeitAPI.ok){
      const result = await postRequestOfCodeitAPI.json();
      const accessTokenData = result.data.accessToken;

      //유저 토큰 로컬 스토리지 저장
      tokenSetting.saveToLocalStorage(emailInput, accessTokenData)

      return location.href = 'folder.html';
    }
  } catch (error) {
      console.log(error);
  }
}

async function validation(e) {
  e.preventDefault();//submit방지
  //초기화
  init(email.selector);
  init(password.selector);
  init(password.selectorOfChk);
  
  email.validateSignupEmailInput(email.selector);
  password.validateSignupPasswordInput(password.selector);
  password.validateSignupPasswordChkInput(password.selectorOfChk);

  handleSuccessfulSignupAndRedirect();

}

export default {btn, validation};