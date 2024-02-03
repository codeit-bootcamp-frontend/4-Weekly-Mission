import { urls } from "./url.js";
import { superUser } from "../static.js";

// 로그인 요청
export async function requestLogin() {
  const response = await postRequest(urls.signin, superUser);
  const signinSuccess = await responseSignin(response);
  await saveAccessToken(signinSuccess);
}

//회원 가입 요청

// 중복 요청
export async function requestAleadyUse(emailElement) {
  const objectForJSON = {};
  const validateAleadyUse = emailElement.value;
  objectForJSON.email = validateAleadyUse;

  const response = await postRequest(urls.aleadyUse, objectForJSON);
  const isAleadyUse = await responseAleadyUse(response);
  return isAleadyUse;
}

async function postRequest(url, objectForBody) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectForBody),
  });
  return response;
}

async function responseSignin(response) {
  if (response.status === 200) {
    return response.text();
  } 

  console.error('서버 응답이 성공적이지 않습니다. 상태 코드:', response.status);
}

async function responseAleadyUse(response) {
  if (response.status === 409) {
    //loginDuplication();
    return true;
  }
  return false;
}

async function saveAccessToken(result) {
  const jsonToObject = JSON.parse(result);
  const accessToken = jsonToObject.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
}

async function requestSignUp() {
  const objectForJSON = {};
  const requestEmail = email.value;
  const requestpassword = password.value;
  objectForJSON.email = requestEmail;
  objectForJSON.password = requestpassword;

  fetch(urls.signup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectForJSON),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.text();
    } else {
      aleadyUse();
    }
  })
  .then((result) => {
    const jsonToObject = JSON.parse(result);
    const accessToken = jsonToObject.data.accessToken;
    localStorage.setItem("accessToken", accessToken);

    window.location.replace("../folder");
  })
  .catch((error) => {
    console.error('fetch 요청 실패:', error);
  });
}