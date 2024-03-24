import { useRef, useState } from 'react';
import { getFolderList } from '../api';
import SearchBar from '../components/common/SearchBar';
import useAsync from '../components/hooks/useAsync';
import AddLinkBar from '../components/Folder/AddLinkBar';
import FolderList from '../components/Folder/FolderList';
import Nav from '../components/common/Navbar';
import '../assets/styles/Page.css';

const FolderPage = () => {
  const { result } = useAsync(getFolderList);
  const { data } = result || {};
  const [searchInput, setSearchInput] = useState('');
  const addLinkBarRef = useRef<HTMLDivElement>(null);

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
  };

  return (
    <>
      <Nav />
      <AddLinkBar barRef={addLinkBarRef} folderData={data} />
      <main>
        <SearchBar
          value={searchInput}
          onInputChange={(value: string) => handleSearchInputChange(value)}
        />

        {searchInput && (
          <div className="search-result-container">
            <div className="search-result">
              <span>{searchInput}</span>으로 검색한 결과입니다.
            </div>
          </div>
        )}

        {data ? <FolderList folderData={data} search={searchInput} /> : null}
      </main>
    </>
  );
};
export default FolderPage;
