import { useState } from 'react';
import FolderListArea from './FolderListArea';
import LinkList from './LinkList';
import { totalFolderId } from '../../../util/constants';
import { FolderId } from '../../../types/types';

interface FolderArea {
  searchString: string;
}

const FolderArea = ({ searchString }: FolderArea) => {
  const [selectedFolderId, setSelectedFolderId] = useState<FolderId>(totalFolderId);

  const handleFolderNameClick = (id: FolderId) => {
    setSelectedFolderId(id);
  };

  return (
    <>
      <FolderListArea selectedFolderId={selectedFolderId} onFolderNameClick={handleFolderNameClick} />
      <LinkList selectedFolderId={selectedFolderId} searchString={searchString}/>
    </>
  );
};

export default FolderArea;
