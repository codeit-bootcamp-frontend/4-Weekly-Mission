import { useState } from 'react';
import { getUser } from '../../utils/api';
import UserProfile from '../UI/UserProfile';
import GradientButton from '../Common/GradientButton';
import * as S from '../../styles/Navbar.styels';

const Navbar = ({ handleLoginButtonClick }) => {
  const [user, setUser] = useState();
  const fetchData = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    handleLoginButtonClick();
    fetchData();
  };

  return (
    <S.NavbarHeader>
      <S.NavbarHeaderBox>
        <img src='/icons/linkbrary-logo.svg' alt='linkbrary' />
        {!user && (
          <GradientButton $startColor='var(--color-primary)' $endColor='#6ae3fe' onClick={handleClick}>
            로그인
          </GradientButton>
        )}
        {user && <UserProfile title={user.email} image={{ URL: user.profileImageSource, size: '2rem' }} />}
      </S.NavbarHeaderBox>
    </S.NavbarHeader>
  );
};

export default Navbar;
