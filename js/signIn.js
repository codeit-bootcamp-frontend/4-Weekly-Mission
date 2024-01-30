import {
  userID,
  userPW,
  emailError,
  pwError,
  pwContainer,
  errorStyle,
  clearStyle,
  validEmail,
  validPassword,
  validEmailCheck,
  goUrl,
  validPasswordCheck,
  showPW,
} from "./signUtils.js";

const signInButton = document.querySelector(".sign-in-button");

async function signInAPI(email, password) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error during API call:", error.message);
    throw error;
  }
}

async function validSignIn() {
  try {
    if (userID.value === "" || userPW.value === "") {
      throw new Error("Email and password are required");
    }

    await signInAPI(userID.value, userPW.value);

    goUrl();
  } catch (error) {
    emailError.textContent = "이메일을 확인해주세요.";
    errorStyle(emailError, userID);
    pwError.textContent = "비밀번호를 확인해주세요.";
    errorStyle(pwError, userPW);
  }
}

function enterLogin(e) {
  if (e.keyCode === 13) validSignIn();
}

userID.addEventListener("focusout", (e) => {
  validEmail(e.target);
});
userPW.addEventListener("focusout", (e) => {
  validPassword(e.target);
});

signInButton.addEventListener("click", validSignIn);
document.addEventListener("keypress", enterLogin);
pwContainer.addEventListener("click", showPW);
