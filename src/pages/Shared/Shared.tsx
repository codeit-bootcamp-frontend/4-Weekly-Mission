import { useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import { AuthContext } from '../../context/AuthContext';
import useFetchData from '../../hooks/useFetchData';
import { FolderType, LinkType } from '../../types/types';
import { getFolderURL } from '../../utils/apis';
import styles from './Shared.module.scss';

const Shared = () => {
  const { user } = useContext(AuthContext);
  const [searchedLinks, setSearchedLinks] = useState<LinkType[]>([]);
  const { data: folderData }: { data: { folder: FolderType } | null } = useFetchData(getFolderURL);
  const { links, name } = folderData
    ? folderData.folder
    : {
      links: [],
      name: ''
    };

  const updateLinks = (filteredLinks: LinkType[]) => {
    setSearchedLinks(filteredLinks);
  };

  useEffect(() => {
    setSearchedLinks(links);
  }, [folderData]);

  return (
    <div className={styles.layout}>
      <section>
        {user && <UserProfile title={`@${user.name}`} image={user.image_source} size='lg' direction='column' />}
        {user && <h2 className={styles.userName}> {name} </h2>}
      </section>
      <main className={styles.mainLayout}>
        <div className={styles.mainBox}>
          <SearchBar links={links} onUpdateLinks={updateLinks} />
          {user ? <Cards links={searchedLinks} /> : <Empty />}
        </div>
      </main>
    </div>
  );
};

export default Shared;
