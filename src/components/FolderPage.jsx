import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserFolders, getUserLinks } from '../util/api';
import FolderNameButton from './FolderNameButton';
import LinkCard from './LinkCard';

const FolderNameList = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const FolderPage = () => {
  const [folderList, setFolderList] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('전체');
  const [links, setLinks] = useState([]);
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
    <>
      <FolderNameList>
        <li>
          <FolderNameButton
            name={'전체'}
            id={null}
            selectedFolder={selectedFolder}
            changeSelectedFolder={setSelectedFolder}
            setFolderId={setFolderId}
          />
        </li>
        {folderList.map(folder => (
          <li key={folder.id}>
            <FolderNameButton
              name={folder.name}
              id={folder.id}
              selectedFolder={selectedFolder}
              changeSelectedFolder={setSelectedFolder}
              setFolderId={setFolderId}
            />
          </li>
        ))}
      </FolderNameList>
      <h1>{selectedFolder}</h1>
      {links.length ? (
        <ul>
          {links.map(({ id, url, created_at, description, image_source }) => (
            <li key={id}>
              <LinkCard url={url} createdAt={created_at} desc={description} imgUrl={image_source} />
            </li>
          ))}
        </ul>
      ) : (
        <span>저장된 링크가 없습니다</span>
      )}
    </>
  );
};

export default FolderPage;
