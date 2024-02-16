import { useContext } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import { getUser } from '../../utils/api';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import * as S from './Header.styles';
import GradientButton from '../GradientButton/GradientButton.styles';

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const hasUser = Object.keys(user).length;

  const location = useLocation();
  const isFolderPage = location.pathname === '/folder';

  const fetchUserData = async () => {
    try {
      const user = await getUser();
      setUser(user);
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.HeaderLayout $isStatic={isFolderPage}>
      <S.HeaderBox>
        <Link to='/'>
          <img src='assets/icons/linkbrary-logo.svg' alt='linkbrary' />
        </Link>
        {hasUser ? (
          <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />
        ) : (
          <GradientButton $startColor='var(--color-primary)' $endColor='#6ae3fe' onClick={fetchUserData}>
            로그인
          </GradientButton>
        )}
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;
