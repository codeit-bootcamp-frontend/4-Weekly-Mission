export const eyeOpen = document.querySelector(".eyeOpen");
export const eyeClose = document.querySelector(".eyeClose");

function eyeOpenOnClick(e) {
  e.target.classList.add("display_none");
  eyeClose.classList.remove("display_none");
  password.type = "password";
}

function eyeCloseOnClick(e) {
  e.target.classList.add("display_none");
  eyeOpen.classList.remove("display_none");
  password.type = "text";
}

eyeOpen.addEventListener("click", eyeOpenOnClick);
eyeClose.addEventListener("click", eyeCloseOnClick);
