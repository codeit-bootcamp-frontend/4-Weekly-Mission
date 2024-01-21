const inputframe = document.querySelector(".input-frame");
//console.log(inputframe);

function noneemail() {
  const email = inputframe.value;
  if (!email) {
    const div = document.createElement("div");
    div.classList.add("errormsg");
    div.textContent = "이메일을 입력해 주세요.";
  }
}

inputframe.addEventListener("focusout", noneemail);
