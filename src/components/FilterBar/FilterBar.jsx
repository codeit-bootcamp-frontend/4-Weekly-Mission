import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGetLink } from '../../dataAccessLink/useGetLink';
import Card from '../Card/Card';

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

export default function Page() {
  const [filter, setFilter] = useState('all');
  return (
    <div>
      <FilterBar filter={filter} onChangeFilter={setFilter}></FilterBar>
    </div>
  );
}

function FilterBar({ filter, onChangeFilter }) {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://bootcamp-api.codeit.kr/api/users/1/folders');
        setFolderData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const { execute, loading, error, data: linksData } = useGetLink();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = async folderId => {
    const URL =
      folderId === 'all'
        ? `https://bootcamp-api.codeit.kr/api/users/1/links`
        : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`;
    try {
      const response = await axios.get(URL);
      setFolderData(response.data.data);
    } catch (error) {
      console.error('Error fetching folder links:', error);
    }
  };
  return (
    <div>
      <FilterBarLeft>
        <Button key="all" onClick={() => handleChange('all')} selected={filter === 'all'}>
          <span>전체</span>
        </Button>
        {folderData?.map(({ id, name }) => (
          <Button key={id} onClick={() => handleChange(id)} selected={filter === id}>
            {name}
          </Button>
        ))}
        <Card cardData={linksData}></Card>;
      </FilterBarLeft>
    </div>
  );
}
