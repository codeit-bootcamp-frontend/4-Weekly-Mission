import { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import GradientButton from '../GradientButton/GradientButton';
import { getUser } from '../../utils/api';
import * as S from './Navbar.styles';

const Navbar = ({ loginButtonClick }) => {
  const [user, setUser] = useState({});
  const hasUser = Object.keys(user).length;

  const fetchUserData = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    loginButtonClick();
    fetchUserData();
  };

  return (
    <S.NavbarHeader>
      <S.NavbarHeaderBox>
        <img src='/icons/linkbrary-logo.svg' alt='linkbrary' />
        {hasUser ? (
          <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />
        ) : (
          <GradientButton $startColor='var(--color-primary)' $endColor='#6ae3fe' onClick={handleClick}>
            로그인
          </GradientButton>
        )}
      </S.NavbarHeaderBox>
    </S.NavbarHeader>
  );
};

export default Navbar;
