const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordCheck = document.querySelector('#password-check')
const hider = document.querySelector('#hider')
const shower = document.querySelector('#shower')
const hider2 = document.querySelector('#hider2')
const shower2 = document.querySelector('#shower2')
const submit = document.querySelector('.submit')

const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')
const passwordCheckError = document.querySelector('#password-check-error')
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

if (localStorage.getItem("accessToken")) {
    window.location.href = "/folder"
  }

function checkEmail() {
    if(email.value == ''){
        // console.log('no email')
        emailError.classList.remove('hide')
        emailError.textContent = '이메일을 입력해 주세요'
        email.classList.add('wrong')
        return false
    }
    else if(!email_regex.test(email.value)) {
        emailError.classList.remove('hide')
        emailError.textContent = '이메일을 확인해 주세요'
        email.classList.add('wrong')
        return false
    }
    // else if(email.value === 'test@codeit.com') {
    //     emailError.classList.remove('hide')
    //     emailError.textContent = '이미 사용중인 이메일 입니다'
    //     email.classList.add('wrong')
    //     return false
    // }
    return true
}


function checkPassword(){
    if(password.value == ''){
        passwordError.classList.remove('hide')
        passwordError.textContent = '비밀번호를 입력해 주세요'
        password.classList.add('wrong')
        return false
    }
    else if(password.value.length < 8 || ! /\d/.test(password.value)){
        passwordError.classList.remove('hide')
        passwordError.textContent = '비밀번호는 영문 숫자 조합으로 8자 이상 입력해 주세요'
        password.classList.add('wrong')
        return false
    }
    return true
}

function checkPasswordCheck() {
    if(password.value !== passwordCheck.value){
        passwordCheckError.classList.remove('hide')
        passwordCheckError.textContent = '비밀번호가 다릅니다'
        passwordCheck.classList.add('wrong')
        return false
    }
    return true
}

email.addEventListener('focusout', function(e) {
    emailError.classList.add('hide')
    email.classList.remove('wrong')
    checkEmail()
})


password.addEventListener('focusout', function(e) {

    password.classList.remove('wrong')
    passwordError.classList.add('hide')
    checkPassword()
})

passwordCheck.addEventListener('focusout', function(e) {

    passwordCheck.classList.remove('wrong')
    passwordCheckError.classList.add('hide')
    checkPasswordCheck()
})

shower.addEventListener('click', (e)=>{
    shower.classList.add('hide')
    hider.classList.remove('hide')
    shower.parentElement.firstElementChild.type = 'text'
})

hider.addEventListener('click', (e)=>{
    hider.classList.add('hide')
    shower.classList.remove('hide')
    shower.parentElement.firstElementChild.type = 'password'
})

shower2.addEventListener('click', (e)=>{
    shower2.classList.add('hide')
    hider2.classList.remove('hide')
    shower2.parentElement.firstElementChild.type = 'text'
})
hider2.addEventListener('click', (e)=>{
    hider2.classList.add('hide')
    shower2.classList.remove('hide')
    shower2.parentElement.firstElementChild.type = 'password'
})


async function signup(email, password) {
    // const emailcheck = await fetch(`https://bootcamp-api.codeit.kr/api/check-email`, {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     method: "POST",
    //     body: JSON.stringify({email}),
    // })
    // const j = await emailcheck.json()
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/sign-up`, {
        headers: {
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email, password}),
    })
    if(!response.ok) {
        throw new Error(response.statusText);
    }
  
    const result = await response.json()
    const accessToken = result.data.accessToken
    localStorage.clear()
    localStorage.setItem("accessToken", accessToken)
    
    return true
}


submit.addEventListener('click', function(e){
    e.preventDefault()
    if(checkEmail() && checkPassword() && checkPasswordCheck()) {
        
            signup(email.value, password.value)
            .then((res)=>{
                console.log('signed up')
                location.href = "/folder"})
            .catch((err)=>{console.log(err)})

    }
})