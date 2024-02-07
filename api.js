// import { printDuplicationEmailError } from "./signup.js";

export async function handleSignIn(emailInput, passwordInput) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });
    const result = await response.json();
    if (response.status === 200) {
      location.href = "./folder.html";
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
    }
  } catch (err) {
    console.error("오류 발생:", err.message);
  }
}

export async function requestEmailCheckApi(emailInput, passwordInput) {
  try {
    const responseCheckEmail = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      }
    );
    const checkEmailResult = await responseCheckEmail.json();
    if (checkEmailResult.data.isUsableNickname === true) {
      const isSuccessSignup = requestSignupApi(emailInput, passwordInput);
      return isSuccessSignup;
    }
    if (checkEmailResult.status === 409) {
      console.error("[ERROR] 이메일 중복 에러");
    }
  } catch (err) {}
}

export async function requestSignupApi(emailInput, passwordInput) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });
    const result = await response.json();
    if (response.status === 200) {
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      return true;
    }
  } catch (err) {}
}
