import { CategoryDataType, folderCardDataType } from '@/src/type';
import { useContext } from 'react';
import folderContext from '@/src/context/folderContext';
import {
  Wrapper,
  FolderWrapper,
  CategoryWrapper,
  CategoryButton,
  AddFolderWrapper,
  AddFolderText,
  AddFolderIcon,
  TitleWrapper,
  FolderTitle,
  OptionWrapper,
  OptionButtonWrapper,
  OptionIcon,
  OptionText,
  CardWrapper,
  HollowWrapper,
} from './Folder.style';
import Card from '../../commons/Card/Card';

interface obj {
  src: string;
  text: string;
  click: (type: string) => void;
}

interface folderDataType {
  title: string | null;
  id: string | null;
}

interface Props {
  currentFolder: folderDataType | null;
  changeCurrentFolder: (value: folderDataType | null) => void;
  folderData: CategoryDataType | null;
  cardData: folderCardDataType | null;
}

const Folder = ({
  currentFolder,
  changeCurrentFolder,
  folderData,
  cardData,
}: Props) => {
  const { changeModalData } = useContext(folderContext);
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
      folder: undefined,
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
      folder: undefined,
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
    return <HollowWrapper>저장된 링크가 없습니다</HollowWrapper>;
  }
  return (
    <Wrapper>
      <FolderWrapper>
        <CategoryWrapper>
          <CategoryButton
            id="0"
            onClick={clickCategoryButton}
            $checked={currentFolder?.id === '0'}
          >
            전체
          </CategoryButton>
          {folderData &&
            folderData.category?.map((folder) => (
              <CategoryButton
                key={folder.id}
                id={String(folder.id)}
                onClick={clickCategoryButton}
                $checked={currentFolder?.id === String(folder.id)}
              >
                {folder.name}
              </CategoryButton>
            ))}
        </CategoryWrapper>
        <AddFolderWrapper>
          <AddFolderText onClick={openModal}>폴더 추가</AddFolderText>
          <AddFolderIcon
            src="/images/add.svg"
            alt="추가"
            width={16}
            height={16}
          />
        </AddFolderWrapper>
      </FolderWrapper>
      <TitleWrapper>
        <FolderTitle>{currentFolder?.title}</FolderTitle>
        {currentFolder?.id !== '0' && (
          <OptionWrapper>
            {OPTION.map((option, index) => (
              <OptionButtonWrapper
                key={index}
                onClick={() => option.click(option.text)}
              >
                <OptionIcon
                  src={option.src}
                  alt={option.text}
                  width={18}
                  height={18}
                />
                <OptionText>{option.text}</OptionText>
              </OptionButtonWrapper>
            ))}
          </OptionWrapper>
        )}
      </TitleWrapper>
      <CardWrapper $empty={cardData && cardData.card?.length === 0}>
        {cardData &&
          cardData.card?.map((card) => (
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
      </CardWrapper>
    </Wrapper>
  );
};

export default Folder;
