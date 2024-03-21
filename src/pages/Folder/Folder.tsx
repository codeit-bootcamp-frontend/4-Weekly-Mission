import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AddBar from '../../components/AddBar/AddBar';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import FolderNavbar from '../../components/Navbar/Folder/FolderNavbar';
import FoldersNavbar from '../../components/Navbar/Folders/FoldersNavbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { GET_FOLDERS_API_URL } from '../../constant/constant';
import useFetchData from '../../hooks/useFetchData';
import { LinkType, UserFolderType, UserLinkType } from '../../types/types';
import styles from './Folder.module.scss';

const Folder = () => {
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string }>({ id: 0, name: '전체' });
  const [searchedLinks, setSearchedLinks] = useState<LinkType[]>([]);
  const { data: linksData } = useFetchData<{ data: UserLinkType[] }>(
    `users/4/links?folderId=${selectedItem.id === 0 ? '' : selectedItem.id}`
  );
  const { data: foldersData } = useFetchData<{ data: UserFolderType[] }>(GET_FOLDERS_API_URL);

  const links = linksData
    ? linksData.data.map(link => {
      const { created_at, updated_at, image_source, folder_id, ...rest } = link;
      return {
        createdAt: created_at,
        updatedAt: updated_at,
        imageSource: image_source,
        folderId: folder_id,
        ...rest
      };
    })
    : [];

  useEffect(() => {
    setSearchedLinks(links);
  }, [linksData]);

  const folders = foldersData ? [{ id: 0, name: '전체' }, ...foldersData.data] : [];
  const hasLinks = searchedLinks.length !== 0;
  const hasFolders = folders.length !== 0;
  const changeSelectItem = (id: number, name: string) => {
    setSelectedItem({ id, name });
  };
  const updateLinks = (filteredLinks: LinkType[]) => {
    setSearchedLinks(filteredLinks);
  };

  return (
    <section className={styles.layout}>
      <div className={styles.addBarBox}>
        <AddBar />
      </div>
      <main className={styles.mainLayout}>
        <SearchBar links={links} onUpdateLinks={updateLinks} />
        <div className={styles.mainBox}>
          {hasFolders && (
            <FoldersNavbar items={folders} selectedItem={selectedItem} onChangeSelectItem={changeSelectItem} />
          )}
          <div className={styles.mainTitle}>
            <h2>{selectedItem.name}</h2>
            {selectedItem.id !== 0 && <FolderNavbar folderName={selectedItem.name} />}
          </div>
          {hasLinks ? <Cards links={searchedLinks} /> : <Empty />}
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
