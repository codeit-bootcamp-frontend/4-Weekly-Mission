import id from "../email/idEvent.js"
import pw from "../password/pwEvent.js";




async function emailCheck(email) {
  try{// POST 요청 보내기
  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email : email})
  })
const data = await response.json();
return Set.data
}catch(error){
  console.log(error);
}
}

export default async function signupAttempt(email, password) {
  const signupData = {
    email : email,
    password : password
  }

  try{// POST 요청 보내기
    const duplicate  = await emailCheck(email);
    if(duplicate){
    } else {
      const signupResponse = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupData)
    });
      if(signupResponse.ok){
        if(password===pw.passwordRepeatInput.value)
        window.location.href = '/html/Linkbrary_folder.html';
      } else {
        id.validateEmail();
        pw.validatePassword();
        pw.validatePasswordRepeat();
      }
    }
  } catch(error) {
  };
}
