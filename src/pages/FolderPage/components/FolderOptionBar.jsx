import '../styles/folderOptionBar.css';
import shareIcon from '../../../assets/shareIcon.svg';
import renameIcon from '../../../assets/renameIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import OptionButton from './OptionButton';
import { useContext } from 'react';
import { ModalContext } from '../FolderPage';
import {
  FOLDER_DELETE,
  FOLDER_RENAME,
} from '../../../constants/modalConstants';
/*
  폴더의 이름과 공유, 이름변경, 삭제 버튼이 표시되는
  FolderOptionBar 컴포넌트.

  text는 현재 폴더의 이름,
  selectedFolderId는 선택된 폴더의 id값입니다.
*/
function FolderOptionBar({ text, selectedFolderId }) {
  const { handleDeleteModalOpen, handleEditModalOpen, handleShareModalOpen } =
    useContext(ModalContext);

  const handleRenameModalOpen = () => {
    handleEditModalOpen(FOLDER_RENAME);
  };

  const handleFolderDeleteModalOpen = () => {
    const purpose = {
      purpose: FOLDER_DELETE,
      id: selectedFolderId,
      name: text,
    };
    handleDeleteModalOpen(purpose);
  };

  const handleFolderShareModalOpen = () => {
    const purpose = {
      id: selectedFolderId,
      folderName: text,
    };
    handleShareModalOpen(purpose);
  };

  const buttonProps = [
    {
      id: 1,
      svg: shareIcon,
      text: '공유',
      handleModalOpen: handleFolderShareModalOpen,
    },
    {
      id: 2,
      svg: renameIcon,
      text: '이름 변경',
      handleModalOpen: handleRenameModalOpen,
    },
    {
      id: 3,
      svg: deleteIcon,
      text: '삭제',
      handleModalOpen: handleFolderDeleteModalOpen,
    },
  ];

  return (
    <div className="folder__option-bar">
      <span className="folder__option-bar--text">{text}</span>
      <div className="folder__option-bar--buttons">
        {
          //id 가 1인 '전체'폴더가 선택되면 옵션 버튼이 안보이도록 설정.
          selectedFolderId !== 1 &&
            buttonProps.map((prop) => (
              <OptionButton
                key={prop.id}
                svg={prop.svg}
                text={prop.text}
                handleModalOpen={prop.handleModalOpen}
              ></OptionButton>
            ))
        }
      </div>
    </div>
  );
}
export default FolderOptionBar;
