export const toggleEye = (input) => {
  const eyeOff = "/images/eye-off.svg";
  const eyeOn = "/images/eye-on.svg";

  if (input.type === "password") {
    input.type = "text";
    input.nextElementSibling.src = eyeOn;
  } else {
    input.type = "password";
    input.nextElementSibling.src = eyeOff;
  }
};
