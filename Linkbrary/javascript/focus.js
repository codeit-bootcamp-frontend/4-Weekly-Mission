// 포커스 벗어나면 스타일 바뀜
// ID_INPUT의 포커스
function focusID(){
  if(document.getElementById('idErrorMessage')){
    const errormessage = document.getElementById('idErrorMessage')
    errormessage.remove()
    ID_INPUT.style.border = '3px solid #6D6AFE'
  }
}
// PW_TEXT의 포커스(PW_INPUT하고 img가 들어있음)
function focusPW(){
  if(document.getElementById('pwErrorMessage')){
    const errormessage = document.getElementById('pwErrorMessage')
    errormessage.remove()
    PW_TEXT.style.border = '3px solid #6D6AFE'
  }
}

// input 포커스
ID_INPUT.addEventListener("focusout",event=> idcheck(event));
ID_INPUT.addEventListener("focusin", focusID);
PW_INPUT[0].addEventListener("focusout",event=> pwcheck(event));
PW_INPUT[0].addEventListener("focusin", focusPW);