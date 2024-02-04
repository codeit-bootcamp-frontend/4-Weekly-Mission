  
 const eyeIcon = document.querySelector('.eye');
 const eyeIcon2 = document.querySelector('.repeat');

 // 눈 모양 아이콘 클릭 시 비밀번호 텍스트, 패스워드 형식 변경 및 아이콘 변경

function changeOnOff(inputElement, eyeIconElement) {
  if (inputElement.type === 'password') {
    inputElement.type = 'text';
    eyeIconElement.classList.add('visible');
  } else {
    inputElement.type = 'password';
    eyeIconElement.classList.remove('visible');
  }
}


export default{eyeIcon, eyeIcon2, changeOnOff}

