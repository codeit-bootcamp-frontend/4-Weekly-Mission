import  {vaildEmail, vaildPW, focusOut} from "../utils/vaild.js" 
import { API_PATH_SIGNIN } from "../services/api-path.js";
import { pwInputTypeChange } from "../utils/pw-input-type.js";
import { authCheck } from "../utils/auth-check.js";

window.onload = function(){
    authCheck(); // 로그인 상태 체크
    const emailInput = document.querySelector(".signin--input--email")
    const pwInput = document.querySelector(".signin--input--password");
    const form = document.querySelector(".sigin__form");
    const emailError = document.querySelector(".signin__email--error");
    const pwError = document.querySelector(".signin__password--error");
    const pwEyeIcon = document.querySelector(".fa-solid");
    
    // 로그인 함수
    async function login(){
        const userInfo = {
            email: emailInput.value,
            password: pwInput.value
        }
        try{
            const response = await fetch(API_PATH_SIGNIN, {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo)
            })
            const result = await response.json();
            if(response.ok){
                localStorage.setItem("accessToken", result.data.accessToken);
                localStorage.setItem("refreshToken", result.data.refreshToken);
                location.href = "./folder.html";
            }else{
                emailError.style.display = "block";
                pwError.style.display = "block";
                emailError.textContent = "이메일을 확인해 주세요.";
                pwError.textContent = "비밀번호를 확인해 주세요.";
                console.error(result.error);
            }
        } catch(error){
            return console.log(error);
        }
    }

    form.addEventListener("submit", (e) =>{
        e.preventDefault(); // 페이지 리로드 방지
        login();
    });

    // 포커스 아웃 이벤트
    focusOut(emailInput, emailError, vaildEmail);
    focusOut(pwInput, pwError, vaildPW, false);

    // 비밀번호 인풋 타입 변경, 아이콘 변경
    pwInputTypeChange(pwEyeIcon, pwInput);
}