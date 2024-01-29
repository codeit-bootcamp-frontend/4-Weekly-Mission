// 눈표시바뀌는 기능
function changeEyes(i){
  if(EYE[i].alt==='eye-off'){ // 현재 off면
    // on으로 변경
    PW_INPUT[i].type = 'text';
    EYE[i].src = './img/eye-on.svg';
    EYE[i].alt = 'eye-on';
  }else{ // 현재 on면
    // off으로 변경
    PW_INPUT[i].type = 'password';
    EYE[i].src = './img/eye-off.svg';
    EYE[i].alt = 'eye-off';
  }
}
// 눈모양 클릭
for(let i=0; i<EYE.length; i++){
  EYE[i].addEventListener("click", function() {
    changeEyes(i);
  });
}