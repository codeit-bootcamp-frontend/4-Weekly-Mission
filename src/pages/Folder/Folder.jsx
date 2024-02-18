import { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import AddBar from '../../components/AddBar/AddBar';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import FolderNavbar from '../../components/Navbar/Folder/FolderNavbar';
import FoldersNavbar from '../../components/Navbar/Folders/FoldersNavbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getFolders, getLinks } from '../../utils/api';

import * as S from './Folder.styles.js';

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ id: 'all', name: '전체' });
  const hasFolders = folders.length !== 0;
  const hasLinks = links.length !== 0;

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await getLinks(`users/1/links?folderId=${selectedItem.id === 'all' ? '' : selectedItem.id}`);
      setLinks(links);
    };
    fetchLinks();
  }, [selectedItem]);

  useEffect(() => {
    const fetchFolders = async () => {
      const folders = await getFolders();
      setFolders([{ id: 'all', name: '전체' }, ...folders]);
    };
    fetchFolders();
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderAddBarBox>
        <AddBar />
      </S.FolderAddBarBox>
      <S.FolderSection>
        <S.FolderSearchBarBox>
          <SearchBar />
        </S.FolderSearchBarBox>
        <S.FolderBox>
          {hasFolders && (
            <FoldersNavbar items={folders} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          )}
          <S.FolderTitleBox>
            <h2>{selectedItem.name}</h2>
            {selectedItem.id !== 'all' && <FolderNavbar />}
          </S.FolderTitleBox>
          {hasLinks ? <Cards links={links} /> : <Empty />}
        </S.FolderBox>
        <S.FolderActionButton>
          <span>폴더 추가</span>
          <FiPlus />
        </S.FolderActionButton>
      </S.FolderSection>
    </S.FolderLayout>
  );
};

export default Folder;
