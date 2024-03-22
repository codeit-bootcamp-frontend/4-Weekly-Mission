import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { getFolders } from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/SharedPage/Profile';
import SearchBar from '../components/SearchBar';

function SharePage() {
  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState({ name: '', profileImageSource: '' });
  const [folderName, setFolderName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoad = async () => {
    const { folder } = await getFolders();
    setItems(folder.links);
    setProfile({
      name: folder.owner.name,
      profileImageSource: folder.owner.profileImageSource,
    });
    setFolderName(folder.name);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Profile profile={profile} folderName={folderName} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <CardList items={items} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default SharePage;
