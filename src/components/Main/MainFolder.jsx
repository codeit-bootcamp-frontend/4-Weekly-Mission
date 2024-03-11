import Page from '../FilterBar/FilterBar';
import search from './images/search.svg';
import styled from 'styled-components';
import './Main.css';

const Bar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  flex-direcion: column;
  align-items: center;
  white-space: nowrap;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: auto;
  }
  @media (min-width: 357px) and (max-width: 767px) {
    width: auto;
  }
`;

const FilterBarRight = styled.div`
  display: flex;
  gap: 4px;
  color: #6d6afe;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const FloatingButton = styled.button`
  display: none;
  @media (min-width: 357px) and (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    display: flex;
    padding: 8px 24px;
    align-items: flex-start;
    gap: 20px;
    z-index: 1;

    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    color: var(--Linkbrary-gray10, #e7effb);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;

export default function Main() {
  return (
    <main id="mainShared">
      <div className="searchBar">
        <img src={search} alt="돋보기 아이콘" />
        <p>링크를 검색해 보세요</p>
      </div>
      <Bar>
        <Page />
        <FilterBarRight>
          <p>폴더 추가</p>
          <img src={`${process.env.PUBLIC_URL}/images/add.svg`} alt="Add Icon"></img>
        </FilterBarRight>
      </Bar>
      <FloatingButton>
        <p>폴더 추가</p>
        <img src={`${process.env.PUBLIC_URL}/images/addWhite.svg`} alt="Add Icon" />
      </FloatingButton>
      <div className="mainContent"></div>
    </main>
  );
}
