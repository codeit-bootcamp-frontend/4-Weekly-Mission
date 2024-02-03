import errorMsg from "./errorMsg.js";
import id from "./idEvent.js";
import pw from "./pwEvent.js";





export default function loginAttempt() {
  errorMsg.clearErrors();
  const emailValue = id.emailInput.value.trim();
  const passwordValue = pw.passwordInput.value.trim();
  if (emailValue === id.userId && passwordValue === pw.userPassword){
    window.location.href = '/html/Linkbrary(folder).html';
  } else{
    id.validateEmail()
    pw.validatePassword()
  }
}