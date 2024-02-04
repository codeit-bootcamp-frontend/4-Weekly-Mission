const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwdRegex =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const repwd = document.querySelector("#repwd");
const signupBtn = document.querySelector("#signup");
const body = document.querySelector("body");
const activeimgs = document.querySelectorAll(".check");
const checkEmail = document.querySelector('.email_result')
const checkPwd = document.querySelector('.pwd_result')
const checkRepwd = document.querySelector('.repwd_result')

function emailCheck(e){
    if (!e.target.value){
        checkEmail.innerText = "이메일을 입력해주세요";
        checkEmail.style.color ="var(--Linkbrary-red)"
        e.target.classList.add('focus_red');
        return;
    }
    else if (!emailRegex.test(e.target.value)){
        checkEmail.innerText = "올바른 이메일 주소가 아닙니다.";
        checkEmail.style.color ="var(--Linkbrary-red)"
        e.target.classList.add('focus_red');
        return
    }
    else{
        checkEmail.innerText = "";
        e.target.classList.remove('focus_red');
    }
    // console.log(e.target.value)
}

function duplicateEmail(e){
    fetch("https://bootcamp-api.codeit.kr/api/check-email",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            email : e.target.value
        }),
    })
    .then((res)=>{
        // console.log(res.json())
        return res.json()
    })
    .then(result=>{
        // console.log(result)
        if(result.data.isUsableNickname){
            checkEmail.innerText="사용 가능한 이메일입니다."
            checkEmail.style.color ="blue"
        }
    })
    .catch((err)=>{
        checkEmail.innerText="이미 사용 중인 이메일입니다."
        checkEmail.style.color ="var(--Linkbrary-red)"
        email.classList.add('focus_red');
    })
}

function pwdCheck(e){
    if (!pwdRegex.test(e.target.value)){
        checkPwd.innerText = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        e.target.classList.add('focus_red');
        return
    }
    else{
        checkPwd.innerText = "";
        e.target.classList.remove('focus_red');
    }
}

function repwdCheck(e){
    if(pwd.value != e.target.value){
        checkRepwd.innerText = "비밀번호가 일치하지 않아요.";
        e.target.classList.add('focus_red');
        return
    }
    else{
        checkRepwd.innerText = "";
        e.target.classList.remove('focus_red');
    }  
}

function signup(){
    // console.log("hi")
    if (checkEmail.innerText ==='사용 가능한 이메일입니다.' && checkPwd.innerText =='' && checkRepwd.innerText==''&& email.value &&pwd.value&&repwd.value){
        fetch("https://bootcamp-api.codeit.kr/api/sign-up",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email : email.value,
                password: pwd.value
            }),
        })
        .then((res)=> {return res.json()})
        .then(result => {
            // console.log(result)
            if (result.data.accessToken){
                window.location.href='../folder.html';
                localStorage.setItem('accessToken',result.data.accessToken);
            }
        })
        .catch((err)=> {
                alert("회원가입 오류입니다. 잠시 후 시도해주세요.")
        })
    }

}

function enterSignup(e){
    if (e.key==='Enter'){
        signup()
    }
}

function active(e){
    const sibling = e.target.previousElementSibling;
    // console.log(sibling)
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

email.addEventListener("input", emailCheck);
email.addEventListener("change", duplicateEmail);
pwd.addEventListener("input",pwdCheck);
repwd.addEventListener("input",repwdCheck);
signupBtn.addEventListener("click",signup);
body.addEventListener("keydown",enterSignup);
for (activeimg of activeimgs){
    activeimg.addEventListener("click",active)
}



