import { FoldersType } from "interface/Type";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  background: var(--Linkbrary-bg, #f0f6ff);
  display: flex;
  justify-content: center;
  padding: 20px 0 60px 0;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const ProfileName = styled.p`
  color: var(--text-color-light-mode, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

const FolderName = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
`;

function FolderTilte({
  folders,
}: {
  folders: FoldersType | undefined;
}) {
  return (
    <Layout>
      <Container>
        <div>
          <ProfileImage
            src={
              folders?.folder?.owner.profileImageSource ??
              "Icons/default_user_icon.svg"
            }
            alt="image"
          />
          <ProfileName>@{folders?.folder?.owner.name}</ProfileName>
        </div>
        <FolderName>{folders?.folder?.name}</FolderName>
      </Container>
    </Layout>
  );
}

export default FolderTilte;
