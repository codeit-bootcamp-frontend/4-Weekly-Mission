import './Header.css';
import { Button } from '../../Button';
import { IconLogo } from '../../Icon';
import { useSetUser, useUser } from '../../../contexts/LoginContext';
import { getUser } from '../../../api';

function Header() {
  const user = useUser();
  const setUser = useSetUser();

  const handleLoginClick = async () => {
    try {
      const user = await getUser();
      if (!user) return;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const authButton = user ? (
    <ButtonUser user={user} />
  ) : (
    <ButtonLogin onClick={handleLoginClick} />
  );

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <div className="logo">
            <a href="/" className="logo__link">
              <IconLogo />
            </a>
          </div>
        </div>
        <div className="header__auth">{authButton}</div>
      </div>
    </header>
  );
}

function ButtonLogin({ onClick }) {
  return <Button title="로그인" onClick={onClick} />;
}

// 컴포넌트 분리 예정
function ButtonUser({ user }) {
  return (
    <div className="button-user">
      <div className="button-user__img__container">
        <img
          className="button-user__img"
          src={user.profileImageSource}
          alt={user.name}
        />
      </div>
      <div className="button-user__email">{user.email}</div>
    </div>
  );
}

export default Header;
