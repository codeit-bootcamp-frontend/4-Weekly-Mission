import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Layout/Navbar';
import UserProfile from './components/UI/UserProfile';
import SearchBar from './components/UI/Serchbar';
import Cards from './components/UI/Cards';
import Footer from './components/Layout/Footer';
import { getFolder } from './utils/api';
import './App.css';

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
    <AppLayout>
      <Navbar handleLoginButtonClick={handleLoginButtonClick} />
      <section>
        {user && (
          <UserProfile
            title={`@${user.name}`}
            image={{ URL: user.profileImageSource, size: '8rem' }}
            direction='column'
          />
        )}
        {name && <h2>{name}</h2>}
      </section>
      <main className='mainLayout'>
        <section className='mainBox'>
          <SearchBar />
          {links && <Cards links={links} />}
        </section>
      </main>
      <Footer />
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;

  .homeSection {
    padding-top: 5rem;
  }

  .folderName {
    padding: 1rem 0;
  }

  .mainLayout {
    width: 100vw;
    margin-top: 2rem;
    background: #ffffff;
  }

  .mainBox {
    padding: 2rem 5rem;
  }
`;
export default App;
