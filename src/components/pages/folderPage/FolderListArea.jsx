import styled from 'styled-components';
import FolderNameButton from './FolderNameButton';
import IconAdd from '../../../assets/add.svg';

const FolderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const FolderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* width: 100%; */
  gap: 0.8rem;
`;

const Button = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.9rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-primary);
  letter-spacing: -0.03rem;

  &::after {
    content: '';
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background: url(${IconAdd}) no-repeat center bottom/contain;
  }
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
    <Button>폴더 추가</Button>
  </FolderGroup>
);

export default FolderListArea;
