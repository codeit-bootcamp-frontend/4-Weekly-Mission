import { useContext, useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import { getFolder } from '../../utils/api';
import * as S from './Shared.styles';
import { AuthContext } from '../../context/AuthContext';

const Shared = () => {
  const [folder, setFolder] = useState({});
  const { links, name } = folder;
  const { user } = useContext(AuthContext);

  const fetchFolder = async () => {
    try {
      const { folder } = await getFolder();
      setFolder(folder);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return (
    <S.AppLayout>
      <S.HomeSection>
        {user && (
          <UserProfile title={`@${user?.name}`} image={{ URL: user?.imageSource, size: '9rem' }} direction='column' />
        )}
        {name && <S.HomeFolderName>{name}</S.HomeFolderName>}
      </S.HomeSection>
      <S.MainLayout>
        <S.MainBox>
          <SearchBar />
          {links && <Cards links={links} />}
        </S.MainBox>
      </S.MainLayout>
    </S.AppLayout>
  );
};

export default Shared;
