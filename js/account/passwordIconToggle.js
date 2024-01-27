export const eyeOpen = document.querySelectorAll(".eyeOpen");
export const eyeClose = document.querySelectorAll(".eyeClose");

function eyeOpenOnClick(e) {
  e.target.classList.add("display_none");
  eyeClose.forEach((el) => {
    if (
      el.previousElementSibling == e.target ||
      el.nextElementSibling == e.target
    ) {
      el.classList.remove("display_none");
    }
  });

  e.target.parentElement.children[
    e.target.parentElement.children.length - 1
  ].type = "password";
}

function eyeCloseOnClick(e) {
  e.target.classList.add("display_none");
  eyeOpen.forEach((el) => {
    if (
      el.previousElementSibling == e.target ||
      el.nextElementSibling == e.target
    ) {
      el.classList.remove("display_none");
    }
  });
  e.target.parentElement.children[
    e.target.parentElement.children.length - 1
  ].type = "text";
}

eyeOpen.forEach((el) => {
  el.addEventListener("click", eyeOpenOnClick);
});

eyeClose.forEach((el) => {
  el.addEventListener("click", eyeCloseOnClick);
});
