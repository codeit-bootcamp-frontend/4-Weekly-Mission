import { REGEXP_EMAIL, REGEXP_PASSWORD} from "./regExp.js";

 function vaildEmail(emailInput, emailError) {
    if(!emailInput.value){
        emailError.style.display = "block";
        emailError.textContent = "이메일을 입력해 주세요.";
        throw new Error("이메일을 입력해주세요!");
    }
    else if(!REGEXP_EMAIL.test(emailInput.value)){
        emailError.style.display = "block";
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        throw new Error("이메일 주소 오류!");
    }else{
        emailError.style.display = "none";
    }
}

 function vaildPW(pwInput, pwError, pwLength = true){
    if(!pwInput.value){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호를 입력해 주세요.";
        throw new Error("비밀번호를 입력해주세요!");
    }
    else if(pwLength && (!REGEXP_PASSWORD.test(pwInput.value))){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        throw new Error("비밀번호 생성 조건 불일치!");
    }else{
        pwError.style.display = "none";
    }
}

 function vaildConfirmPW(pwInput, pwError, pwLength = true){
    if(!pwInput.value){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호를 입력해 주세요.";
        throw new Error("비밀번호를 입력해주세요!");
    }
    else if(pwLength && (!REGEXP_PASSWORD.test(pwInput.value))){
        pwError.style.display = "block";
        pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        throw new Error("비밀번호 생성 조건 불일치!");
    }
    else{
        pwError.style.display = "none";
    }
}

function focusOut(input, error, validFunction, boolean) {
    input.addEventListener("focusout", () => {
        validFunction(input, error, boolean);
    });
}


export {vaildEmail, vaildPW, vaildConfirmPW, focusOut}