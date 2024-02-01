// const
const EYE_ICON_OFF = "icon-eye-off";
const EYE_ICON_ON = "icon-eye-on";

// DOM
const passwordInputList = [
  ...document.querySelectorAll("input[type='password']"),
];
const eyeIconList = [...document.querySelectorAll(".password-box i")];

function handleClickEyeIcon({ target }) {
  if (target.tagName !== "I") {
    return;
  }
  const inputIndex = eyeIconList.indexOf(target);
  const targetInput = passwordInputList[inputIndex];
  if (targetInput.type === "password") {
    targetInput.type = "text";
    target.classList.add(EYE_ICON_ON);
    target.classList.remove(EYE_ICON_OFF);
  } else {
    targetInput.type = "password";
    target.classList.add(EYE_ICON_OFF);
    target.classList.remove(EYE_ICON_ON);
  }
}

export default handleClickEyeIcon;
