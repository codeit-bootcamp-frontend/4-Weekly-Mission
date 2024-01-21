const $emailInput = document.querySelector("#emailInput");

$emailInput.addEventListener("focusout", function (e) {
  if ($emailInput.value === "") {
    console.log("이메일을 입력해주세요.");
    return;
  }
  if ($emailInput.value === "1") {
    console.log("이1.");
  } else {
    console.log("2.");
  }
});
