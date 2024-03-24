import styled from 'styled-components';
import SearchBar from '../../common/SearchBar';
import FolderArea from './FolderArea';
import { ChangeEvent, useState } from 'react';

const MainArea = styled.main`
  margin: 0 auto;
  padding: 4rem 3.2rem;
  max-width: 106rem;
`;

const FolderSection = () => {
  const [searchString, setSearchString] = useState('');

  const handleChangeSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleResetSearchString = () => {
    setSearchString('');
  };

  return (
    <MainArea>
      <SearchBar
        searchString={searchString}
        onChangeSearchString={handleChangeSearchString}
        onResetSearchString={handleResetSearchString}
      />
      <FolderArea searchString={searchString} />
    </MainArea>
  );
};

export default FolderSection;
