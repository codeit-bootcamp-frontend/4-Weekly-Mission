// 포커스 벗어나면 스타일 바뀜
function focus(errorId, inputDom){
  if(document.getElementById(errorId)){
    const errormessage = document.getElementById(errorId)
    errormessage.remove()
    inputDom.style.border = '3px solid #6D6AFE'
  }
}
// 아래껄 위와 같이 공통화
// ID_INPUT의 포커스
// function focusID(){
//   if(document.getElementById('idErrorMessage')){
//     const errormessage = document.getElementById('idErrorMessage')
//     errormessage.remove()
//     ID_INPUT.style.border = '3px solid #6D6AFE'
//   }
// }
// // PW_TEXT의 비밀번호 포커스(PW_INPUT하고 img가 들어있음)
// function focusPW(){
//   if(document.getElementById('pwErrorMessage')){
//     const errormessage = document.getElementById('pwErrorMessage')
//     errormessage.remove()
//     PW_TEXT.style.border = '3px solid #6D6AFE'
//   }
// }
// // PWCHECK_TEXT의 비밀번호 확인 포커스(PW_INPUT하고 img가 들어있음)
// function focusPWCHECK(){
//   if(document.getElementById('pwcheckErrorMessage')){
//     const errormessage = document.getElementById('pwcheckErrorMessage')
//     errormessage.remove()
//     PWCHECK_TEXT.style.border = '3px solid #6D6AFE'
//   }
// }

// ID input 포커스
ID_INPUT.addEventListener("focusout",event=> idError(event)); // 아웃
ID_INPUT.addEventListener("focusin", ()=> focus('idErrorMessage',ID_INPUT)); // 인
// // PW input 포커스
for(let i=0; i<PW_INPUT.length; i++){
  if(i===0){
    PW_INPUT[i].addEventListener("focusout", function() { // 아웃
      pwError(event);
    });
    PW_INPUT[i].addEventListener("focusin", function(){ // 인
      focus('pwErrorMessage', PW_TEXT);
    });
  }else{ // PWCHECK 일때
    PW_INPUT[i].addEventListener("focusout", function() { // 아웃
    pwcheckError(event);
  });
    PW_INPUT[i].addEventListener("focusin", function(){ // 인
      focus('pwcheckErrorMessage', PWCHECK_TEXT);
  });
  }
}