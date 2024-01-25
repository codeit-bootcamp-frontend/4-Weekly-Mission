export const email = document.querySelector("#email");
export const emailError = document.querySelector(".emailError");

export function emailOnInput(e) {
  emailError.textContent = "";
  e.target.classList.remove("inputError");
}

email.addEventListener("input", emailOnInput);
