import Button from '../../Button';
import { sampleUserInquire } from 'api/sampleAPI';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(routes.signin);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await sampleUserInquire();
        const data = await res.json();
        setProfileData(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

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
`;
export default Profile;
