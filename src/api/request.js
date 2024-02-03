import { urls } from "./url.js";
import { superUser } from "../static.js";

export async function requestLogin() {
  const response = await postRequest(urls.signin, superUser);
  const signinResult = await responseSignin(response);
  await saveAccessToken(signinResult);
}

export async function postRequest(url, objectForBody) {
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

async function saveAccessToken(result) {
  const jsonToObject = JSON.parse(result);
  const accessToken = jsonToObject.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
}

async function aleadyUse() {
  const objectForJSON = {};
  const validateAleadyUse = email.value;
  objectForJSON.email = validateAleadyUse;
  requestAleadyUse(objectForJSON);
}

function requestAleadyUse(objectForJSON) {
  fetch(urls.aleadyUse, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectForJSON),
  })
  .then((response) => {
    if (response.status === 409) {
      loginDuplication();
      console.log(error.state)
    } else {
      //error.removeErrorElement(".input-form-email");
    }
  })
  .catch((error) => {
    // fetch 요청 자체가 실패한 경우에 대한 처리
    console.error('fetch 요청 실패:', error);
  });
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