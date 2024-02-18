import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { getUserFolders, getUserLinks } from '../../util/api';
import FolderListArea from './FolderListArea';
import LinkList from './LinkList';

const MainArea = styled.main`
  margin: 0 auto;
  padding: 4rem 3.2rem;
  max-width: 106rem;
`;

const Main = () => {
  const [folders, setFolderList] = useState([]);
  const [links, setLinks] = useState([]);
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

  const handleLinkLoad = async id => {
    try {
      const { data } = await getUserLinks(id);
      setLinks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  useEffect(() => {
    handleLinkLoad(folderId);
  }, [folderId]);

  return (
    <MainArea>
      <SearchBar />
      <FolderListArea
        folders={folders}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        setFolderId={setFolderId}
      />
      <LinkList links={links} selectedFolder={selectedFolder} />
    </MainArea>
  );
};

export default Main;
