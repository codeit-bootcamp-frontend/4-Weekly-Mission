import {
  Wrapper,
  SearchWrapper,
  SearchInput,
  ImageIcon,
  AddButton,
} from './SubHeader.style';

const SubHeader = () => (
  <Wrapper>
    <SearchWrapper>
      <SearchInput placeholder="링크를 추가해보세요" />
      <ImageIcon src="/images/link.svg" alt="링크" width={20} height={20} />
      <AddButton>추가하기</AddButton>
    </SearchWrapper>
  </Wrapper>
);
export default SubHeader;
