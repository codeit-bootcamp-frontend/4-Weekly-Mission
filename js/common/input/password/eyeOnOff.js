const eyeIcon = document.querySelector('i[data-icon="eyeIcon"]');
const eyeIcon2 = document.querySelector('i[data-icon="eyeIcon2"]');

const toggleEyeIcon = (e) => {
  if(e.target.classList.contains('eye-off')){ //off에서 on으로
    e.target.classList.remove('eye-off');
    e.target.classList.add('eye-on');
    e.target.nextElementSibling.type = 'text';

  }else{//on에서 off로
    e.target.classList.remove('eye-on');
    e.target.classList.add('eye-off');
    e.target.nextElementSibling.type = 'password';
  }
}
 
export default {eyeIcon, eyeIcon2, toggleEyeIcon};