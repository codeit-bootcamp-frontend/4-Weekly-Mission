const userID = document.querySelector("#email");
const userPW = document.querySelector("#password");
const emailError = document.querySelector(".emailError");
const pwError = document.querySelector(".pwError");
const signInButton = document.querySelector(".sign-in-button");
const pwContainer = document.querySelector(".pw-container");

function errorStyle(textStyle, boxStyle) {
  textStyle.style.color = "red";
  boxStyle.style.border = "1px solid red";
}

function clearStyle(textStyle, boxStyle) {
  textStyle.textContent = "";
  boxStyle.style.border = "";
}

function validEmail(obj) {
  if (obj.value === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    errorStyle(emailError, userID);
  } else if (validEmailCheck(obj) == false) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    errorStyle(emailError, userID);
  } else {
    clearStyle(emailError, userID);
  }
}

function validPassword(obj) {
  if (obj.value === "") {
    pwError.textContent = "비밀번호를 입력해주세요.";
    errorStyle(pwError, userPW);
  } else if (validPasswordCheck(obj) == false) {
    pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    errorStyle(pwError, userPW);
  } else {
    clearStyle(pwError, userPW);
  }
}

function goUrl() {
  let link = "folder/";
  location.href = link;
}

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

function validEmailCheck(obj) {
  let pattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return !!obj.value.match(pattern);
}

function validPasswordCheck(obj) {
  let pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return !!obj.value.match(pattern);
}

function showPW(e) {
  const lineThrough = this.querySelector(".line-through");
  const pwInput = this.querySelector("#password");
  if (e.target.classList.contains("eye-PW"))
    if (pwInput.type === "password") {
      pwInput.type = "text";
      lineThrough.style.display = "block";
    } else {
      pwInput.type = "password";
      lineThrough.style.display = "none";
    }
}

userID.addEventListener("focusout", (e) => {
  validEmail(e.target);
});
userPW.addEventListener("focusout", (e) => {
  validPassword(e.target);
});
if (signInButton) {
  signInButton.addEventListener("click", validSignIn);
  document.addEventListener("keypress", enterLogin);
}
pwContainer.addEventListener("click", showPW);

export {
  userID,
  userPW,
  emailError,
  pwError,
  errorStyle,
  clearStyle,
  validEmailCheck,
  goUrl,
  validPasswordCheck,
  showPW,
};
