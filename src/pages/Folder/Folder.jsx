import { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import AddBar from '../../components/AddBar/AddBar';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import FolderNavbar from '../../components/Navbar/Folder/FolderNavbar';
import FoldersNavbar from '../../components/Navbar/Folders/FoldersNavbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getFolders, getLinks } from '../../utils/api';

import styles from './Folder.module.scss';

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ id: 'all', name: '전체' });
  const hasFolders = folders.length;
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
    <section className={styles.layout}>
      <div className={styles.addBarBox}>
        <AddBar className={styles.addBar} />
      </div>
      <main className={styles.mainLayout}>
        <SearchBar />
        <div className={styles.mainBox}>
          {hasFolders && (
            <FoldersNavbar items={folders} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          )}
          <div className={styles.mainTitle}>
            <h2>{selectedItem.name}</h2>
            {selectedItem.id !== 'all' && <FolderNavbar />}
          </div>
          {hasLinks ? <Cards links={links} /> : <Empty />}
        </div>
        <button className={styles.actionButton}>
          <span>폴더 추가</span>
          <FiPlus />
        </button>
      </main>
    </section>
  );
};

export default Folder;
