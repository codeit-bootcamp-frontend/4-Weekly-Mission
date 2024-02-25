import styled from 'styled-components';
import SearchBar from '../../common/SearchBar';
import FolderArea from './FolderArea';

const MainArea = styled.main`
  margin: 0 auto;
  padding: 4rem 3.2rem;
  max-width: 106rem;
`;

const FolderSection = ({
  folders,
  selectedFolder,
  folderId,
  handleCurrentFolder,
  handleModalBtnClick,
  changeSelectedLink,
}) => (
  <MainArea>
    <SearchBar />
    <FolderArea
      folders={folders}
      selectedFolder={selectedFolder}
      folderId={folderId}
      handleCurrentFolder={handleCurrentFolder}
      handleModalBtnClick={handleModalBtnClick}
      changeSelectedLink={changeSelectedLink}
    />
  </MainArea>
);

export default FolderSection;
