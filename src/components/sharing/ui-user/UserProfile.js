import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileText = styled.span`
  @media (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
`;
const UserProfile = ({ userInfo }) => {
  return (
    <ProfileContainer>
      <Avatar
        avatarImage={userInfo["image_source"]}
        width="28px"
        height="28px"
      />
      <ProfileText>{userInfo["email"]}</ProfileText>
    </ProfileContainer>
  );
};

export default UserProfile;
