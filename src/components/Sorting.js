import { useEffect, useState } from 'react';
import { LINK_URL } from '../utils/constants';
import './Sorting.css';

const Sorting = ({ onSelect }) => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectFocus, setSelectFocus] = useState(null);

  useEffect(() => {
    const fetchFoldersData = async () => {
      try {
        const response = await fetch(
          `${LINK_URL.BASE_API_URL}/api/users/1/folders`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setFolders(jsonData.data);
      } catch (error) {
        console.error('Error data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoldersData();
  }, []);

  const handleFolderClick = async (folderId, folderName) => {
    try {
      let folderLinks = `${LINK_URL.BASE_API_URL}/api/users/1/links`;
      if (folderId !== '전체') {
        folderLinks = `${LINK_URL.BASE_API_URL}/api/users/1/links?folderId=${folderId}`;
      }
      const response = await fetch(folderLinks);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      onSelect(folderName, jsonData.data);
    } catch (error) {
      console.error('Error data', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderBlur = () => {
    setSelectFocus(null);
  };

  const handleFolderFocus = (folderId) => {
    setSelectFocus(folderId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='sort-toolbar'>
      <button
        className={
          selectFocus === '전체' ? 'sort-item-focus' : 'sort-item sort-all'
        }
        onClick={() => handleFolderClick('전체', '전체')}
        onBlur={handleFolderBlur}
      >
        전체
      </button>
      {folders.map((folder) => (
        <button
          key={folder.id}
          className={
            selectFocus === folder.id ? 'sort-item-focus' : 'sort-item'
          }
          onClick={() => handleFolderClick(folder.id, folder.name)}
          onBlur={handleFolderBlur}
          onFocus={() => handleFolderFocus(folder.id)}
        >
          {folder.name}
        </button>
      ))}
    </div>
  );
};

export default Sorting;
