import { useContext } from 'react';

import Cards from '../../components/Cards/Cards';
import Empty from '../../components/Empty/Empty';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import { GET_FOLDER_API_URL } from '../../constant/constant';
import { AuthContext } from '../../context/AuthContext';
import useFetchData from '../../hooks/useFetchData';

import styles from './Shared.module.scss';

const Shared = () => {
  const { user } = useContext(AuthContext);
  const hasUser = Object.keys(user).length !== 0;

  const { data: folderData } = useFetchData(GET_FOLDER_API_URL);
  const { links, name } = folderData
    ? folderData.folder
    : {
      links: [],
      name: ''
    };

  return (
    <div className={styles.layout}>
      <section>
        {hasUser && <UserProfile title={`@${user?.name}`} image={user?.imageSource} size='lg' direction='column' />}
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
