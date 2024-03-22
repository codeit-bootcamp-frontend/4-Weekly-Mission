import { useContext, useEffect, useRef } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType, currentFolderDataType } from '@/src/type';
import {
  SelectButton,
  KebabButton,
  SelectWrapper,
  Wrapper,
} from './Kebeb.style';

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
      folder: undefined,
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
      : undefined;

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
    <Wrapper ref={wraperRef}>
      <KebabButton
        src="/images/kebab.svg"
        alt="kebab"
        width={21}
        height={17}
        onClick={clickKebabButton}
      />
      {kebabID === cardID && (
        <SelectWrapper>
          <SelectButton onClick={openDeleteModal}>삭제하기</SelectButton>
          <SelectButton onClick={openAddModal}>폴더에 추가</SelectButton>
        </SelectWrapper>
      )}
    </Wrapper>
  );
};

export default Kebab;
