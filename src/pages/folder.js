import React from 'react';
import FolderNav from '../components/FolderNav';
import LinkForm from '../components/LinkForm';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import FolderContent from '../components/FolderContent';

const Folder = () => {
  return (
    <div>
      <FolderNav />
      <LinkForm />
      <SearchBar />
      <FolderContent />
      <Footer />
    </div>
  );
};

export default Folder;
