import '../styles/ModalDelete.css';

const ModalDelete = ({ subTitle }) => {

  return (
    <div className='modal-delete-content'>
      <div className='delete-area'>{subTitle}</div>
      <button className='delete-button'>삭제하기</button>
    </div>
  );
}

export default ModalDelete;
