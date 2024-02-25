import '../styles/ModalAdd.css';

const ModalAdd = () => {

  return (
    <div className='modal-add-content'>
      <div className='add-area'>링크 주소</div>
      {/* folderlist */}
      <div className='add-folder-list'>
        <div className='add-folder-item'>
          <p className='add-folder-name'>폴더 이름</p>
          <p className='add-folder-link'>N개 링크</p>
        </div>
        <div className='add-folder-item'>
          <p className='add-folder-name'>폴더 이름</p>
          <p className='add-folder-link'>N개 링크</p>
        </div>
        <div className='add-folder-item'>
          <p className='add-folder-name'>폴더 이름</p>
          <p className='add-folder-link'>N개 링크</p>
        </div>
      </div>
      <button className='add-button'>추가하기</button>
    </div>
  );
}

export default ModalAdd;
