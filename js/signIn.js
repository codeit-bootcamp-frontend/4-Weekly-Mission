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
  storeAccessToken,
} from "./signUtils.js";

const signInButton = document.querySelector(".sign-in-button");

async function signInAPI(email, password) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Sign in with access token
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    const accessToken = responseData.data.accessToken;

    // Store the access token
    storeAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error during API call:", error.message);
    throw error;
  }
}

// Storing the access token in local storage

async function validSignIn() {
  try {
    const accessToken = await signInAPI(userID.value, userPW.value);

    if (accessToken) {
      storeAccessToken(accessToken);
      goUrl();
    } else {
      throw new Error("Access token not found in the response");
    }
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
