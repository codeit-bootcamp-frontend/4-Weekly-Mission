import { useEffect, useState } from 'react';
import { getUserFolders } from '../../util/api';
import FolderSection from './folderPage/FolderSection';
import AddLinkArea from './folderPage/AddLinkArea';
import { FoldersContext } from '../context/foldersContext';
import { Folder } from '../../types/types';

const FolderPage = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      try {
        const folders = await getUserFolders();
        setFolders(folders);
      } catch (err) {
        console.error(err);
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
