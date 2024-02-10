import errMsg from "../../errMsg/errMsg.js";

const selector = document.querySelector("#email");

//이메일 유효성 체크
const isEmailVaild = (email) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(email);
};

//이메일 유효성 검사(로그인)
const validateSigninEmailInput = (e) => {
  if (isEmpty(e)) {
    errMsg(e, "이메일을 입력해 주세요.");
  } else if (isNotEmail(e)) {
    errMsg(e, "올바른 이메일 주소가 아닙니다.");
  }
};

//이메일 유효성 검사(회원가입)
const validateSignupEmailInput = async (e) => {
  if (isEmpty(e)) {
    errMsg(e, "이메일을 입력해 주세요.");
  } else {
    const emailErrMsg = await emailValidationMsgFromAPI(e);
    if (emailErrMsg) {
      errMsg(e, emailErrMsg);
    }
  }
};

const isNotEmail = (e) => {
  if (!isEmailVaild(e.value)) {
    return true;
  } else {
    return false;
  }
};

const isEmpty = (e) => {
  if (!e.value) {
    return true;
  } else {
    return false;
  }
};

async function emailValidationMsgFromAPI(e) {
  try {
    const postRequestOfCodeitAPI = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.value,
        }),
      }
    );

    if (!postRequestOfCodeitAPI.ok) {
      const result = await postRequestOfCodeitAPI.json();
      return result.error.message;
    }
  } catch (error) {
    console.error(error);
  }
}

export default { validateSigninEmailInput, validateSignupEmailInput, selector };
