import styled from 'styled-components';

const SearchBar = () => {
  return (
    <StyledSection>
      <input placeholder='링크를 검색해 보세요.' />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;

  input {
    padding: 1rem;
    border: none;
    flex-grow: 1;
    border-radius: 8px;
    background: var(--color-gray-300);
  }
`;

export default SearchBar;
