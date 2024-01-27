import password from "./passwordValidtaion.js";

const selector = document.querySelector('i[data-icon="eyeIcon"]');
const selector2 = document.querySelector('i[data-icon="eyeIcon2"]');

const eyeClick = (e) => changeOnOff(e);

const changeOnOff = (e) => {
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
 
export default {selector, selector2, eyeClick};