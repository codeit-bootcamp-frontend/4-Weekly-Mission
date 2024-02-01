import {
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_EXISTING_EMAIL,
  ERROR_MESSAGE_INCONSISTENT_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_INVALID_PASSWORD,
} from "./constant.js";
import {
  isFilledInput,
  isMatchWithPassword,
  isValidEmailForm,
  isValidPasswordForm,
  showErrorMessage,
  toggleViewPassword,
} from "./authFunctions.js";

const form = document.querySelector("form");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPasswordCheck = document.querySelector("#password_check");
const btnSignupSubmit = document.querySelector("#btn_signup_submit");

const btnEyes = document.querySelectorAll(".btn_eye");

// localStorage에 accessToken이 존재할 경우 '/folder'로 이동
if (localStorage.getItem("accessToken")) {
  location.href = "folder.html";
}

const checkEmailIsValid = (e) => {
  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidEmailForm(e.target);

  if (!isFilled) {
    showErrorMessage(true, e.target, "email", ERROR_MESSAGE_EMPTY_EMAIL);
    return;
  } else if (!isValidForm) {
    showErrorMessage(true, e.target, "email", ERROR_MESSAGE_INVALID_EMAIL);
    return;
  }
  // 이메일 인풋이 채워져있고, 올바른 형식일 때, 중복 이메일인지 확인하는 로직
  // 재사용하지 않으므로 즉시 실행 함수로 처리
  (async function requestCheckEmailApi() {
    const emailBody = {
      email: e.target.value,
    };
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailBody),
        },
      );
      if (response.ok) {
        const emailForCheck = await response.json();
        const isUsableNickname = emailForCheck["data"]["isUsableNickname"];

        if (isUsableNickname) {
          showErrorMessage(false, e.target, "email");
        }
      } else if (response.status === 409) {
        throw new Error("Email Conflict");
      } else {
        throw new Error("Other Error");
      }
    } catch (error) {
      console.log(error.message);
      if (error.message === "Email Conflict") {
        showErrorMessage(true, e.target, "email", ERROR_MESSAGE_EXISTING_EMAIL);
      }
    }
  })();
};

const checkPasswordIsValid = (e) => {
  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidPasswordForm(e.target);

  if (!isFilled) {
    showErrorMessage(true, e.target, "password", ERROR_MESSAGE_EMPTY_PASSWORD);
    return;
  } else if (!isValidForm) {
    showErrorMessage(
      true,
      e.target,
      "password",
      ERROR_MESSAGE_INVALID_PASSWORD,
    );
    return;
  }

  showErrorMessage(false, e.target, "password");
};

const checkPasswordCheckIsValid = (e) => {
  let isValid = false;

  const isFilled = isFilledInput(e.target);
  const isMatched = isMatchWithPassword(e.target, inputPassword);

  if (!isFilled) {
    showErrorMessage(true, e.target, "password", ERROR_MESSAGE_EMPTY_PASSWORD);
    return isValid;
  }
  if (!isMatched) {
    showErrorMessage(
      true,
      e.target,
      "password",
      ERROR_MESSAGE_INCONSISTENT_PASSWORD,
    );
    return isValid;
  }
  showErrorMessage(false, e.target, "password");
  isValid = true;

  return isValid;
};

const handleSignUp = (e) => {
  e.preventDefault();

  const isValidPasswordCheck = checkPasswordCheckIsValid({
    target: inputPasswordCheck,
  });

  // email과 password에 대한 에러는 API 단에서 검증해주므로, password 확인만 검증해줌.
  if (isValidPasswordCheck) {
    (async function requestSignUpApi() {
      try {
        const registrationBody = {
          email: inputEmail.value,
          password: inputPassword.value,
        };

        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sign-up",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationBody),
          },
        );
        if (response.ok) {
          location.href = "folder.html";
        } else if (response.status === 400) {
          throw new Error("SignUp Error");
        } else {
          throw new Error("Other Error");
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }
};

// 에러 표시 이벤트
inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);
inputPasswordCheck.addEventListener("focusout", checkPasswordCheckIsValid);

// 폼 제출 이벤트
btnSignupSubmit.addEventListener("click", handleSignUp);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSignUp(e);
  }
});

// 비밀번호 노출/가림 이벤트
btnEyes.forEach((btnEye) => {
  btnEye.addEventListener("click", function (e) {
    toggleViewPassword(e.target);
  });
});
