import { getFolderList } from '../api';
import SearchBar from '../components/common/SearchBar';
import useAsync from '../components/hooks/useAsync';
import AddLinkBar from '../components/Folder/AddLinkBar';
import FolderList from '../components/Folder/FolderList';
import Nav from '../components/common/Navbar';
import { useRef, useState } from 'react';

const FolderPage = () => {
  const { result } = useAsync(getFolderList);
  const { data } = result || {};
  const [searchInput, setSearchInput] = useState('');
  const addLinkBarRef = useRef(null);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  return (
    <>
      <Nav style={{ position: 'relative' }} />
      <AddLinkBar barRef={addLinkBarRef} folderData={data} />
      <main>
        <SearchBar
          value={searchInput}
          onInputChange={(value) => handleSearchInputChange(value)}
        />
        {data ? <FolderList folderData={data} search={searchInput} /> : null}
      </main>
    </>
  );
};
export default FolderPage;
