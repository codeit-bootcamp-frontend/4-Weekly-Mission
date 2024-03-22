import { useContext, useEffect, useRef } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType, currentFolderDataType } from '@/src/type';
import * as S from './Kebeb.style';

interface Props {
  cardID: number | null;
  cardURL: string | null;
  folderData: CategoryDataType | null;
  currentFolder: currentFolderDataType | null;
}

const Kebab = ({ cardID, cardURL, folderData, currentFolder }: Props) => {
  const wraperRef = useRef<HTMLDivElement>(null);
  const { kebabID, changeKebabID, changeModalData } = useContext(FolderContext);

  const clickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    changeKebabID(cardID);
    e.preventDefault();
  };

  const openDeleteModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    changeModalData({
      modalType: 'DeleteLinkModal',
      subTitle: cardURL,
      folder: null,
      currentFolderID: null,
      currentLinkID: null,
    });
  };

  const openAddModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const folderCategory = folderData?.category?.map((category) => ({
      folderName: String(category.name),
      folderID: Number(category.id),
      linkCount: category.link ? category.link.count : 0,
    }));

    const folder = folderCategory
      ? [{ folderName: '전체', folderID: 0, linkCount: 3 }, ...folderCategory]
      : null;

    const currentFolderID = currentFolder ? Number(currentFolder.id) : null;

    changeModalData({
      modalType: 'AddFolderModal',
      subTitle: cardURL,
      folder,
      currentFolderID,
      currentLinkID: null,
    });
  };

  useEffect(() => {
    const clickOtherPart = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (wraperRef.current && !wraperRef.current?.contains(target)) {
        changeKebabID(null);
      }
    };
    document.addEventListener('click', clickOtherPart);
    return () => document.removeEventListener('click', clickOtherPart);
  }, [changeKebabID]);
  return (
    <S.Wrapper ref={wraperRef}>
      <S.KebabButton
        src="/images/kebab.svg"
        alt="kebab"
        width={21}
        height={17}
        onClick={clickKebabButton}
      />
      {kebabID === cardID && (
        <S.SelectWrapper>
          <S.SelectButton onClick={openDeleteModal}>삭제하기</S.SelectButton>
          <S.SelectButton onClick={openAddModal}>폴더에 추가</S.SelectButton>
        </S.SelectWrapper>
      )}
    </S.Wrapper>
  );
};

export default Kebab;
