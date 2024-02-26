import '../styles/AddLink.css';
import iconLink from '../assets/icons/link.svg';
import Modal from './Modal';
import ModalPortal from './Portal';
import { useState, useEffect } from 'react';

const AddLink = () => {
  const [openModal, setOpenModal] = useState(false);
  function handleOpenModal() {
    console.log(openModal);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => document.body.style = `overflow: auto`
  }, [])

  return (
    <div className="add-link">
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal} />
        </ModalPortal>
      )}
      <div className='add-link-content'>
        <div className='add-link-container'>
          <img className="add-link-icon" src={iconLink} alt="링크를 추가하기." />
          <input className="add-link-input" type="text" placeholder="링크를 추가해 보세요"></input>
        </div>
        <a className="add-link-button button-gradient" onClick={handleOpenModal}>추가하기</a>
      </div>
    </div>
  );
}

export default AddLink;
