import { useEffect, useState } from 'react';
import AddBar from '../../components/AddBar/AddBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getFolders } from '../../utils/api';
import * as S from './Folder.styles.js';
import Navbar from '../../components/Navbar/Navbar';
const Folder = () => {
  const [folders, setFolders] = useState([]);
  const fetchFolders = async () => {
    const folders = await getFolders();
    setFolders(folders);
  };

  useEffect(() => {
    fetchFolders();
  }, []);
  return (
    <S.FolderLayout>
      <AddBar />
      <S.FolderSection>
        <S.FolderBox>
          <SearchBar />
          <Navbar items={folders} />
        </S.FolderBox>
      </S.FolderSection>
    </S.FolderLayout>
  );
};

export default Folder;
