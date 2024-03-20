import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AddBar from '../../components/AddBar/AddBar';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import FolderNavbar from '../../components/Navbar/Folder/FolderNavbar';
import FoldersNavbar from '../../components/Navbar/Folders/FoldersNavbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { GET_FOLDERS_API_URL } from '../../constant/constant';
import useFetchData from '../../hooks/useFetchData';
import styles from './Folder.module.scss';

const Folder = () => {
  const [selectedItem, setSelectedItem] = useState({ id: 'all', name: '전체' });

  const { data: linksData } = useFetchData(
    `users/1/links?folderId=${selectedItem.id === 'all' ? '' : selectedItem.id}`
  );
  const { data: foldersData } = useFetchData(GET_FOLDERS_API_URL);

  const links = linksData
    ? linksData.data.map(link => {
      const { created_at, image_source, ...rest } = link;
      return { createdAt: created_at, imageSource: image_source, ...rest };
    })
    : [];
  const hasLinks = links.length !== 0;

  const folders = foldersData ? [{ id: 'all', name: '전체' }, ...foldersData.data] : [];
  const hasFolders = folders.length !== 0;

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
            {selectedItem.id !== 'all' && <FolderNavbar folderName={selectedItem.name} />}
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
