import Card from '../Card/Card';
import Page from '../FilterBar/FilterBar';
import search from './images/search.svg';
import styled from 'styled-components';
import './Main.css';

const Bar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;

const FilterBarRight = styled.div`
  display: flex;
  display-direction: column;
  gap: 4px;
  color: #6d6afe;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
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
      <div className="mainContent">
        <Card />
      </div>
    </main>
  );
}
