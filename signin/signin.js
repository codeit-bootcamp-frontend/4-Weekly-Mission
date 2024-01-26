const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

function emailCheck(){
    const email = document.querySelector("#email");
    if (!email.value){
        document.querySelector('.email_result').innerText = "이메일을 입력해주세요";
        email.classList.add('focus_red');
        return;
    }
    else if (!regex.test(email.value)){
        document.querySelector('.email_result').innerText = "올바른 이메일 주소가 아닙니다.";
        email.classList.add('focus_red');
    }
    else{
        document.querySelector('.email_result').innerText = "";
        email.classList.remove('focus_red');
    }
    console.log(email.value)
}

function login(){
    const email = document.querySelector("#email");
    const pwd = document.querySelector("#pwd");

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

function enterLogin(){
    const key_code = window.event.keyCode;
    if (key_code == 13){
        login();
    }
}

function active(){
    
    const pwd = document.querySelector('#pwd');
    const img = document.querySelector('.check')
    pwd.classList.toggle('active')
    
    if (pwd.classList.contains('active')){
        pwd.type = "text"
        img.src="../image/signin/eye-on.svg"
    }
    else{
        pwd.type = "password"
        img.src="../image/signin/eye-off.svg"
    }
}