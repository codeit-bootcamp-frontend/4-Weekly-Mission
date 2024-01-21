let cnt = 0;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("togglePassword").addEventListener("click", function() {
        let passwordInput = document.getElementById("inputpassword");
        let passwordIcon = document.getElementById("togglePassword");
        let ghostimg = document.getElementById("ghost");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.src="./imglogin/eye-on.svg"
            cnt++;
        } else {
            passwordInput.type = "password";
            passwordIcon.src="./imglogin/eye-off.jpg"
            cnt++;
        }

        if(cnt == 3){
            setTimeout(function(){
                ghostimg.style.display="block";
                setTimeout(function() {
                    ghostimg.style.display = "none";
                    document.body.style.backgroundColor = ""; 
                    alert('그러게 왜 3번이나 누르셨어요 ㅎㅎㅎ');
                }, 3000); 
            },1000)
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

    id.addEventListener('focusout',idfocus);
    password.addEventListener('focusout',passwordfocus);
});

function login(){
    let id = document.getElementById("inputid");
    let password = document.getElementById("inputpassword");
    let idalert = document.getElementsByClassName("idalert")[0];
    let passwordalert=document.getElementsByClassName("passwordalert")[0];
    
    const corrid = 'test@codeit.com';
    const corrpassword='codeit101'
    if(id.value === corrid && password.value === corrpassword){
        window.location.href = './shared.html';
    }
    
    if(id.value !== corrid){
        idalert.textContent ='이메일을 확인해 주세요.';
    }
    
    if(password.value !== corrpassword){
        passwordalert.textContent = '비밀번호를 확인해 주세요.';
    }
    console.log(typeof(password.value));
}
function idfocus(){
    let id = document.getElementById("inputid");
    let idalert = document.getElementsByClassName("idalert")[0];
    let isemail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if(!id.value){
        idalert.textContent='이메일을 입력해 주세요.';
    }
    else{
        if(!isemail.test(id.value)){
            idalert.textContent = '올바른 이메일 주소가 아닙니다.';
        }
        else{
            idalert.textContent = '';
        }
    }
}
function passwordfocus(){
    let password = document.getElementById("inputpassword");
    let passwordalert=document.getElementsByClassName("passwordalert")[0];
    if(!password.value){
        passwordalert.textContent='비밀번호를 입력해 주세요.';
    }
}
