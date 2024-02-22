import { useEffect, useState } from 'react';
import { getUserFolders } from '../../../util/api';
import FolderListArea from './FolderListArea';
import LinkList from './LinkList';

const FolderArea = () => {
  const [folders, setFolderList] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('전체');
  const [folderId, setFolderId] = useState(0);

  const handleFolderLoad = async () => {
    try {
      const { data } = await getUserFolders();
      setFolderList(data);
    } catch {
      setFolderList([]);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <>
      <FolderListArea
        folders={folders}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        setFolderId={setFolderId}
      />
      <LinkList folderId={folderId} selectedFolder={selectedFolder} />
    </>
  );
};

export default FolderArea;
