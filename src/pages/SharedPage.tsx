import { getFolderData } from '../api';
import Header from '../components/Shared/Header';
import SearchBar from '../components/common/SearchBar';
import CardList from '../components/Shared/CardList';
import useAsync from '../components/hooks/useAsync';
import Nav from '../components/common/Navbar';
import { useState } from 'react';

const SharedPage = () => {
  const { result } = useAsync(getFolderData);
  const { folder } = result || {};
  const { name, links, owner } = folder || {};
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (value: string) => {
    setSearchInput(value);
  };

  return (
    <>
      <Nav />
      <Header name={name} owner={owner} />
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
        {links && <CardList links={links} search={searchInput} />}
      </main>
    </>
  );
};
export default SharedPage;
