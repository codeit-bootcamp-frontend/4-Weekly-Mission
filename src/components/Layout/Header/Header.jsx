import './Header.css';
import { Button } from '../../Button';
import { IconLogo } from '../../Icon';
import { useSetUser, useUser } from '../../../contexts/LoginContext';
import { getUser } from '../../../api';
import { Link } from 'react-router-dom';

function Header() {
  const loginUser = useUser();
  const setLoginUser = useSetUser();

  const handleLoginClick = async () => {
    try {
      const user = await getUser();
      if (!user) return;
      setLoginUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <div className="logo">
            <Link to="/" className="logo__link">
              <IconLogo />
            </Link>
          </div>
        </div>
        <div className="header__auth">
          {loginUser ? (
            <ButtonUser user={loginUser} />
          ) : (
            <ButtonLogin onClick={handleLoginClick} />
          )}
        </div>
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
    <button type="button" className="button-user">
      <div className="button-user__img__container">
        <img
          className="button-user__img"
          src={user.profileImageSource}
          alt={user.name}
        />
      </div>
      <div className="button-user__email">{user.email}</div>
    </button>
  );
}

export default Header;
