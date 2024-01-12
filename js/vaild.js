import { userInfo } from "./user-info.js";
const regexEamil = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]'); // 이메일 정규 표현식
const regexEng = new RegExp('[a-zA-Z]'); // 영문(대,소문자) 
const regexNum = new RegExp('[0-9]') // 숫자

function vaildEmail(emailInput, emailError, emailDuplication = true) {
    if(!emailInput.value){
        emailError.innerHTML = "이메일을 입력해 주세요.";
    }
    else if(!regexEamil.test(emailInput.value)){
        emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
    }
    else if(emailDuplication && (userInfo['email'] === emailInput.value)){
        emailError.innerHTML = "이미 사용 중인 이메일입니다.";
    }else{
        emailError.innerHTML = "";
    }
}

function vaildPW(pwInput, pwError, pwLength = true){
    if(!pwInput.value){
        pwError.innerHTML = "비밀번호를 입력해 주세요.";
    }
    else if(pwLength && (!regexEng.test(pwInput.value) || !regexNum.test(pwInput.value) || pwInput.value.length < 8)){
        pwError.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }else{
        pwError.innerHTML = "";
    }
}

function vaildPW2(pwInput2, pw2Error, pwLength = true){
    if(!pwInput2.value){
        pw2Error.innerHTML = "비밀번호를 입력해 주세요.";
    }
    else if(pwLength && (!regexEng.test(pwInput2.value) || !regexNum.test(pwInput2.value) || pwInput2.value.length < 8)){
        pw2Error.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }
    else{
        pw2Error.innerHTML = "";
    }
}

function focusOut(input, error, validFunction, boolean) {
    input.addEventListener("focusout", () => {
        const isValid = validFunction(input, error, boolean);
    });
}


export {vaildEmail, vaildPW, vaildPW2, focusOut}