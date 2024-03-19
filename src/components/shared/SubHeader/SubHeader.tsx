import {
  Wrapper,
  ContentWrapper,
  ProfileImage,
  ProfileName,
  FolderName,
} from './SubHeader.style';

const SubHeader = () => (
  <Wrapper>
    <ContentWrapper>
      <ProfileImage
        src="/images/Avatar.png"
        alt="아바타"
        width={60}
        height={60}
      />
      <ProfileName>@코드잇</ProfileName>
      <FolderName>즐겨찾기</FolderName>
    </ContentWrapper>
  </Wrapper>
);

export default SubHeader;
