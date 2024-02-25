import { useState } from 'react';

import Modal from './Modal/Modal';
import shareIcon from '../assets/share-icon.png';
import penIcon from '../assets/pen.png';
import deleteIcon from '../assets/delete.png';
import './Option.css';

const OptionTool = ({ folderName }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    btnName: '',
    message: '',
    hasInput: false,
    hasButton: false,
    isDelete: false,
    placeholder: '',
  });

  const tools = [
    {
      img: shareIcon,
      alt: 'share',
      name: '공유',
      title: '폴더 공유',
      message: folderName,
      hasInput: false,
    },
    {
      img: penIcon,
      alt: 'change',
      name: '이름 변경',
      title: '폴더 이름 변경',
      value: folderName,
      btnName: '변경하기',
      hasInput: true,
      hasButton: true,
      isDelete: false,
    },
    {
      img: deleteIcon,
      alt: 'delete',
      name: '삭제',
      title: '폴더 삭제',
      btnName: '삭제하기',
      message: folderName,
      hasInput: false,
      hasButton: true,
      isDelete: true,
    },
  ];

  const handleModal = (data) => {
    setToggleModal(!toggleModal);
    setModalData(data);
  };

  return (
    <div className='option'>
      {tools.map((tool) => (
        <div
          className='option-tool'
          key={tool.alt}
          onClick={() => handleModal(tool)}
        >
          <img className='option-img' src={tool.img} alt={tool.alt} />
          <div className='option-text'>{tool.name}</div>
        </div>
      ))}

      {toggleModal && (
        <Modal
          title={modalData.title}
          btnName={modalData.btnName}
          message={modalData.message}
          value={modalData.value}
          placeholder={modalData.placeholder}
          hasInput={modalData.hasInput}
          hasButton={modalData.hasButton}
          isDelete={modalData.isDelete}
          onClose={() => handleModal()}
        />
      )}
    </div>
  );
};

export default OptionTool;
