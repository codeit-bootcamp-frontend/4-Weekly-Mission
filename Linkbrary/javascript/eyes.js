// 눈표시바뀌는 기능
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

// 눈모양 클릭
EYE.addEventListener("click", changeEyes);