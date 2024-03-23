import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { getUserLinks } from '../../../util/api';
import FolderList from '../sharedPage/FolderList';
import UpdateBtnList from './UpdateBtnList';
import { FoldersContext } from '../../context/foldersContext';
import { totalFolderName } from '../../../util/constants';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const NoLinks = styled.p`
  padding: 4.1rem 0 3.5rem;
  width: 100%;
  line-height: 2.4rem;
  font-size: 1.6rem;
  text-align: center;
`;

const selectFolderName = (folders, selectedFolderId) => {
  const selectedFolder = folders.filter(folder => folder.id === selectedFolderId)[0];
  return selectedFolder?.name || totalFolderName;
};

const LinkList = ({ selectedFolderId }) => {
  const folders = useContext(FoldersContext);
  const [links, setLinks] = useState([]);

  const selectedFolderName = selectFolderName(folders, selectedFolderId);

  const fetchLinks = async id => {
    try {
      const links = await getUserLinks(id);
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLinks(selectedFolderId);
  }, [selectedFolderId]);

  return (
    <>
      <Header>
        <Title>{selectedFolderName}</Title>
        {selectedFolderName !== totalFolderName && (
          <UpdateBtnList selectedFolderId={selectedFolderId} selectedFolderName={selectedFolderName} />
        )}
      </Header>
      {links?.length ? <FolderList folderList={links} /> : <NoLinks>저장된 링크가 없습니다</NoLinks>}
    </>
  );
};
export default LinkList;
