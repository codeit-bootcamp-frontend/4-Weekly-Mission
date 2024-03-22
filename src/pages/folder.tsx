import React from 'react';
import FolderNav from '../components/folder/common/FolderNav.tsx';
import LinkForm from '../components/folder/common/LinkForm.tsx';
import SearchBar from '../components/folder/common/SearchBar.tsx';
import Footer from '../components/common/Footer.tsx';
import FolderContent from '../components/folder/FolderContent.tsx';

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
