import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import { User } from "../../../utils/types";

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

interface Props {
  userInfo: User;
  className?: string;
  size?: string;
}

const UserProfile = ({ userInfo, className, size }: Props) => {
  const avatarImage = userInfo["image_source"] || undefined;

  return (
    <ProfileContainer className={className}>
      <Avatar
        avatarImage={avatarImage}
        width={size || "28px"}
        height={size || "28px"}
      />
      <ProfileText>{userInfo["email"]}</ProfileText>
    </ProfileContainer>
  );
};

export default UserProfile;
