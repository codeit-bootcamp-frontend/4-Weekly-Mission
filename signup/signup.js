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
