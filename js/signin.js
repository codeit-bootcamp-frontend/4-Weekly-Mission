import  {vaildEmail, vaildPW, focusOut} from "./vaild.js" 
import { userInfo } from "./user-info.js";
import { pwInputTypeChange } from "./pw-input-type.js";

window.onload = function(){
    const emailInput = document.getElementById("emailInput")
    const pwInput = document.getElementById("pwInput");
    const form = document.querySelector("form");
    const emailError = document.querySelector(".emailError");
    const pwError = document.querySelector(".pwError");
    const pwEyeIcon = document.querySelector(".fa-solid");
    
    // 로그인 함수
    function login(){ 
        if(emailInput.value === userInfo.email && pwInput.value === userInfo.pw){
            location.href = '/folder.html';
        }else{
            emailError.textContent = "이메일을 확인해 주세요.";
            pwError.textContent = "비밀번호를 확인해 주세요.";
        }
    }

    form.addEventListener("submit", () =>{
        event.preventDefault(); // 페이지 리로드 방지
        login();
    });

    // 엔터 키 프레스 함수
    function enter() {
        if (window.event.keyCode == 13){ // 엔터 키
            login();
        }
    }

    // 포커스 아웃 이벤트
    focusOut(emailInput, emailError, vaildEmail, false);
    focusOut(pwInput, pwError, vaildPW, false);

    // 비밀번호 인풋 타입 변경, 아이콘 변경
    pwInputTypeChange(pwEyeIcon, pwInput);
}
    