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
} from './Folder.style';

const Folder = () => {
  const OPTION = [
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
  return (
    <Wrapper>
      <FolderWrapper>
        <CategoryWrapper>
          <CategoryButton>전체</CategoryButton>
          <CategoryButton>전체</CategoryButton>
          <CategoryButton>전체</CategoryButton>
          <CategoryButton>전체</CategoryButton>
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
        <FolderTitle>유용한 글</FolderTitle>
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
      <CardWrapper />
    </Wrapper>
  );
};

export default Folder;
