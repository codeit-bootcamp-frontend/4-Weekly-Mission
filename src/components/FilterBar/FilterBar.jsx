import { useState, useEffect } from 'react';
import axios from 'axios';
import './FilterBar.css';
import useGetLink from '../apis/useGetLink';
import Card from '../Card/Card';

export default function FilterBar() {
  const [folderData, setFolderData] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const { loading, error, data: linksData } = useGetLink();

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
    <div className="filterBarArea">
      <div className="filterBar">
        <button
          className="filterBarButton"
          key="all"
          onClick={() => handleChange('all')}
          selected={setFilter === 'all'}>
          <span>전체</span>
        </button>
        {folderData?.map(({ id, name }) => (
          <button className="filterBarButton" key={id} onClick={() => handleChange(id)} selected={setFilter === id}>
            {name}
          </button>
        ))}
      </div>
      <div className="cardStyle">
        <Card data={linksData} />
      </div>
    </div>
  );
}
