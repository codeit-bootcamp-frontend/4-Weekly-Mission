import { useContext, useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import { getFolder } from '../../utils/api';
import * as S from './Shared.styles';
import { AuthContext } from '../../context/AuthContext';
import Empty from '../../components/Empty/Empty';

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
    <S.AppLayout>
      <section>
        {hasUser && (
          <UserProfile title={`@${user?.name}`} image={{ URL: user?.imageSource, size: '9rem' }} direction='column' />
        )}
        {hasUser && <S.HomeFolderName>{name}</S.HomeFolderName>}
      </section>
      <S.MainLayout>
        <S.MainBox>
          <SearchBar />
          {hasUser ? <Cards links={links} /> : <Empty />}
        </S.MainBox>
      </S.MainLayout>
    </S.AppLayout>
  );
};

export default Shared;
