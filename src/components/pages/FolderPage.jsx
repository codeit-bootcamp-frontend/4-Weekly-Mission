import { useEffect, useState } from 'react';
import { getUserFolders } from '../../util/api';
import FolderSection from './folderPage/FolderSection';
import AddLinkArea from './folderPage/AddLinkArea';
import { FoldersContext } from '../context/foldersContext';

const FolderPage = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      try {
        const { data } = await getUserFolders();
        setFolders(data);
      } catch {
        setFolders([]);
      }
    };

    handleFolderLoad();
  }, []);

  return (
    <FoldersContext.Provider value={folders}>
      <AddLinkArea />
      <FolderSection />
    </FoldersContext.Provider>
  );
};

export default FolderPage;
