 import pw from "./pwEvent.js";
 
 const eyeIcon = document.querySelector('.eye-one');
 const eyeIcon2 = document.querySelector('.eye-two');

 // 눈 모양 아이콘 클릭 시 비밀번호 텍스트, 패스워드 형식 변경 및 아이콘 변경

//const eyeClick = (event) => changeOnOff(event);

/*const changeOnOff = (event) => {//
  if (event.target.classList.contains('eye-off')) {
    event.target.classList.remove('eye-off');
    pw.passwordInput.type = 'password';
  } else {
    event.target.classList.add('eye-off');
    pw.passwordInput.type = 'text';
  }
}*/
function changeOnOff(inputElement, eyeIconElement) {
  if (inputElement.type === 'password') {
    inputElement.type = 'text';
    eyeIconElement.classList.add('off');
  } else {
    inputElement.type = 'password';
    eyeIconElement.classList.remove('off');
  }
}


export default{eyeIcon, eyeIcon2, changeOnOff}

