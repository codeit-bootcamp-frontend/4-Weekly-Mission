import { FolderDataType } from '@/src/type';
import {
  Wrapper,
  ContentWrapper,
  ProfileImage,
  ProfileName,
  FolderName,
} from './SubHeader.style';

interface Props {
  folder: FolderDataType | null;
}

const SubHeader = ({ folder }: Props) => (
  <Wrapper>
    <ContentWrapper>
      <ProfileImage
        src={(folder as FolderDataType)?.userImage}
        alt="아바타"
        width={60}
        height={60}
      />
      <ProfileName>{(folder as FolderDataType)?.userName}</ProfileName>
      <FolderName>{(folder as FolderDataType)?.name}</FolderName>
    </ContentWrapper>
  </Wrapper>
);

export default SubHeader;
