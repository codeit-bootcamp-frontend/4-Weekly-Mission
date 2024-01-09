import  {vaildEmail, vaildPW, vaildPW2, focusOut} from "./vaild.js"
import { userInfo } from "./userInfo.js";
import { pwInputTypeChange } from "./pwInputType.js";

window.onload = function(){
    const emailInput = document.getElementById("emailInput")
    const pwInput = document.getElementById("pwInput");
    const pwInput2 = document.getElementById("pwInput2");
    const form = document.querySelector("form");
    const eyeIcon = document.querySelector(".eye1");
    const eyeIcon2 = document.querySelector(".eye2");
    const emailError = document.querySelector(".emailError");
    const pwError = document.querySelector(".pwError");
    const pw2Error = document.querySelector(".pw1Error");
    const regexEamil = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]'); // 이메일 정규 표현식
    const regexEng = new RegExp('[a-zA-Z]'); // 영문(대,소문자)
    const regexNum = new RegExp('[0-9]') // 숫자

    // 회원 가입 함수
    function register(){
        // 유효성 검사(정규 표현식)
        if(!regexEamil.test(emailInput.value)){
            emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
        }
        else if(!regexEng.test(pwInput.value) || !regexNum.test(pwInput.value) || pwInput.value.length < 8 || 
        !regexEng.test(pwInput2.value) || !regexNum.test(pwInput2.value) || pwInput2.value.length < 8){
            pwError.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        }
        // 이메일 중복확인, 패스워드 일치 여부
        else if(userInfo.email === emailInput.value){
            emailError.innerHTML = "이미 사용 중인 이메일입니다.";
        }
        else if(pwInput.value !== pwInput2.value){
            pw2Error.innerHTML = "비밀번호가 일치하지 않아요.";
            
        }else{
            location.href = '/folder.html';
        }
    }

    form.addEventListener("submit", () =>{
        event.preventDefault(); // 페이지 리로드 방지
        register();
    });

    // 엔터 키 프레스 함수
    function enter() {
        if (window.event.keyCode == 13){ // 엔터 키
            register();
        }
    }

    // 포커스 아웃 이벤트
    focusOut(emailInput, emailError, vaildEmail);
    focusOut(pwInput, pwError, vaildPW);
    focusOut(pwInput2, pw2Error, vaildPW2);

    // 비밀번호 인풋 타입 변경, 아이콘 변경
    pwInputTypeChange(eyeIcon, pwInput)
    pwInputTypeChange(eyeIcon2, pwInput2)
}
        