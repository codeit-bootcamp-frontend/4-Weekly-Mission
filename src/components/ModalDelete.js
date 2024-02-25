import '../styles/ModalDelete.css';

const ModalDelete = () => {

  return (
    <div className='modal-delete-content'>
      <div className='delete-area'>삭제할 폴더명/링크</div>
      <button className='delete-button'>삭제하기</button>
    </div>
  );
}

export default ModalDelete;
