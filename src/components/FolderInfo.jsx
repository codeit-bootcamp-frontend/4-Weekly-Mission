import { useEffect, useState } from 'react';
import { getFolderData } from '../apis/api';

const FolderInfo = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState('');

  const fetchFolderData = async () => {
    const res = await getFolderData();
    setName(res.folder.name);
    setData(res.folder.owner);
  };

  useEffect(() => {
    fetchFolderData();
  }, []);

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.profileImageSource}</div>
      <div>{name}</div>
    </div>
  );
};

export default FolderInfo;
