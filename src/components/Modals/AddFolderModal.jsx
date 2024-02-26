import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';

function AddFolderModal({ setAddFolderModalOpen }) {
  const [add, setAdd] = useState('');

  function closeModal() {
    setAddFolderModalOpen(false);
  }

  function handleChange() {
    setAdd();
  }

  const Div = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Div onClick={closeModal}>
      <div
        id="AddFolderModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="AddFolderModalX" onClick={closeModal} />
        <p id="AddFolderModalText">폴더 추가</p>
        <input id="AddFolderModalInput" onChange={handleChange} value={add}></input>
        <button id="AddFolderModalButton" onClick={closeModal}>
          추가하기
        </button>
      </div>
    </Div>
  );
}

export default AddFolderModal;
