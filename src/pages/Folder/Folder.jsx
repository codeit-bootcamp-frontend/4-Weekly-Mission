import AddBar from '../../components/AddBar/AddBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as S from './Folder.styles.js';
const Folder = () => {
  return (
    <S.FolderSection>
      <AddBar />
      <SearchBar></SearchBar>
    </S.FolderSection>
  );
};

export default Folder;
