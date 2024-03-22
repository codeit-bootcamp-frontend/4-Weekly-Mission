import React, { useState } from 'react';
import { useFetchFolders } from '../../hooks/useFolderContainer';
import { fetchFolders } from '../../api/fetchFolders';
import FolderLinks from './FolderLinks';

interface Link {
  id: string;
  title: string;
  url: string;
}

const FolderContent: React.FC = () => {
  const { folders, error: folderError } = useFetchFolders();
  const [links, setLinks] = useState<Link[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const handleFolderClick = (folderId: string) => {
    fetchFolders(folderId)
      .then((data: Link[]) => setLinks(data))
      .catch((err: Error) => setError(err));
  };

  if (folderError) return <div>Error: {(folderError as Error).message}</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <FolderLinks
      folders={folders}
      links={links}
      onFolderClick={handleFolderClick}
    />
  );
};

export default FolderContent;
