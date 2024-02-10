import useFetchData from 'hook/useFetchData';
import Button from '../../Button';
import { sampleUserInquire } from 'api/sampleAPI';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components';

const Profile = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.signin);
  };

  const [profileData, profileError] = useFetchData(
    sampleUserInquire,
    data => data,
  );

  if (profileError) {
    console.log(profileError);
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
  gap: 10px;
`;
const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 15px;
`;
const ProfileEmail = styled.p`
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 0;
  }
`;
export default Profile;
