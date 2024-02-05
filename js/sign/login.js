import { ERROR_MESSAGE } from "../../constant.js";
import { inputAddNode } from "../node.js";
import { pwdInput, pwdEyeIcon} from "../declaration.js";

// enter키 입력으로 로그인 실행 
export function EnterLogin(key, func) {
  if(key === 'Enter') {
    func();
  }
}

// 에러 메세지 출력 함수
export function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  switch(errorCase) {
    case "NoEmail":
      inputAddNode({type:'email', message:ERROR_MESSAGE.email.empty, errorCase:errorCase});
      break;
    case "wrongEmail":
      inputAddNode({type:'email', message: ERROR_MESSAGE.email.invalid, errorCase:errorCase });
      break;
    case "inUseEmail":
      inputAddNode({ type:'email', message: ERROR_MESSAGE.email.inUse, errorCase:errorCase });
      break;
    case "NoPwd" :
      inputAddNode({ type:'password', message:ERROR_MESSAGE.password.empty, errorCase:errorCase });
      break;
    case "wrongPwd" :
      inputAddNode({ type:'password', message:ERROR_MESSAGE.password.invalid, errorCase:errorCase });
      break;
    case "noMatchPwd" : 
      inputAddNode({ type:"password2", message:ERROR_MESSAGE.password.recheck, errorCase:errorCase });
      break;
    case "Other": 
      inputAddNode({ type:'email', message:ERROR_MESSAGE.email.check, errorCase:errorCase });
      inputAddNode({ type:'password', message:ERROR_MESSAGE.password.check, errorCase:errorCase });
      break;
  }
 }


// password input 눈모양 클릭 실행 함수
export function EyePwd(EyeStatus) {
  EyeStatus.classList.contains('off') ? (
    pwdEyeIcon.setAttribute('src',"assets/icons/eye_off.png"),
    pwdInput.setAttribute('type', 'password')
  ):(
    pwdEyeIcon.setAttribute('src',"assets/icons/eye_on.png"),
    pwdInput.setAttribute('type', 'text')
  )
}