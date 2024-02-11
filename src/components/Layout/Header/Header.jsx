import './Header.css';
import { Button } from '../../Button';
import { IconLogo } from '../../Icon';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <div className="logo">
            <a href="#" className="logo__link">
              <IconLogo />
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
