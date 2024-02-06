const loginBtn = document.querySelector('#login')
const signupBtn = document.querySelector('.addlink')
const accessToken = window.localStorage.getItem('accessToken')

function loginPageSwap(){
    console.log(accessToken)
    if (accessToken){
        window.location.href='./folder.html';
        window.localStorage.clear();
    }
    else{
        window.location.href='./signin/signin.html';
    }
}

function signUpPageSwap(){
    console.log(accessToken)
    if(accessToken){
        window.location.href='./shared.html';
        window.localStorage.clear();
    }
    else{
        window.location.href='./signup/signup.html';
    }
}

loginBtn.addEventListener("click",loginPageSwap)
signupBtn.addEventListener("click",signUpPageSwap)
