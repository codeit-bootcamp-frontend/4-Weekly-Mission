import React from 'react';
import Modal from '../Modal';
import '../../../style/linkform.css';
import linkIcon from '../../../images/link.svg';
import useModal from '../../../hooks/useModal';

const LinkForm = () => {
  const [modalState, setModalState, onHandleCancel] = useModal();
  return (
    <div>
      <div className="link-form-box">
        <form className="link-form">
          <img src={linkIcon} alt="link" />
          <input type="text" placeholder="링크를 추가해 보세요." />
          <button
            className="link-form-add"
            onClick={(e) => {
              e.preventDefault();
              setModalState({
                visibility: true,
                target: e.target.innerText,
              });
            }}
          >
            추가하기
          </button>
        </form>
        <Modal values={modalState} onClose={onHandleCancel} />

      </div>
    </div>
  );
};

export default LinkForm;
