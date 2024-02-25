import styled from 'styled-components';
import FolderNameButton from './FolderNameButton';
import IconAdd from '../../../assets/add.svg';
import IconAddWhite from '../../../assets/add-white.png';
import { modalTypes } from '../../../util/constants';

const FolderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  @media (max-width: 767px) {
    margin-bottom: 2.8rem;
  }
`;

const FolderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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

  @media (max-width: 767px) {
    position: fixed;
    left: 50%;
    bottom: 10.1rem;
    transform: translateX(-50%);
    padding: 0.8rem 2.4rem;
    height: 3.5rem;
    border: 1px solid var(--color-white);
    border-radius: 2rem;
    background-color: var(--color-primary);
    color: var(--color-gray-300);
    z-index: 10;

    &::after {
      background: url(${IconAddWhite}) no-repeat center bottom/contain;
    }
  }
`;

const FolderListArea = ({ folders, selectedFolder, handleCurrentFolder, handleModalBtnClick }) => (
  <FolderGroup>
    <FolderList>
      <li>
        <FolderNameButton
          name={'전체'}
          id={null}
          selectedFolder={selectedFolder}
          handleCurrentFolder={handleCurrentFolder}
        />
      </li>
      {folders.map(({ id, name }) => (
        <li key={id}>
          <FolderNameButton
            name={name}
            id={id}
            selectedFolder={selectedFolder}
            handleCurrentFolder={handleCurrentFolder}
          />
        </li>
      ))}
    </FolderList>
    <Button data-modal={modalTypes.addFolder} onClick={handleModalBtnClick}>
      폴더 추가
    </Button>
  </FolderGroup>
);

export default FolderListArea;
