import {
  mockUp,
  handleInputFocusout,
  errorMessageStatus,
  formValidator,
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

//주어진 아이디, 비번 아니면 로그인 불가
$form.addEventListener("submit", function (e) {
  if (
    !mockUp.rightEmail($inputList[0].value) ||
    !mockUp.rightPassword($inputList[1].value)
  ) {
    e.preventDefault();
  }
});
