import {
  formValidator,
  errorMessageStatus,
  handleInputFocusout,
  mockUp,
} from "../forValidation.js";

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

$form.addEventListener("submit", function (e) {
  let isFormValid = true;
  let invalidKeylist = [true, true, true];
  let counter = 0;
  $inputList.forEach(($input) => {
    const { value, name } = $input;
    const invalidKey = formValidator.findIvnalidKey(name, value);
    invalidKeylist[counter] = Boolean(invalidKey);

    counter++;

    errorMessageStatus($errorMessageList, $input, invalidKey);

    // 유효하지 않은 입력이 발견되면, isFormValid를 false로 설정합니다.
    if (invalidKey) {
      isFormValid = false;
    }
  });

  // 폼이 유효하지 않으면 제출을 방지합니다.
  if (invalidKeylist.includes(true)) {
    e.preventDefault();
  }
});
