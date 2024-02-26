import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const [folderData, setFolderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/users/1/folders');
      if (response.status === 200) {
        setFolderData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    fetchData();
    setIsLoading(true);
  }, [filter]);

  return (
    <div>
      <FilterBar filter={filter} onchangeFilter={setFilter} folderData={folderData}></FilterBar>
    </div>
  );
}

const Button = styled.button`
  display: flex;
  width: auto;
  height: 44px;
  flex-direction: column;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
  font-size: 16px;
  white-space: nowrap;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;
  }
  @media (min-width: 357px) and (max-width: 767px) {
    display: flex;
    padding: 6px 10px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: #fff;

    color: #000;

    /* Linkbrary/body2-regular */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:hover {
    background-color: $color-gray10;
  }

  &.selected {
    background-color: $color-primary;
    color: $color-white;
  }
`;

const FilterBarLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

function FilterBar({ filter, onchangeFilter, folderData }) {
  return (
    <div>
      <FilterBarLeft>
        <Button
          key="all"
          onClick={() => {
            onchangeFilter('all');
          }}
          selected={filter === 'all'}>
          <span>전체</span>
        </Button>
        {folderData?.map(({ id, name }) => (
          <Button
            key={id}
            onClick={() => {
              onchangeFilter(id);
            }}
            selected={filter === id}>
            {name}
          </Button>
        ))}
      </FilterBarLeft>
    </div>
  );
}
