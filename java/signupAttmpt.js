import id from "./idEvent.js";
import pw from "./pwEvent.js";
import errorMsg from "./errorMsg.js";



export default function signupAttempt() {
  errorMsg.clearErrors();
  if (id.validateEmail() && pw.validatePassword() && pw.validatePasswordRepeat()) {
    window.location.href = '/html/Linkbrary(folder).html';
  } 
}

