import FolderList from '../components/FolderPage/FolderList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddLinkBar from '../components/FolderPage/AddLinkBar';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const FolderPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header />
      <main>
        <AddLinkBar />
        <SearchBar setSearchQuery={setSearchQuery} />
        <FolderList searchQuery={searchQuery} />
      </main>
      <Footer />
    </>
  );
};
export default FolderPage;
