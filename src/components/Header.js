import { Link } from 'react-router-dom';

import App from '../App';
import Signin from './Signin';

import '../css/Header.css';

function Header(){
  return(
    <div className="headerBox">
      <App><img src='../../public/img/logo.svg' className="logo" alt="로고"/></App>
      <Signin className="login">로그인</Signin>
    </div>
  );
}

export default Header;