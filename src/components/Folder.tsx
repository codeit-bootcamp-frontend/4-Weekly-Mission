import '../styles/folder.css';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';
import React from 'react';

interface Props {
  folderInfo: any;
  categoryList: any;
}

const Folder = ({ folderInfo, categoryList }: Props) => {
  return (
    <div className='folder-container'>
      <SearchBar />
      <CategoryList folderInfo={folderInfo} categoryList={categoryList} isIconVisible={false} />
    </div>
  );
};

export default Folder;
