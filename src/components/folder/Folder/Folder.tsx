import { CategoryDataType, folderCardDataType } from '@/src/type';
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
}

interface folderDataType {
  title: string | null;
  id: string | null;
}

interface Props {
  kebabID: number | null;
  currentFolder: folderDataType | null;
  changeKebabID: (value: number | null) => void;
  changeCurrentFolder: (value: folderDataType | null) => void;
  folderData: CategoryDataType;
  cardData: folderCardDataType;
}

const Folder = ({
  kebabID,
  currentFolder,
  changeKebabID,
  changeCurrentFolder,
  folderData,
  cardData,
}: Props) => {
  const clickCategoryButton = (e: React.MouseEvent<HTMLDivElement>) => {
    changeCurrentFolder({
      title: (e.target as HTMLElement).textContent,
      id: (e.target as HTMLElement).id,
    });
  };

  const OPTION: obj[] = [
    {
      src: '/images/share.svg',
      text: '공유',
    },
    {
      src: '/images/pen.svg',
      text: '이름 변경',
    },
    {
      src: '/images/delete.svg',
      text: '삭제',
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
          <AddFolderText>폴더 추가</AddFolderText>
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
              <OptionButtonWrapper key={index}>
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
              kebabID={kebabID}
              changeKebabID={changeKebabID}
              card={{
                id: card.id,
                createdAt: card.created_at,
                url: card.url,
                title: card.title,
                description: card.description,
                imageSource: card.image_source,
              }}
            />
          ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Folder;
