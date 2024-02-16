import Loader from 'components/common/Loader';
import { useSampleFolderQuery } from 'hook/useFetchData';
import React from 'react';
import styled from 'styled-components';
import Error from 'components/common/Error';
import { HeaderContainer } from 'styles/HeaderContainer';

const Header = () => {
  const {
    data: folderInfo,
    isLoading,
    isError,
  } = useSampleFolderQuery('folderInfo', data => ({
    ownerName: data.folder.owner.name,
    folderName: data.folder.name,
    profileImage: data.folder.owner.profileImageSource,
  }));

  if (isError) {
    return <Error />;
  }
  return (
    <HeaderContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <HeroHeader>
          <StyledProfile>
            <ProfileImage
              src={folderInfo.profileImage}
              alt={folderInfo.ownerName}
            />
            <OwnerName>@{folderInfo.ownerName}</OwnerName>
          </StyledProfile>
          <FolderName>{folderInfo.folderName}</FolderName>
        </HeroHeader>
      )}
    </HeaderContainer>
  );
};

const HeroHeader = styled.div`
  display: flex;
  padding: 2.8rem 3.2rem;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
`;
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;
const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

const OwnerName = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const FolderName = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: normal;
`;
export default Header;
