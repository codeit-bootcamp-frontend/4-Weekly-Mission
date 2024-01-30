import login from './loginBtn.js'
import signup from './signupBtn.js'

const enterEvent = (e) => {
  const url = window.location.href;
  if(e.key === 'Enter'){
    if(url.indexOf('signin') !== -1){
      login.validation();
    }else if (url.indexOf('signup') !== -1){
      signup.validation();
    }
  }
}

export default enterEvent;