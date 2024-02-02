export const password = document.querySelector("#password");
export const passwordError = document.querySelector(".passwordError");

export function passwordOnInput(e) {
  passwordError.textContent = "";
  e.target.classList.remove("inputError");
}

password.addEventListener("input", passwordOnInput);
