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

interface folderData {
  title: string | null;
  id: string | null;
}

interface Props {
  currentFolder: folderData | null;
  changeCurrentFolder: (value: folderData | null) => void;
}

const Folder = ({ currentFolder, changeCurrentFolder }: Props) => {
  const clickCategoryButton = (e: React.MouseEvent<HTMLDivElement>) => {
    changeCurrentFolder({
      title: (e.target as HTMLElement).textContent,
      id: (e.target as HTMLElement).id,
    });
  };
  const Content: string[] = [
    '전체',
    '즐겨찾기',
    '코딩 팁',
    '채용 사이트',
    '유용한 글',
    '나만의 장소',
    'test1',
    'test2',
  ];
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
  if (Content.length === 0) {
    return <HollowWrapper>저장된 링크가 없습니다</HollowWrapper>;
  }
  return (
    <Wrapper>
      <FolderWrapper>
        <CategoryWrapper>
          {Content.map((text, index) => (
            <CategoryButton
              key={index}
              id={String(index)}
              onClick={clickCategoryButton}
              $checked={currentFolder?.id === String(index)}
            >
              {text}
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
      </TitleWrapper>
      <CardWrapper>
        <Card
          card={{
            id: 1,
            createdAt: undefined,
            url: undefined,
            title: 'test',
            description: 'test',
            imageSource: undefined,
          }}
        />
      </CardWrapper>
    </Wrapper>
  );
};

export default Folder;
