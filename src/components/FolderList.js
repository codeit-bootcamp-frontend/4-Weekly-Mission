import '../styles/FolderList.css';
import iconDelete from '../assets/logo/icon-delete.svg';
import iconPen from '../assets/logo/icon-pen.svg';
import iconShare from '../assets/logo/icon-share.svg';
import iconPlus from '../assets/logo/plus.svg';

const FolderList = () => {
  return (
    <>
      <div className='folder-list'>
        <div className='folder-list-container'>
          <a className='folder'>전체</a>
          <a className='folder'>폴더1</a>
        </div>
        <div className='add-folder-container'>
          <a className='add-folder'>폴더 추가</a>
          <img className='add-folder-icon' src={iconPlus} alt='폴더 추가하기.' />
        </div>
      </div>

      <div className='folder-title'>
        <h2 className='folder-name'>폴더 이름</h2>
        <div className='folder-box'>
          <div className='folder-menu'>
            <img className='folder-menu-icon' src={iconShare} alt='폴더 공유하기.' />
            <a className='folder-menu-text'>공유</a>
          </div>
          <div className='folder-menu'>
            <img className='folder-menu-icon' src={iconPen} alt='폴더 이름 변경하기.' />
            <a className='folder-menu-text'>이름 변경</a>
          </div>
          <div className='folder-menu'>
            <img className='folder-menu-icon' src={iconDelete} alt='폴더 삭제하기.' />
            <a className='folder-menu-text'>삭제</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderList;
