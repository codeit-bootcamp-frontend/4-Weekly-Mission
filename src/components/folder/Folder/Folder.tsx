import {
  CategoryDataType,
  folderCardType,
  currentFolderDataType,
} from '@/src/type';
import { useContext } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import * as S from './Folder.style';
import Card from '../../commons/Card/Card';

interface obj {
  src: string;
  text: string;
  click: (type: string) => void;
}

interface Props {
  currentFolder: currentFolderDataType | null;
  changeCurrentFolder: (value: currentFolderDataType | null) => void;
  folderData: CategoryDataType | null;
  cardData: folderCardType[] | null;
}

const Folder = ({
  currentFolder,
  changeCurrentFolder,
  folderData,
  cardData,
}: Props) => {
  const { changeModalData } = useContext(FolderContext);

  const clickCategoryButton = (e: React.MouseEvent<HTMLDivElement>) => {
    changeCurrentFolder({
      title: (e.target as HTMLElement).textContent,
      id: (e.target as HTMLElement).id,
    });
  };

  const openModal = () => {
    changeModalData({
      modalType: 'AddLinkModal',
      subTitle: null,
      folder: null,
      currentFolderID: null,
      currentLinkID: null,
    });
  };
  const optionModalType = (type: string) => {
    if (type === '공유') {
      return 'SharingModal';
    }
    if (type === '이름 변경') {
      return 'EditFolderModal';
    }
    if (type === '삭제') {
      return 'DeleteFolderModal';
    }
    return null;
  };
  const openOptionModal = (type: string) => {
    changeModalData({
      modalType: optionModalType(type),
      subTitle: type === '삭제' && currentFolder ? currentFolder?.title : null,
      folder: null,
      currentFolderID: null,
      currentLinkID: null,
    });
  };

  const OPTION: obj[] = [
    {
      src: '/images/share.svg',
      text: '공유',
      click: openOptionModal,
    },
    {
      src: '/images/pen.svg',
      text: '이름 변경',
      click: openOptionModal,
    },
    {
      src: '/images/delete.svg',
      text: '삭제',
      click: openOptionModal,
    },
  ];
  if (folderData && folderData.category?.length === 0) {
    return <S.HollowWrapper>저장된 링크가 없습니다</S.HollowWrapper>;
  }
  return (
    <S.Wrapper>
      <S.FolderWrapper>
        <S.CategoryWrapper>
          <S.CategoryButton
            id="0"
            onClick={clickCategoryButton}
            $checked={currentFolder?.id === '0'}
          >
            전체
          </S.CategoryButton>
          {folderData &&
            folderData.category?.map((folder) => (
              <S.CategoryButton
                key={folder.id}
                id={String(folder.id)}
                onClick={clickCategoryButton}
                $checked={currentFolder?.id === String(folder.id)}
              >
                {folder.name}
              </S.CategoryButton>
            ))}
        </S.CategoryWrapper>
        <S.AddFolderWrapper>
          <S.AddFolderText onClick={openModal}>폴더 추가</S.AddFolderText>
          <S.AddFolderIcon
            src="/images/add.svg"
            alt="추가"
            width={16}
            height={16}
          />
        </S.AddFolderWrapper>
      </S.FolderWrapper>
      <S.TitleWrapper>
        <S.FolderTitle>{currentFolder?.title}</S.FolderTitle>
        {currentFolder?.id !== '0' && (
          <S.OptionWrapper>
            {OPTION.map((option) => (
              <S.OptionButtonWrapper
                key={option.text}
                onClick={() => option.click(option.text)}
              >
                <S.OptionIcon
                  src={option.src}
                  alt={option.text}
                  width={18}
                  height={18}
                />
                <S.OptionText>{option.text}</S.OptionText>
              </S.OptionButtonWrapper>
            ))}
          </S.OptionWrapper>
        )}
      </S.TitleWrapper>
      <S.CardWrapper $empty={cardData && cardData?.length === 0}>
        {cardData &&
          cardData?.map((card) => (
            <Card
              key={card.id}
              page="folder"
              card={{
                id: card.id,
                createdAt: card.created_at,
                url: card.url,
                title: card.title,
                description: card.description,
                imageSource: card.image_source,
              }}
              folderData={folderData}
              currentFolder={currentFolder}
            />
          ))}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Folder;
