import './Header.css';
import logoImg from '../../assets/logo.svg';
import { Button } from '../../Button';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <div className="logo">
            <a href="#" className="logo__link">
              <img src={logoImg} alt="Linkbrary" />
            </a>
          </div>
        </div>
        <div className="header__auth">
          <Button title="로그인" />
        </div>
      </div>
    </header>
  );
}

export default Header;
