import init from "../init/init.js";
import email from "../input/email/emailValidation.js";
import password from "../input/password/passwordValidtaion.js";
import errMsg from "../errMsg/errMsg.js";
import tokenSetting from "../token/tokenSetting.js";

const btn = document.querySelector("#loginBtn");

async function handleSuccessfulLoginAndRedirect() {
  try {
    const emailInput = email.selector.value;
    const passwordInput = password.selector.value;
    const postRequestOfCodeitAPI = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      }
    );

    const result = await postRequestOfCodeitAPI.json();
    const accessTokenData = result.data.accessToken;

    //유저 토큰 로컬 스토리지 저장
    tokenSetting.saveToLocalStorage(emailInput, accessTokenData);

    return "folder.html";
  } catch (error) {
    email.selector.classList.add("invalid");
    password.selector.classList.add("invalid");
    errMsg(email.selector, "이메일을 확인해 주세요.");
    errMsg(password.selector, "비밀번호를 확인해 주세요.");
  }
}

function validation(e) {
  e.preventDefault(); //submit방지
  //초기화
  init(email.selector);
  init(password.selector);

  handleSuccessfulLoginAndRedirect();
}

export default { btn, validation };
