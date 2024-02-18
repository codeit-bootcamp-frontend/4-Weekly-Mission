import React from "react";
import defaultProfileImg from "../../assets/image/default_profile.jpg";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 244px;
  background-color: var(--primary-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    height: 161px;
  }
`;
const OwnerImg = styled.img`
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  object-fit: cover;
  overflow: hidden;
  margin-top: 15px;
  width: 60px;
  height: 60px;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;
const OwnerName = styled.span`
  margin-top: 15px;
  font-size: 16px;
  @media (max-width: 767px) {
    margin-top: 6px;
    font-size: 14px;
  }
`;
const FolderName = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 600;
  color: var(--gray1);
  @media (max-width: 767px) {
    margin-top: 9px;
    font-size: 32px;
  }
`;
const ErrorMessage = styled.span`
  font-size: 20px;
  color: var(--gray1);
`;

const SharedInfo = ({ folderData, folderLoadingError }) => {
  const { profileImageSource = defaultProfileImg, name } =
    folderData.folderInfo;
  const folderName = folderData.folderName;
  return (
    <Container className="SharedInfo">
      <OwnerImg src={profileImageSource} />
      <OwnerName>{name}</OwnerName>
      <FolderName>{folderName}</FolderName>
      {folderLoadingError?.message && (
        <ErrorMessage className="error">
          {folderLoadingError.message}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default SharedInfo;
