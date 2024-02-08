import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { getFolder, getUser } from './utils/api';
import Hero from './components/Hero';

function App() {
  const [folder, setFolder] = useState();
  const [user, setUser] = useState();
  const [links, setLinks] = useState();

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
    setUser(folder?.owner);
    setLinks(folder?.links);
  }, [folder]);

  return (
    <div className='App'>
      <Navbar />
      {user && <Hero name={user.name} imageURL={user.profileImageSource} />}
      <Cards links={links} />
      <Footer />
    </div>
  );
}

export default App;
