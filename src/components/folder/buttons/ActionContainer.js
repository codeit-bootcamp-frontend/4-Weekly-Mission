import React from 'react';
import '../../../style/actionContainer.css';
import shareIcon from '../../../images/share.svg';
import penIcon from '../../../images/pen.svg';
import deleteIcon from '../../../images/delete.svg';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal';

function ActionContainer({ folderName }) {
  const [modalState, setModalState, onHandleCancel] = useModal();
  return (
    <>
      <div className="action-container-box">
        <p>{folderName}</p>
        {folderName !== '전체' && (
          <div className="action-container-icon">
            <a
              onClick={(e) => {
                setModalState({
                  visibility: true,
                  target: e.target.innerText,
                });
              }}
            >
              <img src={shareIcon} />
              <div className="action-shared">공유</div>
            </a>
            <a
              onClick={(e) => {
                setModalState({
                  visibility: true,
                  target: e.target.innerText,
                });
              }}
            >
              <img src={penIcon} />
              <div className="action-name">이름 변경</div>
            </a>
            <a
              onClick={(e) => {
                setModalState({
                  visibility: true,
                  target: e.target.innerText,
                });
              }}
            >
              <img src={deleteIcon} />
              <div className="action-delete">삭제</div>
            </a>
          </div>
        )}
      </div>
      <Modal
        values={modalState}
        onClose={onHandleCancel}
        folderName={folderName}
      />
    </>
  );
}

export default ActionContainer;
