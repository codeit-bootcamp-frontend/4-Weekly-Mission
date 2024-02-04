const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const body = document.querySelector("body");
const email = document.querySelector("#email");
const signinBtn = document.querySelector('.signin');
const pwd = document.querySelector('#pwd');
const activeimgs = document.querySelectorAll(".check");

function emailCheck(e){
    if (!e.target.value){
        document.querySelector('.email_result').innerText = "이메일을 입력해주세요";
        e.target.classList.add('focus_red');
        return;
    }
    else if (!regex.test(e.target.value)){
        document.querySelector('.email_result').innerText = "올바른 이메일 주소가 아닙니다.";
        e.target.classList.add('focus_red');
    }
    else{
        document.querySelector('.email_result').innerText = "";
        e.target.classList.remove('focus_red');
    }
    // console.log(e.target.value)
}

function login(){
    if (email.value == 'test@codeit.com' & pwd.value =='codeit101'){
        window.location.href='../folder.html';
    }
    else{
        document.querySelector('.email_result').innerText = "이메일을 확인해주세요";
        document.querySelector('.pwd_result').innerText = "비밀번호를 확인해주세요";
        email.classList.add('focus_red');
        pwd.classList.add('focus_red');
    }
}

function enterLogin(e){
    if (e.key == 'Enter'){
        login();
    }
}

function active(e){
    const sibling = e.target.previousElementSibling;
    sibling.classList.toggle('active')
    
    if (sibling.classList.contains('active')){
        sibling.type = "text"
        e.target.src="../image/signin/eye-on.svg"
    }
    else{
        sibling.type = "password"
        e.target.src="../image/signin/eye-off.svg"
    }
}


body.addEventListener("keydown",enterLogin);
email.addEventListener("input", emailCheck);
signinBtn.addEventListener("click",login);
for (activeimg of activeimgs){
    activeimg.addEventListener("click",active)
};