import { errorMessageStatus, formValidator } from "../formValidation.js";

//Dom
const $form = document.querySelector(".sign-form");
const $inputList = [...$form.querySelectorAll("input")];
const $errorMessageList = [...document.querySelectorAll(".errorMessage")];

let isFormValid = false;
let invalidKeylist = [true, true];

//focusout 콜백 함수
const handleInputFocusout = ($target, $errorMessageList) => {
  const { value, name } = $target;
  const invalidKey = formValidator.findIvnalidKey(name, value);
  errorMessageStatus($errorMessageList, $target, invalidKey);
};

//input 두 개에 대해서 focusout event가 발생하면 handleInputFocusout 실행
$inputList.forEach(($input) =>
  $input.addEventListener("focusout", function (e) {
    handleInputFocusout(e.target, $errorMessageList);
  })
);

//signin logic
$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const success = await postData();
  
  if (invalidKeylist.includes(true)) {
    //하나라도 true이면 submit 방지

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
    if (success) {
      $form.submit();
      alert("submit");
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

    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    alert("success");
    return true;
  } catch (error) {
    alert("로그인에 실패했습니다.");
    return false;
  }
};
