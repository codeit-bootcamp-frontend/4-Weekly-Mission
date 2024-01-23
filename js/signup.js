import  {vaildEmail, vaildPW, vaildConfirmPW, focusOut} from "./vaild.js" 
import { API_PATH_SIGNUP, API_PATH_CHECK_EMAIL } from "./api-path.js";
import { pwInputTypeChange } from "./pw-input-type.js";
import { regexEamil, regexPassword } from "./regExp.js";

window.onload = function(){
    const emailInput = document.querySelector(".signup--input--email")
    const pwInput = document.querySelector(".signup--input--password");
    const pwConfirmInput = document.querySelector(".signup--input--password--confirm");
    const form = document.querySelector(".signup__form");
    const pwEyeIcon = document.querySelector(".eye");
    const pwConfirmEyeIcon = document.querySelector(".eye--confirm");
    const emailError = document.querySelector(".signup__email--error");
    const pwError = document.querySelector(".signup__password--error");
    const pwConfirmError = document.querySelector(".signup__password--confirm--error");

    // 이메일 중복확인 => 회원가입
    async function registerEmailCheck(){
        if(!regexEamil.test(emailInput.value)){
            emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        }
        else if(!regexPassword.test(pwInput.value) || !regexPassword.test(pwConfirmInput.value)){
            pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        }
        else if(pwInput.value !== pwConfirmInput.value){
            pwConfirmError.textContent = "비밀번호가 일치하지 않아요.";
            
        }
        const eamilCheck = {
            email: emailInput.value
        }
        try{
            const response = await fetch(API_PATH_CHECK_EMAIL, {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eamilCheck)
            })
            const result = await response.json();
            if(response.ok){
              register();
            }else{
                emailError.style.display = "block";
                emailError.textContent = "이미 사용 중인 이메일입니다.";
                console.error(result.error);
            }
        } catch(error){
            return console.error(result.error);
        }
    }
    // 회원 가입
    async function register(){
        try{
            const userInfo = {
                email: emailInput.value,
                password: pwInput.value
            }
            const response = await fetch(API_PATH_SIGNUP, {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
            const result = await response.json();
            if(response.ok){
                location.href = "./folder.html";
            }else{
                console.error(result.error);
            }
        }catch(error){
            return console.log(error);
        } 
    }

    form.addEventListener("submit", (e) =>{
        e.preventDefault(); // 페이지 리로드 방지
        registerEmailCheck();
    });

    // 포커스 아웃 이벤트
    focusOut(emailInput, emailError, vaildEmail);
    focusOut(pwInput, pwError, vaildPW);
    focusOut(pwConfirmInput, pwConfirmError, vaildConfirmPW);

    // 비밀번호 인풋 타입 변경, 아이콘 변경
    pwInputTypeChange(pwEyeIcon, pwInput)
    pwInputTypeChange(pwConfirmEyeIcon, pwConfirmInput)
}
        