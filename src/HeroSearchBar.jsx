import styled from "styled-components";

const StyledHeroSearchBar = styled.input`
  display: flex;
  width: 50rem;
  padding: 1rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 0.9375rem;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export default function HeroSearchBar() {
  return (
    <form className="SearchBar">
      <StyledHeroSearchBar type="text" />
      {/* <input type="search" placeholder="링크를 검색해 보세요." />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className="SearchBar-icon"
      /> */}
    </form>
  );
}
