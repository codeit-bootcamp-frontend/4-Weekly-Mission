let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let text = ""

function email_check(){
    const email = document.querySelector("#email");
    console.log(!regex.test(email.value))
    if (!email.value){
        document.querySelector('.email_result').innerText = "이메일을 입력해주세요"
        email.classList.add('focus_red');
    }
    else if (!regex.test(email.value)){
        document.querySelector('.email_result').innerText = "올바른 이메일 주소가 아닙니다."
        email.classList.add('focus_red');
    }
    else{
        document.querySelector('.email_result').innerText = ""
        email.classList.remove('focus_red');
    }
    console.log(email.value)
}
