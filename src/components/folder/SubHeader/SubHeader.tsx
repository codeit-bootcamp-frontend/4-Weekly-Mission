import { ChangeEvent, useContext, useState } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType, currentFolderDataType } from '@/src/type';
import * as S from './SubHeader.style';

interface Props {
  folderData: CategoryDataType | null;
  currentFolder: currentFolderDataType | null;
  type?: string;
}

const SubHeader = ({ folderData, currentFolder, type }: Props) => {
  const { changeModalData } = useContext(FolderContext);
  const [link, setLink] = useState<string>('');

  const folderCategory = folderData?.category?.map((category) => ({
    folderName: String(category.name),
    folderID: Number(category.id),
    linkCount: category.link ? category.link.count : 0,
  }));

  const folder = folderCategory
    ? [{ folderName: '전체', folderID: 0, linkCount: 3 }, ...folderCategory]
    : null;
  const currentFolderID = currentFolder ? Number(currentFolder.id) : null;
  const changeLink = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const openModal = () => {
    changeModalData({
      modalType: 'AddFolderModal',
      subTitle: link ? `https://${link}` : '',
      folder,
      currentFolderID,
      currentLinkID: null,
    });
  };

  return (
    <S.Wrapper $type={type === undefined ? '' : type}>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder="링크를 추가해보세요"
          onChange={changeLink}
        />
        <S.ImageIcon src="/images/link.svg" alt="링크" width={20} height={20} />
        <S.AddButton onClick={openModal}>추가하기</S.AddButton>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

SubHeader.defaultProps = {
  type: '',
};

export default SubHeader;
