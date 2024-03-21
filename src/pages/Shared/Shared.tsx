import { useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import { GET_FOLDER_API_URL } from '../../constant/constant';
import { AuthContext } from '../../context/AuthContext';
import useFetchData from '../../hooks/useFetchData';
import { FolderType, LinkType } from '../../types/types';
import styles from './Shared.module.scss';

const Shared = () => {
  const { user } = useContext(AuthContext);
  const hasUser = user && Object.keys(user).length !== 0;
  const [searchedLinks, setSearchedLinks] = useState<LinkType[]>([]);
  const { data: folderData }: { data: { folder: FolderType } | null } = useFetchData(GET_FOLDER_API_URL);
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
        {hasUser && <UserProfile title={`@${user.name}`} image={user.image_source} size='lg' direction='column' />}
        {hasUser && <h2 className={styles.userName}> {name} </h2>}
      </section>
      <main className={styles.mainLayout}>
        <div className={styles.mainBox}>
          <SearchBar links={links} onUpdateLinks={updateLinks} />
          {hasUser ? <Cards links={searchedLinks} /> : <Empty />}
        </div>
      </main>
    </div>
  );
};

export default Shared;
