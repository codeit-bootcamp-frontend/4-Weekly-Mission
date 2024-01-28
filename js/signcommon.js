
export function isValidEmail(email) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
}
export function isValidPassword(pwd){
    const passwordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordValid.test(pwd);
}
export function removeErrorMsg(errorMsg) {
    errorMsg.remove();
}

export function clickEyeIcon(passwordInput,eyeIcon) {
    if (passwordInput.type == "password") {
      passwordInput.setAttribute("type", "text");
      eyeIcon.src = "./assets/eye-on.png";
    } else {
      passwordInput.setAttribute("type", "password");
      eyeIcon.src = "./assets/eye-off.png";
    }
}