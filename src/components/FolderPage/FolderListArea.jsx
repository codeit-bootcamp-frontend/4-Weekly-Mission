import styled from 'styled-components';
import FolderNameButton from './FolderNameButton';

const FolderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FolderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.8rem;
`;

const FolderListArea = ({ folders, selectedFolder, setSelectedFolder, setFolderId }) => (
  <FolderGroup>
    <FolderList>
      <li>
        <FolderNameButton
          name={'전체'}
          id={null}
          selectedFolder={selectedFolder}
          changeSelectedFolder={setSelectedFolder}
          setFolderId={setFolderId}
        />
      </li>
      {folders.map(({ id, name }) => (
        <li key={id}>
          <FolderNameButton
            name={name}
            id={id}
            selectedFolder={selectedFolder}
            changeSelectedFolder={setSelectedFolder}
            setFolderId={setFolderId}
          />
        </li>
      ))}
    </FolderList>
    <button>폴더 추가</button>
  </FolderGroup>
);

export default FolderListArea;
