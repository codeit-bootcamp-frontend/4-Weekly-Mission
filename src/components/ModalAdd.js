import '../styles/ModalAdd.css';
import iconCheck from '../assets/icons/check.svg';

const ModalAdd = ({ folderList }) => {

  return (
    <div className='modal-add-content'>
      <div className='add-area'>링크 주소</div>
      <div className='add-folder-list'>
        {folderList ? (
          <>
            {folderList.map((folder) => (
              <div className='add-folder-item' key={folder.id}>
                <div className='add-folder-box'>
                  <p className='add-folder-name' >{folder.name}</p>
                  <p className='add-folder-link'>{folder.link.count}개 링크</p>
                </div>
                <img className='add-folder-check-icon' src={iconCheck} />
              </div>
            ))}
          </>
        ) : (
          <div className='none-folder'>저장된 폴더가 없습니다.</div>
        )}
      </div>
      <button className='add-button'>추가하기</button>
    </div>
  );
}

export default ModalAdd;