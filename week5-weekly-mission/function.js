document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("togglePassword").addEventListener("click", function() {
        let passwordInput = document.getElementById("inputpassword");
        let passwordIcon = document.getElementById("togglePassword");
        let ghostimg = document.getElementById("ghost");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.src="./imglogin/eye-on.svg"

        } else {
            passwordInput.type = "password";
            passwordIcon.src="./imglogin/eye-off.jpg"

        }

        
    });
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            login();
        }
    });
    let id = document.getElementById("inputid");
    let password = document.getElementById("inputpassword");
    
    const btn = document.getElementsByClassName('loginbtn')[0];
    btn.addEventListener('click', login);
    id.addEventListener('focusin',idfocusin)
    id.addEventListener('focusout',idfocus);
    password.addEventListener('focusin',passwordfocusin)
    password.addEventListener('focusout',passwordfocus);
});

function login(){
    let id = document.getElementById("inputid");
    let password = document.getElementById("inputpassword");
    let idalert = document.getElementsByClassName("idalert")[0];
    let passwordalert=document.getElementsByClassName("passwordalert")[0];
    let inputid = document.querySelector("#inputid");
    let inputpassword = document.querySelector("#inputpassword");
    const corrid = 'test@codeit.com';
    const corrpassword='codeit101'
    if(id.value === corrid && password.value === corrpassword){
        window.location.href = './shared.html';
    }
    
    if(id.value !== corrid){
        idalert.textContent ='이메일을 확인해 주세요.';
        inputid.style.borderColor='#FF5B56'
    }
    
    if(password.value !== corrpassword){
        passwordalert.textContent = '비밀번호를 확인해 주세요.';
        inputpassword.style.borderColor='#FF5B56'
    }
}
function idfocusin(){
    let inputid = document.querySelector("#inputid");
    inputid.style.borderColor='#6D6AFE';
}
function idfocus(){
    let id = document.getElementById("inputid");
    let idalert = document.getElementsByClassName("idalert")[0];
    let isemail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if(!id.value){
        idalert.textContent='이메일을 입력해 주세요.';
        id.style.borderColor='#FF5B56'
    }
    else{
        if(!isemail.test(id.value)){
            idalert.textContent = '올바른 이메일 주소가 아닙니다.';
            id.style.borderColor='#FF5B56'
        }
        else{
            idalert.textContent='';
            id.style.borderColor='#6D6AFE';
        }
    }
}
function passwordfocusin(){
    let inputpassword = document.querySelector("#inputpassword");
    inputpassword.style.borderColor='#6D6AFE';
}
function passwordfocus(){
    let password = document.getElementById("inputpassword");
    let passwordalert=document.getElementsByClassName("passwordalert")[0];
    if(!password.value){
        passwordalert.textContent='비밀번호를 입력해 주세요.';
        password.style.borderColor='#FF5B56';
    }
    else{
        passwordalert.textContent='';
        password.style.borderColor='#6D6AFE';
    }
}
