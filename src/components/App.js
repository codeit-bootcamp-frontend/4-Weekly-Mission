import Header from './Header';
import React, { useState, useEffect } from 'react';
import { fetchFolderData } from '../api';
import Banner from './Banner';
import CardContainer from './CardContainer';
import 'normalize.css';
import '../reset.css';
import Footer from './Footer';

function App() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFolderData();
        setFolderData(data);
      } catch (error) {
        console.error('Error fetching folderData:', error);
      }
    };

    fetchData();
  }, []);

  if (!folderData) {
    return <div>Loading...</div>;
  }

  const { folder } = folderData;
  const { name, owner, links } = folder;

  return (
    <div>
      <Header />
      <Banner name={name} owner={owner} />
      <CardContainer links={links} />
      <Footer />
    </div>
  );
}
export default App;
