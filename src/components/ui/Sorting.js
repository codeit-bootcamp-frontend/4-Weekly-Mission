import { useEffect, useState } from 'react';
import { HREF } from '../../utils/constants';
import './Sorting.css';

const Sorting = ({ onSelect }) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoldersData = async () => {
      try {
        const response = await fetch(`${HREF.BASE_URL}/api/users/1/folders`);
        if (!response.ok) {
          throw new Error('Failed to fetch folder data');
        }
        const foldersData = await response.json();
        setFolders(foldersData.data);
      } catch (error) {
        console.error('Error data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoldersData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleFolderClick = async (folderId, folderName) => {
    try {
      let linksUrl = `${HREF.BASE_URL}/api/users/1/links`;
      if (folderId !== '전체') {
        linksUrl = `${HREF.BASE_URL}/api/users/1/links?folderId=${folderId}`;
      }
      const response = await fetch(linksUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch links data');
      }
      const linksData = await response.json();
      onSelect(folderName, linksData.data);
    } catch (error) {
      console.error('Error data:', error);
    }
  };

  return (
    <div className='sort-toolbar'>
      <button
        className='sort-item sort-all'
        onClick={() => handleFolderClick('전체', '전체')}
      >
        전체
      </button>
      {folders.map((folder) => (
        <button
          key={folder.id}
          className={'sort-item'}
          onClick={() => handleFolderClick(folder.id, folder.name)}
        >
          {folder.name}
        </button>
      ))}
    </div>
  );
};

export default Sorting;
