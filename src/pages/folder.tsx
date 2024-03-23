import React from 'react';
import FolderNav from '../components/folder/common/FolderNav';
import LinkForm from '../components/folder/common/LinkForm';
import SearchBar from '../components/folder/common/SearchBar';
import Footer from '../components/common/Footer';
import FolderContent from '../components/folder/FolderContent';

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
