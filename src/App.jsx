import { useState } from 'react';
import { getFolder } from './utils/api';
import * as S from './App.styles';
import Navbar from './components/Navbar/Navbar';
import UserProfile from './components/UserProfile/UserProfile';
import SearchBar from './components/SearchBar/SearchBar';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

const App = () => {
  const [folder, setFolder] = useState({});
  const { user, links, name } = folder;

  const fetchFolder = async () => {
    try {
      const { folder } = await getFolder();
      setFolder(folder);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginButtonClick = () => {
    fetchFolder();
  };

  return (
    <S.AppLayout>
      <Navbar handleLoginButtonClick={handleLoginButtonClick} />
      <S.HomeSection>
        {user && (
          <UserProfile
            title={`@${user.name}`}
            image={{ URL: user.profileImageSource, size: '8rem' }}
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
      <Footer />
    </S.AppLayout>
  );
};

export default App;
