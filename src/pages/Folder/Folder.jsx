import { useEffect, useState } from 'react';
import AddBar from '../../components/AddBar/AddBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getFolders, getLinks } from '../../utils/api';
import * as S from './Folder.styles.js';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Cards/Cards';
const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ id: 'all', name: '전체' });

  const fetchFolders = async () => {
    const folders = await getFolders();
    setFolders([{ id: 'all', name: '전체' }, ...folders]);
  };

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await getLinks(`users/1/links?folderId=${selectedItem.id === 'all' ? '' : selectedItem.id}`);
      setLinks(links);
    };
    fetchLinks();
  }, [selectedItem]);

  useEffect(() => {
    fetchFolders();
  }, []);
  return (
    <S.FolderLayout>
      <AddBar />
      <S.FolderSection>
        <S.FolderBox>
          <SearchBar />
          <Navbar items={folders} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <h2>{selectedItem.name}</h2>
          <Cards links={links} />
        </S.FolderBox>
      </S.FolderSection>
    </S.FolderLayout>
  );
};

export default Folder;
