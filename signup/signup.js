import { formValidator, errorMessageStatus } from "../formValidation.js";

//Dom
const $form = document.querySelector(".sign-form");
const $inputList = [...$form.querySelectorAll("input")];
const $errorMessageList = [...document.querySelectorAll(".errorMessage")];

let isFormValid = true;
let invalidKeylist = [true, true, true];
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

//singup logic
$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const dataSuccess = await postData();

  if (!invalidKeylist.includes(true)) {
    $inputList.forEach(($input, i) => {
      const { value, name } = $input;
      const invalidKey = formValidator.findIvnalidKey(name, value);
      invalidKeylist[i] = Boolean(invalidKey);

      errorMessageStatus($errorMessageList, $input, invalidKey);

      // 유효하지 않은 입력이 발견되면, isFormValid를 false로 설정
      if (invalidKey) {
        isFormValid = false;
      }
    });
  } else {
    if (dataSuccess && okToSubmit) {
      $form.submit();
    }
  }
});

//check email
//조금 불필요한 코드인 것 같기도 한데... 혹시 이 코드를 다른 곳에 합쳐서 없애버리는 게 더 나을까요?
let okToSubmit = false;
$inputList[0].addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const emailOk = await checkDuplicateEmail();
    if (emailOk) {
      $errorMessageList[0].textContent = "";
      okToSubmit = true;
    }
  }
});

const postData = async () => {
  try {
    let emailInput = $inputList[0].value;
    let passwordInput = $inputList[1].value;

    const data = JSON.stringify({
      email: emailInput,
      password: passwordInput,
    });

    const validateForm = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (validateForm.status === 400) {
      throw new Error("invalidForm");
    } else if (!validateForm.ok) {
      throw new Error("neworkError");
    }
    // alert("success");
    // const responsedData = validateForm.data;
  } catch (error) {
    if (error.message === "invalidForm") alert("회원가입에 실패했습니다.");
    else alert("네트워크 에러가 발생했습니다.");
  }
};

const checkDuplicateEmail = async () => {
  try {
    let emailInput = $inputList[0].value;
    const data = JSON.stringify({ email: emailInput });
    const dupplicatedEmail = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (dupplicatedEmail.status === 409) {
      //중복 에러메세지 핸들링
      //(굳이 여기서 하는 이유는 에러 타입이 409일때만 동작해야해서 네트워크 에러가 발생할 때도 있으니 check email에서 안 함)

      $errorMessageList[0].textContent = "중복된 이메일입니다.";

      throw new Error("duplicatecdEmail");
    } else if (!dupplicatedEmail.ok) {
      throw new Error("networkError");
    }
  } catch (error) {
    if (error.message === "duplicatecdEmail") {
      alert("중복된 이메일입니다.");
    } else {
      alert("네트워크 에러가 발생했습니다.");
    }
  }
};
