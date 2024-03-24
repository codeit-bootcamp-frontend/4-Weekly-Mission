import styled from 'styled-components';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import FolderNameButton from './FolderNameButton';
import IconAdd from '../../../assets/add.svg';
import IconAddWhite from '../../../assets/add-white.png';
import { modalTypes, totalFolderId, totalFolderName } from '../../../util/constants';
import { FoldersContext } from '../../context/foldersContext';
import AddFolder from '../../common/modal/AddFolder';
import { Folder, FolderId } from '../../../types/types';

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

interface FolderListAreaProps {
  selectedFolderId: FolderId;
  onFolderNameClick: (id: FolderId) => void;
}

const FolderListArea = ({ selectedFolderId, onFolderNameClick }: FolderListAreaProps) => {
  const folders = useContext<Folder[]>(FoldersContext);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <FolderGroup>
      <FolderList>
        <li>
          <FolderNameButton
            id={totalFolderId}
            selectedFolderId={selectedFolderId}
            onFolderNameClick={onFolderNameClick}>
            {totalFolderName}
          </FolderNameButton>
        </li>
        {folders.map(({ id, name }) => (
          <li key={id}>
            <FolderNameButton id={id} selectedFolderId={selectedFolderId} onFolderNameClick={onFolderNameClick}>
              {name}
            </FolderNameButton>
          </li>
        ))}
      </FolderList>
      <Button data-modal={modalTypes.addFolder} onClick={handleButtonClick}>
        폴더 추가
      </Button>
      {showModal && createPortal(<AddFolder onCloseModal={handleModalClose} />, document.body)}
    </FolderGroup>
  );
};

export default FolderListArea;
