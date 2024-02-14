import { useState } from 'react';
import { getFolder } from '../../utils/api';
import UserProfile from '../../components/UserProfile/UserProfile';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import * as S from './Home.styles';

const Home = () => {
  const [folder, setFolder] = useState({});
  const { owner, links, name } = folder;

  const fetchFolder = async () => {
    try {
      const { folder } = await getFolder();
      setFolder(folder);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.AppLayout>
      <S.HomeSection>
        {owner && (
          <UserProfile
            title={`@${owner?.name}`}
            image={{ URL: owner?.profileImageSource, size: '9rem' }}
            direction='column'
          />
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

export default Home;
