const signinBtn = document.querySelector('#login');
const signupBtn = document.querySelector('#addlink');
const accessToken = window.localStorage.getItem('accessToken');
console.log(accessToken);
signinBtn.addEventListener('click',function(){
    if(accessToken){
        window.location.href='./shared.html';
        window.localStorage.clear();
    }
    else{
        window.location.href='./signin.html';
    }
})
signupBtn.addEventListener('click',function(){
    if(accessToken){
        window.location.href='./shared.html';
        window.localStorage.clear();
    }
    else{
        window.location.href='./signup.html';
    }
})