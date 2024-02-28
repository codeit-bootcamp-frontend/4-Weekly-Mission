import { useContext, useEffect, useState } from 'react';

import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import { AuthContext } from '../../context/AuthContext';
import { getFolder } from '../../utils/api';

import styles from './Shared.module.scss';

const Shared = () => {
  const [folder, setFolder] = useState({ links: [], name: null });
  const { links, name } = folder;
  const { user } = useContext(AuthContext);
  const hasUser = Object.keys(user).length !== 0;

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const { folder } = await getFolder();
        setFolder(folder);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolder();
  }, []);

  return (
    <div className={styles.layout}>
      <section>
        {hasUser && (
          <UserProfile title={`@${user?.name}`} image={{ URL: user?.imageSource, size: '9rem' }} direction='column' />
        )}
        {hasUser && <h2 className={styles.userName}>{name}</h2>}
      </section>
      <main className={styles.mainLayout}>
        <div className={styles.mainBox}>
          <SearchBar />
          {hasUser ? <Cards links={links} /> : <Empty />}
        </div>
      </main>
    </div>
  );
};

export default Shared;
