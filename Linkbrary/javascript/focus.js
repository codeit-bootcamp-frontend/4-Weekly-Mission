// 포커스 벗어나면 스타일 바뀜
// ID_INPUT의 포커스
function focusID(){
  if(document.getElementById('idErrorMessage')){
    const errormessage = document.getElementById('idErrorMessage')
    errormessage.remove()
    ID_INPUT.style.border = '3px solid #6D6AFE'
  }
}
// PW_TEXT의 비밀번호 포커스(PW_INPUT하고 img가 들어있음)
function focusPW(){
  if(document.getElementById('pwErrorMessage')){
    const errormessage = document.getElementById('pwErrorMessage')
    errormessage.remove()
    PW_TEXT[0].style.border = '3px solid #6D6AFE'
  }
}
// PW_TEXT의 비밀번호 확인 포커스(PW_INPUT하고 img가 들어있음)
function focusPWCHECK(){
  if(document.getElementById('pwcheckErrorMessage')){
    const errormessage = document.getElementById('pwcheckErrorMessage')
    errormessage.remove()
    PW_TEXT[1].style.border = '3px solid #6D6AFE'
  }
}

// ID input 포커스
ID_INPUT.addEventListener("focusout",event=> idError(event)); // 아웃
ID_INPUT.addEventListener("focusin", focusID); // 인
// // PW input 포커스
for(let i=0; i<PW_INPUT.length; i++){
  if(i===0){
    PW_INPUT[i].addEventListener("focusout", function() { // 아웃
      pwError(event);
    });
    PW_INPUT[i].addEventListener("focusin", function(){ // 인
      focusPW;
    });
  }else{ // PWCHECK 일때
    PW_INPUT[i].addEventListener("focusout", function() { // 아웃
    pwcheckError(event);
  });
    PW_INPUT[i].addEventListener("focusin", function(){ // 인
      focusPWCHECK;
  });
  }
}