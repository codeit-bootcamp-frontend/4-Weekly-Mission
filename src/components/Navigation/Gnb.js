import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './GnbStyle';
import Button from '../Button';
import { useFetch, LoadingAndError } from '../../utils/hooks/useFetch';
import { LINK_URL } from '../../utils/constants';
import logoImg from '../../assets/logo.png';

const Gnb = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const handleUserData = useCallback((userData) => {
    return userData.data[0];
  }, []);
  const { data, loading, error } = useFetch(
    `${LINK_URL.BASE_API_URL}/api/users/1`,
    handleUserData
  );

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  return (
    <S.Gnb $pathname={location.pathname}>
      <Link to='/'>
        <S.Logo src={logoImg} alt='logo' />
      </Link>
      {loading ? (
        <LoadingAndError loading={loading} error={error} />
      ) : userData ? (
        <S.LoggedInUser>
          <S.LoggedInUserImage
            src={userData.image_source}
            alt={userData.name}
          />
          <S.LoggedInUserId>{userData.email}</S.LoggedInUserId>
        </S.LoggedInUser>
      ) : (
        <Link to='/signin'>
          <Button>로그인</Button>
        </Link>
      )}
    </S.Gnb>
  );
};

export default Gnb;
