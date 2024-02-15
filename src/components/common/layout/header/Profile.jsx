import { useSampleUserQuery } from 'hook/useFetchData';
import Button from '../../Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'utils/constants/routes';
import styled from 'styled-components';
import Loader from '../../../common/Loader';

const Profile = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.signin);
  };

  const { data: profileData, isLoading, isError, error } = useSampleUserQuery();

  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return (
      <ProfileContainer>
        <Loader />
      </ProfileContainer>
    );
  }
  return (
    <>
      {profileData ? (
        <ProfileContainer>
          <ProfileImg src={profileData.profileImageSource} alt="Profile" />
          <ProfileEmail>{profileData.email}</ProfileEmail>
        </ProfileContainer>
      ) : (
        <Button onClick={handleOnClick} className="login">
          로그인
        </Button>
      )}
    </>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1.5rem;
`;
const ProfileEmail = styled.p`
  font-size: 1.4rem;
  font-weight: 400;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 0;
  }
`;
export default Profile;
