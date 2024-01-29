import  {vaildEmail, vaildPW, vaildConfirmPW, focusOut} from "./vaild.js" 
import { API_PATH_SIGNUP, API_PATH_CHECK_EMAIL } from "./api-path.js";
import { pwInputTypeChange } from "./pw-input-type.js";

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
    async function register(){
        try{
            await vaildEmail(emailInput, emailError);
            await vaildPW(pwInput, pwError);
            await vaildConfirmPW(pwConfirmInput, pwConfirmError);
            const eamilCheck = {
                email: emailInput.value
            }
            const response = await fetch(API_PATH_CHECK_EMAIL, {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eamilCheck)
            })
            const result = await response.json();
            if(response.ok){
                // 이메일 중복확인 에러 발생하지 않을 시 => 회원가입 로직 실행
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
                    // 회원가입 에러 발생하지 않을 시
                    alert("회원가입 성공 - 로그인 페이지로 이동합니다.");
                    location.href = "./signin.html";
                }else{
                    console.error(result.error);
                }
            }else{
                emailError.style.display = "block";
                emailError.textContent = "이미 사용 중인 이메일입니다.";
                console.error(result.error);
            }
        } catch(error){
            return alert(error);
        }
    }

    form.addEventListener("submit", (e) =>{
        e.preventDefault(); // 페이지 리로드 방지
        register();
    });
    // 포커스 아웃 이벤트
    focusOut(emailInput, emailError, vaildEmail);
    focusOut(pwInput, pwError, vaildPW);
    focusOut(pwConfirmInput, pwConfirmError, vaildConfirmPW);

    // 비밀번호 인풋 타입 변경, 아이콘 변경
    pwInputTypeChange(pwEyeIcon, pwInput)
    pwInputTypeChange(pwConfirmEyeIcon, pwConfirmInput)
}
        
