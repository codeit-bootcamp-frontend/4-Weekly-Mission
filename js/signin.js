const form = document.querySelector('.sign-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailErrorMessage =document.getElementById('error-email');
const passwordErrorMessage = document.getElementById('error-password');
const passwordRepeat = document.getElementById("passwordR");
const passwordRepeatErrorMessage = document.getElementById('error-passwordR');
const eyeButton = document.querySelector('.eye-button');


const errorMessages = {
    emailRequired: "이메일을 입력해주세요.",
    invalidEmail: "올바른 이메일 주소가 아닙니다.",
    duplicateEmail: "이미 사용중인 이메일입니다.",
    passwordRequired: "비밀번호를 입력해주세요.",
    passwordRepeatRequired: "비밀번호 재확인칸을 입력해주세요.",
    invalidPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    passwordMismatch: "비밀번호가 일치하지 않아요.",
    checkEmail: "이메일을 확인해주세요",
    checkPassword: "비밀번호를 확인해주세요"
};

let isCheckingEmail= false;
let isCheckingPassword= false;
let isCheckingPasswordRepeatEmail= false;

//포커싱시 파란색 테두리 출력
function focusing(errorName,styleName){
    errorName.innerHTML="";
    styleName.style.border= "0.1rem solid var(--primary)";
}

//눈 비밀번호 표시 / 미표시
function eyeBlink(input,icon){ 
    if(input.type=="password"){
        input.type="text";
        icon.src="../images/eye-on.svg"

    }else{
        input.type="password";
        icon.src="../images/eye-off.svg"
    }
}
 
//이메일
function checkingEmail(){

    //이메일 체크를 위한 정규식
    const checkEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const emailTrim = email.value.trim();

    //실패시 체크값 디폴트
    isCheckingEmail=false;

    //이메일 체크
    if(emailTrim==""){
        emailErrorMessage.innerHTML=errorMessages.emailRequired;
    }else if(checkEmail.test(emailTrim)){
        emailErrorMessage.innerHTML="";
        isCheckingEmail= true;
    }else{
        emailErrorMessage.innerHTML=errorMessages.invalidEmail;
    }

    isCheckingEmail ? email.style.border= "0.1rem solid var(--gray20)" : email.style.border= "0.1rem solid var(--red)";
}

//비밀번호
function checkingPassword(){

    //비밀번호 체크를 위한 정규식
    const checkPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/

    const passwordTrim = password.value.trim();

    //실패시 체크값 디폴트
    isCheckingPassword=false;

    //비밀번호 체크
    if(passwordTrim==""){
        passwordErrorMessage.innerHTML=errorMessages.passwordRequired;
    }else if(checkPassword.test(passwordTrim)){
        passwordErrorMessage.innerHTML="";
        isCheckingPassword= true;
    }else{
        passwordErrorMessage.innerHTML=errorMessages.invalidPassword;
    }

    isCheckingPassword ? password.style.border= "0.1rem solid var(--gray20)" : password.style.border= "0.1rem solid var(--red)";
}


//비밀번호 확인란
function checkingPasswordRepeat(){

    //실패시 체크값 디폴트
    isCheckingPasswordRepeatEmail= false;

    const passwordRepeatTrim = passwordRepeat.value.trim();

    if(passwordRepeatTrim==""){
        passwordRepeatErrorMessage.innerHTML=errorMessages.passwordRepeatRequired;
    }else if(password.value.trim()==passwordRepeatTrim){
        passwordRepeatErrorMessage.innerHTML="";
        isCheckingPasswordRepeatEmail= true;
    }else{
        passwordRepeatErrorMessage.innerHTML=errorMessages.passwordMismatch;
    }

    isCheckingPasswordRepeatEmail ? passwordRepeat.style.border= "0.1rem solid var(--gray20)" : passwordRepeat.style.border= "0.1rem solid var(--red)";
}

//로그인 정보주고받기
async function fetchSignin (){
    try{
        const user = {
            email: email.value.trim(),
            password: password.value.trim()
        }
        const token = "user";
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(user)
        });
        response.ok ? (location.href = '/folder.html') : errorMessage();

        async function errorMessage (){
            const errorMessage = await response.json();
            console.error(errorMessage.error.message);
        }
    }catch(error){
        console.error(error.message);
    }
}

// //현재 작업중 추후에 합칠 예정
// async function fetchSignUp (){
//     try{
//         const user = {
//             email: email.value.trim(),
//             password: password.value.trim()
//         }
//         const token = "user";
//         console.log(user.email);
//         const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify(user)
//         });
//         console.log(response);

//         async function errorMessage (){
//             const errorMessage = await response.json();
//             console.error(errorMessage.error.message);
//         }
//     }catch(error){
//         console.error(error.message);
//     }
// }

//addEventListener를 이용한 체크 시스템
form.addEventListener("submit",(e)=>{

    //새로고침 방지
    e.preventDefault();

    //타겟 확인
    console.log(e.target.id);

    const user = {
        email: email.value.trim(),
        password: password.value.trim()
    }
    const token = "user";

    if(e.target.id ==='signin'){
        if(isCheckingEmail==true && isCheckingPassword==true){
            fetchSignin();
        }else{
            checkingEmail();
            checkingPassword();
        }
    }else if(e.target.id ==='signup'){
        if(isCheckingEmail == true && isCheckingPasswordRepeatEmail==true && isCheckingPassword == true){
            //현재 작업중...
            fetchSignUp();
        }else{
            checkingEmail();
            checkingPassword();
            checkingPasswordRepeat();
        }
    }
});

export { focusing, eyeBlink, checkingEmail, checkingPassword, checkingPasswordRepeat, fetchSignin, fetchSignUp };