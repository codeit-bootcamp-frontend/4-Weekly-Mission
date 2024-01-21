const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.querySelector('.submit')

const noemail = document.querySelector('#no-email')
const nopassword = document.querySelector('#no-password')
const wrongemail = document.querySelector('#wrong-email')
const checkemail = document.querySelector('#check-email')
const checkpassword = document.querySelector('#check-password')
email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

email.addEventListener('focusout', function(e) {
    console.log(email.value)
    if(email.value == ''){
        console.log('no email')
        noemail.classList.remove('hide')
        email.classList.add('wrong')
    }
    else {
        noemail.classList.add('hide')
        if(!email_regex.test(email.value)){ 
            wrongemail.classList.remove('hide')
            email.classList.add('wrong')
        }
        else {
            wrongemail.classList.add('hide')
            email.classList.remove('wrong')
        }
    }
    
})

password.addEventListener('focusout', function(e) {
    console.log(password.value)
    if(password.value == ''){
        console.log('no password')
        nopassword.classList.remove('hide')
        password.classList.add('wrong')
    }
    else {
        nopassword.classList.add('hide')
        password.classList.remove('wrong')
    }
    
})

submit.addEventListener('click', function(e){
    e.preventDefault()
    if(email.value=='test@codeit.com' && password.value=='codeit101') {
        window.location.href = '/folder';
    }
    else {
        email.classList.add('wrong')
        password.classList.add('wrong')
        checkemail.classList.remove('hide')
        checkpassword.classList.remove('hide')
    }
})