import { React, useState, useEffect } from 'react';
import './FilterBar.css';
import useGetLink from '../apis/useGetLink';
import Card from '../Card/Card';
import { DEFAULT_FOLDER } from '../../utils/constant';
import { axiosInstance } from '../../utils/axiosInstance';

const mapFormatDate = data => {
  const formattedFolder = data.map(({ name, id }) => ({ name, id }));
  return [DEFAULT_FOLDER, ...formattedFolder];
};

export default function FilterBar() {
  const [folderId, setFolderId] = useState(DEFAULT_FOLDER.id);
  const [folderData, setFolderData] = useState([]);
  const [folderName, setFolderName] = useState(DEFAULT_FOLDER.name);
  const { loading, error, data: linksData } = useGetLink(folderId);

  const handleChange = (id, name) => {
    setFolderId(id);
    setFolderName(name);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosInstance.get('users/4/folders');
        setFolderData(mapFormatDate(data.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="filterBarArea">
      <div className="filterBar">
        {folderData.map(({ id, name }) => (
          <button
            key={id}
            className={`filterBarButton ${folderId == id ? 'selected' : ''}`}
            type="button"
            value={id}
            onClick={() => {
              handleChange(id, name);
            }}>
            {name}
          </button>
        ))}
      </div>
      <div className="folderName">{folderName}</div>
      <div className={!linksData.length ? '' : 'cardStyle'}>
        {!loading ? <Card data={linksData} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}
