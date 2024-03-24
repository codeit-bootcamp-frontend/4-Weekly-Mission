import styled from "styled-components";
import iconSearch from "../../assets/search.svg";
import TextInput from "../pages/folderPage/TextInput";

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  padding: 1.5rem 1.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  &::before {
    content: "";
    display: block;
    margin-right: 1rem;
    min-width: 1.6rem;
    min-height: 1.6rem;
    background: url(${iconSearch}) no-repeat center/contain;
  }

  @media (max-width: 767px) {
    margin-bottom: 3.2rem;
    padding: 1.3rem 1.6rem;

    &::before {
      margin-right: 0.6rem;
    }
  }
`;

const SearchBar = () => (
  <InputGroup>
    <TextInput type="text" placeholder="링크를 검색해 보세요" />
  </InputGroup>
);

export default SearchBar;
