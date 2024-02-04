import {
  formValidator,
  errorMessageStatus,
  mockUp,
} from "../formValidation.js";

//Dom
const $form = document.querySelector(".sign-form");
const $inputList = [...$form.querySelectorAll("input")];
const $errorMessageList = [...document.querySelectorAll(".errorMessage")];

//input 두 개에 대해서 focusout event가 발생하면 handleInputFocusout 실행
$inputList.forEach(($input) =>
  $input.addEventListener("focusout", function (e) {
    handleInputFocusout(e.target, $errorMessageList);
  })
);
//focusout 콜백 함수
const handleInputFocusout = ($target, $errorMessageList) => {
  const { value, name } = $target;
  const invalidKey = formValidator.findIvnalidKey(name, value);
  errorMessageStatus($errorMessageList, $target, invalidKey);
};

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  postData();
  checkDupplicateEmail();
  if (!invalidKeylist.includes(true)) {
    let isFormValid = true;
    let invalidKeylist = [true, true, true];
    $inputList.forEach(($input, i) => {
      const { value, name } = $input;
      const invalidKey = formValidator.findIvnalidKey(name, value);
      invalidKeylist[i] = Boolean(invalidKey);

      errorMessageStatus($errorMessageList, $input, invalidKey);

      // 유효하지 않은 입력이 발견되면, isFormValid를 false로 설정합니다.
      if (invalidKey) {
        isFormValid = false;
      }
    });
  }
});

const postData = async () => {
  try {
    let emailInput = $inputList[0].value;
    let passwordInput = $inputList[1].value;

    const validateForm = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        method: "POST",
        body: {
          email: { emailInput },
          password: { passwordInput },
        },
      }
    );
    if (validateForm.status === 400) {
      throw new Error("invalidForm");
    } else if (!validateForm.ok) {
      throw new Error("neworkError");
    }
    window.location.href = "../forder/forder.js";
  } catch (error) {
    if (error === "invalidForm") alert("로그인에 실패했습니다.");
    else alert("네트워크 에러가 발생했습니다.");
  }
};

const checkDupplicateEmail = async () => {
  try {
    let emailInput = $inputList[0].value;

    const dupplicatedEmail = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        body: {
          email: { emailInput },
        },
      }
    );
    if (dupplicatedEmail.status === 409) {
      throw new Error("dupplicatecdEmail");
      //중복 에러메세지 핸들링
      //로그인 막기
    } else if (!dupplicatedEmail.ok) {
      throw new Error("networkError");
    }
  } catch (error) {
    if (error === "dupplicatedEmail") alert("중복된 이메일입니다.");
    else alert("네트워크 에러가 발생했습니다.");
  }
};
