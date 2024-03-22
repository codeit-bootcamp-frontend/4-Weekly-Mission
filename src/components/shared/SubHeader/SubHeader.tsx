import { FolderDataType } from '@/src/type';
import * as S from './SubHeader.style';

interface Props {
  folder: FolderDataType | null;
}

const SubHeader = ({ folder }: Props) => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.ProfileImage
        src={(folder as FolderDataType)?.userImage}
        alt="Avatar"
        width={60}
        height={60}
      />
      <S.ProfileName>{(folder as FolderDataType)?.userName}</S.ProfileName>
      <S.FolderName>{(folder as FolderDataType)?.name}</S.FolderName>
    </S.ContentWrapper>
  </S.Wrapper>
);

export default SubHeader;
