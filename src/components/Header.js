import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header(){
  return(
    <div className="headerBox">
      <Link to="/"><img src='/img/logo.svg' className="logo" alt="로고"/></Link>
      <Link to="/Signin" className="login">로그인</Link>
    </div>
  );
}

export default Header;