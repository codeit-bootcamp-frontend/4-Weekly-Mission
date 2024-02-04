const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";
const API = "https://bootcamp-api.codeit.kr/api";

function emailFormatCheck(email) {
  var regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email != "" && email != "undefined" && regex.test(email);
}

function passwordFormatCheck(password) {
  var regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return regex.test(password);
}

function togglePasswordEye(passwordInput, toggleButton) {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggleButton.src =
    type === "password" ? "./images/eye-off.svg" : "./images/eye.svg";
}

function errorMessageVisibleAndTextChange(errorQuerySelector, message) {
  errorQuerySelector.style.visibility = "visible";
  errorQuerySelector.textContent = message;
}

function errorMessageHidden(errorQuerySelector) {
  errorQuerySelector.style.visibility = "hidden";
}

async function emailIsValid(signupInfo) {
  try {
    const response = await fetch(`${API}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: signupInfo.email }),
    });

    const data = await response.json();

    if (response.ok) {
      let useableEmail = data.data.isUsableNickname;
      emailIsValid = true;
      if (useableEmail) {
        await signInFetch(signupInfo);
      }
    } else {
      errorMessageVisibleAndTextChange(
        document.getElementById("emailErrorBox"),
        "이미 가입된 이메일입니다."
      );
      throw new Error(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function signInFetch(loginInfo) {
  try {
    const response = await fetch(`${API}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("accessToken", data.data.accessToken);
      window.location.href = "success.html";
      return data;
    } else {
      errorMessageVisibleAndTextChange(
        document.getElementById("emailErrorBox"),
        "비밀번호 또는 아이디를 체크해주세요."
      );
      errorMessageVisibleAndTextChange(
        document.getElementById("passwordErrorBox"),
        "비밀번호 또는 아이디를 체크해주세요."
      );
      throw new Error(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const isPasswordAndEmailMatch = (email, password) => {
  return USER_EMAIL === email && USER_PASSWORD === password;
};

export {
  emailFormatCheck,
  passwordFormatCheck,
  togglePasswordEye,
  errorMessageVisibleAndTextChange,
  errorMessageHidden,
  isPasswordAndEmailMatch,
  signInFetch,
  emailIsValid,
  USER_EMAIL,
};
