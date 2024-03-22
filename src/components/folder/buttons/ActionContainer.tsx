import React from 'react';
import '../../../style/actionContainer.css';
import shareIcon from '../../../images/share.svg';
import penIcon from '../../../images/pen.svg';
import deleteIcon from '../../../images/delete.svg';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal';

type ModalState = {
  visibility: boolean;
  target: string;
};

type UseModalReturnType = [ModalState, React.Dispatch<React.SetStateAction<ModalState>>, () => void];

interface Folder {
  id: string;
  name: string;
}
interface ActionContainerProps {
  folderName: Folder;
}

function ActionContainer({ folderName }: ActionContainerProps) {
  const [modalState, setModalState, onHandleCancel] = useModal() as UseModalReturnType;

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetText = e.currentTarget.innerText;
    setModalState({
      visibility: true,
      target: targetText,
    });
  }
  
  return (
    <>
      <div className="action-container-box">
        <p>{folderName.name}</p>
        {folderName.name !== '전체' && (
          <div className="action-container-icon">
            <a onClick={handleActionClick}>
              <img src={shareIcon} alt="Share Icon" />
              <div className="action-shared">공유</div>
            </a>
            <a onClick={handleActionClick}>
              <img src={penIcon} alt="Pen Icon" />
              <div className="action-name">이름 변경</div>
            </a>
            <a onClick={handleActionClick}>
              <img src={deleteIcon} alt="Delete Icon" />
              <div className="action-delete">삭제</div>
            </a>
          </div>
        )}
      </div>
      <Modal
        values={modalState}
        onClose={onHandleCancel}
        folderName={folderName} folders={[]} userId={''}      />
    </>
  );

}

export default ActionContainer;
