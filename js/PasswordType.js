export function togglePasswordVisibility(show, pwHideIcon, pwBlockIcon, password) {
  pwHideIcon.style.display = show ? "none" : "block";
  pwBlockIcon.style.display = show ? "block" : "none";
  password.type = show ? "text" : "password";
}