import { useState } from 'react';
import AddToFolderModal from '../Modals/AddToFolderModal';
import './Section.css';

function LinkBar() {
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  const handleClose = () => {
    setAddToFolderModalOpen(false);
  };

  return (
    <div id="linkAddBar">
      <div id="linkAddBarText">
        <img src={`${process.env.PUBLIC_URL}/images/linkIcon.svg`} alt="링크 추가 아이콘" />
        <input type="text" placeholder="링크를 추가해 보세요"></input>
      </div>
      <button type="submit" id="linkAddButton" onClick={() => setAddToFolderModalOpen(true)}>
        추가하기
      </button>
      {addToFolderModalOpen && <AddToFolderModal onClose={handleClose} />}
    </div>
  );
}

export default LinkBar;
