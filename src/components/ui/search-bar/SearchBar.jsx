import styled from 'styled-components';
import SearchImg from '../../../assets/shared/Search.svg';

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 1.5rem 1.6rem;
  & input {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
  }
  & input::placeholder {
    color: #666;
  }
`;

const SearchBar = () => {
  return (
    <Container>
      <img className="icon" src={SearchImg} alt="돋보기 아이콘" />
      <input className="search-bar" type="text" placeholder="링크를 검색해 보세요."></input>
    </Container>
  );
};

export default SearchBar;
