// input값 가져오기
const EYE = document.getElementById("eye");

function changeEyes(){
  if(EYE.alt==='eye-off'){ // 현재 off면
    // on으로 변경
    PW_INPUT.type = 'text';
    EYE.src = './img/eye-on.svg';
    EYE.alt = 'eye-on';
  }else{ // 현재 on면
    // off으로 변경
    PW_INPUT.type = 'password';
    EYE.src = './img/eye-off.svg';
    EYE.alt = 'eye-off';
  }
}

// 클릭
EYE.addEventListener("click", changeEyes);