import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';

function EditModal({ setEditModalOpen }) {
  const [name, setName] = useState('');

  function closeModal() {
    setEditModalOpen(false);
  }

  function handleChange() {
    setName();
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
        id="EditModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={closeModal} />
        <p id="EditModalText">폴더 이름 변경</p>
        <input id="EditModalInput" onChange={handleChange} value={name}></input>
        <button id="EditModalButton" onClick={closeModal}>
          변경하기
        </button>
      </div>
    </Div>
  );
}

export default EditModal;
