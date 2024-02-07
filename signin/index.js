const email = document.querySelector('#email')
const password = document.querySelector('#password')
const hider = document.querySelector('#hider')
const shower = document.querySelector('#shower')
const submit = document.querySelector('.submit')

const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')

const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;


if (localStorage.getItem("accessToken")) {
  window.location.href = "/folder"
}

email.addEventListener('focusout', function(e) {

    emailError.classList.add('hide')
    email.classList.remove('wrong')

    if(email.value == ''){
        // console.log('no email')
        emailError.classList.remove('hide')
        emailError.textContent = '이메일을 입력해 주세요'
        email.classList.add('wrong')
    }
    else if(!email_regex.test(email.value)) {
        emailError.classList.remove('hide')
        emailError.textContent = '이메일을 확인해 주세요'
        email.classList.add('wrong')
    }
    
})

password.addEventListener('focusout', function(e) {

    password.classList.remove('wrong')
    passwordError.classList.add('hide')

    // console.log(password.value)
    if(password.value == ''){
        // console.log('no password')
        passwordError.classList.remove('hide')
        passwordError.textContent = '비밀번호를 입력해 주세요'
        password.classList.add('wrong')
    }
    
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

async function login(email, password) {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/sign-in`, {
        headers: {
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email, password}),
    })
    if(!response.ok) {
        throw new Error(response)
    }
    
    const result = await response.json()
    const accessToken = result.data.accessToken
    localStorage.clear()
    localStorage.setItem("accessToken", accessToken)
    
    return result
}


submit.addEventListener('click', function(e){
    e.preventDefault()
    login(email.value, password.value)
    .then(
        (res)=>{window.location.href = '/folder'}
    )
    .catch((err)=>{console.log(err)})
    // else {
    //     email.classList.add('wrong')
    //     password.classList.add('wrong')
    //     emailError.classList.remove('hide')
    //     passwordError.classList.remove('hide')
    // }
})