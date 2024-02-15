import { useContext } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import GradientButton from '../GradientButton/GradientButton';
import { getUser } from '../../utils/api';
import * as S from './Navbar.styles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const hasUser = Object.keys(user).length;

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
    <S.NavbarHeader>
      <S.NavbarHeaderBox>
        <Link to='/'>
          <img src='assets/icons/linkbrary-logo.svg' alt='linkbrary' />
        </Link>
        {hasUser ? (
          <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />
        ) : (
          <GradientButton startColor='var(--color-primary)' endColor='#6ae3fe' onClick={fetchUserData}>
            로그인
          </GradientButton>
        )}
      </S.NavbarHeaderBox>
    </S.NavbarHeader>
  );
};

export default Navbar;
