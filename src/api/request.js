// 로그인 요청
export async function requestLogin(emailElement, passwordElement, signinUrl) {
  const objectForJSON =  makeObjectForJSON(emailElement, passwordElement);

  const response = await postRequest(signinUrl, objectForJSON);
  const signinSuccess = await responseSign(response);
  await saveAccessToken(signinSuccess);
}

//회원 가입 요청
export async function requestSignup(emailElement, passwordElement, signupUrl) {
  const objectForJSON =  makeObjectForJSON(emailElement, passwordElement);

  const response = await postRequest(signupUrl, objectForJSON);
  const signupSuccess = await responseSign(response);
  await saveAccessToken(signupSuccess);
}

// 중복 요청
export async function requestAleadyUse(emailElement, aleadyUseUrl) {
  const objectForJSON =  makeObjectForJSON(emailElement, null);

  const response = await postRequest(aleadyUseUrl, objectForJSON);
  const isAleadyUse = await responseAleadyUse(response);
  return isAleadyUse;
}

function makeObjectForJSON(emailElement, passwordElement) {
  const objectForJSON = {};
  const requestEmail = emailElement.value;
  objectForJSON.email = requestEmail;

  if(!passwordElement) { // 이메일만 있을 경우, 이메일 객체만 담고 넘긴다.
    return objectForJSON;
  }

  const requestpassword = passwordElement.value;
  objectForJSON.password = requestpassword;
  return objectForJSON;
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

async function responseSign(response) {
  if (response.status === 200) {
    return response.text();
  } 

  console.error('서버 응답이 성공적이지 않습니다. 상태 코드:', response.status);
}

async function responseAleadyUse(response) {
  if (response.status === 409) {
    return true;
  }
  return false;
}

async function saveAccessToken(result) {
  const jsonToObject = JSON.parse(result);
  const accessToken = jsonToObject.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
}