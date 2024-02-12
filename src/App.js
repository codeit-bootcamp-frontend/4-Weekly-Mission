import './styles/reset.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';
import { getSampleFolderData } from './api/api';

function App() {
  const [folderData, setFolderData] = useState({});
  const { links, name, owner } = folderData;
  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const sampleFolderData = await getSampleFolderData();
        setFolderData(sampleFolderData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFolderData();
  }, []);

  return (
    <div>
      <Nav />
      <Header folderName={name} owner={owner} />
      <CardList cardsData={links} />
      <Footer />
    </div>
  );
}

export default App;
