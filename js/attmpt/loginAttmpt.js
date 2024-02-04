import id from "../email/idEvent.js";
import pw from "../password/pwEvent.js";





export default async function loginAttempt(email, password) {
  const signInData = {
    email: email,
    password : password
  };
  
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(signInData)
    });
   if(response.ok){
         window.location.href = '/html/Linkbrary_folder.html';
    } else {
      id.validateEmail();
      pw.validatePassword();
    }
  } catch (error) {
  }
}
