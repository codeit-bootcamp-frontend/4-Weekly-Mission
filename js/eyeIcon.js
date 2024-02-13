

// 마우스로 눈아이콘 클릭시 클릭한 이미지 & 인풋 타입 변경
const eyeIconChanges = document.querySelectorAll(".eye-icon-change");
for (let item of eyeIconChanges){
  item.addEventListener("click", eyeIconClickEvent);
}

function eyeIconClickEvent (e) {
  if (e.target.parentElement.previousElementSibling.type === "password") {
    e.target.src = "./image/eye-on.png";
    e.target.parentElement.previousElementSibling.type = "text";
    return;
  }
  e.target.src = "./image/eye-off.png";
  e.target.parentElement.previousElementSibling.type = "password";
}